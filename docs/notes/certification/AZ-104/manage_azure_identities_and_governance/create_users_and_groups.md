---
title: Creating Users and Groups
sidebar_position: 1
---

In Azure, user identities and their access and permissions are governed by assigning permissions to individual users or by grouping them into various types of groups. We will go over creating users and groups in azure using various methods and the settings and configuration for each type.

## Creating and Managing Users
For groups, the emphasis is on understanding the _type_ and _membership_ rules, as these dictate what the group can be used for.

### User Types and Identity Sources
#### Cloud Only Users
Cloud-Only users, also known as cloud-native identities, are user accounts created and managed exclusively within **Microsoft Entra ID**. They have no corresponding object in an on-premises directory like Windows Server Active Directory.
- **Key Characteristics:**
	- **Source of Authority:** The single source of truth for these users is Microsoft Entra ID. This means all creation, modification, password management, and deletion tasks are performed directly in the cloud via the Azure portal, PowerShell, or Microsoft Graph API.
	- **User Principal Name (UPN):** The UPN, which is the user's sign-in name, is based on a domain registered with your Entra ID tenant. It follows one of two patterns:
		- The default domain: username@yourtenant.onmicrosoft.com
		- A custom, verified domain: username@yourcompany.com
	- **Authentication:** When a cloud-only user signs in, their credentials are validated directly against Microsoft Entra ID. There is no redirection or communication with any on-premises infrastructure.
	- **Management:** The entire identity lifecycle is managed in the cloud. This includes configuring Multi-Factor Authentication (MFA), setting up Self-Service Password Reset (SSPR), and assigning licenses.
- **Common Use Cases:**
	- **Cloud-First Organizations:** Companies that start with or migrate entirely to the cloud, with no on-premises servers.
	- **External Users/Contractors:** Creating accounts for temporary staff who only need access to cloud resources.
	- **Administrative Accounts:** It's a security best practice to create dedicated cloud-only administrator accounts (e.g., a Global Administrator) that are isolated from the on-premises environment to reduce the attack surface.
	- **Test Accounts:** Quickly creating user accounts for development and testing purposes without impacting an on-premises directory.
- Additional Reading: [What is Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/fundamentals/whatis)
#### Directory Synchronized Users
Directory Synchronized Users are identities that originate in a traditional on-premises Windows Server Active Directory (AD) and are synchronized to Microsoft Entra ID. This creates a common user identity for accessing both on-premises and cloud resources, often called a hybrid identity.
- **Key Characteristics:**
	- **Source of Authority:** The master copy, or **Source of Authority**, for these users is the on-premises **Windows Server AD**. In the Microsoft Entra admin center, you'll see this listed on the user's profile.
	- **Synchronization Tool:** The synchronization is performed by an application called **Microsoft Entra Connect**, which runs on a server in your on-premises environment.
	- **Management:** Most user attribute modifications (like changing a name or department) and password resets **must be performed in the on-premises AD**. The changes are then synchronized to the cloud. Attempting to edit these properties directly in the Azure portal will show them as read-only.
	- **Authentication:** When a user signs in, authentication can be handled in a few ways, configured within Microsoft Entra Connect:
		- **Password Hash Synchronization (PHS):** A hash of the user's password hash is synced to Entra ID, allowing authentication to happen directly in the cloud. This is the most common method.
		- **Pass-through Authentication (PTA):** Entra ID passes the authentication request to an agent on-premises, which validates the credentials against the local AD in real-time. The password is never stored in the cloud.    
		- **Federation:** Authentication is redirected to a separate, on-premises federation system like Active Directory Federation Services (AD FS).
- **Common Use Cases:**
	- **Hybrid Environments:** This is the standard for any organization that has an existing on-premises AD and wants to extend its identity services to Microsoft Azure or Microsoft 365. 
	- **Seamless Single Sign-On (SSO):** It allows employees to use their one, familiar corporate username and password to access all company resources, whether they are in the cloud or on-premises.
