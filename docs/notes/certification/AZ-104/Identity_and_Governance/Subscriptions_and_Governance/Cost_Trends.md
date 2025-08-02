# Analyze cost trends in Cost Management

Azure **Cost Management + Billing**  provides built-in tools to analyze historical and forecasted **spending trends**  across subscriptions, resource groups, services, and tags. The **Cost analysis**  blade enables users to visualize cost patterns, identify anomalies, and generate customized views for reporting and optimization.

## Key Points

- **Cost Analysis Overview**
  - Found in: `Cost Management > Cost analysis`
  - Allows filtering and grouping of costs by:
    - Resource group
    - Service name
    - Location
    - Tags (e.g., CostCenter, Department)
    - Reservation or benefit usage
- **View Types**
  - **Actual cost**  (default)
  - **Amortized cost**  (shows pre-paid costs spread over usage period)
  - **Forecasted cost**  (projects end-of-period spend based on trend)
- **Granularity Options**
  - Group and filter by:
    - Daily, monthly, quarterly
    - Resource type, tag, location, etc.
  - Exportable to CSV for external processing
- **Cost by Tag or Resource Group**
  - Tags must be consistently applied for accuracy
  - Tag-based views support chargeback/showback models
- **Forecasting Trends**
  - View **forecasted cost vs. actual usage**  to detect future budget overruns
  - Forecasts are based on usage patterns in the current billing period
- **Save and Share Views**
  - Customized views can be **saved**  and **shared**  within a tenant
  - Useful for recurring reporting (e.g., “Monthly Department Spend”)
- **Azure CLI – Export Usage Data**

  ```bash title="Shell"
  az consumption usage list 
    --start-date 2024-07-01 
    --end-date 2024-07-30 
    --query "[].{Name:instanceName, Cost:pretaxCost, Service:meterDetails.meterName}" 
    --output table
  ```

- **Set Up Automated Exports**
  - Go to `Cost Management > Exports`
  - Schedule daily/weekly/monthly exports
  - Data stored in a Storage Account (CSV format)

:::note[Best Practices]

- Use tags consistently to enable meaningful filtering and trend analysis
- Set up custom views for each cost center or team
- Combine forecasted costs with budgets to proactively control spend
- Regularly export usage data to external systems for reconciliation and deep analysis
- Train teams to self-serve using saved views in the portal for transparency

:::

Additional Reading: [Get started with Cost Management reporting](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/reporting-get-started)
