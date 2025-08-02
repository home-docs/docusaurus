# Resource group-level permissions

Azure uses **Role-Based Access Control (RBAC)** to manage permissions at different scopes: management group, subscription, resource group, and resource. Assigning permissions at the **resource group level** allows you to **delegate access** for managing just a subset of resources—ideal for decentralized teams or environment-specific access.

## Key Points

- **Scope Hierarchy (Most Broad > Most Narrow)**
  - Management Group
  - Subscription
  - **Resource Group**
  - Resource
- **Common Roles at Resource Group Level**
  - **Reader** – View resources only
  - **Contributor** – Manage resources (except RBAC & billing)
  - **Owner** – Full access including RBAC delegation
  - **User Access Administrator** – Can manage role assignments without full access to resources
- **Benefits of RG-Level Assignments**
  - Least privilege access principle
  - Granular delegation to app teams, dev teams, or departments
  - Separation of duties between infra and app teams
- **Assign Roles via Portal**
  1. Go to `Resource Groups` > Select your RG
  2. Navigate to **Access control (IAM)**
  3. Click **+ Add > Add role assignment**
  4. Choose Role > Assign to user, group, service principal, or managed identity
  5. Click **Review + assign**

### Azure CLI

- **Assign Reader role to a user at RG scope**

  ```bash title="Shell
  az role assignment create 
    --assignee "<user-object-id>" 
    --role "Reader" 
    --resource-group "FinanceRG"
  ```

### PowerShell

- **Assign Contributor role**

  ```powershell title="PowerShell"
  New-AzRoleAssignment 
    -ObjectId "<user-object-id>" 
    -RoleDefinitionName "Contributor" 
    -ResourceGroupName "FinanceRG"
  ```

### View Role Assignments

- **Portal** > Resource Group > `Access control (IAM)` > `Role assignments`
- **Azure CLI**

  ```bash title="Shell"
  az role assignment list --resource-group "FinanceRG" --output table
  ```

- **PowerShell**

  ```powershell title="PowerShell"
  Get-AzRoleAssignment -ResourceGroupName "FinanceRG"
  ```

:::info[Important Information]

- **Permissions assigned at a higher level (e.g., subscription)** are inherited at the RG level
- A user can have **multiple assignments** from different scopes that combine
- Role assignments can take **up to 5 minutes** to take effect
- Use **Activity Logs** to audit access and role changes

:::

:::note[Best Practices]

- Follow **least privilege**: assign the minimal role needed
- Use **Azure AD Groups** to manage access at scale
- Reuse **custom roles** when built-in roles are too broad
- Regularly **review role assignments** to remove stale access

:::

Additional Reading: [Assign Azure roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
