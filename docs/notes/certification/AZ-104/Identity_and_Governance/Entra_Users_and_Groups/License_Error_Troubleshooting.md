# View and interpret license assignment errors

License assignment errors in Microsoft Entra ID typically occur when a user can't receive a license due to capacity issues, conflicting service plans, directory sync problems, or misconfiguration. Admins can diagnose these errors using the portal, audit logs, or Microsoft Graph PowerShell to ensure compliance and proper entitlements.

## Key Points

- **Where to View Errors in the Portal**
  - Go to: `Microsoft Entra ID > Licenses > All products > Select Product > Licensed Users > Errors`
  - Or, navigate via: `Groups > Select Group > Licenses > Errors`
  - You can see users with failed license states and view error details per user
- **Common Error Messages**
  - *“License limit exceeded”- – Not enough licenses available in the SKU
  - *“Conflict between service plans”- – Service plans clash between license sources
  - *“User not found”- – Directory object mismatch or deletion
  - *“User is not in a supported licensing location”- – `UsageLocation` is missing or invalid
- **CLI / PowerShell to Investigate**

  ```powershell title="PowerShell"
  Get-MgUserLicenseDetail -UserId user@contoso.com
  ```

- **Using Graph to Retrieve Errors**
  - Use the Graph API `/auditLogs/directoryAudits` to view license operation logs
  - Filter by activity: `"Add user license"` and `"License assignment failed"`
- **Checking Group-Based Assignment Errors**
  - Errors are shown in the group under **Licenses > Errors**
  - Users in multiple licensed groups may have overlapping conflicts
  - Each failed entry includes a status message and timestamp
- **Troubleshooting Steps**
  - Validate that the tenant has available licenses
  - Ensure consistent service plan enablement across groups
  - Confirm `UsageLocation` is set (required for license enforcement)
  - Remove overlapping or conflicting license paths
  - Reprocess group membership if needed
- **Auditing and Reporting**
  - Use Microsoft Entra's **Audit Logs*- to track assignment events
  - License errors can be exported and reviewed with Excel or Power BI for batch analysis

:::note[Best Practices]

- Assign licenses via dedicated groups (one SKU per group)
- Keep service plan selections consistent
- Monitor license utilization regularly
- Use `AlternateNotificationEmails` for admin alerts if group owners aren't available

:::

Additional Reading: [Identify and resolve license assignment problems for a group in the Microsoft 365 Admin Portal](https://learn.microsoft.com/en-us/entra/fundamentals/licensing-groups-resolve-problems)
