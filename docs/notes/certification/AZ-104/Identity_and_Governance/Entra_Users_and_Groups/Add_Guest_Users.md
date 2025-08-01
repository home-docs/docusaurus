# Add B2B guest users

Business-to-Business (B2B) collaboration in Microsoft Entra ID enables you to invite external users (guests) into your tenant. These users can access shared apps and resources securely, using their own credentials. Guests are added through invitation flows and can be managed like regular users with limited permissions.

## Key Points

- **Ways to Add B2B Guest Users**
  - **Portal**:
    - Navigate to `Microsoft Entra ID > Users > + New guest user`
    - Provide guest’s email address and optional personal message
  - **Bulk invite via CSV**: Use `Bulk operations > Bulk invite` for large sets
  - **PowerShell**:

        ```powershell title="PowerShell"
        New-MgInvitation -InvitedUserEmailAddress "user@externaldomain.com" `
                        -InviteRedirectUrl "https://myapps.microsoft.com" `
                        -SendInvitationMessage $true
        ```

- **User Principal Name Format**
  - After acceptance, the guest UPN looks like:
    `user_externaldomain.com#EXT#@yourtenant.onmicrosoft.com`
- **Invitation Status and Lifecycle**
  - Invited users must **accept the invitation*- to become active
  - You can track status under `Users > All users > User type = Guest`
  - Admins can resend, revoke, or re-invite from the user blade
- **Access Management**
  - Guests can be assigned to:
    - **Groups**
    - **Apps (Enterprise Apps)**
    - **Azure RBAC roles (limited to supported scopes)**
  - **Conditional Access*- and**PIM*- can be extended to guests
- **Default Permissions**
  - Guests have **limited access by default**
  - Controlled via **External collaboration settings*- under `Microsoft Entra > Users > External users > External collaboration settings`
- **Cross-Tenant Access Settings (Optional)**
  - Allows defining trust and access policies for users from specific external organizations
  - Can enforce **MFA**, **device compliance**, or **blocking*- per tenant
- **Licensing Considerations**
  - Guests may consume licenses **only*- if assigned (e.g., M365 E3/E5)
  - Microsoft Entra allows up to **5 guest users per licensed user for free*- (P1/P2 only)
- **Audit and Monitoring**
  - Guest invitations and sign-ins are logged in **Audit Logs*- and **Sign-in logs**
  - Look for events like `"Invite external user"` or `"Sign-in succeeded"`

Additional Reading: [Overview: B2B collaboration with external guests for your workforce](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b)
