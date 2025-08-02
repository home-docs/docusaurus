# Resource, resource group, subscription, management group

Azure RBAC allows you to assign roles at **different hierarchical scopes**, from individual resources to entire management groups. Assigning roles at the appropriate scope helps enforce **least privilege**, ensures **delegated access**, and reduces risk across your environment.

## Key Points

- **Scope Hierarchy (Top to Bottom)**
  - **Management group**
  - **Subscription**
  - **Resource group**
  - **Resource**

:::tip[Permission Scopes]
Permissions assigned at a **higher scope** are inherited by all **child scopes**.
:::

- **Management Group Scope**
  - Apply policies and role assignments across **multiple subscriptions**
  - Useful for **governance at scale** in large enterprises
  - Requires **Management Group Contributor** or**Owner** role to assign at this level
- **Subscription Scope**
  - Role assigned at this level grants access to **all resource groups and resources** within the subscription
  - Common for subscription-level admin roles (e.g., billing, security)
- **Resource Group Scope**
  - Access limited to all resources **within a specific resource group**
  - Useful for delegating control to individual teams or apps
- **Resource Scope**
  - Most granular level
  - Assign access to a **specific VM, storage account, app service, etc.**
  - Ideal for isolated access (e.g., read-only for a single VM)
- **How to Assign Role at a Specific Scope (Portal)**
  - Navigate to the desired scope (resource, RG, subscription, etc.)
  - Go to: `Access control (IAM) > Role assignments > Add`
  - Select **Role**, **User/Group**, and confirm **Scope** matches desired level
- **PowerShell Example – Assign Reader at Resource Group Scope**

  ```powershell title="PowerShell"
  New-AzRoleAssignment -ObjectId "<user-object-id>" -RoleDefinitionName "Reader" -Scope "/subscriptions/<sub-id>/resourceGroups/<rg-name>"
  ```

- **Azure CLI Example – Assign Owner at Subscription Scope**

  ```bash title="Shell"
  az role assignment create --assignee <user-id> --role "Owner" --scope "/subscriptions/<subscription-id>"
  ```

- **Use AssignableScopes in Custom Roles**
  - When creating custom roles, define where they can be assigned via `AssignableScopes`
  - Example: Restrict a role to a single resource group
- **Best Practices**
  - **Prefer lower scopes** for granular control
  - Avoid assigning high-privilege roles (e.g., Owner) at subscription or management group unless needed
  - Use **naming conventions** and tagging to track scoped assignments

Additional Reading: [Understand scope for Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview)
