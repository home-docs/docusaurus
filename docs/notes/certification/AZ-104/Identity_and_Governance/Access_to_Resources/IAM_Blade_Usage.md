# Use Access Control (IAM) blade

The **Access Control (IAM)** blade in the Azure portal is the central interface for managing and interpreting **Azure RBAC role assignments**. It allows administrators to assign roles, check access, view effective permissions, and audit who has what level of access at various scopes.

## Key Points

- **How to Access IAM Blade**
  - Open the Azure Portal > Navigate to the target:
    - **Subscription**, **Resource Group**, or **Resource**
  - Click **Access control (IAM)** in the left-side menu
- **Tabs in IAM Blade**
  - **Overview** – Summary of access control capabilities
  - **Role assignments** – View all role assignments at the current scope
  - **Check access** – Analyze access for a specific user, group, or service principal
  - **Roles** – View all roles assignable at this scope (built-in and custom)
  - **Deny assignments** (if using Azure Blueprints or custom policies)
  - **Classic administrators** – Legacy access (deprecated for most services)
- **Role Assignments Tab**
  - Lists all **users, groups, service principals, and managed identities**
  - Includes:
    - **Role**
    - **Scope**
    - **Assignment type** (direct or inherited)
    - **Principal type**
- **Check Access Tab**
  - Lets you search for any principal (user, group, identity)
  - Displays:
    - **All roles assigned**
    - **Effective permissions**
    - **Where the role was assigned (scope + source)**
- **Role Assignment Actions**
  - Use **+ Add > Add role assignment** to grant roles
  - Select:
    - **Role name**
    - **Assign access to**: User, group, service principal, or managed identity
    - **Select** the specific principal
    - Confirm scope and click **Save**
- **Audit and Review**
  - Use the IAM blade to check for:
    - **Over-permissioned identities**
    - **Misplaced role assignments**
    - **Inheritance from higher scopes**
  - Combine with **Activity Logs** for full visibility
- **Limitations**
  - IAM blade reflects only **control plane RBAC**
  - **Data plane** (e.g., blob access, Key Vault secrets) requires separate inspection

Additional Reading: [Assign Azure roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
