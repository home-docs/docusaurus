# Reader, Contributor, Owner, User Access Administrator

Azure provides a set of built-in roles that define the level of access users and groups have to Azure resources. These roles are based on the **Azure Role-Based Access Control (RBAC)** model. Understanding the core built-in roles is essential for enforcing **least privilege**, managing access efficiently, and ensuring compliance.

## Key Points

- **Reader**
  - **Permissions**: View **everything**, but **cannot make changes**
  - Commonly used for:
    - Auditors
    - Monitoring tools
    - Users who need insight without making changes
- **Contributor**
  - **Permissions**: Create and manage **all resources**, but **cannot assign roles**
  - Cannot manage access permissions (no RBAC changes)
  - Commonly used for:
    - Developers
    - App owners managing their workloads
    - Automation accounts
- **Owner**
  - **Permissions**: Full access to **everything**, including **assigning roles**
  - Combines Contributor + User Access Administrator
  - Commonly used for:
    - Subscription/resource group administrators
    - Central IT teams
- **User Access Administrator**
  - **Permissions**: Can **manage access (RBAC)**, but **cannot manage resources**
  - Assignable to allow delegated access control without full ownership
  - Useful for:
    - Delegating role assignment to department leads
    - Managing just RBAC without altering resource configuration

## Comparison Table

| Role                  | Manage Resources | View Resources | Assign Roles |
| --------------------- | ---------------- | -------------- | ------------ |
| **Reader**            | ❌                | ✅              | ❌            |
| **Contributor**       | ✅                | ✅              | ❌            |
| **Owner**             | ✅                | ✅              | ✅            |
| **User Access Admin** | ❌                | ❌              | ✅            |

## PowerShell Example – Assign Reader Role

    ```powershell title="PowerShell"
    New-AzRoleAssignment -ObjectId "<user-or-group-object-id>" 
                        -RoleDefinitionName "Reader" 
                        -Scope "/subscriptions/<subscription-id>/resourceGroups/<rg-name>"
    ```

## Azure CLI Example – Assign Contributor Role

    ```bash title="Shell"
    az role assignment create --assignee <user-or-group-id> 
    --role "Contributor" 
    --scope "/subscriptions/<subscription-id>/resourceGroups/<rg-name>"
    ```

Additional Reading: [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)
