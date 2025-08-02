# Set subscription policies

Subscription policies in Azure help enforce **governance standards** and **compliance** across your environment. These policies can control actions such as **resource deployment constraints**, **tag enforcement**, and **allowed locations**. They're implemented using **Azure Policy**, and applied at the **subscription scope** to affect all contained resource groups and resources.

## Key Points

- **Scope of Policy Assignments**
  - Policies can be assigned at the **subscription level** to enforce rules across:
    - All resource groups
    - All resources within the subscription
- **Common Built-In Policies for Subscriptions**
  - **Allowed locations** – Restrict resource creation to specific Azure regions
  - **Allowed virtual machine SKUs** – Control VM sizes
  - **Enforce tag and its value** – Require tags like `CostCenter` or `Environment`
  - **Require resource group naming convention**
- **Assigning Policy to Subscription (Portal)**
  - Go to `Policy` > `Assignments`
  - Click **+ Assign Policy**
  - Scope = your target **subscription**
  - Select a built-in or custom definition
  - Set parameters > Assign
- **Azure CLI: Assign Policy at Subscription Level**

  ```bash title="Shell"
  az policy assignment create 
    --name "allow-locations" 
    --policy "allowed-locations" 
    --scope "/subscriptions/<subscription-id>" 
    --params '{ "listOfAllowedLocations": { "value": ["eastus", "westeurope"] } }'
  ```

- **PowerShell: Assign Subscription Policy**

  ```powershell title="PowerShell"
  New-AzPolicyAssignment 
    -Name "TagEnforcement" 
    -Scope "/subscriptions/<subscription-id>" 
    -PolicyDefinition (Get-AzPolicyDefinition -Name "require-tag") 
    -PolicyParameterObject @{ "tagName" = @{ "value" = "Environment" } }
  ```

- **Policy Compliance Tracking**
  - Go to `Policy > Compliance`
  - Filter by subscription to review non-compliant resources
  - Use remediation tasks to apply missing tags or fix violations
- **Limitations**
  - Some resources may not support certain policies
  - Remediation requires additional permissions (e.g., managed identity setup)
  - Custom policies should be **tested in dev** environments first

Apply least privilege policies first, then tighten scope as needed

:::note[Best Practices]

- Use initiative definitions to group related policies under one governance goal
- Document policy assignments with naming conventions and tagging
- Audit and clean up obsolete or duplicate policies regularly
- Always test custom policies in lower environments before applying in production

:::

Additional Reading: [What is Azure Policy?](https://learn.microsoft.com/en-us/azure/governance/policy/overview)
