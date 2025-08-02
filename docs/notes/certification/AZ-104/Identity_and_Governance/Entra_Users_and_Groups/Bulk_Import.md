# Bulk user import via CSV

Microsoft Entra ID allows you to create multiple users simultaneously using a CSV file upload through the portal. This method is ideal for bulk provisioning scenarios and supports required and optional user properties. It is limited to cloud-only accounts and does not support guest users via this method.

## Key Points

- **Supported via Microsoft Entra Portal**
  - Navigate to: `Entra ID > Users > Bulk create > Download CSV template`
  - Choose "Bulk operations" for **Create**, **Invite**, **Delete**, or **Update**
- **CSV Format Requirements**
  - Required columns: `UserPrincipalName`, `DisplayName`, `InitialPassword`
  - Optional columns: `JobTitle`, `Department`, `UsageLocation`, etc.
  - Example CSV:

    ``` csv
    UserPrincipalName,DisplayName,InitialPassword,JobTitle 
    alice@contoso.com,Alice Smith,TempP@ss123,HR Manager 
    bob@contoso.com,Bob Ray,TempP@ss456,IT Analyst 
    ```

- **Constraints**
  - Max file size: ~1 MB
  - Max rows: ~5,000 users per upload
  - Cannot bulk import **guest (external)** users from the Create UI — use Invite flow separately
- **Validation & Errors**
  - Portal runs CSV validation before upload
  - Errors are shown inline or downloadable as a CSV error log
  - Invalid entries do **not stop** valid ones from being created
- **Post-Creation Behavior**
  - Users are created in **enabled state** with **temporary password**
  - Enforced password reset on first login unless configured otherwise
  - Users are unlicensed by default
- **Automation Alternative**
  - You can script bulk creation using PowerShell (`Import-Csv` + `New-MgUser`)
  - Ideal for customizing attributes or integrating with HR systems
- **Audit and Monitoring**
  - Bulk operations are logged in **Audit logs** in Microsoft Entra ID
  - Use filters like `Activity: Add user` for investigation

:::note[Best Practices]

- Validate UPN domain suffix (must be verified domain)
- Predefine roles or group assignments in a follow-up step
- Sanitize and normalize data before upload (no spaces in UPN, email format)

:::

Additional Reading: [Bulk create users in the Azure portal - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/users/users-bulk-add)
