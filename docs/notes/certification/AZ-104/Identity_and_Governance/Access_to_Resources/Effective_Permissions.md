# Identify effective permissions

Effective permissions are the **actual actions** a user, group, or service principal can perform on a resource, after evaluating **all role assignments**, **scope inheritance**, **group memberships**, and **conditional access rules**. Understanding effective permissions helps you assess risk, troubleshoot access, and verify compliance.

## Key Points

- **What Are Effective Permissions?**
  - The **combined result** of:
    - All directly assigned roles
    - Roles inherited from parent scopes
    - Group-based role assignments
    - Role assignment conditions (preview feature)
- **Where to View Effective Permissions**
  - Go to the **resource**, **resource group**, or **subscription**
  - Navigate to: `Access control (IAM) > Check access`
  - Select a **user, group, or service principal**
  - Azure shows:
    - **Roles assigned**
    - **Scope of assignment**
    - **Inherited vs Direct**
    - A list of **permissions** granted by those roles
- **Using Azure Resource Graph Explorer (Advanced)**
  - Run queries across the tenant to get full visibility

  ```kusto title="KQL - Role Assignments"
  ResourceContainers
  | join kind=inner (
      RoleAssignments
      | where principalName == "jane.doe@contoso.com"
  ) on subscriptionId
  ```

- **PowerShell Example**

  ```powershell title="PowerShell"
  Get-AzRoleAssignment -ObjectId <user-object-id> | ft RoleDefinitionName, Scope
  ```

- **Azure CLI Example**

  ```bash title="Shell"
  az role assignment list 
    --assignee <user-id> 
    --include-inherited 
    --output table
  ```

- **Why Effective Permissions Matter**
  - Help troubleshoot “access denied” errors
  - Validate access during audits
  - Confirm users have **only the access they need**
- **Data Plane Permissions Are Separate**
  - Azure RBAC governs the **control plane**
  - For **data plane access** (e.g., read/write blobs, query Key Vault secrets), you must:
    - Check **RBAC DataActions**
    - OR inspect **ACLs**, **SAS tokens**, or **Key Vault access policies**
- **Privileged Identity Management (PIM) Consideration**
  - If using PIM, **eligible assignments** do **not** grant effective permissions **until activated**
  - Always check whether access is **active or eligible**

Additional Reading: [Check access for a user to a single Azure resource](https://learn.microsoft.com/en-us/azure/role-based-access-control/check-access)
