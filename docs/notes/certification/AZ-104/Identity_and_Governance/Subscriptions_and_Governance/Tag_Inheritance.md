# Tag inheritance

Unlike role assignments or locks, **Azure tags do not inherit** automatically from parent scopes like subscriptions or resource groups. If you want child resources to carry the same tags as their parent, you need to use **Azure Policy**, scripting, or automation to enforce or propagate tag values.

## Key Points

- **No Native Inheritance**
  - Tags applied to a **resource group** or **subscription** are **not automatically applied** to child resources
  - Each resource must be **explicitly tagged** if required
- **Why This Matters**
  - Without consistent tags across resources:
    - **Cost analysis** is incomplete
    - **Automation scripts** or **governance rules** may fail
    - **Resource discovery** and **reporting** become harder
- **Azure Policy for Tag Inheritance**
  - Use policy effects like `append` or `modify` to:
    - Enforce tags from the parent scope
    - Add missing tags to newly deployed resources
- **Example Policy: Append Tags from RG**

  ```json title="Policy Definition Snippet"
  {
    "if": {
      "field": "[concat('tags[', parameters('tagName'), ']')]",
      "exists": "false"
    },
    "then": {
      "effect": "append",
      "details": {
        "field": "[concat('tags[', parameters('tagName'), ']')]",
        "value": "[resourceGroup().tags[parameters('tagName'])]"
      }
    }
  }
  ```

- **Common Azure Built-in Policies**
  - `Append tag and its value from the resource group`
  - `Inherit a tag from the resource group if missing`
  - These can be assigned at the **subscription** or **MG level**

- **PowerShell Example – Manual Tag Propagation**

  ```powershell title="PowerShell"
  $rgTags = (Get-AzResourceGroup -Name "AppRG").Tags
  $resources = Get-AzResource -ResourceGroupName "AppRG"
  foreach ($res in $resources) {
    Set-AzResource -ResourceId $res.ResourceId -Tag $rgTags -Force
  }
  ```

- **Azure CLI Example**

  ```bash title="Shell"
  rgTags=$(az group show -n "AppRG" --query "tags")
  for id in $(az resource list --resource-group "AppRG" --query "[].id" -o tsv); do
    az resource tag --ids $id --tags "$rgTags"
  done
  ```

- **Limitations**
  - Tag inheritance via policy applies **only to newly created resources** (unless remediation is configured)
  - Changes in parent tags are **not automatically propagated** to children retroactively

:::note[Best Practices]

- Use **Azure Policy** with `append` or `modify` to standardize tagging from the resource group or subscription
- Define a **tagging strategy document** (e.g., required tags: CostCenter, Owner, Environment)
- Integrate tag enforcement in your **IaC templates** or **deployment pipelines**
- Audit tag coverage regularly for compliance and cost management

:::

Additional Reading: [Inherit tags](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources#inherit-tags)
