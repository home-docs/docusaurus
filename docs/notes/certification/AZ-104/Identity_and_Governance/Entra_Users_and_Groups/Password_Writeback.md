# Password writeback for hybrid users

Password writeback enables users in hybrid environments (on-premises Active Directory synced with Microsoft Entra ID) to reset their passwords using SSPR, with the change being written back to the on-premises AD. This feature reduces helpdesk overhead and ensures password consistency across environments.

## Key Points

- **What is Password Writeback?**
  - Allows cloud-based password resets (via SSPR) to **sync back** to on-prem Active Directory
  - Ensures users don’t need separate helpdesk-driven resets in hybrid setups
- **Requirements**
  - **Microsoft Entra Connect** must be installed and configured
  - Password writeback must be **enabled in Entra Connect**
  - Requires **Microsoft Entra ID P1 or P2** license
  - The affected users must be **hybrid (synchronized)** users, not cloud-only
- **Enable Password Writeback via Entra Connect**
  - Launch **Microsoft Entra Connect**
  - Go to: **Additional tasks > Configure > Password writeback**
  - Check: `Enable password writeback`
  - Optionally, restrict to a specific **security group** for scoping
- **Enable Password Writeback in Entra ID Portal**
  - Go to: `Microsoft Entra ID > Password reset > On-premises integration`
  - Toggle **“Write back passwords to on-premises directory”** to **Yes**
  - Confirm that sync status is healthy and users are licensed
- **Security & Permissions**
  - Entra Connect sync account must have **"Reset password"** permissions in AD
  - Ensure proper **firewall and connectivity** between cloud and on-prem environments (port 443)
- **SSPR Flow with Writeback**
  - User forgets password → navigates to [https://aka.ms/sspr](https://aka.ms/sspr)
  - Passes authentication challenge
  - New password is validated and written back to **on-prem AD**
  - Sync confirms success to the user
- **Audit & Monitoring**
  - Events appear in both **Microsoft Entra Audit Logs** and **on-prem Event Viewer (Azure AD Connect)**
  - Look for `Password reset via self-service` events
- **Best Practices**
  - Start with a **pilot group** before rolling out broadly
  - Validate permissions and firewall connectivity during setup
  - Combine with Conditional Access to enforce secure reset conditions (e.g., MFA)

Additional Reading: [Enable cloud sync self-service password reset writeback to an on-premises environment](https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-cloud-sync-sspr-writeback)
