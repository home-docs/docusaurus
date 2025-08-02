# User Principal Name (UPN) Changes

The User Principal Name (UPN) is the primary sign-in identifier for users in Microsoft Entra ID. UPNs can be changed due to domain migrations, name corrections, or rebranding. These changes must be done carefully to ensure continued access to Microsoft 365 and Azure resources.

## Key Points

- **What is a UPN?**

  - Format: `username@domain.com`
  - Used for **sign-in**, **SSO**, and conditional access
  - Must be **unique across the tenant**
- **When to Change UPN**
  - User name correction (e.g., due to marriage or HR error)
  - Tenant domain update (e.g., `@contoso.com` > `@contoso365.com`)
  - Acquisition or domain branding
- **Change UPN via Portal**
  - Navigate to `Microsoft Entra ID > Users > Select user > Edit UPN`
  - Select a **verified domain** from the dropdown
  - Save changes (instantaneous for cloud-only accounts)
- **Change UPN via PowerShell (Microsoft Graph SDK)**

   ```powershell title="PowerShell"
   Update-MgUser -UserId "[user@oldcontoso.com](mailto:user@oldcontoso.com)" -UserPrincipalName "[user@newdomain.com](mailto:user@newdomain.com)"
   ```

- **Change UPN via Azure CLI**

   code
   az ad user update --id [user@oldcontoso.com](mailto:user@oldcontoso.com) --user-principal-name [user@newdomain.com](mailto:user@newdomain.com)
   code

- **Domain Requirements**
  - Target domain **must be verified** in Entra ID
  - Custom domain must be added and validated in **Microsoft 365 Admin Center** or `custom domain` blade
  - Cannot use unverified or federated domains without setup
- **Impact of UPN Changes**
  - Users must sign in with **new UPN** going forward
  - Sessions may remain active temporarily (until token expiration)
  - Apps (Outlook, Teams, etc.) may prompt for reauthentication
- **Hybrid Identity Scenarios**
  - If user is synced from on-prem AD, **change must happen on-prem**
  - The change will flow to Entra ID via **Azure AD Connect**
  - Do not manually change synced UPNs in the cloud
- **Auditing UPN Changes**
  - All updates are logged in **Audit Logs**
  - Filter for activity type: `Update user`
  - Use Log Analytics or Entra portal to view logs

:::note[Best Practices]

- Notify users ahead of time
- Plan changes outside working hours
- Update any hardcoded UPN references (scripts, apps, mail routing)

:::

Additional Reading: [Configure Microsoft 365 user account properties with PowerShell](https://learn.microsoft.com/en-us/microsoft-365/enterprise/configure-user-account-properties-with-microsoft-365-powershell?view=o365-worldwide#configure-microsoft-365-user-account-properties-with-microsoft-graph-powershell)
