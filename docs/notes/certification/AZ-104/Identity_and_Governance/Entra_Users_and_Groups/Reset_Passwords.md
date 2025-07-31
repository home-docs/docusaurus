# Reset user passwords

Admins can reset passwords for users directly from the Microsoft Entra admin center, PowerShell, or Azure CLI. This is typically required for account recovery or onboarding. Users can also reset their own passwords via self-service password reset (SSPR) if enabled.

## Key Points

- **Reset via Portal (Admin)**
  - Navigate to: Entra ID > Users > Select user > Reset password
  - Generates a temporary password
  - User must change password at next sign-in by default
- **PowerShell Reset (Graph)**
  - Requires `UserAuthenticationMethod.ReadWrite.All` scope
  - Example:

    ```powershell title="PowerShell"
    Update-MgUserPassword -UserId johndoe@contoso.com -PasswordProfile @{ForceChangePasswordNextSignIn = $true Password = "TempP@ssw0rd!"}
    ```

- **Azure CLI Reset**
  - Use `az ad user update` (limited functionality)
  - CLI cannot directly reset passwords; use PowerShell or Portal instead
- **Temporary Password Rules**
  - Must meet the tenant’s password complexity requirements
  - Should not be reused from previous passwords (based on policy)
- **Self-Service Password Reset (SSPR)**
  - If enabled, users can reset their own passwords via: [https://aka.ms/sspr]
  - Requires registration of authentication methods (e.g., phone, email)
- **Hybrid Identity Consideration**
  - For **hybrid users** (synced from on-prem AD), reset must be done **on-premises** or via **password writeback**
  - Password writeback requires:
    - **Microsoft Entra Connect**
    - **Entra ID P1** or **P2**
    - Password Writeback enabled in Sync configuration
- **Audit Logging**
  - Password reset actions are recorded in Audit Logs
  - Filter by activity: "Reset user password"
- **Permissions Required**
  - Global Administrator, User Administrator, or Privileged Authentication Administrator can reset passwords
  - Delegated rights via **Administrative Units** also supported

Additional Reading: [Reset Password](https://learn.microsoft.com/en-us/entra/fundamentals/users-reset-password-azure-portal#to-reset-a-password)
