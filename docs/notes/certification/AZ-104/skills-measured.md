---
title: Skills Measured
sidebar_position: 1
sidebar_id: 'mainSidebar'
---
## Manage Azure identities and governance (20–25%)

### Manage Microsoft Entra users and groups

- Create users and groups
  - [User creation in Microsoft Entra portal, PowerShell, and CLI](./Identity_and_Governance/Entra_Users_and_Groups/User_Creation.md)
  - [Group creation (Security and Microsoft 365)](./Identity_and_Governance/Entra_Users_and_Groups/Group_Creation.md)
  - [Dynamic group membership rules](./Identity_and_Governance/Entra_Users_and_Groups/Dynamic_Group_Membership.md)
  - [Bulk user import via CSV](./Identity_and_Governance/Entra_Users_and_Groups/Bulk_Import.md)
  - [User provisioning with SCIM](./Identity_and_Governance/Entra_Users_and_Groups/SCIM_User_Provisioning.md)
- Manage user and group properties
  - [Modify user details (profile, job info, contact info)](./Identity_and_Governance/Entra_Users_and_Groups/Modify_User_Details.md)
  - [Group membership management](./Identity_and_Governance/Entra_Users_and_Groups/Group_Membership_Management.md)
  - [Reset user passwords](./Identity_and_Governance/Entra_Users_and_Groups/Reset_Passwords.md)
  - [User principal name (UPN) changes](./Identity_and_Governance/Entra_Users_and_Groups/Change_UPN.md)
  - [Group expiration policies](./Identity_and_Governance/Entra_Users_and_Groups/Group_Expiration.md)
- Manage licenses in Microsoft Entra ID
  - [Assign product licenses to users and groups](./Identity_and_Governance/Entra_Users_and_Groups/License_Assignment.md)
  - [Configure group-based licensing](./Identity_and_Governance/Entra_Users_and_Groups/Group_Licensing.md)
  - [Resolve licensing conflicts](./Identity_and_Governance/Entra_Users_and_Groups/Licensing_Conflicts.md)
  - [View and interpret license assignment errors](./Identity_and_Governance/Entra_Users_and_Groups/License_Error_Troubleshooting.md)
- Manage external users
  - [Add B2B guest users](./Identity_and_Governance/Entra_Users_and_Groups/Add_Guest_Users.md)
  - [Configure invitation settings](./Identity_and_Governance/Entra_Users_and_Groups/Invitation_Settings.md)
  - [Redeem invitation process](./Identity_and_Governance/Entra_Users_and_Groups/Guest_Redeem_Process.md)
  - [External collaboration settings](./Identity_and_Governance/Entra_Users_and_Groups/External_Collaboration.md)
  - [Manage external user properties](./Identity_and_Governance/Entra_Users_and_Groups/Manage_Guest_User_Properties.md)
- Configure self-service password reset (SSPR)
  - [Enable/disable SSPR for users or groups](./Identity_and_Governance/Entra_Users_and_Groups/Enable_SSPR.md)
  - [Configure authentication methods](./Identity_and_Governance/Entra_Users_and_Groups/SSPR_Auth_Methods.md)
  - [Customize notifications and branding](./Identity_and_Governance/Entra_Users_and_Groups/SSPR_Branding.md)
  - [Review SSPR audit logs](./Identity_and_Governance/Entra_Users_and_Groups/SSPR_Audit_Logs.md)
  - [Password writeback for hybrid users](./Identity_and_Governance/Entra_Users_and_Groups/Password_Writeback.md)

### Manage access to Azure resources

- Manage built-in Azure roles
  - [Reader, Contributor, Owner, User Access Administrator](./Identity_and_Governance/Access_to_Resources/Builtin_Roles.md)
  - [Understand least privilege principle](./Identity_and_Governance/Access_to_Resources/Least_Privilege.md)
  - [Custom role creation basics](./Identity_and_Governance/Access_to_Resources/Custom_Role_Basics.md)
- Assign roles at different scopes
  - [Resource, resource group, subscription, management group](./Identity_and_Governance/Access_to_Resources/Role_Assignment_Scope.md)
  - [Use of Azure portal, CLI, and PowerShell](./Identity_and_Governance/Access_to_Resources/Role_Assignment_Tools.md)
  - [Role inheritance behavior](./Identity_and_Governance/Access_to_Resources/Role_Inheritance.md)
