# Custom role creation basics

While Azure offers over 70 built-in roles, sometimes they don’t perfectly align with your organization’s access requirements. **Custom roles** in Azure allow you to define **precise sets of permissions** to enforce least privilege, covering only the operations your users or apps need.

## Key Points

- **When to Use a Custom Role**
  - Built-in roles are **too broad** or **too narrow**
  - You want to **exclude sensitive actions** (e.g., delete, write)
  - You want to **combine specific permissions** from multiple roles
- **Components of a Custom Role**
  - **Name and Description**
  - **Actions**: Allowed operations (e.g., `Microsoft.Storage/*/read`)
  - **NotActions**: Excluded permissions even if covered by Actions
  - **DataActions / NotDataActions**: Apply to data plane access (e.g., read blob contents)
  - **AssignableScopes**: Where the role can be assigned (e.g., specific subscription or resource group)
- **Example:** JSON Template for a Custom Reader Without Tagging

    ```json title="ReaderWithoutTagWrite.json"
    {
        "Name": "Reader Without Tag Write",
        "IsCustom": true,
        "Description": "Read-only access but prevents tag writing",
        "Actions": [
        "Microsoft.Resources/subscriptions/resourceGroups/read",
        "Microsoft.Compute/virtualMachines/read",
        "Microsoft.Network/networkInterfaces/read"
        ],
        "NotActions": [
        "Microsoft.Resources/tags/write"
        ],
        "AssignableScopes": [
        "/subscriptions/<subscription-id>"
        ]
    }
    ```

- **Create Custom Role with PowerShell**

  ```powershell title="PowerShell"
  New-AzRoleDefinition -InputFile "ReaderWithoutTagWrite.json"
  ```

- **Create Custom Role with Azure CLI**

  ```bash title="Shell"
  az role definition create --role-definition ReaderWithoutTagWrite.json
  ```

- **Where Custom Roles Can Be Assigned**
  - **Subscription level and below** only
  - Not supported at the **management group level** unless created there explicitly
  - You can restrict assignment using `AssignableScopes` to specific RGs or resources
- **Limits and Considerations**
  - Maximum of **5,000 custom roles** per tenant
  - Custom roles apply only within the **Azure RBAC model** (not Entra ID roles)
  - Avoid overlapping permissions with other roles to prevent confusion

Additional Reading: [Azure custom roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles)
