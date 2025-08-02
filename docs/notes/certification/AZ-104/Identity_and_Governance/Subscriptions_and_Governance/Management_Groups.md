# Create management group hierarchy

Azure **management groups** provide a top-level scope above subscriptions for applying **governance**, **policy**, and **RBAC** across multiple subscriptions. You can organize subscriptions into a **hierarchical structure** to reflect business units, environments, or geographic regions. Policies and access assignments applied at a management group scope are inherited by all nested subscriptions and resource groups.

## Key Points

- **Hierarchy Overview**
  - Root Management Group
  - Custom Management Groups
  - Subscriptions
  - Resource Groups
  - Resources
- **Default Root Group**
  - Created automatically per Azure AD tenant
  - You must **elevate access** to manage it
  - All management groups and subscriptions roll up to this root
- **Use Cases for Management Groups**
  - Apply policies like “Allowed locations” across all subscriptions
  - Separate Dev/Test and Production environments
  - Centralize RBAC for security or billing admins
- **Creating a Management Group (Portal)**
  - Go to `Management Groups` in the portal
  - Click **+ Add management group**
  - Provide a unique ID and display name
  - Assign parent group (default = root)
- **Assign Subscriptions**
  - From within a management group > Click **+ Add subscription**
  - Select subscription(s) from your directory
- **Azure CLI – Create Management Group**

  ```bash title="Shell"
  az account management-group create 
    --name "Engineering" 
    --display-name "Engineering Department"
  ```

- **Azure CLI – Assign Subscription to Management Group**

  ```bash title="Shell"
  az account management-group subscription add 
    --name "Engineering" 
    --subscription "00000000-0000-0000-0000-000000000000"
  ```

- **PowerShell – Create Management Group**

  ```powershell title="PowerShell"
  New-AzManagementGroup -GroupName "Engineering" -DisplayName "Engineering Department"
  ```

- **Policy and RBAC Inheritance**
  - Policies and role assignments at a management group are **inherited** by all child scopes
  - Useful for enforcing tagging, security baselines, and compliance controls
- **Limitations**
  - A subscription can belong to **only one** management group
  - Management groups do **not affect billing** but help enforce **governance**

:::note[Best Practices]

- Define your hierarchy early based on business structure or workload types
- Use naming conventions for group IDs (e.g., corp-prod, corp-dev)
- Apply policies and RBAC at the highest applicable level for consistency
- Avoid deep hierarchies — keep it simple (2–3 levels max)
- Document management group purpose and owner for governance transparency

:::

Additional Reading: [What are Azure management groups?](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview)
