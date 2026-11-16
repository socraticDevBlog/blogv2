[![Netlify Status](https://api.netlify.com/api/v1/badges/2e7ec91d-051e-4d84-861d-cb6cb0f67fec/deploy-status)](https://app.netlify.com/projects/socdevblogv2/deploys)

# blogue de socraticDev — blogv2

A rebuild of the Gatsby blog (`jamstackBlog`) as a minimal, single-theme
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) site,
following the same specifications as the English blog's rebuild
(`../eng_blogv2/PROMPT-BIBLE.md`).

## Stack

| Piece | Version |
|---|---|
| Node | v26.13.1 (LTS "Lithium") via nvm — pinned by `.nvmrc` (`26`) |
| Astro | 7.4.x |
| @astrojs/starlight | 0.43.x |
| graphql | ^17 (ports the old Gatsby `createPages` query) |
| @astrojs/rss | 4.0.x |

## Quick start

```bash
nvm use            # reads .nvmrc -> Node 26
npm ci             # install from lockfile
npm run dev        # dev server
npm run build      # static build -> dist/ (125 pages)
npm run preview    # serve dist/
```

## What's inside

- **153 legacy posts** copied from the old site (`../jamstackBlog/src/pages/posts`),
  served as pages via a **GraphQL layer** (`src/lib/graphql.ts`) that mirrors the
  old `gatsby-node.js` query: `allPosts(filter: { is_archived: false }, sort: DESC)`
  — 66 archived posts are excluded everywhere (listings, tag pages, single pages, RSS),
  leaving 87 published posts.
- **Home page** `/` = 10 latest posts as full-width cards (unchanged design) +
  pagination at `/page/2..N`.
- **All other listing pages** — `/page/N`, `/posts/` (+ `/posts/page/N`) and
  `/tag/<slug>/` (+ `/tag/<slug>/page/N`) — show posts in a **3-per-row grid**
  (2 columns ≤1024px, 1 column ≤640px) of compact cards, **30 posts per page**
  (3× the home page). Home keeps 10; `/page/2` starts right after it, so no
  post appears twice.
- **Post pages** `/posts/<slug>/` — image on top, full content width, before the title.
  Slugs come from the old site's accent-stripping `slugify` (`src/lib/slugify.ts`).
- **Tags**: `/tags/` index + `/tag/<slug>/` filtered listings (clickable pills), date-DESC.
- **RSS 2.0** at `/rss.xml` ("Blogue de SocraticDev", `language: fr`), with autodiscovery
  link in `<head>`.
- **OpenGraph / Twitter Cards** on every page (per-post `og:image`, excerpt as description,
  `article:published_time`, `twitter:card=summary_large_image`, `twitter:site=@socraticDevBlog`),
  default social image `/images/cropped_solid_blue.png`.
- **Google Analytics GA4** `G-T3GZJ5L7TV` (same ID as the old site, `anonymize_ip: true`).
- **Dark theme by default**, no "auto" option (custom `ThemeProvider`/`ThemeSelect` overrides).
- **No side panels** (sidebar + "On this page" TOC removed).
- **French UI** (`defaultLocale: fr`, `<html lang="fr">`), dates formatted in French.
- **Teal theme** matching the cloud logo (`#02a2c6` accent), header = cloud banner logo
  (`replacesTitle`), favicon = turquoise head (`public/favicon.svg`).
- **Custom 404** (French) with a crying kitten and a "Retour vers la page d'accueil" button.
- Header links: RSS feed + English site (`https://en.socratic.dev`). Footer: the old
  header's nav (`à propos`, `sujets abordés`, `avis`, `rss`, `english`) + GitHub /
  Mastodon / X logos.
- Static pages `/about/` (with the PGP key) and `/avis/`, ported from the old site.

## Routes

`/` · `/page/2..4` · `/posts/` + `/posts/page/2..3` · `/posts/<slug>/` (87) · `/tags/` ·
`/tag/<slug>/` (26, + `/tag/croissance/page/2`) · `/about/` · `/avis/` · `/404.html` ·
`/rss.xml` · `/images/*` · `/favicon.svg`

## Config highlights (`astro.config.mjs`)

- `site: 'https://socratic.dev'`, title `blogue de socraticDev`, `defaultLocale: 'fr'`
- `logo`: `src/assets/banner.svg`, `replacesTitle: true` + `customCss` sizing
- `head`: favicon links, RSS autodiscovery, `twitter:site`, GA4 gtag pair
- `social`: RSS + English site
- `components` overrides: `ThemeProvider`, `ThemeSelect`, `Footer`

## Notes

- Posts live in `src/content/posts/*.md`; add a file and rebuild — pages, listings,
  tags, pagination and RSS all update automatically through the GraphQL layer.
  Image references in frontmatter are root-absolute (`image: /images/foo.jpg`).
- In the static build `/rss.xml` is served as `text/xml` by extension (accepted by all
  readers); for strict `application/rss+xml` in production, add a host `_headers` rule.
