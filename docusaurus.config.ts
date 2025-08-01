import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Nikhil Upendra Marathe',
  favicon: 'img/nikhil.ico',

  // Set the production url of your site here
  url: 'https://home-docs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'home-docs', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  clientModules: [
    require.resolve('./src/client-modules/navbar-hider.ts'),
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
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