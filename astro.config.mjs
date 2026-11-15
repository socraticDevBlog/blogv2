import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://socratic.dev',
  integrations: [
    starlight({
      title: 'blogue de socraticDev',
      description: 'Technologie et philosophie',
      // `root` locale: the site is served at "/" (no /fr prefix), with
      // <html lang="fr"> — a named 'fr' defaultLocale would make Starlight
      // link the header logo to "/fr", which does not exist here.
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      logo: {
        src: './src/assets/banner.svg',
        alt: 'socratic.dev',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: false,
      social: [
        { icon: 'rss', label: 'Flux RSS', href: 'https://socratic.dev/rss.xml' },
        { icon: 'translate', label: 'English version — en.socratic.dev', href: 'https://en.socratic.dev' },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
        { tag: 'link', attrs: { rel: 'shortcut icon', href: '/favicon.svg' } },
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            type: 'application/rss+xml',
            title: 'blogue de socraticDev — flux RSS',
            href: 'https://socratic.dev/rss.xml',
          },
        },
        { tag: 'meta', attrs: { name: 'twitter:site', content: '@socraticDevBlog' } },
        // Google Analytics (GA4) — same measurement ID as the old Gatsby site
        {
          tag: 'script',
          attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-T3GZJ5L7TV' },
        },
        {
          tag: 'script',
          content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T3GZJ5L7TV', { anonymize_ip: true });`,
        },
      ],
      components: {
        // Dark theme by default, no "auto" option (see the components themselves).
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        // Footer with the site pages, an RSS link and the social links.
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
