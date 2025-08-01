# Configure invitation settings

Invitation settings in Microsoft Entra ID control how guest users (B2B users) are invited to your tenant. These settings determine who can send invitations, how invitations are handled, and whether guests need to accept terms of use or meet specific security conditions. Proper configuration ensures secure and compliant collaboration.

## Key Points

- **Where to Configure**
  - Navigate to:
    `Microsoft Entra ID > Users > External users > External collaboration settings`
- **Key Invitation Options**
  - **Guest invite settings**:
    - Anyone in the organization can invite guests
    - Only admins and users in specific roles can invite
    - Only admins can invite
    - No one can invite (disables B2B)
- **Default User Role Permissions**
  - By default, all users have the **"Guest Inviter"** role
  - You can remove this from the **User settings > User role permissions**
- **Customized Invitation Message**
  - You can customize the invitation message sent to guests
  - Branding can also be applied via **Company branding*- settings
- **Terms of Use and Just-in-Time Access**
  - Configure **Terms of Use** that guests must accept upon first sign-in
  - Integrate with **Access Reviews** and **PIM** for conditional onboarding
- **Domain Restrictions**
  - Allow or block specific email domains from receiving invitations
  - Example: block `gmail.com`, allow `partnercompany.com`
- **Enable One-Time Passcode (OTP)**
  - For guests without Azure/Microsoft accounts, OTP allows them to authenticate via email
  - Controlled under `Authentication methods > Email one-time passcode`
- **Cross-Tenant Access Settings**
  - Optional settings that define **inbound/outbound rules** for specific tenants
  - Controls include MFA, compliance requirements, and trust settings
- **Audit Logs and Monitoring**
  - All invitation events are logged in **Audit Logs**
  - Track activity like `Invite external user`, `Update collaboration settings`, etc.

Additional Reading: [Configure external collaboration settings for B2B in Microsoft Entra External ID](https://learn.microsoft.com/en-us/entra/external-id/external-collaboration-settings-configure)
