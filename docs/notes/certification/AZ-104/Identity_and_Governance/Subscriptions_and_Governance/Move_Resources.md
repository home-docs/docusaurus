# Move resources between groups

Azure allows you to **move resources** across resource groups (and even subscriptions) to better align with **organizational structure**, **cost centers**, or **application boundaries**. While the move operation is generally safe, not all resources support moves, and there are limitations that should be considered.

## Key Points

- **Supported Scenarios**
  - Move resources:
    - Between resource groups **within the same subscription**
    - Between **different subscriptions** under the same Azure AD tenant
  - You can move **multiple resources** at once
- **Common Use Cases**
  - Restructuring based on environment (Dev > Prod)
  - Project ownership changes
  - Cost reallocation and chargeback
- **Important Conditions**
  - **Both source and target RGs must be in the same region**
  - Cannot move:
    - Resources with **dependent resources** that aren’t selected
    - Resources locked by **ReadOnly** or **CanNotDelete**
    - Some PaaS services like **Key Vault with purge protection**
  - For some services, the move causes a **brief downtime**
- **Portal Steps**
  - Go to the **source resource group**
  - Select resources to move > Click **Move > Move to another resource group**
  - Choose **target resource group** or create a new one
  - Acknowledge impact > Click **OK**

### Azure CLI

- **Move to another resource group**

  ```bash title="Shell"
  az resource move 
    --destination-group "NewRG" 
    --ids $(az resource list --resource-group "OldRG" --query "[].id" -o tsv)
  ```

### PowerShell

- **Move using PowerShell**

  ```powershell title="PowerShell"
  $resources = Get-AzResource -ResourceGroupName "OldRG"
  $resourceIds = $resources.ResourceId

  Move-AzResource -DestinationResourceGroupName "NewRG" -ResourceId $resourceIds
  ```

### Considerations and Pitfalls

- Resources retain their **resource IDs and names** post-move
- Moving doesn’t change **tags**, **RBAC assignments**, or **policies**, but:
  - You may need to reapply RBAC or Policy at the new RG
- Role assignments scoped to the **old resource group** are not transferred
- Resources under **deployment locks** or in a failed provisioning state may block the move

### RBAC Requirements

- To move resources, you must have:
  - `Microsoft.Resources/subscriptions/resourceGroups/moveResources/action`
  - On **both** source and destination resource groups

:::note[Best Practices]

- Use `az resource list` or `Get-AzResource` to validate resources before moving
- Always validate **move support** via [resource move documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-support-resources)
- Use **tags** to label resource ownership during transitions
- Perform **after-hours** or during maintenance windows for production resources

:::

Additional Reading: [Move Azure resources to a new resource group or subscription](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription)