- Interpret access assignments
  - [Review role assignments in portal](./Identity_and_Governance/Access_to_Resources/View_Role_Assignments.md)
  - [Identify effective permissions](./Identity_and_Governance/Access_to_Resources/Effective_Permissions.md)
  - [Use Access Control (IAM) blade](./Identity_and_Governance/Access_to_Resources/IAM_Blade_Usage.md)
  - [Analyze activity logs and role assignments](./Identity_and_Governance/Access_to_Resources/Analyze_Role_Assignments.md)

### Manage Azure subscriptions and governance

- Implement and manage Azure Policy
  - [Assign built-in and custom policies](./Identity_and_Governance/Subscriptions_and_Governance/Azure_Policy_Basics.md)
  - [Understand policy effects (Deny, Audit, Append, etc.)](./Identity_and_Governance/Subscriptions_and_Governance/Policy_Effects.md)
  - [View compliance state](./Identity_and_Governance/Subscriptions_and_Governance/Policy_Compliance.md)
  - [Policy initiative definition and assignment](./Identity_and_Governance/Subscriptions_and_Governance/Policy_Initiatives.md)
- Configure resource locks
  - [Create/Delete, CanNotDelete and ReadOnly locks](./Identity_and_Governance/Subscriptions_and_Governance/Resource_Locks.md)
  - [Inheritance of locks across scopes](./Identity_and_Governance/Subscriptions_and_Governance/Lock_Inheritance.md)
  - [Impact of Locks on automation](./Identity_and_Governance/Subscriptions_and_Governance/Automation_Lock_Impact.md)
- Apply and manage tags on resources
  - [Add/edit tags using portal, CLI, ARM/Bicep](./Identity_and_Governance/Subscriptions_and_Governance/Tags_Basics.md)
  - [Tag inheritance](./Identity_and_Governance/Subscriptions_and_Governance/Tag_Inheritance.md)
  - [Use tags for billing](./Identity_and_Governance/Subscriptions_and_Governance/Tags_for_Billing.md)
- Manage resource groups
  - [Create/delete resource groups](./Identity_and_Governance/Subscriptions_and_Governance/Resource_Groups.md)
  - [Move resources between groups](./Identity_and_Governance/Subscriptions_and_Governance/Move_Resources.md)
  - [Resource group-level permissions](./Identity_and_Governance/Subscriptions_and_Governance/RG_Permissions.md)
- Manage subscriptions
  - [Rename, disable, delete subscriptions](./Identity_and_Governance/Subscriptions_and_Governance/Manage_Subscriptions.md)
  - [Set subscription policies](./Identity_and_Governance/Subscriptions_and_Governance/Subscription_Policies.md)
  - [Billing management and ownership transfer](./Identity_and_Governance/Subscriptions_and_Governance/Billing_Transfer.md)
- Manage costs by using alerts, budgets, and Azure Advisor recommendations
  - [Create and configure budgets](./Identity_and_Governance/Subscriptions_and_Governance/Budgets.md)
  - [Setup cost alerts](./Identity_and_Governance/Subscriptions_and_Governance/Cost_Alerts.md)
  - [Use Azure Advisor for cost optimization](./Identity_and_Governance/Subscriptions_and_Governance/Azure_Advisor_Costs.md)
  - [Analyze cost trends in Cost Management](./Identity_and_Governance/Subscriptions_and_Governance/Cost_Trends.md)
- Configure management groups
  - [Create management group hierarchy](./Identity_and_Governance/Subscriptions_and_Governance/Management_Groups.md)
  - [Assign roles and policies at management group level](./Identity_and_Governance/Subscriptions_and_Governance/Management_Group_Roles.md)
  - [Link subscriptions to management groups](./Identity_and_Governance/Subscriptions_and_Governance/Link_Subscriptions.md)

## Implement and manage storage (15–20%)

### Configure access to storage

- Configure Azure Storage firewalls and virtual networks
  - Configure trusted services
  - Set IP network rules
  - Restrict access using VNet and subnet
  - Service endpoint vs. private endpoint considerations
