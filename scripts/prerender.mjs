/**
 * Pre-render every page after `vite build`, so Google is sent real HTML
 * instead of an empty <div id="root"> that JavaScript fills in later.
 *
 * For each route: the page rendered to HTML (src/entry-server.jsx) inside the
 * built index.html, with its own title, description, canonical address,
 * social preview and structured data, written to dist/<route>/index.html.
 * Then sitemap.xml lists them. The browser takes the HTML over (main.jsx).
 *
 * A page's title, description and structured data come from src/seo-meta.json
 * when it has them (where approved SEO fixes are pasted), else from the page's
 * own first heading and first paragraph, so no two pages share them.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://www.wrkmatic.com'
const ROUTES = ['/', '/services', '/demos', '/contact']
const OG_IMAGE = `${SITE}/wrkmatic-logo.png`

const meta = JSON.parse(readFileSync(join(ROOT, 'src/seo-meta.json'), 'utf8'))
const { render } = await import(pathToFileURL(join(ROOT, 'dist-server/entry-server.js')).href)
const template = readFileSync(join(ROOT, 'dist/index.html'), 'utf8')

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
const text = (html) => decode(html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const clip = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…`)

const done = []
for (const route of ROUTES) {
  const body = render(route)
  const own = meta[route] ?? {}
  const h1 = /<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(body)
  const firstP = /<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(body)
  const title = own.title ?? (h1 ? `${clip(text(h1[1]), 48)} | Wrkmatic` : 'Wrkmatic')
  const description = own.description ?? (firstP ? clip(text(firstP[1]), 155) : '')
  const url = `${SITE}${route === '/' ? '/' : route}`
  const schema = (own.schema ?? []).map((o) => JSON.stringify(o).replace(/</g, '\\u003c'))

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${attr(title)}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${attr(description)}" />`)
    .replace(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${attr(title)}" />`)
    .replace(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${attr(description)}" />`)
    .replace(/<html lang="en">/i, '<html lang="en-GB">')
    .replace(
      '</head>',
      [
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${OG_IMAGE}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        ...schema.map((s) => `<script type="application/ld+json">${s}</script>`),
        '</head>',
      ].join('\n    '),
    )
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const out = route === '/' ? join(ROOT, 'dist/index.html') : join(ROOT, 'dist', route.slice(1), 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  done.push({ route, url, title, words: text(body).split(' ').length })
}

const day = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(ROOT, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${done
    .map((d) => `  <url>\n    <loc>${d.url}</loc>\n    <lastmod>${day}</lastmod>\n  </url>`)
    .join('\n')}\n</urlset>\n`,
)
rmSync(join(ROOT, 'dist-server'), { recursive: true, force: true })
for (const d of done) console.log(`pre-rendered ${d.route.padEnd(10)} ${String(d.words).padStart(5)} words  ${d.title}`)
