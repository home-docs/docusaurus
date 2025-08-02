# Rename, disable, delete subscriptions

Azure subscriptions represent **billing and resource boundaries**. While you cannot delete a subscription directly, you can **rename** it for better organization, or **disable it** (via cancellation or transfer), after which it goes through a **grace period** before final deletion. These actions are usually performed by **Account Administrators or Billing Admins**.

## Key Points

- **Rename a Subscription**
  - Renaming is cosmetic and changes only the **display name**
  - Does **not** change the **subscription ID**, billing details, or resource access
  - Can be done from:
    - Azure Portal
    - Azure CLI
- **Azure Portal: Rename**
  - Go to `Subscriptions`
  - Select the subscription
  - Click **Overview > Rename**
  - Enter a new name > Save

- **Azure CLI: Rename**
  - Renaming via CLI isn’t directly supported — use portal

### Disable (Cancel) a Subscription

- Subscription can be **cancelled** by a Billing Account Admin
- Cancellation initiates a **grace period (usually 90 days)** during which:
  - Resources are **disabled**, not deleted
  - Access is limited
  - Subscription is marked as **disabled**
- To cancel a subscription:
  - Go to `Subscriptions`
  - Select the target subscription
  - Click **Cancel subscription** (requires appropriate billing role)
  - Confirm the cancellation

### Delete a Subscription (Indirect Process)

- Azure does **not allow manual deletion** of subscriptions
- Instead:
  - Cancel > Wait for grace period > Azure marks it for **de-provisioning**
- After deletion:
  - Subscription **cannot be reactivated**
  - Resources are **permanently deleted**
  - The subscription will show as `Canceled` in the portal

### Track Subscription Status

- **Azure CLI**

  ```bash title="Shell"
  az account list --output table
  ```

- **PowerShell**

  ```powershell title="PowerShell"
  Get-AzSubscription
  ```

:::note[Best Practices]

- Rename subscriptions to reflect their purpose (`Production - Finance`, `Dev - CRM`)
- Use **management groups** to organize multiple subscriptions
- Review inactive or unused subscriptions regularly
- Be cautious before cancellation—ensure no active workloads exist

:::

Additional Reading: [Cancel and delete your Azure subscription](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/cancel-azure-subscription)
