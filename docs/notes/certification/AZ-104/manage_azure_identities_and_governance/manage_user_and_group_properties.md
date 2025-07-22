---
title: Manage User and Group Properties
sidebar_position: 2
sidebar_id: 'mainSidebar'
---

## Managing User Properties
### Properties to manage
#### Identity & Job Information

**Identity Information:** These properties define the user's core digital identity and how they are represented across Microsoft 365 and Azure.
- **User Principal Name (UPN):**
  - Is the primary sign-in name for the user (e.g., jane.doe@yourcompany.com).
  - While not changed often, you might need to update a UPN to reflect a legal name change or to align with a new email address policy. Changing a UPN is a significant action as it changes how the user signs in.
- **Display Name, First Name, Last Name:**
  - The user's name as it appears in address lists, Microsoft Teams, Outlook and user profiles.
  - To ensure accuracy and a professional user experience. This is commonly updated to reflect a user's preferred name or a legal name change.

**Job Information:** These properties are primary fuel for automating access control and workflows.
- **Job Title:**
  - The user's official title (e.g., "Cloud Administrator", "DevOps Manager").
  - This is a primary attribute used for dynamic groups. You can create a rule like `(user.jobTitle -eq "Cloud Administrator")` to automatically add all admins to a group that grants them specific Azure permissions.
- **Department:**
  - The department the user belongs to (e.g., "IT", "Finance").
  - This is one of the most important attributes for dynamic groups. It allows you to grant access to departmental resources.
- **Manager:**
  - A link to another user object in Entra ID who is the user's direct manager.
  - This populates the organizational chart feature in Microsoft Teams and Delve. It is also used for approval workflows. For example, an access request can be configured to require approval from the user's manager which is read directly from this property.
- **Company Name:**
  - The company the user works for.
  - It is used for organizational clarity, especially in multi-company tenants. It can also be used as an attribute in dynamic group rules.

- **Additional Reading:** [Add or update a user's profile information in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-user-profile-info)

#### Contact Information
#### Authentication Methods
#### Account Status
### Security and Administrative Actions
#### Password Reset
#### Revoke Sessions
### Methods of Management
#### Portal (Single User)
#### Bulk Update Properties
#### PowerShell
#### Azure CLI

## Managing Group Properties
### Properties to manage
#### Basic Details
#### Owners
#### Membership
### Methods of Management
#### Portal
#### PowerShell
#### Azure CLI