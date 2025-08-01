# Review SSPR audit logs

Audit logs for Self-Service Password Reset (SSPR) help you track and analyze password reset attempts in your organization. These logs provide visibility into user actions, outcomes (success/failure), and sources of reset activity—making them vital for troubleshooting, compliance, and security monitoring.

## Key Points

- **Where to Access SSPR Logs**
  - Go to:
    `Microsoft Entra ID > Monitoring > Audit Logs`
  - Or navigate via:
    `Entra ID > Password reset > Audit logs`
- **Common SSPR Audit Activities**
  - `Self-service password reset initiated`
  - `Self-service password reset completed`
  - `Self-service password reset failed`
  - `User registration for SSPR completed`
- **Audit Log Details Include**
  - **Initiated by**: User or system
  - **IP address** and **location** of the request
  - **Status**: Success or Failure
  - **Error details** if reset attempt fails
  - **Target user** affected by the action
- **Sign-In Logs for Deeper Insight**
  - Navigate to:
    `Microsoft Entra ID > Monitoring > Sign-in logs`
  - Filter for **"Password reset"** under Sign-in event type
  - Helps verify if password reset led to successful login
- **Filtering and Searching Logs**
  - Use filters like:
    - **Activity type** = “Reset password”
    - **Status** = Success / Failure
    - **Date range** or **user name**
- **Exporting Logs**
  - Logs can be exported to CSV or streamed to:
    - **Log Analytics**
    - **Event Hubs**
    - **Storage Accounts**
  - Enable via **Diagnostic Settings**
- **Retention Period**
  - Default retention:
    - 30 days (Basic tier)
    - Up to 90+ days with Log Analytics and extended retention
- **Use Cases**
  - Identify frequent SSPR failures (user training or config issues)
  - Investigate suspicious password reset activity
  - Prove audit compliance for identity operations

Additional Reading: [Reporting options for Microsoft Entra password management](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-sspr-reporting)
