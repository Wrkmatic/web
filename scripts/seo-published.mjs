/**
 * What the Wrkmatic SEO team has published for this site, read once per build
 * and written to src/seo-published.json for the pages and the pre-render.
 *
 * Victor approves a fix, a page or a post in his app; the app marks it
 * published and this site's deploy hook rebuilds it. The build reads every
 * published change through the database's `seo_published(key)` function
 * (public by nature: it is what the site shows anyway) and:
 *
 *   fixes  replace a page's title, description or main heading, or add its
 *          structured data (scripts/prerender.mjs, src/seo.js)
 *   pages  become /<slug>
 *   posts  become /blog/<slug>
 *
 * With SEO_SUPABASE_URL, SEO_SUPABASE_ANON_KEY and SEO_SITE_KEY unset, or the
 * database unreachable, nothing is published and the site builds as it always
 * has. A change Victor puts back is no longer published, so the next build
 * drops it and the site's own wording returns by itself.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'src/seo-published.json')
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
// Addresses the site already has: a page can't take them.
const RESERVED = new Set(['services', 'demos', 'contact', 'blog', 'seo-preview', 'assets'])

// `.env.local` for a local build; Vercel's settings arrive in process.env.
function env(name) {
  if (process.env[name]) return process.env[name].trim()
  try {
    const line = readFileSync(join(ROOT, '.env.local'), 'utf8')
      .split('\n')
      .find((l) => l.startsWith(`${name}=`))
    return line ? line.slice(name.length + 1).trim().replace(/^["']|["']$/g, '') : undefined
  } catch {
    return undefined
  }
}

/** "/", "/services": no trailing slash but the root's. */
export function pathKey(urlOrPath) {
  let path = urlOrPath
  try {
    path = new URL(urlOrPath, 'https://www.wrkmatic.com').pathname
  } catch {
    /* already a path */
  }
  return path.length > 1 ? path.replace(/\/+$/, '') : '/'
}

const str = (v) => (typeof v === 'string' ? v.trim() : '')

// ── Markdown, the same escape-first renderer the app previews with (lib/seo-markdown.ts) ──

const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function inline(text) {
  return escape(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
      const safe = /^(https?:\/\/|\/|#)/i.test(href) ? href : null
      if (!safe) return label
      const external = /^https?:\/\//i.test(safe) && !/^https?:\/\/(www\.)?wrkmatic\.(ai|com)/i.test(safe)
      return `<a href="${safe}"${external ? ' rel="noopener"' : ''}>${label}</a>`
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
}

export function renderMarkdown(md) {
  const out = []
  let para = []
  let list = null
  let quote = []
  const flushPara = () => {
    if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`)
    para = []
  }
  const flushList = () => {
    if (list) out.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.tag}>`)
    list = null
  }
  const flushQuote = () => {
    if (quote.length) out.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`)
    quote = []
  }
  const flushAll = () => {
    flushPara()
    flushList()
    flushQuote()
  }
  for (const raw of md.replace(/\r\n?/g, '\n').split('\n')) {
    const line = raw.trim()
    if (!line) {
      flushAll()
      continue
    }
    const heading = /^(#{1,4})\s+(.+)$/.exec(line)
    if (heading) {
      flushAll()
      // A lone # would be a second h1: the title is the page's only one.
      const level = Math.max(2, Math.min(heading[1].length, 4))
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`)
      continue
    }
    const bullet = /^[-*]\s+(.+)$/.exec(line)
    const numbered = /^\d+[.)]\s+(.+)$/.exec(line)
    if (bullet || numbered) {
      flushPara()
      flushQuote()
      const tag = bullet ? 'ul' : 'ol'
      if (list && list.tag !== tag) flushList()
      list ??= { tag, items: [] }
      list.items.push((bullet ?? numbered)[1])
      continue
    }
    if (line.startsWith('>')) {
      flushPara()
      flushList()
      quote.push(line.replace(/^>\s?/, ''))
      continue
    }
    flushList()
    flushQuote()
    para.push(line)
  }
  flushAll()
  return out.join('\n')
}

