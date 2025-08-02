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
                  link: {
                    type: 'generated-index',
                    title: 'Manage Azure identities and governance',
                    description: 'Learn how to manage Azure identities and governance in Microsoft Entra ID.',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'Manage Microsoft Entra Users and Groups',
                      link: {
                        type: 'generated-index',
                        title: 'Manage Microsoft Entra Users and Groups',
                        description: 'Manage users and groups in Microsoft Entra ID.',
                      },
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
                    {
                      type: 'category',
                      label: 'Manage access to Azure resources',
                      link: {
                        type: 'generated-index',
                        title: 'Manage access to Azure resources',
                        description: 'Manage access to Azure resources using built-in roles and custom roles in Microsoft Entra ID.',
                      },
                      items: [
                        {
                          type: 'category',
                          label: 'Manage built-in Azure roles',
                          link: {
                            type: 'generated-index',
                            title: 'Manage built-in Azure roles',
                            description: 'Manage built-in Azure roles in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Builtin_Roles',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Least_Privilege',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Custom_Role_Basics',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Assign roles at different scopes',
                          link: {
                            type: 'generated-index',
                            title: 'Assign roles at different scopes',
                            description: 'Assign roles at different scopes in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Role_Assignment_Scope',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Role_Assignment_Tools',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Role_Inheritance',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Interpret access assignments',
                          link: {
                            type: 'generated-index',
                            title: 'Interpret access assignments',
                            description: 'Interpret access assignments in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/View_Role_Assignments',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Effective_Permissions',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/IAM_Blade_Usage',
                            'notes/certification/AZ-104/Identity_and_Governance/Access_to_Resources/Analyze_Role_Assignments',
                          ]
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Manage Azure subscriptions and governance',
                      link: {
                        type: 'generated-index',
                        title: 'Manage Azure subscriptions and governance',
                        description: 'Manage Azure subscriptions and governance in Microsoft Entra ID.',
                      },
                      items: [
                        {
                          type: 'category',
                          label: 'Implement and manage Azure Policy',
                          link: {
                            type: 'generated-index',
                            title: 'Implement and manage Azure Policy',
                            description: 'Implement and manage Azure Policy in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Azure_Policy_Basics',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Policy_Effects',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Policy_Compliance',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Policy_Initiatives',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Configure resource locks',
                          link: {
                            type: 'generated-index',
                            title: 'Configure resource locks',
                            description: 'Configure resource locks in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Resource_Locks',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Lock_Inheritance',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Automation_Lock_Impact',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Apply and manage tags on resources',
                          link: {
                            type: 'generated-index',
                            title: 'Apply and manage tags on resources',
                            description: 'Apply and manage tags on resources in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Tags_Basics',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Tag_Inheritance',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Tags_for_Billing',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Manage resource groups',
                          link: {
                            type: 'generated-index',
                            title: 'Manage resource groups',
                            description: 'Manage resource groups in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Resource_Groups',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Move_Resources',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/RG_Permissions',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Manage subscriptions',
                          link: {
                            type: 'generated-index',
                            title: 'Manage subscriptions',
                            description: 'Manage subscriptions in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Manage_Subscriptions',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Subscription_Policies',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Billing_Transfer',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Manage costs by using alerts, budgets, and Azure Advisor recommendations',
                          link: {
                            type: 'generated-index',
                            title: 'Manage costs by using alerts, budgets, and Azure Advisor recommendations',
                            description: 'Manage costs by using alerts, budgets, and Azure Advisor recommendations in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Budgets',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Cost_Alerts',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Azure_Advisor_Costs',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Cost_Trends',
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Configure management groups',
                          link: {
                            type: 'generated-index',
                            title: 'Configure management groups',
                            description: 'Configure management groups in Microsoft Entra ID.',
                          },
                          items: [
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Management_Groups',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Management_Group_Roles',
                            'notes/certification/AZ-104/Identity_and_Governance/Subscriptions_and_Governance/Link_Subscriptions',
                          ]
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