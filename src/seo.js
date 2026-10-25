import published from './seo-published.json'

/**
 * The SEO team's approved changes, as this build read them
 * (scripts/seo-published.mjs). The server render and the browser read the
 * same file, so the HTML Google gets and the page a visitor sees match.
 */

/** The page's main heading: the approved one, or the page's own. */
export function headingFor(path, own) {
  return published.fixes[path]?.h1 ?? own
}

export const seoPages = published.pages
export const seoPosts = published.posts

/** The page the preview fills in: the markers the app swaps for a proposed page or post. */
export const PREVIEW_ARTICLE = {
  slug: 'seo-preview',
  title: 'SEO_PREVIEW_TITLE',
  description: 'SEO_PREVIEW_DESCRIPTION',
  bodyHtml: '<p>SEO_PREVIEW_BODY</p>',
}
