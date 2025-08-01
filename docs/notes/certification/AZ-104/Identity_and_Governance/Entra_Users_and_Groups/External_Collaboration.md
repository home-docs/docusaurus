# External collaboration settings

External collaboration settings define how external (B2B) users interact with your Microsoft Entra tenant. These settings help secure guest access by controlling invitation permissions, domain restrictions, collaboration features, and authentication requirements. They’re essential for protecting resources while enabling external partnerships.

## Key Points

- **Where to Configure**
  - Navigate to:
    `Microsoft Entra ID > Users > External users > External collaboration settings`
- **Control Who Can Invite Guests**
  - Options include:
    - **Anyone in the organization**
    - **Admins and users in Guest Inviter role**
    - **Admins only**
    - **No one** (completely disables B2B invites)
- **Guest User Access Restrictions**
  - You can restrict guest access to directory data by selecting:
    - **Most restrictive** (recommended)
    - **Limited access** (view non-hidden groups only)
    - **Same access as members** (not recommended unless explicitly needed)
- **Restrict Email Domains**
  - Allow or block specific external domains for guest invitations
  - Useful for enforcing partnership whitelists or blocking personal domains (e.g., `gmail.com`)
- **Default User Role Permissions**
  - By default, all users can invite guests unless the **Guest Inviter** role is removed
  - Use **Administrative Units** or role-based access to delegate securely
- **One-Time Passcode (OTP)**
  - When guests use personal accounts or don’t have a Microsoft identity, OTP can be used to authenticate
  - Must be enabled under `Authentication methods > Email one-time passcode`
- **Enable/Disable Guest Self-Service Sign-up**
  - Supports self-service access workflows using **External Identities > User flows**
  - Useful for apps that support Just-in-Time (JIT) guest provisioning
- **Cross-Tenant Access Settings**
  - Found under: `Microsoft Entra ID > External Identities > Cross-tenant access settings`
  - Fine-tune inbound and outbound B2B policies for specific partner tenants
  - Supports trust settings like **MFA trust**, **device compliance**, **B2B direct connect**
- **Audit and Monitoring**
  - All guest invites, access, and policy changes are logged in **Audit Logs**
  - Use filters like `"Invite external user"` or `"Update collaboration settings"`

Additional Reading: [Configure external collaboration settings for B2B in Microsoft Entra External ID](https://learn.microsoft.com/en-us/entra/external-id/external-collaboration-settings-configure)
