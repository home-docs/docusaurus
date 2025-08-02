# Review role assignments in portal

Reviewing role assignments in the Azure portal helps you understand who has access to what resources, which roles they hold, and at what scope. This is crucial for security audits, enforcing least privilege, and identifying over-permissioned accounts.

## Key Points

- **Where to Start**

  - Navigate to the **scope level**:
    - Subscription / Resource Group / Resource
  - Go to `Access control (IAM)` > `Role assignments`
- **Role Assignments Tab**
  - Shows all **users, groups, service principals**, and **managed identities** assigned roles
  - Columns include:
    - **Name** – principal (user/group/service principal)
    - **Role** – assigned role (Reader, Contributor, etc.)
    - **Scope** – where the role applies
    - **Condition** (if any) – role assignment conditions
    - **Type** – User, Group, ServicePrincipal, etc.
- **Filter and Search**
  - Filter by:
    - **Role Name**
    - **Principal Type**
    - **Scope**
    - Use the **Search bar** for usernames or group names
- **“Check Access” Tool**
  - Located under `Access control (IAM)`
  - Select a **user, group, or service principal**
  - View their **effective permissions** at the selected scope
  - Also shows **inherited assignments**
- **View Role Assignment Details**
  - Click on any entry in the **Role assignments** tab
  - View metadata like:
    - Assignment source (e.g., manual, group-based)
    - Role ID and assignment ID
    - Creation timestamp
- **Identify Inheritance**
  - Assignments show as **“Inherited”** when applied from a parent scope
  - Example: Contributor role inherited from subscription > visible at resource group level
- **Use Cases**
  - Security audits: Validate who has access
  - Troubleshooting: Confirm a user has expected permissions
  - Governance: Detect over-permissioned roles or unnecessary assignments
- **Limitations**
  - Does not show **data plane** (e.g., blob access via SAS or ACLs)
  - For full insight, combine with:
    - **Sign-in logs** (what user accessed)
    - **Audit logs** (when role was assigned/removed)

Additional Reading:
[Assign Azure roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