- **How they're managed:**
	- As an administrator, you'll spend your time managing these users in the "Active Directory Users and Computers" tool on a domain controller. To enable features like Self-Service Password Reset (SSPR) from the cloud for these users, you must enable a premium feature in Microsoft Entra Connect called **password writeback**.
- Additional Reading: [What is hybrid identity with Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/identity/hybrid/whatis-hybrid-identity)
#### Guest Users (B2B)
Guest users are external identities that you invite into your Microsoft Entra tenant to collaborate on your organization's resources. This functionality is known as **Microsoft Entra Business-to-Business (B2B) collaboration**.
- **Key Characteristics:**
	- **External Identity:** A guest user is not an identity you create. They bring their own identity from their home organization's Entra ID tenant, another identity provider, or even a consumer email account like `gmail.com` or `outlook.com`.   
	- **Invitation-Based:** You don't create a guest user; you **invite** them. An invitation is sent to their email address, which they must accept to gain access.    
	- **Local Representation:** When an invitation is accepted, a user object is created in your directory to represent the guest. This object is what you assign permissions and roles to.    
	- **UPN Format:** The User Principal Name for a guest has a unique format that clearly identifies them as external: `externaluser_domain.com#EXT#@yourtenant.onmicrosoft.com`. The **`#EXT#`** tag is the key indicator.    
	- **Authentication:** Guests authenticate using their own credentials against their **home tenant** or identity provider. Your tenant trusts the authentication from their provider. You do not manage their passwords.    
	- **Limited Permissions:** By default, guests have restricted permissions within your directory. For example, they cannot enumerate a full list of all users and groups.
- **Common Use Cases:**
	- **Partner Collaboration:** Granting users from a partner company access to a shared application or SharePoint site.   
	- **Vendor Access:** Providing a vendor or consultant with access to specific Azure resources (like a VM or a database) for a project.    
	- **Sharing Apps:** Allowing external users to access an enterprise application registered in your tenant. 
- **How they're managed:**
	- As an administrator, you manage a guest's **access** to your resources by assigning their representative user object to roles, groups, or applications. You do not manage their profile details or credentials. To revoke access, you simply remove the guest user object from your directory. You can also configure **cross-tenant access settings** to define default collaboration policies with other Entra ID organizations.
- Additional Reading: [What is Microsoft Entra B2B collaboration?](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b)
### Creation Methods

#### Microsoft Entra admin center (Portal)
The Microsoft Entra admin center is the primary web-based graphical user interface (GUI) for managing your tenant. It provides a visual, wizard-driven experience for creating and managing users and groups.
- **Creating a User in the Portal**
	- Go to the **Microsoft Entra admin center**, then select **Identity** > **Users** > **All users** and click **+ New user**.
	- The wizard has a few key sections:
		- **Basics:** This is where you configure the core identity information.
			- **User Principal Name (UPN):** The user's sign-in name (e.g., `davis.ray@yourcompany.com`).   
			- **Display Name:** The name that appears in address books and the portal.    
			- **Password:** You can either auto-generate a password or create one manually. The option to **require the user to change their password on first sign-in** is a critical security setting here.    
			- **Usage Location:** This is the country or region where the user will be using Azure services. This field **must be set** before you can assign licenses (like Microsoft 365 or Entra ID P2) to the user.
		- **Properties:** This section contains job-related information like **Job Title**, **Department**, and **Company Name**. These attributes are important because they can be used as criteria for dynamic group membership rules.
		- **Assignments:** Here you can directly add the user to existing groups or assign them Microsoft Entra roles (like "User Administrator" or "Helpdesk Administrator").
- Additional Reading: [Add or delete users in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/add-users)

