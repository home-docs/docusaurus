import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Home Lab',
      link: {
        type: 'generated-index',
        title: 'Home Lab Overview',
        description: 'Explore the hardware, software, and configurations of my personal home lab setup.',
        slug: '/home-lab',
      },
      items: [
        {
          type: 'category',
          label: 'Hardware',
          link: {
            type: 'generated-index',
            title: 'Hardware Components',
            description: 'Detailed specifications and roles of each physical device in the home lab.',
            slug: '/home-lab/hardware',
          },
          items: [
            'home-lab/hardware/unifi-dream-machine',
            'home-lab/hardware/ovh-vps',
            'home-lab/hardware/pve01-dell-optiplex-3060',
            'home-lab/hardware/pve02-dell-optiplex-3060',
            'home-lab/hardware/raspberry-pi-4-64',
          ],
        },
        {
          type: 'category',
          label: 'Software & Services',
          link: {
            type: 'generated-index',
            title: 'Software & Services',
            description: 'Documentation for operating systems, virtualization platforms, and key applications.',
            slug: '/home-lab/software-services',
          },
          items: [
            'home-lab/software-services/networking-services',
            'home-lab/software-services/proxmox-ve',
            'home-lab/software-services/mediaserver',
            'home-lab/software-services/utility-services',
            'home-lab/software-services/home-assistant-os',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools & Technologies',
      link: {
        type: 'generated-index',
        title: 'Tools & Technologies',
        description: 'Documentation for various tools and technologies used in my projects, including Docusaurus itself.',
        slug: '/tools-technologies',
      },
      items: [
        {
          type: 'category',
          label: 'GitHub / Git',
          items: [
            {
              type: 'doc',
              id: 'tools-technologies/github/github-setup',
              label: 'Getting Started',
            },
          ],
        },
        {
          type: 'doc',
          id: 'tools-technologies/docusaurus/docusaurus',
          label: 'Docusaurus',
        },
      ],
    },
    {
      type: 'category',
      label: 'Notes',
      link: {
        type: 'generated-index',
        title: 'Notes',
        description: 'A collection of my notes for various topics, including certifications.',
        slug: '/notes',
      },
      items: [
        {
          type: 'category',
          label: 'AZ-104',
          link: {
            type: 'doc',
            id: 'notes/certification/az-104/skills-measured',
          },
          items: [
            {
              type: 'category',
              label: 'Manage Azure identities and governance',
              items: [
                // {
                //   type: 'doc',
                //   id: 'notes/certification/az-104/manage_azure_identities_and_governance/create_users_and_groups',
                //   label: 'Create users and groups',
                // },
                {
                  type: 'doc',
                  id: 'notes/certification/az-104/manage_azure_identities_and_governance/manage_user_and_group_properties',
                  label: 'Manage user and group properties',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;