# Inheritance of locks across scopes

Azure resource locks applied at a **higher scope** (e.g., subscription or resource group) are **inherited** by all child resources within that scope. This ensures consistent protection policies without manually locking each individual resource, but it also requires careful consideration during deployment and automation.

## Key Points

- **Scope Hierarchy and Inheritance**
  - Locks can be applied at:
    - **Subscription**
    - **Resource group**
    - **Individual resource**
  - A lock applied at a higher level is **automatically inherited** by:
    - All resource groups under a subscription
    - All resources within a locked resource group
- **Example Scenario**
  - A `ReadOnly` lock applied at the **resource group** level will:
    - Prevent modifications to all VMs, storage accounts, NICs, etc., within that group
    - Even users with **Owner** or **Contributor** roles will be restricted
- **Lock Types Are Inherited As-Is**
  - A `CanNotDelete` lock at the resource group level enforces that **none of the resources inside can be deleted**
  - A `ReadOnly` lock will prevent **any write** operation on child resources
- **Impact on Automation and Templates**
  - Resource deployments using ARM templates, Bicep, or Terraform can **fail** if trying to modify or delete resources within a locked scope
  - Important to **document and review locks** during DevOps and IaC processes
- **Viewing Inherited Locks**
  - Use Azure Portal or CLI to view all locks affecting a resource
  - Portal:
    - Navigate to the resource > `Locks` blade > shows inherited locks with **scope origin**
- **PowerShell Example – List Locks on a Resource**

  ```powershell title="PowerShell"
  Get-AzResourceLock -ResourceGroupName "AppRG" -ResourceName "myVM" -ResourceType "Microsoft.Compute/virtualMachines"
  ```

- **Azure CLI Example – List Locks**

  ```bash title="Shell"
  az lock list 
    --resource-group "AppRG" 
    --output table
  ```

- **Removal of Inherited Locks**
  - **Cannot delete a lock from a child resource if it was applied at a higher scope**
  - Must be removed from the **original scope** where it was created

:::note[Best Practices]

- Apply **CanNotDelete** locks at **resource group level** to prevent accidental deletions
- Use **ReadOnly** locks only after understanding operational impact
- Document the **reason and scope** of all inherited locks to avoid confusion during troubleshooting

:::

Additional Reading: [Understand scope of locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json#understand-scope-of-locks)