#### Bulk Creation
Bulk creation is a feature in Microsoft Entra ID that lets you create many users at once by uploading a **CSV (comma-separated value)** file.
- **The Bulk Creation Process**
	- **Download the Template:** Go to **Identity** > **Users** > **Bulk operations** and select **Bulk create.** The most important step here is to download the CSV template provided on this page. You must use this template because it contains the exact column headers required for the operation to succeed.
	- **Fill out the CSV File:** The key fields in the template are
		- **`name`**: The user's display name.    
		- **`userPrincipalName`**: The user's sign-in name and UPN. This **must be unique** for each user.    
		- **`initialPassword`**: The temporary password for the new user.    
		- **`blockSignIn`**: Set to `False` if you want the user to be able to sign in immediately.
	- **Upload the File:** Go back to the "Bulk create user" page in the portal and upload your file.
	- **Review Job Results:** Azure will process the file as a background job. You can monitor its progress from the "Bulk operation results" page. When it's done, it will show you how many users were successfully created and how many failed. You can download a results file that details any errors, such as a duplicate `userPrincipalName`, which helps you quickly troubleshoot and fix your source file.
- Additional Reading: [Bulk create users in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/users/users-bulk-add)

#### PowerShell
PowerShell provides a powerful command-line interface for scripting and automating user creation in Microsoft Entra ID. It's the go-to method for repeatable tasks and integration with larger automation workflows.

:::info PowerShell Module
The modern and recommended module for interacting with Microsoft Entra ID is the **Microsoft Graph PowerShell SDK**. While you might see older tutorials using the legacy `AzureAD` module, you should focus on Microsoft Graph as it's the current standard.
:::

**Creating a User with Microsoft Graph PowerShell:** The process involves two main steps: connecting to your tenant and then running the command to create the user.
- **Connect to Microsoft Graph:** First, you need to connect to your tenant and specify the permissions (called **scopes**) you need for your session. To create users, you'll need the `User.ReadWrite.All` scope. 
  
	```powershell title="PowerShell"
	Connect-MgGraph -Scopes "User.ReadWrite.All"
	```

- **Create the User:** The command to create a new user is **`New-MgUser`**. You provide the user's properties as parameters. The password configuration is handled by creating a `PasswordProfile` object.
  
	```powershell title="PowerShell"
	# Define the password profile
	$passwordProfile = @{
	Password = "aComplexPassword123!"
	ForceChangePasswordNextSignIn = $true
	}

	# Create the user
	New-MgUser -UserPrincipalName "chris.green@yourcompany.com" `
			-DisplayName "Chris Green" `
			-GivenName "Chris" `
			-Surname "Green" `
			-JobTitle "IT Analyst" `
			-Department "IT" `
			-AccountEnabled $true `
			-UsageLocation "JP" `
			-PasswordProfile $passwordProfile
	```

