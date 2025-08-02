# Use of Azure portal, CLI, and PowerShell

Role assignments in Azure can be performed through multiple interfaces: the **Azure portal**, **Azure CLI**, and **PowerShell**. Each tool provides flexibility depending on whether you're working interactively (portal) or automating access control (CLI/PowerShell). All methods rely on Azure RBAC for permission enforcement.

## Key Points

- **Azure Portal** – Best for manual or ad-hoc assignments
  - Navigate to the target **resource**, **resource group**, or **subscription**
  - Go to `Access control (IAM)`
  - Select **"Add role assignment"**
  - Choose **Role**, **User/Group/Service Principal**, and click **Save**
  - Review effective permissions in the **"Role assignments"** or **"Check access"** tabs
- **Azure CLI** – Ideal for scripting and automation in Bash/Cloud Shell

  ```bash title="Shell"
  # Assign Contributor at a Resource Group scope
  az role assignment create
    --assignee <user-or-group-object-id>
    --role "Contributor"
    --scope "/subscriptions/<sub-id>/resourceGroups/<rg-name>"
  ```

  ```bash title="Shell"
  # List all role assignments for a user
  az role assignment list
    --assignee <user-id>
    --all
    --output table
  ```

- **Azure PowerShell** – Useful in Windows environments and for automation via Azure Automation or pipelines

  ```powershell title="PowerShell"
  # Assign Reader at a Subscription scope
  New-AzRoleAssignment 
    -ObjectId "<user-object-id>" 
    -RoleDefinitionName "Reader" 
    -Scope "/subscriptions/<subscription-id>"
  ```

  ```powershell title="PowerShell"
  # List role assignments
  Get-AzRoleAssignment -ObjectId "<user-object-id>"
  ```

- **Assigning at Different Scopes**
  - The `--scope` or `-Scope` parameter must be explicitly set to the correct level:
    - `/subscriptions/<sub-id>`
    - `/subscriptions/<sub-id>/resourceGroups/<rg-name>`
    - `/subscriptions/<sub-id>/resourceGroups/<rg-name>/providers/Microsoft.Compute/virtualMachines/<vm-name>`
- **Service Principals & Managed Identities**
  - CLI and PowerShell allow assigning roles to **service principals** and **managed identities**
  - Useful for app registrations and automated deployments
- **Audit & Monitoring**
  - All role assignment actions are logged in **Azure Activity Logs**
  - View them under `Monitor > Activity Log` or query via Log Analytics

:::note[Best Practices]

- Always validate scope before running CLI or PowerShell commands
- Use service principals and managed identities over user identities for automation
- Combine scripting with CI/CD pipelines for reproducible role setups

:::

Additional Reading:

[Assign Azure roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
[Assign Azure roles using Azure CLI](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-cli)
[Assign Azure roles using Azure PowerShell](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-powershell)
