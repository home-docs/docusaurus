# Modify user details (profile, job info, contact info)

## Key Points

- **Editable Fields in Portal**
  - Fields you can update include:
    - **Display name**
    - **First name / Last name**
    - **Job title**
    - **Department**
    - **Office location**
    - **Phone numbers**
    - **Usage location**
    - **Country/region**
- **Where to Edit**
  - Navigate to:  
  `Microsoft Entra ID > Users > Select user > Profile`
  - Click **Edit properties** to update details
- **PowerShell Modification (Microsoft Graph)**
  - Use `Update-MgUser` to modify attributes
  - Example:

    ```powershell title="PowerShell"
    Update-MgUser -UserId johndoe@contoso.com -JobTitle "Marketing Manager" -Department "Marketing"
    ```

- **CLI Modification**
  - Use `az ad user update`
  - Example:

    ```bash title="Shell"
    az ad user update --id johndoe@contoso.com --department "Marketing" --job-title "Manager"  
    ```

- **Attribute Usage**
  - Values like **department**, **job title**, and **location** are commonly used in:
    - **Dynamic group membership rules**
    - **Conditional Access policies**
    - **App claims mapping**
    - **People search in Microsoft 365**
- **Usage Location**
  - Required for **license assignment**
  - Should be set using ISO 2-letter country code (e.g., `US`, `IN`)
  - Example:

    ```powershell title="PowerShell"
    Update-MgUser -UserId johndoe@contoso.com -UsageLocation "US"
    ```

- **Directory Schema Limitations**
  - Some attributes (e.g., `extensionAttribute1-15`) are not shown in portal UI
  - Editable via PowerShell or Graph API only
- **Audit Trail**
  - All changes are logged in **Audit Logs**
  - Go to: `Microsoft Entra ID > Audit Logs`, filter by "Update user" activity

Additional Reading: [How to manage user profile information in the Microsoft Entra admin center - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-user-profile-info?toc=%2Fentra%2Fidentity%2Fusers%2Ftoc.json&bc=%2Fentra%2Fidentity%2Fusers%2Fbreadcrumb%2Ftoc.json)