- Additional Reading: [Create users with Microsoft Graph PowerShell](https://learn.microsoft.com/en-us/powershell/module/microsoft.graph.users/new-mguser?view=graph-powershell-1.0)
#### Azure CLI
The Azure Command-Line Interface (CLI) is a cross-platform tool for managing Azure resources from a terminal or command prompt. It's particularly favored by those who work in Linux or macOS environments and is excellent for scripting automation tasks.

**Creating a User with Azure CLI:**
The process is very direct. You first log in to your Azure account and then execute the command to create the user, providing the necessary details as arguments.
- **Sign In to Azure:** Open your terminal or command prompt and run the following command. This will open a browser window for you to authenticate.
  
	```bash title="Bash"
	az login
	```

- **Create the User:** The command to create a Microsoft Entra user is **`az ad user create`**. You specify the user's properties using parameters like `--display-name` and `--user-principal-name`
  
	```bash title="Bash"
	az ad user create --display-name "Maria Garcia" \
					--user-principal-name "maria.garcia@yourcompany.com" \
					--password "aVeryComplexP@ssw0rd!" \
					--force-change-password-next-sign-in true
	```

- Additional Reading: [Manage Azure AD users with the Azure CLI](https://learn.microsoft.com/en-us/cli/azure/ad/user?view=azure-cli-latest)
### Key Properties to Configure at Creation

#### User Principal Name (UPN) vs Email
- **User Principal Name (UPN):** The UPN is the primary username used for **authentication** in Microsoft Entra ID.
	- **Purpose:** Its main job is to identify the user during sign-in to Azure, Microsoft 365, and any other applications federated with your tenant.    
	- **Format:** It must be in an internet-style format: `username@domain`. The `domain` part must be one that is verified within your Microsoft Entra tenant (e.g., `yourcompany.com` or the default `yourtenant.onmicrosoft.com`).    
	- **Uniqueness:** It **must be unique** for every user within your directory.    
	- **Example:** When you see a login prompt asking for your "username" or "work or school account," it's asking for your UPN.
- **Email Address:** The Email attribute is primarily used for **mail delivery and communication**.
	- **Purpose:** Its main job is to be the primary address where a user receives email. This is the address used by Exchange Online.
	- **Format:** A standard email address format.
	- **Flexibility:** While the primary email address is typically unique, a user can have multiple secondary email addresses (aliases or proxy addresses) that all deliver to the same mailbox.
	- **Sign-In (Alternate Login ID):** Microsoft Entra ID can be configured to allow users to sign in with their email address, even if it's different from their UPN. This is a feature to improve user experience but doesn't change the UPN's role as the core, unique identifier.
	
	| Feature              | User Principal Name (UPN)               | Email Address                              |
	| -------------------- | --------------------------------------- | ------------------------------------------ |
	| **Primary Purpose**  | Authentication (Sign-in Name)           | Mail Delivery (Contact Information)        |
	| **System Role**      | Core identifier for Microsoft Entra ID  | Primary address for Exchange Online        |
	| **Uniqueness**       | Must be unique across the entire tenant | Primary address is unique; aliases allowed |
	| **Can They Differ?** | Yes                                     | Yes                                        |

	:::info Why This Is Important for an Administrator
	In hybrid environments, this distinction is crucial. An on-premises Active Directory might have a non-routable UPN like `davis.ray@corp.local`, while the user's email is `davis.ray@yourcompany.com`.

	For a seamless cloud experience, the best practice is to ensure the user's UPN is updated to a routable domain (`davis.ray@yourcompany.com`) before or during synchronization with Microsoft Entra Connect. If the UPN and email are different, it can lead to user confusion about which identity to use for signing in. As an admin, if a user reports a login issue, checking that they are using their correct UPN is a fundamental troubleshooting step.

	For a seamless cloud experience, the best practice is to ensure the user's UPN is updated to a routable domain (`davis.ray@yourcompany.com`) before or during synchronization with Microsoft Entra Connect. If the UPN and email are different, it can lead to user confusion about which identity to use for signing in. As an admin, if a user reports a login issue, checking that they are using their correct UPN is a fundamental troubleshooting step.
	:::

- Additional Reading: [User Principal Name in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/plan-connect-userprincipalname)
#### Initial Password Settings
In the Microsoft Entra admin center, you have two main choices for the initial password:
- **Auto-generate password:** The system creates a random, strong, and temporary password for the user. This is generally the recommended approach as it ensures complexity. The password is displayed on-screen once the user is created, and you must copy and securely provide it to the new user.
- **Create Password:** You manually type a password. This password must meet your tenant's password complexity requirements (e.g., length, character types). This option is often used when an organization has a standard initial password for all new hires.

	:::info Require user to change password on first sign-in
	Regardless of which option you choose, the most important setting is the checkbox for **"Require user to change password on first sign-in."**

	This setting should **always be enabled**. It forces the user to set their own private password the very first time they log in. This action immediately invalidates the temporary password you provided, ensuring that the administrator no longer knows the user's live password and establishing user ownership of the credential.
	:::

	:::info In PowerShell and Azure CLI
	This concept is also present when creating users via scripting:
	- **PowerShell:** The `New-MgUser` cmdlet uses a `-PasswordProfile` object where you set `ForceChangePasswordNextSignIn = $true`.
	**Azure CLI:** The `az ad user create` command has a specific flag: `--force-change-password-next-sign-in true`.
	:::

- Additional Reading: [Add or delete users in Microsoft EntraID](https://learn.microsoft.com/en-us/entra/fundamentals/add-users)
#### Usage Location
The Usage Location is a user property that indicates the country or region where the user typically works or will be using Microsoft services. You select the location from a predefined list of countries.

-  Why is Usage Location Required?: The primary reason for this property is **legal and regulatory compliance**.
	- **Service Availability:** Not all Microsoft cloud services are available in all countries. Setting the Usage Location allows Microsoft to determine which licensed services can be lawfully provided to that user. 
	- **License Assignment Prerequisite:** This is the most practical impact for an Azure administrator. Microsoft Entra ID will **not allow you to assign a paid license** (like Microsoft 365 E5, Entra ID P2, or Dynamics 365) to a user account until the Usage Location property has been set.   

If you attempt to assign a license to a user without a Usage Location, the operation will fail. This is especially important to remember when using **group-based licensing**, as any user in the group who is missing this property will fail to receive the license.

- **How to set the Usage Location**
	- **Portal:** During user creation, it's a dropdown menu on the "Basics" tab. You can also edit it later in the user's profile settings.
	- **PowerShell:** When using `New-MgUser`, you use the `-UsageLocation` parameter with a two-letter country code (e.g., `-UsageLocation "JP"` for Japan or `-UsageLocation "US"` for the United States).
	- **Bulk Create:** The CSV template includes a `usageLocation` column where you provide the two-letter country code for each user.

	:::warning Key Takeaway for Administrators
	**No Usage Location = No Paid License**. If you are troubleshooting why a user isn't getting access to a service like Teams or Office, one of the first things you should check is whether their Usage Location is correctly set on their user object.
	:::

- Additional Reading: [Add or update a user's profile information](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104)
## Creating and Managing Groups

### Group Types
#### Security
A **Security group** is the fundamental object in Microsoft Entra ID used for the sole purpose of **access control**. Its job is to bundle users, devices, and other principals so you can manage permissions for them collectively rather than individually.

**Primary Use Case**
- **Azure Role-Based Access Control (RBAC):** Assigning roles to resources. For example, you can create a group named `WebApp-Prod-Contributors` and assign it the "Contributor" role on a production resource group. Anyone added to this group automatically gets contributor rights.   
- **Application Access:** Granting permissions to an enterprise application registered in Entra ID.    
- **Conditional Access Policies:** Using group membership as a condition. For instance, you could create a policy that requires Multi-Factor Authentication (MFA) for all members of the `External-Vendors` group.    
- **Resource Permissions:** Managing access to Microsoft 365 resources like a specific SharePoint site or a data sensitivity label.
#### Microsoft 365
A **Microsoft 365 group** is a cross-application membership service in Microsoft Entra ID designed specifically for **collaboration**. When you create a Microsoft 365 group, you aren't just creating a list of users; you are provisioning a full suite of shared resources and a workspace for those users to work together.

Creating a single Microsoft 365 group automatically creates the following shared assets for its members:
- **Shared Outlook Inbox:** For group email conversations.    
- **Shared Calendar:** For scheduling team meetings and events.    
- **SharePoint Document Library:** A central place to store and collaborate on group files.    
- **Shared OneNote Notebook:** For meeting notes and shared information.    
- **Microsoft Planner:** For assigning and managing team tasks.    
- **Microsoft Teams:** The membership of a team in Microsoft Teams is powered by a Microsoft 365 group.

While its primary purpose is collaboration, a Microsoft 365 group is also a **mail-enabled security group.** This means that you can use a Microsoft 365 group for anything you would use a Security group for, including:
- Assigning Azure roles (RBAC).    
- Granting access to enterprise applications.    
- Including them in Conditional Access policies.

:::info Key Differentiator
The main distinction to understand is **Security group vs. Microsoft 365 group**.
- A **Security group** is created _only_ for managing access permissions. It is lean and focused on this single task.
- A **Microsoft 365 group** is created for _collaboration_ and automatically includes a shared mailbox, calendar, SharePoint site, etc. While it can also be used for security access, it comes with these additional collaborative features. 
:::

:::info Rule of Thumb
If your only goal is to grant a set of users permission to something, use a **Security group**. If you need a team to collaborate with shared tools, use a **Microsoft 365 group**.
:::

- Additional Reading: [Compare groups in Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups)
### Membership Types
#### Assigned
Assigned membership is the default, most fundamental way to manage a group's members in Microsoft Entra ID. It is a **manual** process where an administrator or the group's owner explicitly adds or removes each member.

When a group's membership type is set to "Assigned," the group is essentially a static list. The membership does not change automatically. An authorized user must perform a direct action to modify the list of members.
- **Adding Members:** An administrator or a designated Group Owner navigates to the group and manually selects users, devices, or other groups to add.    
- **Removing Members:** Likewise, removing a member requires someone with permissions to go into the group's member list and explicitly remove them.

**When to Use Assigned Membership**
This method is best suited for scenarios where:
- **The group is small and stable:** Membership doesn't change frequently.    
- **You need explicit control:** For high-privilege groups, like one that grants "Global Administrator" rights, you want absolute manual control over who is added or removed.    
- **The criteria for membership are not based on user attributes:** The logic for who should be in the group can't be easily defined by a rule (e.g., a temporary project team with members from various departments).

:::info Administrative Overhead
The primary drawback of assigned membership is that it doesn't scale well. In a large organization where employees frequently change roles or departments, manually updating dozens of group memberships for each employee is time-consuming and prone to error. This can lead to users retaining access they no longer need, a security risk known as "permission creep." This is the core problem that **Dynamic Groups** are designed to solve.
:::

- Additional Reading: [Create a basic group and add members](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups)
#### Dynamic User
A **Dynamic User** group is a type of group in Microsoft Entra ID where membership is determined **automatically** based on a predefined set of **membership rules**. Instead of manually managing a list of members, you define the criteria, and Entra ID does the work of keeping the group's membership up-to-date.

:::warning Licensing
**Dynamic groups are a premium feature**. To create and use a dynamic group, your tenant must have an active **Microsoft Entra ID P1 or P2 license**.
:::

You configure a rule that queries the attributes of user objects. Microsoft Entra ID periodically evaluates all users against this rule:
- If a user's attributes **match** the rule, they are automatically **added** to the group.    
- If a user's attributes change and they **no longer match** the rule, they are automatically **removed.**

The rules are built using a simple property, operator, and value format.
**Common Examples:**
- **All users in the Sales department:** `(user.department -eq "Sales")`        
- **All users located in Japan:** `(user.country -eq "JP")`
- **All full-time employees (excluding guests):** `(user.userType -eq "Member")`
- **A compound rule for all Sales Managers:** `(user.department -eq "Sales") -and (user.jobTitle -contains "Manager")`

**When to Use Dynamic User Groups**
- **Automating Departmental Groups:** Creating groups for "IT," "Finance," and "HR" that are always current.    
- **Location-Based Policies:** Creating a group for "Tokyo Office" to assign them access to local printers or applications.    
- **Group-Based Licensing:** Creating a group for "All Licensed Employees" and attaching a Microsoft 365 E5 license to it. Any new employee who meets the criteria will automatically get a license.    
- **Onboarding/Offboarding:** As soon as a new user's `department` and `jobTitle` are set by HR, they are automatically added to all the correct groups, granting them the access they need on day one. When they leave and their account is disabled, they are automatically removed.

- Additional Reading: [Dynamic membership rules for groups in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership)
#### Dynamic Device
A **Dynamic Device** group is a type of group in Microsoft Entra ID where membership is determined **automatically** based on a predefined set of **membership rules** that query **device attributes**. This allows you to automate the management of devices for policies and software distribution.

:::warning Licensing
Just like Dynamic User groups, this is a premium feature. To create and use a dynamic device group, your tenant must have an active **Microsoft Entra ID P1 or P2 license**.
:::

You configure a rule that queries the properties of device objects that are registered or joined to your Microsoft Entra ID tenant.
- If a device's attributes **match** the rule, it is automatically **added** to the group.    
- If a device's attributes change or it is removed from the directory and it **no longer matches** the rule, it is automatically **removed** from the group.
- **Common Examples:**
	- **All Windows 11 devices:** `(device.deviceOSVersion -startsWith "10.0.2")`
	- **All corporate-owned devices** (as opposed to personal/BYOD):`(device.deviceOwnership -eq "Company")`
	- **All devices from a specific vendor**, like Microsoft:`(device.deviceManufacturer -eq "Microsoft Corporation")`
	- **A compound rule** for all corporate-owned iPhones:`(device.deviceOwnership -eq "Company") -and (device.deviceOSType -eq "iPhone")`

**When to use Dynamic Device Groups**
- **Applying Policies:** Using Microsoft Intune to automatically apply a device compliance or security policy to all corporate laptops.    
- **Distributing Software:** Deploying applications to specific groups of devices, such as pushing a particular engineering application to all devices whose names start with "ENG-LT".    
- **Conditional Access:** Requiring that a device be a member of a "Compliant Devices" dynamic group to be able to access sensitive company data.

- Additional Reading: [Dynamic membership rules for groups in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership)
### Creation Methods
#### Microsoft Entra Admin Center (Portal)
The **Microsoft Entra admin center** is the primary graphical user interface (GUI) for creating and managing groups. It provides a visual, wizard-like experience that walks you through all the necessary configuration choices.

**New Group Creation**
When you navigate to **Identity** > **Groups** > **All groups** and click **+ New group**, you are presented with a single configuration blade where you must make several key decisions.
- **Group Type:** This is your first and most critical choice, as it defines the group's primary purpose.
	- **Security:** Refer to Security in Group Types
	- **Microsoft 365:** Refer to Microsoft 365 in Group Types
- **Group Name & Description:** Standard fields. A clear and descriptive name and description are administrative best practices for easier management.
- **Microsoft Entra roles can be assigned to the group:** This is a special setting with important implications:
	- It can only be enabled when creating a **Security group**.    
	- It requires a **Microsoft Entra ID P1 or P2 license**.    
	- It **cannot be changed** after the group is created.    
	- When set to "Yes," you can assign directory roles (like "User Administrator" or "Helpdesk Administrator") to this group.
- **Membership type:** This determines how members are added to the group.
	- **Assigned:** The default option. You, as an administrator or a group owner, must manually add and remove members.    
	- **Dynamic User:** Membership is controlled automatically by a rule based on user attributes. Selecting this reveals the "Add dynamic query" builder.    
	- **Dynamic Device:** Membership is controlled automatically by a rule based on device attributes.
- **Owners:** You can assign one or more users as owners. Owners can manage the group's membership and some of its settings.
- **Members:** If you chose "Assigned" as the membership type, you can immediately begin adding users, devices, or other groups as members.
- Additional Reading: [Create a basic group and add members in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups)
#### PowerShell
The modern and recommended module is the **Microsoft Graph PowerShell SDK**. The examples below use the cmdlets from this module.

**Connection:**
First, you must connect to your tenant with the permissions (scopes) required to create groups.

```powershell title="PowerShell"
# Connect with permissions to read and write all groups
Connect-MgGraph -Scopes "Group.ReadWrite.All"
```

**Group Creation**
The primary command to create a group is **`New-MgGroup`**. The parameters you use will vary depending on the type of group you're creating.

- **Create a Basic Security Group (Assigned):** This is the most common type of group, used for assigning permissions.
  
	```powershell title="PowerShell"
	New-MgGroup -DisplayName "App-Marketing-Admins" `
				-Description "Admins for the Marketing department application" `
				-MailEnabled $false `
				-SecurityEnabled $true
	```

- **Create a Dynamic User Group:** This requires defining a membership rule and specifying the group type as dynamic. This requires a **Microsoft Entra ID P1 or P2 license**.
  
	```powershell title="PowerShell"
	New-MgGroup -DisplayName "IT Department Staff" `
				-Description "All users in the IT department" `
				-MailEnabled $false `
				-SecurityEnabled $true `
				-GroupTypes "DynamicMembership" `
				-MembershipRule "(user.department -eq 'IT')" `
				-MembershipRuleProcessingState "On"
	```

- **Create a Role-Assignable Security Group:** This creates a group to which you can assign Microsoft Entra roles (like "User Administrator"). This also requires a **P1 or P2 license** and can only be set at creation.
  
	```powershell title="PowerShell"
	New-MgGroup -DisplayName "Tier 1 Helpdesk" `
				-Description "Group for assigning Helpdesk Administrator role" `
				-MailEnabled $false `
				-SecurityEnabled $true `
				-IsAssignableToRole $true
	```

- Additional Reading: [Create Groups using Microsoft Graph PowerShell](https://learn.microsoft.com/en-us/powershell/module/microsoft.graph.groups/new-mggroup?view=graph-powershell-1.0)
#### Azure CLI
Before you can manage resources, you must sign in to your Azure account. (This step is generally not required when using the CLI in the Azure Cloud Shell)

```bash title="Bash"
az login
```

**Group Creation**
The primary command for creating a group is **`az ad group create`**. You specify the group's properties using different parameters.

- **Create a Basic Security Group (Assigned):** Note that `mail-nickname` is a required parameter and must be unique in the tenant.

	```bash title="Bash"
	az ad group create --display-name "DB-Admins-WestUS" \
					--description "Database Administrators for West US resources" \
					--mail-nickname "dbadminswestus2025"
	```

- **Create a Dynamic User Group:** This requires defining membership rules using a JSON format. This functionality requires a **Microsoft Entra ID P1 or P2 license**.
  
	```bash title="Bash"
	az ad group create --display-name "UK Marketing Team" \
					--description "All users in the UK Marketing department" \
					--mail-nickname "ukmarketing2025" \
					--membership-rules "[{'property':'department','operator':'eq','value':'Marketing'},{'property':'country','operator':'eq','value':'GB'}]"
	```

	:::note Note
	The `--membership-rules` parameter accepts a JSON string defining the rules.
	:::

- **Create a Role-Assignable Security Group:** This creates a group that can be assigned Microsoft Entra roles. This also requires a **P1 or P2 license** and the setting cannot be changed after creation.
  
	```bash title="Bash"
	az ad group create --display-name "Tier 2 App Support" \
					--description "Group for Application Administrator role" \
					--mail-nickname "tier2appsupport2025" \
					--is-assignable-to-role true
	```

- Additional Reading: [az ad group create](https://learn.microsoft.com/en-us/cli/azure/ad/group?view=azure-cli-latest)
### Special Group Setting
#### Microsoft Entra roles can be assigned to the group
The setting **"Microsoft Entra roles can be assigned to the group"** elevates a standard Security group into a special object known as a **role-assignable group**.

Normally, Microsoft Entra roles (like "User Administrator," "Helpdesk Administrator," or "Global Reader") can only be assigned to individual users.

When you enable this setting on a group, you can assign a Microsoft Entra role **directly to the group itself**. Any user who becomes a member of this group is then granted the permissions of that role.

- **Key Benefits**
	- **Simplified Permissions Management:** Instead of assigning the "Password Administrator" role to 15 different helpdesk staff members one by one, you assign it once to the "Tier 1 Helpdesk" role-assignable group.    
	- **Delegated Administration:** You can make a team lead the **owner** of the role-assignable group. That team lead can then add or remove users from the group, effectively granting or revoking high-privilege directory roles for their team members without needing to be a Global Administrator themselves.    
	- **Improved Security and Auditing:** When an employee leaves a team, you simply remove them from the one group, and all associated privileged access is instantly and cleanly revoked. This reduces the risk of lingering permissions.

- **Critical Requirements and Constraints**
	- **Licensing:** Creating a role-assignable group requires a **Microsoft Entra ID P1 or P2 license**.
    - **Immutable Setting:** You can **only** enable this setting at the time of group creation. You cannot take an existing, standard group and convert it into a role-assignable group.    
	- **Group Type:** This setting can only be enabled for **Security groups**, not Microsoft 365 groups.    
	- **Creation:** When creating the group in the portal, you must explicitly set the toggle to "Yes." In PowerShell, you use the `-IsAssignableToRole $true` parameter; in Azure CLI, it's `--is-assignable-to-role true`.    
	- **Protected Membership:** To prevent privilege escalation, the membership of a role-assignable group is protected. For example, a "User Administrator" (who can normally manage group memberships) cannot add or remove members from a group that has the "Global Administrator" role assigned to it.
- Additional Reading: [Create a role-assignable group in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/groups-concept)