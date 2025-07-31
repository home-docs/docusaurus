# Group expiration policies

Group expiration policies in Microsoft Entra ID help manage the lifecycle of Microsoft 365 groups by automatically deleting inactive groups after a defined period. Owners are notified before expiration and can renew the group if it's still in use. This helps reduce clutter and maintain a clean directory.

## Key Points

- **Scope of Expiration Policy**
  - Applies **only to Microsoft 365 groups**, not Security groups
  - Targeted via **Microsoft Entra ID → Groups → Expiration**
  - Affects associated resources like Teams, Planner, SharePoint
- **Configurable Settings**
  - **Expiration period**: Default is 180 days (can be changed)
  - **Auto-renewal**: Groups are auto-renewed when actively used
  - **Notification email**: Sent to group owners **30 days**, **15 days**, and **1 day** before expiration
- **Group Renewal**
  - Owners can renew via notification email or Microsoft 365 Groups UI
  - Admins can renew via portal or script
  - If not renewed, group is **soft-deleted**
- **Soft-Delete Behavior**
  - Group and resources are soft-deleted for **30 days**
  - Can be **restored by admin** within the retention period
  - After 30 days, group and data are **permanently deleted**
- **PowerShell Configuration (Graph SDK)**

   ```powershell title="PowerShell"
   Update-MgGroupLifecyclePolicy -GroupLifecyclePolicyId \$policyId -GroupLifetimeInDays 90
   ```

  - To create a new policy:

   ```powershell title="PowerShell"
   New-MgGroupLifecyclePolicy -GroupLifetimeInDays 180 -ManagedGroupTypes "All" -AlternateNotificationEmails "[admin@contoso.com](mailto:admin@contoso.com)"
   ```

- **Azure CLI Support**
  - Azure CLI currently does **not support lifecycle policy management** — use PowerShell or portal
- **Auto-Renewal Triggers**
  - Includes activity in Outlook, Teams, SharePoint
  - If users actively engage, group is automatically renewed (no owner action needed)
- **Alternate Notification Recipients**
  - Use the `AlternateNotificationEmails` parameter to send renewal notices to admins
  - Useful when group has no owner
- **Licensing Requirement**
  - Requires **Microsoft Entra ID P1 or above**
  - Feature available in **Microsoft 365 E3/E5** bundles
- **Monitoring & Reporting**
  - Audit logs track group renewals and deletions
  - You can list policies and impacted groups using PowerShell with `Get-MgGroupLifecyclePolicy`