- Create and use shared access signature (SAS) tokens
  - Account SAS vs. Service SAS
  - SAS token permissions and expiry
  - Generate SAS via portal, CLI, PowerShell
  - Use SAS in tools and URLs
- Configure stored access policies
  - Link stored access policy with SAS
  - Modify or revoke access centrally
  - Define expiration and permissions in policy
- Manage access keys
  - Rotate and regenerate storage account keys
  - Use key1/key2 strategy
  - Set key permissions
  - Secure key storage in Key Vault
- Configure identity-based access for Azure Files
  - Enable Azure AD DS authentication
  - Assign RBAC roles for Azure Files
  - NTFS permissions for mounted file shares
  - Configure Kerberos authentication

### Configure and manage storage accounts

- Create and configure storage accounts
  - Choose performance (Standard vs. Premium)
  - Select redundancy (LRS, ZRS, GRS, etc.)
  - Access tiers (Hot, Cool, Archive)
  - Configure advanced networking options
  - Enable/disable public access
- Configure Azure Storage redundancy
  - Understand LRS, ZRS, GRS, RA-GRS, GZRS
  - Change replication type
  - Understand cross-region replication latency
- Configure object replication
  - Enable blob replication between accounts
  - Define source/destination containers
  - Monitor replication status
- Configure storage account encryption
  - Enable Microsoft-managed or customer-managed keys
  - Configure encryption scopes
  - Integrate Key Vault for CMK
  - Enable infrastructure encryption
- Manage data by using Azure Storage Explorer and AzCopy
  - Upload/download files with Storage Explorer
  - Use AzCopy for bulk data transfer
  - Authenticate AzCopy with SAS, OAuth, or keys
  - Sync directories and copy between accounts

### Configure Azure Files and Azure Blob Storage

- Create and configure a file share in Azure Storage
  - Standard vs. Premium file shares
  - Configure quota and performance tier
  - Mount file share on Windows/Linux/macOS
  - Enable snapshots and backups
- Create and configure a container in Blob Storage
  - Create container with access level (private, blob, container)
  - Set metadata and blob properties
  - Upload blobs via portal, CLI, PowerShell
- Configure storage tiers
  - Configure blob access tier (Hot, Cool, Archive)
  - Move between tiers manually or with lifecycle rules
  - Tiering costs and performance impact
- Configure soft delete for blobs and containers
  - Enable soft delete settings
  - Set retention period
  - Restore deleted blobs/containers
- Configure snapshots and soft delete for Azure Files
  - Take manual or scheduled snapshots
  - Restore file or directory from snapshot
  - Enable soft delete for accidental deletions
- Configure blob lifecycle management
  - Create rules for blob movement/deletion
  - Filter by prefix, tier, age
  - Automate archive or delete workflows
- Configure blob versioning
  - Enable blob versioning
  - View and restore previous versions
  - Integrate with soft delete and snapshots

## Deploy and manage Azure compute resources (20–25%)

### Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files

- Interpret an Azure Resource Manager template or a Bicep file
  - Understand schema, parameters, variables, resources, outputs
  - Analyze dependencies and resource hierarchy
  - Recognize functions (concat, reference, resourceId, etc.)
- Modify an existing Azure Resource Manager template
  - Update parameter values and types
  - Add new resources or change configurations
  - Insert conditions and loops
- Modify an existing Bicep file
  - Edit parameters, variables, and modules
  - Update resource definitions
  - Use decorators and conditionals
- Deploy resources by using an Azure Resource Manager template or a Bicep file
  - Use Azure portal, CLI, PowerShell, or pipelines
  - Deploy from local file or remote URI
  - Parameter file usage
  - Monitor deployment status
- Export a deployment as an Azure Resource Manager template or convert an Azure Resource Manager template to a Bicep file
  - Export template from existing resource
  - Use Visual Studio Code to convert JSON to Bicep
  - Use bicep decompile CLI command

### Create and configure virtual machines

- Create a virtual machine
  - Choose VM image, size, and region
  - Configure OS disk, admin credentials
  - Set availability options
  - Add inbound port rules
- Configure Azure Disk Encryption
  - Enable encryption for OS/data disks
  - Use Azure Key Vault for key management
  - Understand BitLocker (Windows) and dm-crypt (Linux) integration
