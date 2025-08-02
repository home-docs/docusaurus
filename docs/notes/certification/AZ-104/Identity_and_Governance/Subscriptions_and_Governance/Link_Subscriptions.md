# Link subscriptions to management groups

To apply consistent governance, access control, and policy management across multiple subscriptions, Azure enables you to **link subscriptions** to **management groups**. Once linked, the subscription inherits **RBAC**, **policies**, and **initiative assignments** from the parent group, enabling scalable enterprise management.

## Key Points

- **Subscription-MG Relationship**
  - A subscription can be part of **only one** management group at a time
  - Subscriptions inherit all **RBAC** and **policy assignments** from their management group and its parent hierarchy
- **Pre-requisites**
  - You must be a **Management Group Contributor** or **Owner**
  - Subscription must reside in the **same Azure AD tenant** as the management group
- **Link via Azure Portal**
  - Go to `Management Groups` in Azure portal
  - Select a management group
  - Click **+ Add subscription**
  - Choose the subscription(s) to assign and confirm
- **Azure CLI – Add Subscription to MG**

  ```bash title="Shell"
  az account management-group subscription add 
    --name "Engineering" 
    --subscription "SUBSCRIPTION-ID"
  ```

- **PowerShell – Add Subscription**

  ```powershell title="PowerShell"
  New-AzManagementGroupSubscription `
    -GroupName "Engineering" `
    -SubscriptionId "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  ```

- **Verify Subscription Placement**
  - Use Azure Portal > `Subscriptions` > Check parent management group
  - Or use CLI:

    ```bash title="Shell"
    az account management-group show 
      --name "Engineering" 
      --expand
    ```

- **Impacts of Linking**
  - RBAC: Users/groups assigned at MG level now have access
  - Policies: Compliance is evaluated at the subscription scope automatically
  - Billing is **not affected** by linking a subscription to an MG

:::note[Best Practices]

- Structure management groups based on business units, environments, or regions
- Use naming conventions for both management groups and subscriptions for clarity
- Before linking, ensure policies applied at MG level won't break workloads
- Document subscription hierarchy in your governance model
- Review and audit subscription assignments regularly to ensure they follow organizational standards

:::

Additional Reading: [Protect your resource hierarchy](https://learn.microsoft.com/en-us/azure/governance/management-groups/how-to/protect-resource-hierarchy)
