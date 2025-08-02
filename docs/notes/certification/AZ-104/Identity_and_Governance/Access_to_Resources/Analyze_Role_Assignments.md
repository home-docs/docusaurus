# Analyze activity logs and role assignments

Azure Activity Logs provide a centralized way to **track role assignment changes**, including who made them, when, and at which scope. By analyzing these logs alongside current **role assignments**, admins can audit access control events, detect misconfigurations, and identify potential security issues.

## Key Points

- **Activity Logs Overview**
  - Contain **control plane operations** performed on Azure resources
  - Include **RBAC-related events** like:
    - `Microsoft.Authorization/roleAssignments/write`
    - `Microsoft.Authorization/roleAssignments/delete`
  - Retained for **90 days** by default
- **Where to Access**
  - Azure Portal:
    `Monitor > Activity Log` or via the specific **resource’s IAM blade**
  - Filter by:
    - **Event category**: "Administrative"
    - **Operation name**: "Create role assignment", "Delete role assignment"
    - **Initiated by**: User, group, service principal
- **Activity Log Details**
  - Timestamp of the change
  - Initiator (who performed the action)
  - Role assigned or removed
  - Target scope and principal
  - Status (Success / Failure)
  - JSON payload with extended metadata
- **PowerShell Example – Get Activity Logs**

  ```powershell title="PowerShell"
  Get-AzActivityLog 
    -StartTime (Get-Date).AddDays(-30) 
    -OperationName "Microsoft.Authorization/roleAssignments/write"
  ```

- **Azure CLI Example – Role Change Events**

  ```bash title="Shell"
  az monitor activity-log list 
    --max-events 50 
    --query "[?operationName.value=='Microsoft.Authorization/roleAssignments/write']" 
    --output table
  ```

- **Combine With Role Assignments**
  - To understand context, compare:
    - Current state from `IAM > Role assignments`
    - Change history from `Monitor > Activity Log`
- **Export and Analyze at Scale**
  - Send logs to:
    - **Log Analytics workspace**
    - **Azure Monitor / Workbooks**
    - **Storage account** or **Event Hub**
  - Use **Kusto Query Language (KQL)** for deeper insights
- **KQL Sample – Role Assignments Over Time**

  ```kusto title="KQL"
  AzureActivity
  | where OperationNameValue == "Microsoft.Authorization/roleAssignments/write"
  | project TimeGenerated, Caller, ActivityStatusValue, ResourceGroup, Properties
  ```

- **Use Cases**

  - Detect unauthorized role changes
  - Verify delegation of access to apps or external identities
  - Provide audit trails during compliance reviews

Additional Reading: [View activity logs for Azure RBAC changes](https://learn.microsoft.com/en-us/azure/role-based-access-control/change-history-report)
