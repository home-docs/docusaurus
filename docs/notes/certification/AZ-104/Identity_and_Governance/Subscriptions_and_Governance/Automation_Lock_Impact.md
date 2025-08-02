# Impact of Locks on automation

Azure resource locks can **break automated deployments or update processes** if they attempt operations restricted by `ReadOnly` or `CanNotDelete` locks. This can lead to deployment failures, configuration drift, or runtime errors in CI/CD pipelines and Infrastructure as Code (IaC) tools like ARM/Bicep or Terraform.

## Key Points

- **Automation Scenarios Affected**
  - CI/CD pipelines (e.g., Azure DevOps, GitHub Actions)
  - ARM/Bicep template deployments
  - Terraform / Pulumi IaC runs
  - PowerShell or CLI-based provisioning scripts
- **What Happens When a Lock Is Hit**
  - `ReadOnly`:
    - Any attempt to modify, update, or delete a resource **fails with a 409 Conflict**
    - Applies to **PUT**, **PATCH**, or **DELETE** operations
  - `CanNotDelete`:
    - **Delete operations** fail, but **read and write** still succeed
- **Common Symptoms in Pipelines**
  - `Deployment failed with status code 409`
  - `AuthorizationFailed` error despite correct RBAC roles
  - Terraform `plan` or `apply` errors when modifying locked resources
- **Example Terraform Error**

  ```text
  Error: Error deleting Resource Group "locked-rg": resources.GroupsClient#Delete: Failure sending request: StatusCode=409 -- Lock level prevents deletion
  ```

- **How to Identify Lock Issues**
  - Check:
    - `Activity Log` > Look for failed `Microsoft.Resources/deployments/write` or `delete` operations
    - `Resource > Locks` blade > Inherited or direct locks
- **Workaround Strategies**
  - **Remove or temporarily disable locks** during planned automation runs
  - Use deployment stages or approvals in pipelines before modifying locked resources
  - Separate critical resources into **locked resource groups** and deploy volatile infra elsewhere
- **PowerShell: Remove Lock Temporarily**

  ```powershell title="PowerShell"
  Remove-AzResourceLock -LockName "ProdLock" -ResourceGroupName "AppRG"  
  ```

- **Azure CLI: Check Lock on Resource**

  ```bash title="Shell"
  az lock list --resource-group "AppRG" --output table
  ```

:::note[Best Practices]

- Never hardcode lock removal into automation—handle via pipeline gates or manual approval
- Apply locks **after** successful deployment, not before
- Use automation scripts to **reapply locks** post-deployment if needed

:::

Additional Reading: [Considerations before applying your locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json#considerations-before-applying-your-locks)