- Move a virtual machine to another resource group, subscription, or region
  - Use Azure Resource Mover
  - Validate dependencies before move
  - Handle post-move network and identity changes
- Manage virtual machine sizes
  - Resize VM via portal or CLI
  - Understand implications on availability sets and disks
  - Select right SKU based on workload
- Manage virtual machine disks
  - Attach/detach data disks
  - Resize and change performance tier
  - Enable disk bursting (Standard SSD)
  - Snapshot and backup disks
- Deploy virtual machines to availability zones and availability sets
  - Configure during VM creation
  - Understand zone-aware vs. zone-redundant services
  - Design for high availability
- Deploy and configure an Azure Virtual Machine Scale Sets
  - Set VMSS instance count, SKU
  - Configure autoscaling rules
  - Use custom images or shared gallery
  - Monitor instance health and status

### Provision and manage containers in the Azure portal

- Create and manage an Azure container registry
  - Enable admin access
  - Push/pull images
  - Set retention and cleanup policies
  - Configure geo-replication
- Provision a container by using Azure Container Instances
  - Define container group, CPU/memory, image
  - Configure restart policy
  - Mount Azure File share
  - Expose ports
- Provision a container by using Azure Container Apps
  - Configure revision mode (single/multiple)
  - Set ingress, scale rules, secrets
  - Deploy from ACR or public registry
  - Integrate with Dapr
- Manage sizing and scaling for containers, including Azure Container Instances and Azure Container Apps
  - Configure CPU/memory limits
  - Use KEDA for event-based scaling (Container Apps)
  - Manual and auto-scaling in ACI and ACA

### Create and configure Azure App Service

- Provision an App Service plan
  - Choose tier (Free, Shared, Basic, Standard, Premium)
  - Set region, OS, SKU
  - Understand scaling and pricing impact
- Configure scaling for an App Service plan
  - Enable autoscale based on metrics
  - Configure scale-out/in rules
  - Understand instance count and plan limits
- Create an App Service
  - Deploy code or container
  - Select runtime stack (Node.js, .NET, Java, etc.)
  - Set deployment region and slot
- Configure certificates and Transport Layer Security (TLS) for an App Service
  - Upload custom certificates
  - Bind TLS to custom domains
  - Configure minimum TLS version
- Map an existing custom DNS name to an App Service
  - Add custom domain
  - Verify ownership via TXT record
  - Bind SSL to domain
- Configure backup for an App Service
  - Enable backup with storage account
  - Set schedule and retention
  - Restore from backup
- Configure networking settings for an App Service
  - Configure VNet integration
  - Use private endpoints
  - Restrict access via access restrictions
- Configure deployment slots for an App Service
  - Create staging slots
  - Swap slots with zero downtime
  - Use slot-specific settings

## Implement and manage virtual networking (15–20%)

### Configure and manage virtual networks in Azure

- Create and configure virtual networks and subnets
  - Define address spaces and subnet ranges
  - Associate subnets with NSGs and route tables
  - Configure DNS settings at VNet level
  - Isolate workloads using subnet segregation
- Create and configure virtual network peering
  - Configure VNet peering within and across regions
  - Allow/disallow forwarded traffic
  - Configure gateway transit and remote gateway usage
  - Verify peering status and connectivity
- Configure public IP addresses
  - Assign static/dynamic public IP
  - Choose SKU (Basic vs. Standard)
  - Associate public IP with NIC, Load Balancer, or App Gateway
  - Configure DNS name label
- Configure user-defined network routes
  - Create custom route tables
  - Associate route table with subnet
  - Define next hop type (Virtual appliance, Internet, etc.)
  - Combine with NSGs for control
- Troubleshoot network connectivity
  - Use Network Watcher: IP Flow Verify, NSG Diagnostics
  - Use Connection Troubleshoot and Packet Capture
  - Analyze Effective Security Rules
  - Trace routes and resolve DNS

### Configure secure access to virtual networks

- Create and configure network security groups (NSGs) and application security groups
  - Create NSGs and assign to subnets or NICs
  - Configure inbound/outbound rules
  - Use ASGs to group VMs by application
  - Set priority and default deny behavior
