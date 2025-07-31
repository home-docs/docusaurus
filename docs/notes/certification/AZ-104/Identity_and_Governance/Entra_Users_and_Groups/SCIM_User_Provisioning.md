# User provisioning with SCIM

SCIM (System for Cross-domain Identity Management) is an open standard for automating user identity provisioning and deprovisioning between Microsoft Entra ID and third-party applications. It simplifies identity lifecycle management across cloud services by enabling automatic sync of user attributes using secure RESTful APIs.

## Key Points

- **SCIM Protocol Overview**
  - Based on **REST + JSON**
  - Enables **create, update, delete** of user objects and groups across systems
  - Standard endpoints: `/Users`, `/Groups`, `/Schemas`
- **Use Case in Microsoft Entra**
  - Used for **provisioning to SaaS apps** like ServiceNow, Salesforce, Atlassian, etc.
  - Works with any SCIM 2.0-compliant app that exposes a public SCIM endpoint
- **Setting Up SCIM Provisioning in Azure**
  - Go to: **Enterprise Applications > Select app > Provisioning > Automatic**
  - Provide SCIM endpoint URL and **Bearer Token**
  - Azure AD pushes user changes automatically
- **Provisioning Scope**
  - You can assign provisioning to **All users** or **assigned groups only**
  - Recommended to use **group scoping** for control and performance
- **Attribute Mapping**
  - Customize which attributes are sent (e.g., `givenName`, `mail`, `jobTitle`)
  - Mappings support transformations like **Join(), ToLower(), StringReplace()**
  - Example: Combine first and last name into displayName
- **Provisioning Cycle**
  - Default sync interval: **every 40 minutes**
  - Full sync during initial setup
  - Supports incremental sync after initial provisioning
- **Monitoring Provisioning Status**
  - View sync logs under **Provisioning > Logs**
  - Errors like invalid schema, attribute mismatch, or HTTP failures are reported with detail
- **Security Model**
  - Uses **Bearer token** for authentication to the SCIM endpoint
  - Admin must securely store and rotate token regularly
- **Group Provisioning Support**
  - Supported only if SCIM app accepts group objects (`/Groups`)
  - Group object mapping must be explicitly configured
- **Deprovisioning Behavior**
  - When a user is unassigned or deleted in Entra ID, the SCIM connector sends a **delete or disable** signal to the target app
  - Helps enforce **automated offboarding**
- **SCIM Connector Gallery vs. Custom**
  - Microsoft provides many **pre-built connectors** in the Enterprise App gallery
  - For custom apps, you can use a **custom SCIM endpoint** with your own API
- **Licensing Requirements**
  - SCIM provisioning requires **Microsoft Entra ID P1 or above**
  - Not available in the free tier

Additional Reading: [Understand how Application Provisioning in Microsoft Entra ID - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works)
