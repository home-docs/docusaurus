# Resolve licensing conflicts

Licensing conflicts in Microsoft Entra ID occur when a user cannot be assigned a license due to issues such as exceeding available quota, overlapping license sources, or conflicting service plan configurations. Proper handling ensures users receive the intended entitlements and helps maintain compliance and operational integrity.

## Key Points

- **Common Causes of Conflicts**
  - Insufficient available licenses (quota exceeded)
  - Disabled service plans due to policy restrictions or group-level config mismatch
  - Conflicting service assignments from multiple groups
  - User in both directly and group-assigned license paths with incompatible settings
- **How Conflicts are Detected**
  - Conflicts are automatically flagged in the **Licenses > Errors*- section in the Microsoft Entra admin portal
  - Affected users appear with a warning under the group’s license assignment view
  - License assignment status shows as **“Failed”**
- **Viewing Conflicts in the Portal**
  - Go to: `Microsoft Entra ID > Groups > Select Group > Licenses > Errors`
  - Click on a failed entry to view the error message and licensing breakdown
  - Filter users by license status: Active, Pending, or Error
- **Resolving Common Issues**
  - **Quota exceeded**: Purchase additional licenses or reallocate existing ones
  - **Service plan conflicts**: Ensure consistent enablement across groups
  - **Hybrid sync mismatch**: Avoid assigning cloud-only licenses to on-prem synced objects that don’t support it
  - Remove duplicate/incompatible license assignments

- **Using PowerShell to Investigate Conflicts**

  ```powershell title="PowerShell"
  Get-MgUserLicenseDetail -UserId user@contoso.com
  ```

- **Audit and Alerts**
  - Conflicts and errors are logged in **Audit Logs**
  - Use Microsoft Entra reports to export license state across the tenant
  - Use **Microsoft 365 Admin Center*- to cross-check available SKU capacity
- **Group License Conflict Resolution**
  - To resolve, you may need to:
    - Remove user from conflicting group
    - Edit the license assignment to remove problematic service plans
    - Convert to direct assignment if more granular control is needed

:::note[Best Practices to Avoid Conflicts]

- Use dedicated groups per license SKU
- Assign licenses to groups only after confirming capacity
- Disable unused services consistently across all license paths
- Regularly audit group memberships and license states

:::
Additional Reading: [Identify and resolve license assignment problems for a group in the Microsoft 365 Admin Portal](https://learn.microsoft.com/en-us/entra/fundamentals/licensing-groups-resolve-problems)
