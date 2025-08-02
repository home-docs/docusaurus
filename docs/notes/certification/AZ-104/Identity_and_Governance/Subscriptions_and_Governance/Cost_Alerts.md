# Setup cost alerts

Azure **cost alerts** notify you when your **budget thresholds** are crossed or when **spending anomalies** occur. These alerts help proactively monitor Azure spend and avoid surprises. Cost alerts are tied to **budgets** and are delivered via **Action Groups** that can send emails, SMS, push notifications, webhooks, or trigger automation.

## Key Points

- **Types of Cost Alerts**
  - **Budget alerts** – Triggered when actual or forecasted spend reaches a threshold
  - **Anomaly alerts** – Detect unusual spending spikes based on historical patterns
  - **Credit alerts** – For subscriptions with credits (e.g., Visual Studio, CSP)
- **How Cost Alerts Work**
  - Triggered when **thresholds defined in budgets** are exceeded
  - Alert thresholds can be set at:
    - 25%, 50%, 75%, 90%, 100%, or custom values
  - Alerts are linked to **Action Groups** for delivery
- **Supported Scopes**
  - Subscription
  - Resource group
  - Management group
  - Enrollment/account (in Microsoft Customer Agreement)
- **Create Cost Alert via Portal**
  - Go to `Cost Management > Budgets`
  - Create or select an existing budget
  - In the budget blade > Add an alert
  - Specify:
    - Threshold (e.g., 90%)
    - Alert type (actual/forecasted)
    - Action Group (for notification)
- **Azure CLI Example: Budget Alert (Included in Budget Creation)**

  ```bash title="Shell"
  az consumption budget create 
    --amount 500 
    --category cost 
    --name "DevBudget" 
    --resource-group "DevRG" 
    --time-grain monthly 
    --thresholds 80 100 
    --time-period start=2024-01-01T00:00:00Z end=2025-01-01T00:00:00Z
  ```

- **Create and Link Action Group**
  - Action Groups are defined in **Monitor > Alerts > Action Groups**
  - Can include:
    - Email/SMS
    - Webhook
    - Logic App
    - Azure Function
  - Once created, link during the budget alert setup
- **Anomaly Detection Alerts**
  - Go to `Cost Management > Cost Anomalies`
  - Enable anomaly detection per subscription or resource group
  - Alerts can be configured to notify owners when a spike is detected
- **View and Manage Alerts**
  - Go to `Monitor > Alerts`
  - Filter by **Budget** or **Cost Management**
  - Alerts show time, triggered threshold, scope, and recipient

:::note[Best Practices]

- Use forecast-based alerts to take preventive actions
- Create Action Groups with multiple notification channels (e.g., email + webhook)
- Assign ownership of budgets and alerts to relevant teams (DevOps, Finance)
- Regularly review alert history to tune thresholds
- Pair cost alerts with Advisor recommendations for better cost control

:::

Additional Reading: [Use cost alerts to monitor usage and spending](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending)
