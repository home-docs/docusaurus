# Add/edit tags using portal, CLI, ARM/Bicep

Azure **tags** are key-value pairs that help organize and categorize resources for **management**, **cost tracking**, **automation**, and **governance**. Tags can be applied via the **Azure Portal**, **CLI**, **PowerShell**, and through **Infrastructure as Code** tools like ARM templates and Bicep.

## Key Points

- **Tag Structure**
  - Format: `"key": "value"`
  - Example:

    ```json
    {
      "Environment": "Production",
      "Owner": "ITDept",
      "CostCenter": "12345"
    }
    ```

- **Where Tags Can Be Applied**
  - **Subscription**
  - **Resource group**
  - **Individual resource**
  - Tags **do not inherit** from parent scopes (manually apply or automate)

### Azure Portal

- Go to the resource
- Select **Tags** from the left-hand menu
- Add/edit key-value pairs
- Click **Save**

### Azure CLI

- **Add or update tag on a resource**

  ```bash title="Shell"
  az tag update --resource-id /subscriptions/<subId>/resourceGroups/<rg>/providers/Microsoft.Compute/virtualMachines/myVM \
    --operation merge \
    --tags Environment=Production Owner=ITDept
  ```

- **Add tag to a resource group**

  ```bash title="Shell"
  az group update --name "FinanceRG" --set tags.Owner="CloudTeam" tags.Department="Finance"
  ```

### PowerShell

- **Add or update tags**

  ```powershell title="PowerShell"
  Set-AzResource `
    -ResourceGroupName "AppRG" `
    -ResourceType "Microsoft.Storage/storageAccounts" `
    -ResourceName "mystorageacct" `
    -Tag @{ Environment = "Dev"; Project = "CRM" } `
    -Force
  ```

### Bicep Template

```bicep title="Bicep - Resource with Tags"
resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: 'myuniquestorageacct'
  location: 'eastus'
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  tags: {
    Environment: 'Production'
    Owner: 'OpsTeam'
  }
}
```

### ARM Template Snippet

```json title="ARM Template - Resource with Tags"
{
  "type": "Microsoft.Compute/virtualMachines",
  "apiVersion": "2022-08-01",
  "name": "myVM",
  "location": "eastus",
  "tags": {
    "Environment": "Prod",
    "Owner": "CloudTeam"
  },
  "properties": {
    ...
  }
}
```

:::note[Best Practices]

- Standardize tag keys across your org (case-sensitive!)
- Use **Azure Policy** to:
  - Enforce required tags
  - Append default tags
  - Audit missing tags
- Use **Cost Management + Billing** to filter by tag for chargeback/showback reporting
- Automate tagging via IaC or deployment pipelines

:::

Additional Reading: [Tag Basics](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming?toc=%2Fazure%2Fazure-resource-manager%2Fmanagement%2Ftoc.json)
