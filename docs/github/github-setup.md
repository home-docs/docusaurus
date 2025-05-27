# Getting Started with GitHub

This guide will walk you through the process of setting up a new organization on GitHub, creating a repository within that organization, and finally, cloning that repository to your local machine using Visual Studio Code (VS Code).

:::note
It is not necessary to create an Organization. If you want to just use your own account, skip to **Step 2 - Creating a Repository within Your Organization** The steps are more or less the same.
:::

## 1. Creating a GitHub Organization

A GitHub organization is a shared account where groups of people can collaborate on multiple projects at once. It provides enhanced features for team management, security, and project overview.

1.  **Log in to GitHub:** Go to github.com and log in with your personal GitHub account.
2.  **Navigate to Organization Creation:**
    * Click on your profile picture in the top-right corner.
    * From the dropdown menu, select "Your organizations".
    * On the organizations page, click the green "New organization" button.
    * Alternatively, you can directly go to github.com/organizations/new.
3.  **Choose a Plan:**
    * GitHub offers different plans for organizations. For most personal or small team uses, the "Free" plan is sufficient, providing unlimited public and private repositories, and basic team features.
    * Select the "Free" plan and click "Join for free" (or similar button).
4.  **Enter Organization Details:**
    * **Organization account name:** Choose a unique and descriptive name for your organization (e.g., `home-docs`). This will be part of your organization's URL.
    * **Contact email:** Provide an email address for important notifications.
    * **Confirm your account:** You might be asked to verify your personal account password.
    * **This organization belongs to:** Select whether it's a personal account or business/institution.
    * Optional: Fill in details about your organization's purpose, number of people, etc. This helps GitHub tailor your experience.
5.  **Create Organization:** Click the "Create organization" button.

Congratulations! You have successfully created your GitHub organization. You'll be redirected to your new organization's dashboard.

## 2. Creating a Repository within Your Organization

Now that your organization is set up, you can create repositories under its ownership.

1.  **Navigate to Your Organization's Dashboard:** If you're not already there, click your profile picture in the top-right corner, then "Your organizations", and select your organization.
2.  **Start New Repository Creation:**
    * On your organization's dashboard, look for the "New repository" button (often a green button on the left sidebar or in the main content area).
    * Alternatively, you can go to `github.com/<your-organization-name>?tab=repositories` and click "New".
3.  **Configure Repository Details:**
    * **Owner:** Ensure your organization's name is selected here. This is crucial for the repository to belong to the organization, not your personal account.
    * **Repository name:** Choose a unique and descriptive name for your project (e.g., `website-docs`, `smart-home-configs`).
    * **Description (Optional):** Briefly explain what the repository is for.
    * **Public or Private:**
        * **Public:** Anyone on the internet can see this repository. You choose who can commit.
        * **Private:** Only you and people you explicitly grant access to can see and commit to this repository.
    * **Initialize this repository with:**
        * **Add a README file:** Highly recommended. A README provides an initial description of your project.
        * **Add .gitignore:** Useful for ignoring files you don't want to track (e.g., temporary files, compiled code). You can choose a template based on your project's language (e.g., Node, Python).
        * **Choose a license:** Important for open-source projects to define how others can use your code.
4.  **Create Repository:** Click the green "Create repository" button.

Your new repository is now created and visible under your organization!

:::tip
The default selection for .gitignore does not have presets for a lot of projects and it is ok to set it to none. Some projects like Docusaurus come with their own .gitignore file while some repositories might not need a .gitignore file at all.
:::

## 3. Cloning a Repository using VS Code

Cloning a repository means creating a local copy of the GitHub repository on your computer. This allows you to make changes, commit them, and then push them back to GitHub.

### Prerequisites:

:::tip
Installing git standalone is not necessary if you are only planning to use VS Code and its terminal.
:::

* **Git Installed:** Make sure you have Git installed on your computer. You can download it from [git-scm.com](https://git-scm.com/).
* **VS Code Installed:** Download and install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com/).
* **VS Code GitHub Extension (Optional but Recommended):** While not strictly necessary for basic cloning, the GitHub Pull Requests and Issues extension (and GitLens) can greatly enhance your GitHub workflow within VS Code.

### Steps to Clone:

1.  **Navigate to Your Repository on GitHub:**
    * Go to `github.com/<your-organization-name>/<your-repository-name>`.
2.  **Copy the Clone URL:**
    * On the repository page, click the green "Code" button.
    * You'll see options like HTTPS, SSH, and GitHub CLI. For most users, HTTPS is the easiest.
    * Click the copy icon next to the HTTPS URL (e.g., `https://github.com/home-docs/your-repo-name.git`).
3.  **Open VS Code:** Launch Visual Studio Code on your computer.
4.  **Initiate Clone from VS Code:**
    * **Option 1 (Welcome Screen):** If you see the VS Code Welcome screen, click on "Clone Git Repository..."
    * **Option 2 (Command Palette):** Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.
        * Type `git clone` and select "Git: Clone".
    * **Option 3 (Source Control View):** Click the Source Control icon (the three branches) in the left sidebar.
        * If no folder is open, you might see a "Clone Repository" button.
5.  **Paste the URL:**
    * A text field will appear at the top of the VS Code window. Paste the HTTPS clone URL you copied from GitHub into this field.
    * Press Enter.
6.  **Choose Local Directory:**
    * A file explorer window will open. Select the folder on your local machine where you want to save the cloned repository (e.g., `C:/Source/home-docs`).
    * Click "Select Repository Location".
7.  **Open Cloned Repository:**
    * After the cloning process completes, VS Code will ask if you would like to "Open Repository".
    * Click "Open".

Your repository is now cloned to your local machine, and VS Code will open it as a workspace. You can now start adding or modifying files, and use the Source Control view in VS Code to manage your changes, commit them, and push them back to your GitHub repository.

:::tip
There is no need to create a separate folder for your repository inside the Local Directory. For example, if cloning Docusaurus, just clone it directly into `C:/Source/home-docs` instead of cloning inside `C:/Source/home-docs/docusaurus` as this will lead to your code residing in `C:/Source/home-docs/docusaurus/docusaurus` instead of `C:/Source/home-docs/docusaurus` as expected.
:::

