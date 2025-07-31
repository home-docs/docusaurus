# User creation in Microsoft Entra portal, PowerShell, and CLI

Microsoft Entra (Azure AD) allows user accounts to be created via multiple interfaces including the portal, PowerShell, and Azure CLI. Each method provides flexibility in how user identities are provisioned and managed across cloud environments, especially in automation and scripting scenarios.

## Key Points

- **Portal Creation**
  - Navigate to **Microsoft Entra ID > Users > New user**
  - Options include creating a new user or inviting an external user (B2B)
  - Set username (UPN), name, password, roles, and groups during creation
- **PowerShell Creation**
  - Use `New-AzADUser` (Az module) or `New-AzureADUser` (AzureAD module)
  - Required params: `UserPrincipalName`, `DisplayName`, `PasswordProfile`
  - Example:

  ```powershell title="PowerShell"
  New-AzADUser -DisplayName "John Doe" -UserPrincipalName "johndoe@contoso.com" -AccountEnabled $true -PasswordProfile (New-Object -TypeName Microsoft.Open.AzureAD.Model.PasswordProfile -Property @{Password = "TempP@ssw0rd"})
  ```

- **Azure CLI Creation**
  - Use `az ad user create` command
  - Example:

  ```bash title="Shell"
  az ad user create --display-name "John Doe" --user-principal-name johndoe@contoso.com --password "TempP@ssw0rd" --force-change-password-next-login true
  ```

- **Password Policies**
  - Password must meet tenant’s complexity requirements
  - Default setting requires users to change password at first login
- **UPN Format**
  - Typically `<username>@<verifieddomain>`
  - Must be unique across the tenant
- **Role and Group Assignment**
  - Portal allows assigning roles like **User**, **Global Administrator**, etc., during creation
  - Can be automated using `Add-AzRoleAssignment` or `az role assignment create`
- **B2B Consideration**
  - External users are added using invitation (`az ad user invite`) or "Invite user" in portal
  - Automatically creates guest account with UPN suffix like `#EXT#@`
- **Licensing**
  - Users created are unlicensed by default
  - Licenses must be assigned separately via GUI or script (e.g., `Set-MsolUserLicense` or `az ad user license`)

Additional Reading: [How to create or delete users in Microsoft Entra ID - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-create-delete-users?toc=%2Fentra%2Fidentity%2Fusers%2Ftoc.json&bc=%2Fentra%2Fidentity%2Fusers%2Fbreadcrumb%2Ftoc.json)
