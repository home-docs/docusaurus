# Role inheritance behavior

Azure RBAC follows a **top-down hierarchy** where roles assigned at a higher level are automatically **inherited** by child scopes. This allows centralized role management but also requires careful consideration to avoid over-permissioning. Understanding how inheritance flows is key to applying least privilege effectively.

## Key Points

- **Hierarchy of Scopes**
  - **Management group**
  - **Subscription**
  - **Resource group**
  - **Resource**

:::tip[Role Inheritance]
A role assigned at any level is inherited by all **levels below** it.
:::

- **Inheritance Example**
  - Assigning the **Reader** role at the **subscription** level means:
    - User can read all resource groups and all resources within them
  - Assigning **Contributor** at the **resource group** level allows management of **all resources in that group**, but not in others
- **Effective Permissions**
  - A user may receive **combined permissions** from:
    - Direct assignments
    - Inherited assignments
    - Group-based assignments (e.g., AAD group assigned a role)
  - **Least restrictive access wins** — there's no deny-by-default override for inherited roles
- **Break Inheritance?**
  - Azure RBAC **does not support "breaking" inheritance**
  - You **cannot deny** inherited permissions through RBAC (use **Azure Policy** or **Privileged Identity Management** for restrictions)
- **Best Practice: Assign at Lowest Possible Scope**
  - Always prefer the **most specific** scope required
  - Avoid assigning high-permission roles (e.g., Owner, Contributor) at the subscription or management group unless necessary
- **How to View Inherited Role Assignments (Azure Portal)**
  - Go to the resource > `Access control (IAM)` > `Check access`
  - Select the user and click **View effective permissions**
  - It shows the **source** of the role (inherited or direct)
- **PowerShell Example: View Effective Assignments**

  ```powershell title="PowerShell"
  Get-AzRoleAssignment -ObjectId <user-object-id>
  ```

- **CLI Example: View Role Assignments with Scope**

  ```bash title="Shell"
  az role assignment list 
    --assignee <user-id> 
    --include-inherited 
    --output table
  ```

- **Audit Inherited Access**
  - Azure does not flag inheritance explicitly in logs, but **scope paths** in audit entries can help trace origin
  - Use **Access reviews (Entra ID P2)** for recurring review of inherited permissions

Additional Reading: [Understand scope for Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview#inheritance)
