# Manage external user properties

External (B2B) users in Microsoft Entra ID have user objects similar to internal users but with a few key differences. Admins can view and manage properties such as display name, user principal name (UPN), roles, group memberships, and access assignments. While some fields are read-only, others can be modified for directory consistency and access control.

## Key Points

- **Where to View External User Properties**
  - Navigate to:
    `Microsoft Entra ID > Users > Filter by User Type: Guest > Select user`
- **Editable Properties**
  - Admins can update the following:
    - **Display name**
    - **Job title, department, company name**
    - **Usage location** (required for license assignment)
    - **Proxy addresses** (if needed for mail routing)
    - **Assigned roles and group memberships**
- **Non-Editable / Read-Only Fields**
  - **User principal name (UPN)** is generated automatically and typically cannot be changed for B2B users
  - UPN format:
    `email_domain.com#EXT#@yourtenant.onmicrosoft.com`
  - **Immutable ID** and external issuer ID are system-generated
- **PowerShell to Update Properties**

    ```powershell title="PowerShell"
    Update-MgUser -UserId guestuser@yourtenant.onmicrosoft.com `
                    -DisplayName "External Consultant" `
                    -Department "Finance" `
                    -JobTitle "Advisor"
    ```

- **Group and Role Assignments**
  - Guests can be added to:
    - **Security or M365 groups**
    - **Azure RBAC roles** (e.g., Reader on resource groups)
    - **Entra roles** (e.g., Guest Inviter, User Administrator – with caution)
- **Access Control & Conditional Access**
  - Guest users can be included in Conditional Access policies
  - Based on user attributes or group membership
- **Check Sign-in Activity**
  - Go to `Sign-in logs > User = guestuser@domain.com`
  - Shows resource access, IP address, location, and result status
- **Licensing for Guests**
  - Guests inherit access rights from groups or roles
  - Licensing is only required if the guest uses premium features (e.g., Entra P1, SharePoint, Teams)
- **Audit Logs**
  - Track changes made to guest user objects under `Audit Logs`
  - Filter for `"Update user"` or `"Add member to group"` activities

Additional Reading: [Understand and manage the properties of B2B guest users](https://learn.microsoft.com/en-us/entra/external-id/user-properties)
