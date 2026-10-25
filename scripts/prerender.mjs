/**
 * Pre-render every page after `vite build`, so Google is sent real HTML
 * instead of an empty <div id="root"> that JavaScript fills in later.
 *
 * For each route: the page rendered to HTML (src/entry-server.jsx) inside the
 * built index.html, with its own title, description, canonical address,
 * social preview and structured data, written to dist/<route>/index.html.
 * Then sitemap.xml lists them. The browser takes the HTML over (main.jsx).
 *
 * A page's title, description and structured data come, in this order, from
 * the SEO team's approved changes (src/seo-published.json, read at build by
 * scripts/seo-published.mjs), from src/seo-meta.json, else from the page's
 * own first heading and first paragraph, so no two pages share them. Pages and
 * posts the team published are rendered too, and the hidden template its
 * preview fills in (/seo-preview/page and /post, never indexed).
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://www.wrkmatic.com'
const OG_IMAGE = `${SITE}/wrkmatic-logo.png`

const meta = JSON.parse(readFileSync(join(ROOT, 'src/seo-meta.json'), 'utf8'))
const published = JSON.parse(readFileSync(join(ROOT, 'src/seo-published.json'), 'utf8'))
const articles = [...published.pages, ...published.posts]
const PREVIEWS = ['/seo-preview/page', '/seo-preview/post']
const ROUTES = [
  '/',
  '/services',
  '/demos',
  '/contact',
  ...articles.map((a) => a.path),
  ...(published.posts.length ? ['/blog'] : []),
  ...PREVIEWS,
]

/** What Google reads about a published page or post: the article, its breadcrumb, its questions. */
function articleSchema(a, url) {
  const org = { '@type': 'Organization', name: 'Wrkmatic', url: `${SITE}/`, logo: OG_IMAGE }
  const out = [
    {
      '@context': 'https://schema.org',
      '@type': a.kind === 'post' ? 'BlogPosting' : 'WebPage',
      headline: a.title,
      description: a.description,
      url,
      mainEntityOfPage: url,
      datePublished: a.publishedAt,
      dateModified: a.publishedAt,
      image: OG_IMAGE,
      inLanguage: 'en-GB',
      publisher: org,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        ...(a.kind === 'post' ? [{ '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }] : []),
        { '@type': 'ListItem', position: a.kind === 'post' ? 3 : 2, name: a.title, item: url },
      ],
    },
  ]
  if (a.faqs.length >= 2) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: a.faqs.map(({ q, a: answer }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    })
  }
  return out
}
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
  const article = articles.find((a) => a.path === route)
  const preview = PREVIEWS.includes(route)
  const fix = published.fixes[route] ?? { schema: [] }
  const own = {
    ...meta[route],
    ...(article ? { title: `${article.title} | Wrkmatic`, description: article.description } : {}),
    ...(preview ? { title: 'SEO_PREVIEW_TITLE | Wrkmatic', description: 'SEO_PREVIEW_DESCRIPTION' } : {}),
    ...(fix.title ? { title: fix.title } : {}),
    ...(fix.description ? { description: fix.description } : {}),
  }
  const h1 = /<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(body)
  const firstP = /<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(body)
  const title = own.title ?? (h1 ? `${clip(text(h1[1]), 48)} | Wrkmatic` : 'Wrkmatic')
  const description = own.description ?? (firstP ? clip(text(firstP[1]), 155) : '')
  const url = `${SITE}${route === '/' ? '/' : route}`
  const schema = [...(meta[route]?.schema ?? []), ...(article ? articleSchema(article, url) : []), ...fix.schema].map((o) =>
    JSON.stringify(o).replace(/</g, '\\u003c'),
  )

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
        ...(preview ? ['<meta name="robots" content="noindex" />'] : []),
        ...schema.map((s) => `<script type="application/ld+json">${s}</script>`),
        '</head>',
      ].join('\n    '),
    )
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const out = route === '/' ? join(ROOT, 'dist/index.html') : join(ROOT, 'dist', route.slice(1), 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  if (!preview) done.push({ route, url, title, words: text(body).split(' ').length })
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
