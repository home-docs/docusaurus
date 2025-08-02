# Use Azure Advisor for cost optimization

Azure Advisor provides **personalized best practices and recommendations** to help optimize your Azure environment for **cost**, **security**, **reliability**, **performance**, and **operational excellence**. The **Cost** category helps identify **idle**, **underutilized**, or **overprovisioned resources** that can be resized, shut down, or deallocated to reduce unnecessary spend.

## Key Points

- **What Azure Advisor Analyzes (Cost Category)**
  - Underutilized virtual machines
  - Idle public IP addresses
  - Unused ExpressRoute circuits
  - Unprovisioned reserved instances
  - Unused disks or unattached managed disks
  - Low-utilization App Service plans
- **Advisor Cost Optimization Benefits**
  - Personalized recommendations based on actual usage
  - Actionable insights (e.g., stop or resize a VM)
  - Helps identify opportunities to:
    - Shut down idle VMs
    - Convert to reserved instances
    - Scale down services
- **Access Advisor in Portal**
  - Go to `Azure Advisor` from the portal homepage
  - Select **Cost** under the recommendation categories
  - Review recommendations by:
    - Resource
    - Impact (High, Medium, Low)
    - Estimated savings
- **Execute Recommendations**
  - Each recommendation includes:
    - **Justification** (metrics or telemetry)
    - **Recommended action**
    - **Estimated monthly cost savings**
  - You can take immediate action or export the list for approval/workflow integration
- **Export Advisor Recommendations**

  ```bash title="Shell"
  az advisor recommendation list --output table
  ```

- **Filter by Cost Recommendations Only**

  ```bash title="Shell"
  az advisor recommendation list --category Cost --output json
  ```

- **Monitor Advisor Score**
  - Advisor provides a **score** (0–100) for overall optimization posture
  - Includes cost, performance, reliability, operational excellence, and security
- **Integration with Azure Policy**
  - Advisor recommendations can be monitored using **Azure Policy initiatives** for governance reporting

:::note[Best Practices]

- Review Azure Advisor at least monthly as part of your FinOps practices
- Use tags to cross-reference high-cost resources with business units or projects
- Export Advisor recommendations regularly and integrate with ticketing systems (e.g., Azure DevOps, Jira)
- Combine Advisor insights with budgets and cost alerts to close the loop on cost control
- Prioritize recommendations with High impact and significant potential savings

:::

Additional Reading: [Reduce service costs by using Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations)
