# Group membership management

Group membership in Microsoft Entra ID enables centralized access control across apps, roles, and resources. Membership can be assigned manually (static), rule-based (dynamic), or synced from on-premises AD. Admins can manage group members via portal, PowerShell, CLI, or automated workflows.

## Key Points

- **Types of Membership**
  - **Assigned (Static)**: Users/devices added manually
  - **Dynamic**: Managed via rules (no manual addition/removal)
  - **Synced (Hybrid)**: Comes from on-prem AD via Azure AD Connect (read-only)
- **Manage in Portal**
  - Go to: `Entra ID > Groups > Select Group > Members`
  - Use **+ Add members** to include users/devices (only for assigned groups)
  - Remove via the “... > Remove” option
- **PowerShell Management (Graph)**
  - Add user:

    ```powershell title="PowerShell"
    Add-MgGroupMember -GroupId $groupId -DirectoryObjectId $userId
    ```

  - Remove user:

    ```powershell title="PowerShell"
    Remove-MgGroupMemberByRef -GroupId $groupId -DirectoryObjectId $userId
    ```

  - Use `Get-MgGroupMember` to list members

- **CLI Management**
  - Add:

    ```bash title="Shell"
    az ad group member add --group "SalesTeam" --member-id <objectId>
    ```

  - Remove:

    ```bash title="Shell"
    az ad group member remove --group "SalesTeam" --member-id <objectId>
    ```

- **View Effective Membership**
  - In the **user's profile** under **Groups**, you can see all **direct and indirect (nested)** memberships
  - For a group, see **Members** tab for direct members only
- **Limitations with Dynamic Groups**
  - Cannot manually add or remove members — rules control membership
  - Group type must be **dynamic** from creation; cannot convert later
- **Bulk Membership Changes**
  - You can bulk add/remove using PowerShell + CSV
  - Ideal for onboarding/offboarding workflows
  - Example:

    ```powershell title="PowerShell"
    Import-Csv "users.csv" | ForEach-Object {     Add-MgGroupMember -GroupId $groupId -DirectoryObjectId $_.ObjectId }
    ```

- **Nested Group Behavior**
  - Nested groups are **not fully supported** across all apps
  - **RBAC** and some Microsoft 365 services may require **flattened (direct) membership**
- **Group Membership Cleanup**
  - Periodically audit memberships for stale or orphaned entries
  - Use **Access Reviews** (Entra ID P2) for automated cleanup workflows
- **Audit Logs**
  - All membership changes are logged under **Audit Logs**
  - Filter by activity “Add member to group” or “Remove member from group”

Additional Reading: [Manage Microsoft Entra groups and group membership](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups)
