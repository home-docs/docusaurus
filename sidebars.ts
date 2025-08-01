import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
        description: 'Notes on various topics.',
        slug: '/notes',
      },
      items: [
        {
          type: 'category',
          label: 'Certification',
          link: {
            type: 'generated-index',
            title: 'Certification',
            description: 'Notes and resources for certifications.',
            slug: '/notes/certification',
          },
          items: [
            {
              type: 'category',
              label: 'AZ-104',
              link: {
                type: 'doc',
                id: 'notes/certification/AZ-104/skills-measured',
              },
              items: [
                {
                  type: 'category',
                  label: 'Manage Azure identities and governance',
                  items: [
                    {
                      type: 'category',
                      label: 'Microsoft Entra Users and Groups',
                      items: [
                        {
                          type: 'category',
                          label: 'Create users and groups',
                          link: {
                            type: 'generated-index',
                            title: 'Create users and groups',
                            description: 'Create and manage users and groups in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/User_Creation',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Group_Creation',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Dynamic_Group_Membership',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Bulk_Import',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/SCIM_User_Provisioning',
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Manage user and group properties',
                          link: {
                            type: 'generated-index',
                            title: 'Manage user and group properties',
                            description: 'Modify user and group properties in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Modify_User_Details',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Group_Membership_Management',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Reset_Passwords',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Change_UPN',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Group_Expiration',
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Manage licenses in Microsoft Entra ID',
                          link: {
                            type: 'generated-index',
                            title: 'Manage licenses in Microsoft Entra ID',
                            description: 'Manage licenses for users and groups in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/License_Assignment',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Group_Licensing',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Licensing_Conflicts',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/License_Error_Troubleshooting',
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Manage external users',
                          link: {
                            type: 'generated-index',
                            title: 'Manage external users',
                            description: 'Manage external users in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Add_Guest_Users',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Invitation_Settings',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Guest_Redeem_Process',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/External_Collaboration',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Manage_Guest_User_Properties',
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Configure self-service password reset (SSPR)',
                          link: {
                            type: 'generated-index',
                            title: 'Configure self-service password reset (SSPR)',
                            description: 'Set up and manage self-service password reset for users in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Enable_SSPR',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/SSPR_Auth_Methods',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/SSPR_Branding',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/SSPR_Audit_Logs',
                            'notes/certification/AZ-104/Identity_and_Governance/Entra_Users_and_Groups/Password_Writeback',
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ]
        },
      ],
    },
  ],
};

export default sidebars;