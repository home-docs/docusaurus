# Customize notifications and branding

Microsoft Entra ID allows you to customize the Self-Service Password Reset (SSPR) experience by enabling user notifications and applying organization-specific branding. These enhancements improve usability and provide visual consistency while helping users recognize legitimate reset pages.

## Key Points

- **SSPR Notification Options**
  - Navigate to:
    `Microsoft Entra ID > Password reset > Notifications`
  - **Notify users on password reset**
    - Sends email notification to the user when their password is reset using SSPR
    - Helps detect unauthorized resets
  - **Notify all admins when other admins reset passwords**
    - Sends email alerts to all global administrators
    - Enhances administrative transparency
- **Notification Emails**
  - Sent from **Microsoft no-reply service**
  - Includes timestamp and initiator details (when available)
  - Cannot be customized (email content is fixed)
- **Branding the SSPR Experience**
  - Navigate to:
    `Microsoft Entra ID > Company branding`
  - Apply branding that appears on:
    - SSPR portal
    - Sign-in page
    - Password reset screens
- **Branding Options Include**
  - Company logo (PNG, up to 300 × 60 px)
  - Background color or image
  - Sign-in page text (e.g., password policy reminder)
  - Custom footer links (e.g., support or helpdesk contact)
- **Best Practices**
  - Use branding to help users recognize legitimate Microsoft pages
  - Include support links or password policy info to reduce IT helpdesk calls
  - Enable both user and admin notifications to maintain audit readiness
- **Licensing Requirements**
  - Company branding requires **Microsoft Entra ID P1 or above**
  - Notifications are available in **all supported SSPR configurations**

Additional Reading: [Customize the user experience for Microsoft Entra self-service password reset](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-sspr-customization)
