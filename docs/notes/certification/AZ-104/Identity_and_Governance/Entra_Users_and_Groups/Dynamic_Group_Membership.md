# Dynamic group membership rules

Dynamic groups in Microsoft Entra ID automatically assign users or devices to groups based on defined attribute-based rules. These rules are written in a rule syntax that supports logical operators and property-based filtering, streamlining access control and license assignment.

## Key Points

- **Membership Type: Dynamic User / Dynamic Device**
  - Set during group creation or by editing group properties
  - Once created as dynamic, group membership is automatically managed
- **Rule Syntax**
  - Uses **KQL-like expressions**
  - Supports `-eq`, `-ne`, `-contains`, `-match`, `-in`, `-not`, `-and`, `-or`, `-not`
  - Example:

  ```text title="Example Rule"
  (user.department -eq "HR") and (user.country -eq "US")
  ```

- **Supported Properties**
  - For **users**: `user.department`, `user.jobTitle`, `user.displayName`, `user.country`, `user.extensionAttribute1` to `15`, etc.
  - For **devices**: `device.deviceOSType`, `device.deviceOwnership`, `device.trustType`, etc.
- **Rule Validation**
  - Use the **“Validate Rules”** button in the portal to test before applying
  - Shows which users or devices would be included/excluded
- **Rule Processing Time**
  - Initial membership can take several minutes after rule creation
  - Ongoing updates occur every **1–2 hours** or on user property change
  - Large tenants may have delayed propagation
- **Preview Membership**
  - Portal offers a **“View dynamic membership”** tool to preview real-time members
  - CLI/PowerShell does **not** support preview
- **Limitations**
  - A user or device can only be in **one dynamic group per licensing assignment**
  - Dynamic membership rules are **case-insensitive**
  - Some custom attributes (e.g., `extension_...`) may not be usable without Microsoft Graph
- **License Requirement**
  - Requires **Microsoft Entra ID P1 or P2**
  - Not available in the Free tier
- **Modifying Rules**
  - Editing rules causes group membership to recalculate
  - Consider change windows for large group recalculations
- **Common Use Cases**
  - License assignment automation
  - App access control based on department, country, role
  - Targeting Intune policies by device ownership or platform
- **Multiple Expressions**
  - Grouped using parentheses and logical operators
  - Example:

  ```text title="Example Rule"
  (user.department -eq "Sales") or (user.jobTitle -eq "Sales Manager")
  ```

- **Monitor Changes**
  - Changes and errors logged in **Audit Logs**
  - You can’t manually add/remove members in dynamic groups — enforced by rule

Additional Reading: [Understand and Manage Dynamic Group Processing in Microsoft Entra ID - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/users/manage-dynamic-group)
