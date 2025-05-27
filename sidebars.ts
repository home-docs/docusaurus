import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  mainSidebar: [ //
    {
      type: 'category',
      label: 'Documentation',
      link: {
        type: 'generated-index',
        title: 'All Documentation',
        description: 'Learn about Docusaurus setup and GitHub repository management.',
        slug: '/documentation',
      },
      items: [
        {
          type: 'category',
          label: 'GitHub',
          items: [
            {
              type: 'doc',
              id: 'github/github-setup',
              label: 'Getting Started',
            },
          ],
        },
        // {
        //   type: 'category',
        //   label: 'Docusaurus',
        //   items: [
        //     'docusaurus/docusaurus',
        //   ],
        // },
      ],
    },
  ],
  // Remove the old empty 'mainSidebar' entry
};

export default sidebars;