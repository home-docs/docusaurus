# Configure group-based licensing

Group-based licensing allows you to assign product licenses to a group, automatically applying those licenses to all its members. This simplifies license management by automating license provisioning and deprovisioning as users join or leave the group. It supports assigning specific service plans and can be monitored via Entra ID’s licensing UI or Graph API.

## Key Points

- **Supported Group Types**
  - Only **Security groups** and **Microsoft 365 groups** are supported
  - **Mail-enabled Security groups** and **Distribution Lists** are **not supported**
- **Enable Group-Based Licensing in Portal**
  - Go to: `Microsoft Entra ID > Groups > Select Group > Licenses`
  - Click **+ Assignments** to choose a license SKU
  - You can **enable/disable individual service plans** (e.g., Exchange, Teams)
- **Propagation and Inheritance**
  - All **current and future group members** receive the assigned license
  - License assignment is shown as **"Inherited (Group)"** on the user object
  - Propagation may take a few minutes (delayed sync for large groups)
- **Manage via PowerShell (Microsoft Graph SDK)**
    :::warning
    Only **Beta endpoint** supports full group license assignment via PowerShell
    :::

    ```powershell title="PowerShell"
    Connect-MgGraph -Scopes "Group.ReadWrite.All"
    $skuId = (Get-MgSubscribedSku | Where-Object { $_.SkuPartNumber -eq "ENTERPRISEPACK" }).SkuId

    New-MgGroupLicense -GroupId <GroupObjectId> -AddLicenses @{ SkuId = $skuId } -RemoveLicenses @()
    ```

- **CLI Support (Limited)**
  - Azure CLI does not currently support direct group-based license assignment
  - Use portal or PowerShell for full functionality
- **Error Handling and Conflict Resolution**
  - Errors (e.g., not enough available licenses) are shown in group license pane
  - Admins can view license assignment failures in **Microsoft Entra > Licenses > Troubleshoot**
- **License Overrides**
  - You can assign the same license to a user via multiple groups
  - Microsoft Entra merges the licenses without duplicating service plans
  - Direct assignment **overrides** inherited settings (cannot modify inherited settings directly)
- **Best Practices**
  - Create **dedicated groups per license SKU** (e.g., “M365-E3-Users”)
  - Avoid mixing users with differing license needs in the same group
  - Automate group membership using **dynamic membership rules**
- **Monitoring and Audit Logs**
  - All license events are tracked in **Audit Logs**
  - Use `Get-MgUserLicenseDetail` to validate user license sources
  - Portal shows license state as **"Active (inherited from group)"** or **"Failed"**
- **Licensing Requirement**
  - Group-based licensing requires **Microsoft Entra ID P1 or above**
  - Included in **Microsoft 365 E3 and E5** plans

Additional Reading: [What is group-based licensing in Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/fundamentals/concept-group-based-licensing)