/** The `## Questions people ask` section as question and answer pairs, for FAQ structured data. */
export function faqsOf(md) {
  const section = /^##\s+(questions people ask|frequently asked questions|faqs?)\s*$/im.exec(md)
  if (!section) return []
  const rest = md.slice(section.index + section[0].length)
  const end = rest.search(/^##\s+/m)
  const body = end === -1 ? rest : rest.slice(0, end)
  const out = []
  for (const block of body.split(/^###\s+/m).slice(1)) {
    const [first = '', ...lines] = block.split('\n')
    const a = lines.join(' ').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`>#-]/g, ' ').replace(/\s+/g, ' ').trim()
    const q = first.trim()
    if (q && a) out.push({ q, a })
  }
  return out
}

// ── Read and write ──

async function read() {
  const empty = { fixes: {}, pages: [], posts: [] }
  const url = env('SEO_SUPABASE_URL')
  const key = env('SEO_SUPABASE_ANON_KEY')
  const site = env('SEO_SITE_KEY')
  if (!url || !key || !site) {
    console.log('[seo] no site key set: building without published changes')
    return empty
  }
  let rows
  try {
    const res = await fetch(`${url.replace(/\/+$/, '')}/rest/v1/rpc/seo_published`, {
      method: 'POST',
      headers: { apikey: key, authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ p_key: site }),
      signal: AbortSignal.timeout(15_000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    rows = await res.json()
  } catch (error) {
    // A build must never fail because the app is down: build without the changes, and say so.
    console.warn(`[seo] published changes not read: ${error instanceof Error ? error.message : error}`)
    return empty
  }

  // Oldest first, so a later change to the same field wins.
  const fixes = {}
  const articles = new Map()
  for (const row of rows) {
    if (row.kind === 'fix' && row.target_url && row.field) {
      const text = str(row.after?.text)
      if (!text) continue
      const path = pathKey(row.target_url)
      const f = (fixes[path] ??= { schema: [] })
      if (row.field === 'schema') {
        try {
          f.schema.push(JSON.parse(text))
        } catch {
          console.warn(`[seo] skipped structured data for ${path}: not valid JSON`)
        }
      } else if (['title', 'description', 'h1'].includes(row.field)) {
        f[row.field] = text
      }
    } else if (row.kind === 'page' || row.kind === 'post') {
      const slug = str(row.after?.slug)
      if (!SLUG.test(slug) || (row.kind === 'page' && RESERVED.has(slug))) continue
      const bodyMd = str(row.after?.body_md)
      articles.set(`${row.kind}:${slug}`, {
        kind: row.kind,
        slug,
        path: row.kind === 'post' ? `/blog/${slug}` : `/${slug}`,
        // The pre-render adds " | Wrkmatic"; a title that already carries it would say it twice.
        title: str(row.after?.title).replace(/\s*[|\-–—:]\s*Wrkmatic\s*$/i, ''),
        description: str(row.after?.description),
        bodyHtml: renderMarkdown(bodyMd),
        faqs: faqsOf(bodyMd),
        publishedAt: row.published_at,
      })
    }
  }
  const all = [...articles.values()].filter((a) => a.title && a.bodyHtml)
  const newestFirst = (a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt))
  return {
    fixes,
    pages: all.filter((a) => a.kind === 'page').sort(newestFirst),
    posts: all.filter((a) => a.kind === 'post').sort(newestFirst),
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const published = await read()
  writeFileSync(OUT, `${JSON.stringify(published, null, 2)}\n`)
  const fixCount = Object.values(published.fixes).reduce(
    (n, f) => n + f.schema.length + ['title', 'description', 'h1'].filter((k) => f[k]).length,
    0,
  )
  console.log(`[seo] ${fixCount} fixes on ${Object.keys(published.fixes).length} pages, ${published.pages.length} pages, ${published.posts.length} posts`)
}
