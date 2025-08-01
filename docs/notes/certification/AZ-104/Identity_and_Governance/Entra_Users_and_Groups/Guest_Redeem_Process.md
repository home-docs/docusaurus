# Redeem invitation process

The invitation redemption process defines how an external (B2B) user accepts an invitation to join your Microsoft Entra tenant. The process ensures that users authenticate through their identity provider, accept any terms of use, and are granted access only after validation and acceptance of the invitation.

## Key Points

- **Invitation Delivery**
  - Guests receive an email invitation to join your organization
  - The link in the email is valid for one-time use and expires after **90 days**
  - The invitation can be **resent manually** if needed
- **Redemption Options**
  - **Microsoft Account (MSA)** or **Azure AD account** users sign in using existing credentials
  - **Social ID or unmanaged Azure AD accounts** may be prompted to create a new password
  - **One-Time Passcode (OTP)** flow is used for users without Microsoft identities (if enabled)
- **Redemption Flow Steps**
  - Click invite link → Sign in with identity → Accept permissions (if required) → Complete MFA or OTP → Redirect to resource or portal
- **Terms of Use (If Configured)**
  - Guests are prompted to read and accept **Terms of Use** before completing sign-in
  - This is enforced at the time of **first login only**
- **Consent Prompt**
  - First-time access may ask the user to **consent to permissions** (based on enterprise app settings)
  - Admins can **pre-consent** on behalf of the organization to bypass this step
- **Post-Redemption Status**
  - Once accepted, the guest is listed in `Entra ID > Users` with `UserType = Guest`
  - The user object is active and can be assigned licenses, roles, or added to groups
- **Troubleshooting Redemption Issues**
  - Common issues: expired link, invalid identity provider, or invite sent to wrong email
  - You can **resend** or**revoke** the invitation from the portal
  - All redemption attempts are logged in **Audit Logs**
- **Security Controls**
  - Enforced by **Conditional Access**, **MFA**, and **Cross-tenant Access Settings**
  - You can block guest access based on compliance, location, or sign-in risk

Additional Reading: [B2B collaboration invitation redemption](https://learn.microsoft.com/en-us/entra/external-id/redemption-experience)
