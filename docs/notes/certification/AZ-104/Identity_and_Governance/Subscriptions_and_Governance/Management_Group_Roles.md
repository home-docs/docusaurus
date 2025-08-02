# Assign roles and policies at management group level

Management groups allow centralized **RBAC (Role-Based Access Control)** and **Azure Policy** assignments that propagate to all child **subscriptions**, **resource groups**, and **resources**. Assigning roles or policies at this level ensures **governance consistency**, especially in large environments with many subscriptions.

## Key Points

- **Scope Hierarchy Recap**
  - Management Group
  - Subscription
  - Resource Group
  - Resource
  - RBAC and Policy settings at the **management group** level flow **downward**
- **RBAC at Management Group Level**
  - Assign roles like:
    - Owner
    - Contributor
    - Reader
    - User Access Administrator
    - Custom roles
  - RBAC is inherited by all nested scopes unless overridden
- **Azure Portal: Assign Role**
  - Go to `Management Groups`
  - Select your target management group
  - Go to **Access control (IAM)**
  - Click **+ Add > Add role assignment**
  - Choose role, assign to user/group/service principal
  - Click **Review + assign**

- **Azure CLI: Assign Role to MG**

  ```bash title="Shell"
  az role assignment create 
    --assignee "<user-object-id>" 
    --role "Contributor" 
    --scope "/providers/Microsoft.Management/managementGroups/Engineering"
  ```

- **PowerShell: Assign Role to MG**

  ```powershell title="PowerShell"
  New-AzRoleAssignment 
    -ObjectId "<user-object-id>" 
    -RoleDefinitionName "Reader" 
    -Scope "/providers/Microsoft.Management/managementGroups/Engineering"
  ```

- **Azure Policy at Management Group Level**
  - Assign built-in or custom policies/initiatives
  - Examples:
    - Require specific tags on resources
    - Restrict VM SKUs or locations
    - Enforce Azure Security Center standards
- **Portal: Assign Policy**
  - Go to `Policy > Assignments`
  - Scope: Select your **management group**
  - Choose policy definition or initiative
  - Set parameters and non-compliance messages
  - Click **Assign**
- **Azure CLI: Assign Policy**

  ```bash title="Shell"
  az policy assignment create 
    --name "enforce-tags" 
    --policy "require-tag" 
    --scope "/providers/Microsoft.Management/managementGroups/Engineering" 
    --params '{ "tagName": { "value": "CostCenter" } }'
  ```

- **Azure Policy Effects**
  - `Deny` – Blocks resource creation
  - `Audit` – Logs non-compliance
  - `Append` – Adds missing values
  - `DeployIfNotExists` – Deploys compliant config if missing

:::note[Best Practices]

- Use management groups to enforce global governance like naming, tagging, and location restrictions
- Apply policies at the highest applicable scope to minimize duplication
- Use initiatives to group related policies under business objectives (e.g., FinOps, security)
- Review inherited RBAC assignments and limit over-permissioning
- Document policy assignments and track changes via Activity Logs or version-controlled IaC

:::

Additional Reading: [Management group access](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview#management-group-access)
