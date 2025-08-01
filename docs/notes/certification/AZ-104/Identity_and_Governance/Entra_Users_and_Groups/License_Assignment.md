# Assign product licenses to users and groups

Microsoft Entra ID allows licenses to be assigned directly to users or through group-based licensing. Group-based license assignment simplifies management by automatically applying or removing licenses based on group membership. Only products available in your tenant and for which you have available seats can be assigned.

## Key Points

- **License Assignment Methods**
  - **Direct assignment** to individual users
  - **Group-based assignment** using Security or Microsoft 365 groups
  - **Recommended** approach: use group-based licensing for scalability and consistency
- **Portal-Based Assignment to Users**
  - Go to: `Microsoft Entra ID > Users > Select user > Licenses`
  - Click **+ Assignments** to select products and service plans
  - Option to enable/disable specific services within the product (e.g., Exchange, Teams)
- **Portal-Based Assignment to Groups**
  - Go to: `Microsoft Entra ID > Groups > Select group > Licenses`
  - Click **+ Assignments**, choose products, and save
  - All members of the group will inherit licenses automatically
- **PowerShell License Assignment (User)**
  - Requires Microsoft Graph PowerShell SDK

    ```powershell title="PowerShell"
    $skuId = (Get-MgSubscribedSku | Where-Object { $_.SkuPartNumber -eq "ENTERPRISEPACK" }).SkuId
    Add-MgUserLicense -UserId "jane.doe@contoso.com" -AddLicenses @{SkuId = $skuId} -RemoveLicenses @()
    ```

- **PowerShell License Assignment (Group)**
  - Assigning licenses to a group requires Graph Beta API
  - Recommended to configure via portal or programmatically using Microsoft Graph REST API
- **Azure CLI User License Assignment**

    ```bash title="Shell"
    az ad user license assign --user-id jane.doe@contoso.com --sku-id <SKU_ID>
    ```

- **License Propagation**
  - Group-based assignments take a few minutes to apply
  - If a user is added/removed from the group, licenses are auto-applied or revoked
  - View license assignment source as **"Inherited (Group)"** or **"Direct"**
- **License Conflicts and Overrides**
  - Users can have both direct and inherited licenses
  - Inherited licenses **cannot be edited** directly; must modify group or remove inheritance
  - Conflicts may occur if total license quota is exceeded
- **License Reporting and Monitoring**
  - Use `Microsoft Entra > Licenses > All products` to view consumption and available seats
  - Audit logs show when licenses are added/removed
  - Use `Get-MgUserLicenseDetail` to view active licenses for a user
- **Licensing Prerequisites**
  - Group-based licensing requires **Microsoft Entra ID P1 or above**
  - Ensure the group is a **Security** or **Microsoft 365 group**, not a mail-enabled distribution list
