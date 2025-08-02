# Assign built-in and custom policies

Azure Policy enables you to **enforce organizational standards** and **assess compliance** across your Azure environment. You can assign both **built-in** and **custom** policy definitions at various scopes—management group, subscription, resource group, or resource level. These policies control what resources can be deployed and how they’re configured.

## Key Points

- **What Is a Policy Assignment?**
  - A **policy definition** becomes effective only when it's **assigned** to a scope
  - Assignments include parameters, exclusions, enforcement mode, and identity (for deployIfNotExists actions)
- **Built-in Policies**
  - Provided by Microsoft (over 1000 available)
  - Examples:
    - `Allowed locations`
    - `Require tag and its value`
    - `Audit VMs that do not use managed disks`
- **Custom Policies**
  - Defined by your organization using JSON structure
  - Useful when built-in policies don’t meet specific governance requirements
  - Must be created in **Azure Policy > Definitions**
- **Scopes for Assignment**
  - Policies can be assigned at:
    - **Management group** – Apply across multiple subscriptions
    - **Subscription** – Broad enforcement across all resource groups
    - **Resource group** – Enforce policies on a specific set of resources
    - **Resource** – Narrowest application
- **Assignment Parameters**
  - Many built-in and custom policies accept **parameters**
  - Example: `allowedLocations` or `requiredTagName`
  - Promotes **reusability** and **flexibility**
- **Azure Portal Steps**
  - Go to `Azure Policy > Assignments`
  - Click **Assign policy**
  - Choose:
    - **Scope** (MG, subscription, RG)
    - **Policy definition** (built-in or custom)
    - **Parameters** (if required)
  - Optionally exclude specific resource groups
  - Assign
- **PowerShell Example – Assign Built-In Policy**

  ```powershell title="PowerShell"
  New-AzPolicyAssignment 
    -Name "EnforceTags" 
    -DisplayName "Require 'Owner' Tag" 
    -Scope "/subscriptions/<sub-id>/resourceGroups/<rg-name>" 
    -PolicyDefinition (Get-AzPolicyDefinition -Name "RequireTag") 
    -PolicyParameterObject @{ "tagName" = @{ "value" = "Owner" } }
  ```

- **Azure CLI Example – Assign Custom Policy**

  ```bash title="Shell"
  az policy assignment create 
    --name "limit-locations" 
    --scope "/subscriptions/<sub-id>" 
    --policy "/subscriptions/<sub-id>/providers/Microsoft.Authorization/policyDefinitions/LimitLocations" 
    --params '{ "listOfAllowedLocations": { "value": ["eastus", "westeurope"] } }'
  ```

- **Remediation**
  - Some policies can automatically **remediate non-compliant resources**
  - Requires a **managed identity** to execute remediation tasks (e.g., tag injection)

Additional Reading: [Create and manage policies to enforce compliance](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/create-and-manage)
