# Enable/disable SSPR for users or groups

Self-Service Password Reset (SSPR) allows users to reset their own Entra ID (Azure AD) passwords without administrator intervention. You can enable or disable SSPR for **all users**, **none**, or **selected groups** to control access to this capability. This helps reduce helpdesk workload and improve user experience.

## Key Points

- **Where to Configure SSPR Settings**
  - Go to:
    `Microsoft Entra ID > Password reset > Properties`
- **SSPR Scope Options**
  - **None**: SSPR is disabled
  - **Selected**: Enable SSPR for specific groups (Security or Microsoft 365 groups)
  - **All**: Enables SSPR for all users in the tenant
- **Best Practice: Test with Pilot Group**
  - Use **Selected** option and assign SSPR to a test group before rolling out to the org
  - Ensure users in the group are informed and registered with their recovery methods
- **Group Types Supported**
  - Supports **Security groups** and **Microsoft 365 groups**
  - Nested groups are **not supported** for SSPR scoping
- **User Registration Requirements**
  - Users must register **authentication methods** (e.g., mobile number, alternate email)
  - Prompted on first login or can be pre-configured by admin
- **Monitor Registration Status**
  - View registration state under `Entra ID > Password reset > Registration`
  - Filter users by Registered, Not Registered, or Capable (but not yet registered)
- **PowerShell to Add Users to SSPR Group**

    ```powershell title="PowerShell"
    Add-MgGroupMember -GroupId <GroupId> -DirectoryObjectId <UserObjectId>
    ```

- **Audit and Logging**
  - All SSPR attempts and changes are recorded in **Audit Logs**
  - Sign-in logs will also show password reset attempts with status (Success/Failure)

Additional Reading: [How it works: Microsoft Entra self-service password reset](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks)
