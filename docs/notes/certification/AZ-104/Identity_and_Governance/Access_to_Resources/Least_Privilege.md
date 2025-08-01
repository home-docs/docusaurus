# Understand least privilege principle

The **principle of least privilege (PoLP)** ensures users, groups, and services have the **minimum level of access** required to perform their tasks no more, no less. In Azure, this principle is enforced using **Role-Based Access Control (RBAC)**. Following this principle improves security, reduces attack surface, and enforces compliance.

## Key Points

- **Definition**
  - Grant only the **minimum necessary permissions** to complete a task
  - Helps prevent **accidental changes**, **data leaks**, or **privilege escalation**
- **How It's Enforced in Azure**
  - Use **built-in roles** with the narrowest scope possible (e.g., Reader vs. Owner)
  - Avoid assigning **Owner** or **Contributor** broadly unless absolutely required
  - **Scopes** should match the task: Subscription > Resource Group > Resource
- **Scope Inheritance**
  - Role assignments at higher scopes (e.g., Subscription) **inherit downward**
    - Example: Assigning Contributor at subscription level gives access to all resource groups/resources within it
  - Prefer assigning roles at the **resource group or resource level**
- **Examples of Least Privilege in Action**
  - Assign **Reader** to auditors instead of Contributor
  - Assign **Virtual Machine Contributor** instead of full Contributor for VM admins
  - Use **Storage Blob Data Reader** for read-only access to blob data
- **Tools to Review Access**
  - **Access reviews**: in Microsoft Entra ID (P2 license required)
  - **Azure Advisor**: Recommends removing unused role assignments
  - **Azure Policy**: Can enforce RBAC scoping rules and deny overly broad access
- **Avoid Common Pitfalls**
  - Don’t assign **multiple roles** unless necessary (confusing overlap)
  - Don’t assign access to **Everyone**, **All Users**, or **All Authenticated Users**
  - Avoid using **Owner** role casually it includes **access management**
- **Use PIM for Elevated Roles**
  - Microsoft Entra **Privileged Identity Management (PIM)** lets you assign **just-in-time** access
  - Reduces standing privileged accounts (e.g., permanent Owners)

Additional Reading: [The principle of least privilege with Microsoft Entra ID Governance](https://learn.microsoft.com/en-us/entra/id-governance/scenarios/least-privileged)
