# View compliance state

Azure Policy continuously evaluates resource configurations against assigned policies and reports a **compliance state**—either **Compliant** or **Non-compliant**. Monitoring this state allows organizations to identify misconfigurations, trigger remediations, and maintain governance.

## Key Points

- **Where to View Compliance**
  - Go to **Azure Portal** > `Policy` blade > `Compliance`
  - Filter by:
    - **Policy assignment**
    - **Scope (MG, subscription, RG)**
    - **Resource type or name**
- **Compliance States**
  - **Compliant** – Resource meets the policy requirement
  - **Non-compliant** – Resource violates the policy condition
  - **Not started / In progress** – Evaluation is pending or currently running
- **Understand Evaluation Frequency**
  - **Built-in** and **custom policies** are automatically evaluated every **24 hours**
  - Trigger **on-demand evaluation** with PowerShell or REST API if needed
- **Remediation Tasks**
  - For `DeployIfNotExists` or `Modify` effects, Azure can **auto-remediate** non-compliant resources
  - Create remediation tasks from the **Compliance view** or manually
- **Policy Insights (Preview)**
  - Advanced view via Azure Monitor
  - Aggregated data across:
    - Policy definitions
    - Assignments
    - Scopes
    - Compliance trends
- **PowerShell Example – Get Compliance State**

  ```powershell title="PowerShell"
  Get-AzPolicyState -SubscriptionId "<sub-id>" | ft ResourceId, ComplianceState
  ```

- **Azure CLI Example – List Compliance States**

  ```bash title="Shell"
  az policy state list \
    --query "[].{Resource:resourceId, State:complianceState}" \
    --output table
  ```

- **Exporting Compliance Reports**
  - Export to CSV/JSON from portal or automate using:
    - **Azure Policy REST API**
    - **Log Analytics / KQL** if logs are integrated
- **Use Cases**
  - Identify misconfigured or untagged resources
  - Validate adherence to organizational standards
  - Track compliance over time for audits and governance

Additional Reading: [Get compliance data of Azure resources](https://learn.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data)
