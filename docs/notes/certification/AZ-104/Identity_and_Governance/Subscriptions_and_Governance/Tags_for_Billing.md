# Use tags for billing

Azure **tags** enable you to **categorize costs** across resources based on custom labels like `Environment`, `CostCenter`, `Project`, etc. When applied consistently, tags become a powerful tool for **chargeback, showback**, and **cost accountability** in organizations using **Cost Management + Billing**.

## Key Points

- **Supported Scope**
  - Tags can be used for **cost analysis** at:
    - Subscription
    - Resource group
    - Individual resources
  - Tags are reflected in **usage data** exported from Azure Cost Management
- **Billing Tag Requirements**
  - Tags must be applied to **billable resources**
  - **Not all resources support billing-relevant tags**
    - E.g., tags on a virtual network or NSG may not appear in billing exports
- **Common Billing Tags**
  - `CostCenter`
  - `Project`
  - `Environment`
  - `Owner`
  - `Department`
- **Azure Portal – View Costs by Tag**
  - Go to `Cost Management > Cost analysis`
  - Set `Group by` > `Tag`
  - Choose tag name (e.g., CostCenter)
  - Filter by **subscription** or **resource group**
- **Enable Tag-Based Cost Reporting**
  - **Tags must be present before usage occurs** to be reflected in billing data
  - Usage reports are generated with a **24–48 hour delay**
- **Download Detailed Usage Reports**
  - Set up exports in:
    - `Cost Management > Exports`
  - Choose CSV export (daily, weekly)
  - Tag values appear under `tags` column
- **PowerShell – Tagged Cost Reporting**
  Azure Cost Management does not directly expose tag-based billing via PowerShell, but you can:

  ```powershell title="PowerShell"
  # View tag presence on resource (to confirm billing readiness)
  Get-AzResource -ResourceGroupName "FinanceRG" | Select-Object Name, ResourceType, Tags
  ```

- **Azure CLI – View Tags on Resources**

  ```bash title="Shell"
  az resource list --tag CostCenter=Finance --output table
  ```

:::note[Best Practices]

- Use **Azure Policy** to enforce tag presence on cost-sensitive resources
- Ensure tag values are consistent across resources (tag keys are case-sensitive)
- Avoid tagging ephemeral resources unless necessary for cost tracking
- Regularly **audit resources without tags** and remediate via automation

:::

Additional Reading: [Understand Cost Management data](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/understand-cost-mgt-data#group-and-filter-costs-by-resource-tags)
