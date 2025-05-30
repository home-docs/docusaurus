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
          label: 'Hardware Overview',
          link: {
            type: 'generated-index',
            title: 'Hardware Components',
            description: 'Detailed specifications and roles of each physical device in the home lab.',
            slug: '/home-lab/hardware',
          },
          items: [
            'home-lab/hardware/raspberry-pi-4-64',
            'home-lab/hardware/pve01-dell-optiplex-3060',
            'home-lab/hardware/pve02-dell-optiplex-3060',
            'home-lab/hardware/ovh-vps', // New: OVH VPS
            'home-lab/hardware/unifi-dream-machine', // New: Unifi Dream Machine
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
            'home-lab/software-services/home-assistant-os',
            'home-lab/software-services/proxmox-ve',
            // Add other software/services here as you document them
          ],
        },
        // Add more top-level home lab categories here (e.g., Network Configuration, Guides & Tutorials)
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
          label: 'GitHub',
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
        // Future additions like Ansible, Terraform would go here
      ],
    },
  ],
};

export default sidebars;