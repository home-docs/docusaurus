# Billing management and ownership transfer

Azure allows you to manage **billing ownership** and **subscription access** separately. This includes transferring a subscription's **billing responsibility** to another user or tenant, updating **invoice profiles**, or changing the **account administrator** for legacy subscriptions. Transferring ownership is key when organizations restructure, projects move teams, or cost center allocations change.

## Key Points

- **Types of Transfers**
  - **Billing ownership transfer** – Moves the billing responsibility to a new user (requires acceptance by the recipient)
  - **Subscription transfer between tenants** – Moves subscription and all its resources to a different Azure AD tenant (involves tenant switch and reconfiguration of identities/RBAC)
  - **Transfer between invoice sections** – For Microsoft Customer Agreement (MCA) accounts
- **Supported Scenarios**
  - From one **Microsoft Account** to another (personal > personal)
  - From **Work/School account** (AAD) to another AAD user
  - From one **billing profile or tenant** to another in Microsoft Customer Agreement (MCA) setups
- **Billing Ownership Transfer via Portal**
  - Go to `Subscriptions` in the portal
  - Select the subscription > **Transfer billing ownership**
  - Enter the recipient's email
  - The recipient receives an email and must accept the transfer
- **What Gets Transferred**
  - Azure resources remain intact
  - Role assignments and RBAC must be reviewed after tenant transfers
  - Billing history stays with the original billing account
- **Ownership Transfer Limitations**
  - Some resources (e.g., Key Vault with purge protection, Azure DevOps) may require manual reconfiguration
  - Transfers between tenants remove access for users from the old tenant unless explicitly re-added
  - Not all subscription types (like CSP) support self-service transfer
- **View and Manage Billing Roles**
  - `Cost Management + Billing > Access Control (IAM)`
  - Billing roles (Billing Reader, Billing Account Owner, Invoice Manager) are managed **separately** from RBAC
- **Transfer to Another Tenant**
  - Requires a support request in some cases
  - Azure CLI and PowerShell do not support tenant-to-tenant transfer directly; use portal or contact Microsoft support
- **CLI: View Billing Information**

  ```bash title="Shell"
  az billing invoice list --query "[].name"
  ```

- **PowerShell: Get Subscription Info**

  ```powershell title="PowerShell"
  Get-AzSubscription
  ```

:::note[Best Practices]

- Always review RBAC permissions and policy assignments after a subscription transfer
- Export and save a billing snapshot before initiating transfer
- Communicate the transfer timeline to all stakeholders, especially for production environments
- Revalidate Azure Lighthouse or cross-tenant access after moving subscriptions between tenants
- For large orgs, use management groups to organize subscriptions and apply unified policy/control

:::

Additional Reading: [Change Azure subscription or account ownership](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/direct-ea-administration#change-azure-subscription-or-account-ownership)
