# Create/Delete, CanNotDelete and ReadOnly locks

Azure **resource locks** help protect critical resources from accidental deletion or modification. You can apply two types of locks—**CanNotDelete** and **ReadOnly**—at different scopes (subscription, resource group, or individual resource), and they override RBAC permissions.

## Key Points

- **Types of Locks**
  - **CanNotDelete**
    - Authorized users can **read and modify** the resource
    - They **cannot delete** it
    - Example: Protect production VMs or storage accounts
  - **ReadOnly**
    - Equivalent to granting only **read** access
    - Prevents **modification and deletion** of the resource
    - Even **owners and contributors** are blocked from making changes
    - Useful for protecting configuration baselines
- **Scope of Locks**
  - Locks can be applied at:
    - **Subscription**
    - **Resource group**
    - **Individual resource**
  - Locks are **inherited** by child resources
- **Lock Priority**
  - Locks **override RBAC** permissions
  - Example: A user with `Owner` role still cannot delete a locked resource
- **Azure Portal Steps**
  1. Go to the resource/subscription/resource group
  2. Select `Locks` in the left menu
  3. Click **+ Add**
     - Provide **Name**, **Lock Type**, and **Notes**
  4. Click **OK**
- **PowerShell Example – Add CanNotDelete Lock**

  ```powershell title="PowerShell"
  New-AzResourceLock 
    -LockName "ProtectVM" 
    -LockLevel CanNotDelete 
    -ResourceName "myVM" 
    -ResourceType "Microsoft.Compute/virtualMachines" 
    -ResourceGroupName "ProdRG"
  ```

- **Azure CLI Example – Add ReadOnly Lock**

  ```bash title="Shell"
  az lock create 
    --name "readonly-lock" 
    --lock-type ReadOnly 
    --resource-group "FinanceRG" 
    --resource "critical-storage" 
    --resource-type "Microsoft.Storage/storageAccounts"
  ```

- **Delete a Lock (CLI/PowerShell)**

  ```powershell title="PowerShell"
  Remove-AzResourceLock -LockName "ProtectVM" -ResourceGroupName "ProdRG"
  ```

  ```bash title="Shell"
  az lock delete --name "readonly-lock" --resource-group "FinanceRG"
  ```

:::note[Best Practices]

- Use `CanNotDelete` for **application resources**
- Use `ReadOnly` cautiously—can interfere with **resource updates and automation**
- Review lock usage periodically to ensure they don’t block valid operational tasks

:::

Additional Reading: [Lock your Azure resources to protect your infrastructure](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)