- Evaluate effective security rules in NSGs
  - View NSG effective rules in portal
  - Combine rules from subnet and NIC NSGs
  - Understand rule processing logic (lowest priority wins)
- Implement Azure Bastion
  - Deploy Bastion to a subnet named `AzureBastionSubnet`
  - Secure RDP/SSH over SSL via portal
  - Integrate with NSGs and firewalls
  - Ensure public IP is Standard SKU
- Configure service endpoints for Azure platform as a service (PaaS)
  - Enable endpoint for services (e.g., Storage, SQL)
  - Associate with subnet
  - Restrict access to specific virtual networks
  - Combine with private IP firewall rules
- Configure private endpoints for Azure PaaS
  - Create private endpoint to a resource (e.g., Blob, SQL)
  - Configure private DNS zone
  - Manage network policies for private link subnets
  - Use DNS to resolve resource via private IP

### Configure name resolution and load balancing

- Configure Azure DNS
  - Create public or private DNS zones
  - Manage records (A, AAAA, CNAME, TXT, etc.)
  - Link virtual networks to private zones
  - Enable auto-registration for private DNS
- Configure an internal or public load balancer
  - Create frontend IP, backend pool, health probes
  - Configure load-balancing rules (L4)
  - Choose between Basic and Standard SKUs
  - Use inbound NAT rules for VM access
- Troubleshoot load balancing
  - Validate health probe status
  - Check NSG and UDR configuration
  - Use Connection Troubleshoot in Network Watcher
  - Diagnose backend pool instance health

## Monitor and maintain Azure resources (10–15%)

### Monitor resources in Azure

- Interpret metrics in Azure Monitor
  - Analyze charts for CPU, memory, disk, network
  - Configure metric alerts
  - Use custom and platform metrics
  - Filter by resource, namespace, aggregation
- Configure log settings in Azure Monitor
  - Enable diagnostic settings on resources
  - Send logs to Log Analytics, Event Hubs, Storage
  - Choose categories (AuditLogs, Metrics, etc.)
  - Configure retention settings
- Query and analyze logs in Azure Monitor
  - Use Log Analytics Workspace
  - Write KQL queries (where, summarize, project, etc.)
  - Use query time range, filters, and visualizations
  - Save, pin, and share queries
- Set up alert rules, action groups, and alert processing rules in Azure Monitor
  - Create alerts on metrics or logs
  - Define action groups (email, SMS, webhook, Logic App)
  - Use alert processing rules for suppression or forwarding
  - Configure severity levels and conditions
- Configure and interpret monitoring of virtual machines, storage accounts, and networks by using Azure Monitor Insights
  - Enable VM Insights, Storage Insights, and Network Insights
  - Review health maps and performance charts
  - Analyze dependency maps
  - Use suggested workbooks
- Use Azure Network Watcher and Connection Monitor
  - Enable Network Watcher in region
  - Use Connection Monitor for end-to-end tests
  - Analyze topology and IP flow
  - Capture packets and run latency tests

### Implement backup and recovery

- Create a Recovery Services vault
  - Choose region and redundancy (GRS/LRS)
  - Set vault properties and access control
  - Configure diagnostics
- Create an Azure Backup vault
  - Use Backup vault for newer scenarios
  - Register resources
  - Configure soft delete and immutability
- Create and configure a backup policy
  - Set backup frequency and retention
  - Choose daily/weekly/monthly/yearly rules
  - Associate with resources (VMs, Files, SQL, etc.)
- Perform backup and restore operations by using Azure Backup
  - Initiate ad-hoc or scheduled backup
  - Restore entire VM or specific files
  - Restore to original or alternate location
  - Monitor job status
- Configure Azure Site Recovery for Azure resources
  - Enable replication for VMs
  - Define source and target regions
  - Set up recovery plans
  - Monitor replication health
- Perform a failover to a secondary region by using Site Recovery
  - Trigger test failover, planned failover, or unplanned
  - Commit or discard failover
  - Validate workload after failover
- Configure and interpret reports and alerts for backups
  - View backup reports from Azure Monitor
  - Configure alerts for backup success/failure
  - Use Recovery Vault dashboard and monitoring logs
