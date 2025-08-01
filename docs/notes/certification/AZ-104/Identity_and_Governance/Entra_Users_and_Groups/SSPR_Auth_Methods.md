# Configure authentication methods

To use Self-Service Password Reset (SSPR), users must register at least one approved authentication method. Admins can configure which methods are allowed and how many are required to perform a password reset. This setup balances user convenience with security by enforcing method diversity.

## Key Points

- **Where to Configure Authentication Methods**
  - Navigate to:
    `Microsoft Entra ID > Password reset > Authentication methods`
- **Configurable Options for SSPR**
  - **Mobile app notification**
  - **Mobile app code**
  - **Email** (non-Azure email)
  - **Mobile phone (SMS/call)**
  - **Office phone**
  - **Security questions** (not recommended for high-security environments)
- **Authentication Requirements**
  - You can set the number of required methods for:
    - **Resetting a password** (1 or 2 methods)
    - **Registering for SSPR** (configurable based on policy)
- **Registration Enforcement**
  - Users are prompted to register methods at first login or via: [`https://aka.ms/ssprsetup`](https://aka.ms/ssprsetup)
- **Security Questions (Optional)**
  - You can enable/disable
  - Must define:
    - Number of questions shown
    - Number of correct answers required
    - Allowed custom or predefined questions
- **Best Practice**
  - Require at least **2 different methods** for password reset
  - Disable security questions in favor of MFA/phone for stronger security
- **User Experience**
  - Users must verify all methods during registration
  - If method is unavailable during reset (e.g., no phone access), fallback to second method is enforced
- **Monitoring Registration**
  - Go to:
    `Password reset > Registration`
  - View users who are:
    - Registered
    - Capable (eligible but not registered)
    - Not registered
- **PowerShell for Registration Review**
  - SSPR registration details are not exposed directly via PowerShell
  - Use Microsoft Graph API or Azure portal for reporting

Additional Reading: [Manage authentication methods for Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods-manage)
