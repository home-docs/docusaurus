# Group creation (Security and Microsoft 365)

Groups in Microsoft Entra ID (Azure AD) allow you to efficiently manage access to resources, apps, and services. You can create Security groups for access control and Microsoft 365 groups for collaboration. Groups can be created manually or dynamically via rules, using the portal, PowerShell, or Azure CLI.

## Key Points

- **Group Types**
  - **Security Group**: Used to assign permissions to users, apps, and resources (RBAC, app access, etc.)
  - **Microsoft 365 Group**: Includes mailbox, Teams, Planner, SharePoint — designed for collaboration
- **Portal Creation**
  - Go to **Entra ID > Groups > New Group**
  - Choose group type: _Security_ or _Microsoft 365_
  - Provide name, description, membership type (Assigned, Dynamic User, Dynamic Device)
- **Membership Types**
  - **Assigned**: Manual member management
  - **Dynamic**: Uses rules to auto-assign users or devices
  - Example:

    ```text title="Example Rule"
    (user.department -eq "Sales") and (user.jobTitle -eq "Manager")
    ```

- **PowerShell Group Creation**
  - Use **Microsoft Graph PowerShell SDK**
  - Required scopes: `Group.ReadWrite.All`
  - Command:

  ```powershell title="PowerShell"
  Connect-MgGraph -Scopes "Group.ReadWrite.All"
  New-MgGroup -DisplayName "SalesTeam" -MailEnabled:$false -SecurityEnabled:$true -MailNickname "salesteam" -GroupTypes @()
  ```

  - For a **Microsoft 365 Group**, use:

  ```powershell title="PowerShell"
  New-MgGroup -DisplayName "MarketingM365" -MailEnabled:$true -SecurityEnabled:$false -MailNickname "marketingm365" -GroupTypes @("Unified")
  ```

  :::tip
  Use `-GroupTypes @("DynamicMembership")` and include a `-MembershipRule` for dynamic groups
  :::

- **Azure CLI Group Creation**
  - Use `az ad group create`
  - Example:

  ```bash title="Shell"
  az ad group create --display-name "SalesTeam" --mail-nickname "salesteam"
  ```

- **Dynamic Membership Limitations**
  - Only available with **Azure AD Premium P1 and above** (including P2)
  - Evaluation occurs every few minutes; large rule sets may delay membership updates
- **Microsoft 365 Group Extras**
  - Creates associated resources: Exchange mailbox, Planner, Teams, etc.
  - Requires Exchange Online license for full functionality (**Microsoft 365 service plan that includes Exchange Online**)
- **Group Naming Rules**
  - Can configure naming policies via Azure AD (prefix, suffix, blocked words)
  - Enforced only in Microsoft 365 Groups (via Microsoft 365 compliance settings)
- **Nested Groups**
  - Supported in some scenarios (e.g., SharePoint), but **not supported** in all apps
  - Role-based access via nested groups may require testing for propagation
- **Administrative Units**
  - Groups can be scoped within **Administrative Units** for delegation
  - Useful for distributed IT environments

Additional Reading: [Learn about groups, group membership, and access - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups?toc=%2Fentra%2Fidentity%2Fusers%2Ftoc.json&bc=%2Fentra%2Fidentity%2Fusers%2Fbreadcrumb%2Ftoc.json)

## Microsoft 365 Licensing Mapping Table

| **Feature / Service**                     | **Microsoft 365 E3**      | **Microsoft 365 E5**    | **Microsoft Entra ID P1** | **Microsoft Entra ID P2**        | **Exchange Online Plan 1/2** |
| ----------------------------------------- | ------------------------- | ----------------------- | ------------------------- | -------------------------------- | ---------------------------- |
| Entra ID Basic (Free Tier)                | ✅                         | ✅                       | —                         | —                                | —                            |
| Microsoft Entra ID P1 features            | ✅ _(included)_            | ✅ _(included)_          | ✅                         | ✅                                | —                            |
| Microsoft Entra ID P2 features            | ❌                         | ✅ _(included)_          | ❌                         | ✅                                | —                            |
| Conditional Access                        | ✅                         | ✅                       | ✅                         | ✅                                | —                            |
| Dynamic Groups (User/Device)              | ✅                         | ✅                       | ✅                         | ✅                                | —                            |
| Group-based Licensing                     | ✅                         | ✅                       | ✅                         | ✅                                | —                            |
| Identity Protection                       | ❌                         | ✅                       | ❌                         | ✅                                | —                            |
| Access Reviews                            | ❌                         | ✅                       | ❌                         | ✅                                | —                            |
| Privileged Identity Management (PIM)      | ❌                         | ✅                       | ❌                         | ✅                                | —                            |
| Microsoft 365 Groups                      | ✅                         | ✅                       | —                         | —                                | ❌ _(no group collaboration)_ |
| Exchange Online Mailbox (for M365 Groups) | ✅ _(Plan 2)_              | ✅ _(Plan 2)_            | ❌                         | ❌                                | ✅ _(Plan 1/2 standalone)_    |
| Teams, Planner, SharePoint, etc.          | ✅                         | ✅                       | ❌                         | ❌                                | ❌                            |
| Self-Service Password Reset (SSPR)        | ✅ _(Cloud-only)_          | ✅                       | ✅ _(Cloud-only)_          | ✅ _(Hybrid + On-prem writeback)_ | —                            |
| MFA (Multi-Factor Auth)                   | ✅ _(Basic + Conditional)_ | ✅ _(Advanced policies)_ | ✅                         | ✅                                | —                            |
