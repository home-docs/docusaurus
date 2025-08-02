# Policy initiative definition and assignment

A **Policy Initiative** (also known as a **policy set**) is a collection of multiple Azure Policy definitions grouped together to achieve a **broader governance goal**. Instead of managing individual policies one by one, you can assign initiatives to **enforce standards at scale**, simplify compliance tracking, and align with regulatory frameworks.

## Key Points

- **What Is a Policy Initiative?**
  - A reusable **group of policy definitions**
  - Simplifies large-scale governance by combining related policies into one logical unit
  - Can include **parameters**, **exclusions**, and **metadata**
- **Use Cases**
  - Enforce security baselines (e.g., enable encryption, restrict regions, require tags)
  - Apply compliance standards like:
    - **Azure Security Benchmark**
    - **NIST SP 800-53**
    - **CIS Microsoft Azure Foundations Benchmark**
  - Custom organizational controls (e.g., tag governance + location restriction)
- **How to Create a Policy Initiative**
  - Azure Portal:
    - Go to `Policy > Definitions`
    - Select **Initiatives**
    - Click **+ Initiative definition**
    - Provide:
      - Name & description
      - Policy definitions to include
      - Optional **parameters**
    - Save and publish at appropriate scope (MG or subscription)
- **Initiative Assignment**
  - Assigned just like a policy:
    - Scope (MG, subscription, RG)
    - Parameters (per policy or global)
    - Non-compliance message
    - Enforcement mode
  - Compliance is evaluated **per policy definition** inside the initiative
- **PowerShell Example – Assign Initiative**

  ```powershell title="PowerShell"
  New-AzPolicySetDefinition 
    -Name "TagAndLocationPolicySet" 
    -DisplayName "Require Tags and Allowed Locations" 
    -PolicyDefinitions @(
        @{ policyDefinitionId = (Get-AzPolicyDefinition -Name "RequireTag").PolicyDefinitionId; parameters = @{ tagName = @{ value = "Owner" } } },
        @{ policyDefinitionId = (Get-AzPolicyDefinition -Name "AllowedLocations").PolicyDefinitionId; parameters = @{ listOfAllowedLocations = @{ value = @("eastus", "westeurope") } } }
    ) 
    -Description "Initiative to enforce tagging and region restriction"
  ```

- **Azure CLI Example – Assign Initiative**

  ```bash title="Shell"
  az policy set-definition create 
    --name "org-policy-baseline" 
    --display-name "Org Policy Baseline" 
    --definition-group-name "baseline-controls" 
    --definitions '[
      {
        "policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/RequireTag",
        "parameters": {
          "tagName": {
            "value": "Department"
          }
        }
      },
      {
        "policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/AllowedLocations",
        "parameters": {
          "listOfAllowedLocations": {
            "value": ["eastus", "centralus"]
          }
        }
      }
    ]'
  ```

- **View Initiative Compliance**
  - Navigate to `Policy > Compliance`
  - Filter by **Initiative**
  - Shows **per-policy compliance breakdown** within the initiative

:::note[Best Practices]

- Use initiatives to manage **thematic governance** (security, cost, identity)
- Keep initiative size **manageable** for troubleshooting
- Document initiative purpose and parameters clearly

:::

Additional Reading: [Azure Policy initiative definition structure](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/initiative-definition-structure)
