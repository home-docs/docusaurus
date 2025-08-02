# Create and configure budgets

Azure **budgets** help track and control spending by setting financial thresholds on **subscriptions**, **resource groups**, or **management groups**. You can define budgets with **monthly, quarterly, or annual cycles**, and trigger **alerts** when spending approaches or exceeds limits. Budgets are purely **informational**—they don’t stop resource usage.

## Key Points

- **Scope Options**
  - Budgets can be created at:
    - Subscription level
    - Resource group level
    - Management group level
    - Billing account (for MCA)
- **Budget Definition Parameters**
  - Amount (e.g., \$1,000/month)
  - Time period (monthly, quarterly, annually)
  - Filters (optional) – service, location, resource group, tag
- **Budget Alerts**
  - Triggered based on actual spend or forecasted cost
  - Common thresholds: 50%, 75%, 90%, 100%
  - Send alerts to:
    - Action Groups (email, webhook, Logic App, etc.)
- **Create Budget in Portal**
  - Go to `Cost Management > Budgets`
  - Select scope (e.g., subscription)
  - Click **+ Add**
  - Set budget name, amount, time period
  - Configure alerts and action groups
  - Save
- **Azure CLI: Create Budget**

  ```bash title="Shell"
  az consumption budget create 
    --amount 1000 
    --category cost 
    --name "MonthlyBudget" 
    --resource-group "FinanceRG" 
    --time-grain monthly 
    --time-period start=2024-01-01T00:00:00Z end=2025-01-01T00:00:00Z 
    --thresholds 90 100
  ```

- **PowerShell: Budget Support**
  - PowerShell does not directly support budget creation; use CLI or REST API
- **Alert Notification via Action Group**
  - Action group must exist and have an email/webhook/etc.
  - Assign action group when configuring alert threshold in budget setup
- **Forecast-Based Budgets**
  - Azure can notify you if **forecasted cost** is expected to exceed budget
  - Helps act proactively before actual overage
- **Budgets Are Non-Enforcing**
  - Budgets **do not stop resource usage** use Azure Policy or automation for that
  - They are purely for **awareness and cost tracking**

:::note[Best Practices]

- Always create action groups to ensure alerts are seen by stakeholders
- Use tags or resource groups to scope budgets for departments or apps
- Define budgets at both subscription and project levels for detailed tracking
- Combine budgets with Azure Advisor recommendations for cost optimization
- Regularly review and adjust budget thresholds based on past usage trends

:::

Additional Reading: [Create and manage budgets](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets)
