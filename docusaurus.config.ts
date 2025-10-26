import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Nikhil Upendra Marathe',
  favicon: 'img/nikhil.ico',

  // Set the production url of your site here
  url: 'https://mnik28.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'home-docs', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '386960D2C2258101',
      },
    },
  ],

  clientModules: [
    require.resolve('./src/client-modules/card-magnet.ts'),
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          mdxFrontMatterValidation: {
            frontMatter: 'ignore',
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    experimental_useViewTransitions: true,
    image: 'img/docusaurus-social-card.jpg',
    algolia: {
      // The application ID provided by Algolia
      appId: 'O3EQL5HHNM',

      // Public API key: it is safe to commit it
      apiKey: '55294292717d3e0cbf9f917aa0f33b54',

      indexName: 'Algolia Search Crawler',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.github.io/myDocusaurusSite/
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    navbar: {
      title: 'Nikhils Docusaurus',
      logo: {
        alt: 'My Site Logo',
        src: 'img/nikhil.ico',
      },
      items: [
        {
          to: '/resume', // Path to your new resume page
          label: 'Resume',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/mnik28/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [], // An empty array here will remove all link columns
      copyright: `Copyright © ${new Date().getFullYear()} Nikhil Upendra Marathe. Built with Docusaurus.`, // This will be retained
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;