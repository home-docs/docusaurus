# Create/delete resource groups

A **resource group** in Azure is a logical container that holds related resources such as VMs, storage accounts, and databases. Managing resource groups properly allows for **simplified administration**, **access control**, **cost management**, and **lifecycle governance**. You can create and delete them via the portal, CLI, PowerShell, ARM/Bicep, or programmatically.

## Key Points

- **Purpose of Resource Groups**
  - Logical grouping of related resources
  - Useful for managing access, costs, and policies
  - Resources can only exist in **one** resource group
- **Creation Locations**
  - Resource groups are assigned to a region (for metadata storage), but resources inside can be in any region

### Azure Portal

- Go to `Home > Resource groups > + Create`
- Provide:
  - **Subscription**
  - **Resource group name**
  - **Region**
- Tags (optional)
- Click **Review + create > Create**

### Azure CLI

- **Create a resource group**

  ```bash title="Shell"
  az group create \
    --name "AppRG" \
    --location "eastus"
  ```

- **Delete a resource group**

  ```bash title="Shell"
  az group delete \
    --name "AppRG" \
    --yes --no-wait
  ```

### PowerShell

- **Create**

  ```powershell title="PowerShell"
  New-AzResourceGroup -Name "AppRG" -Location "eastus"
  ```

- **Delete**

  ```powershell title="PowerShell"
  Remove-AzResourceGroup -Name "AppRG" -Force
  ```

### Bicep Template

```bicep title="Bicep - Define Resource Group"
targetScope = 'subscription'

resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'AppRG'
  location: 'eastus'
  tags: {
    Environment: 'Production'
  }
}
```

### ARM Template Snippet

```json title="ARM Template"
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [
    {
      "type": "Microsoft.Resources/resourceGroups",
      "apiVersion": "2021-04-01",
      "name": "AppRG",
      "location": "eastus",
      "tags": {
        "Department": "Finance"
      }
    }
  ]
}
```

:::note[Best Practices]

- Group resources by **lifecycle**, **application**, or **environment**
- Apply **resource locks**, **tags**, and **policies** at the resource group level
- Use automation to enforce naming and tagging standards
- Deleting a resource group deletes **all contained resources** — use caution!
- Use **management groups** for governance across subscriptions; use **resource groups** for operational structure

:::

Additional Reading: [Use the Azure portal and Azure Resource Manager to manage resource groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)
