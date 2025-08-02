# Understand policy effects (Deny, Audit, Append, etc.)

Azure Policy uses **effects** to determine what action is taken when a policy condition is met. Understanding these effects is crucial for choosing the **right enforcement behavior** for your compliance and governance requirements.

## Key Effects in Azure Policy

- **Deny**
  - Blocks the resource action (create or update) if it violates the policy
  - Most **enforceable** effect
  - Example: Deny deployment of resources outside of allowed regions
- **Audit**
  - Allows the action but logs a **non-compliance event**
  - Does not block deployment
  - Ideal for **monitoring** and **testing** policies before enforcement
- **Append**
  - Automatically adds or **enforces additional settings** during resource deployment
  - Cannot override existing settings
  - Example: Append a tag if it's not already specified
- **AuditIfNotExists**
  - Audits if a related resource **doesn’t exist** or doesn’t meet criteria
  - Example: Audit VMs that don't have a diagnostic setting enabled
- **DenyIfNotExists**
  - Denies the request if the **related resource does not exist**
  - Stronger enforcement than AuditIfNotExists
  - Example: Deny storage account creation if it doesn’t have encryption key set
- **DeployIfNotExists (DINE)**
  - Automatically **deploys a resource or configuration** if it’s missing
  - Requires:
    - A **managed identity**
    - A **deployment template (ARM/Bicep)**
  - Example: Enable diagnostic settings for VMs
- **Disabled**
  - Turns off the policy without deleting it
  - Useful for testing, policy lifecycle management, or temporary suspension

### Example Use Cases

| Effect            | Use Case Example                                             |
| ----------------- | ------------------------------------------------------------ |
| Deny              | Block resource deployment to disallowed regions              |
| Audit             | Track usage of untagged resources without enforcement        |
| Append            | Add environment-specific tag to all new resources            |
| AuditIfNotExists  | Log non-compliant key vaults missing diagnostic settings     |
| DenyIfNotExists   | Block SQL servers missing threat detection policies          |
| DeployIfNotExists | Automatically deploy a Log Analytics agent if missing        |
| Disabled          | Temporarily disable enforcement of a policy during migration |

### Policy Definition Snippet Example (Deny)

```json title="Example: Deny Storage in Non-Allowed Locations"
{
  "if": {
    "field": "location",
    "notIn": ["eastus", "westeurope"]
  },
  "then": {
    "effect": "deny"
  }
}
```

Additional Reading: [Azure Policy definitions effect basics](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effects)
