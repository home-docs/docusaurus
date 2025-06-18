---
title: Setting Up This Documentation Site
---

This guide details the process of setting up this Docusaurus website, from initializing the repository to deploying it on a custom domain using GitHub Actions.

### Step 1: Repository Setup

The first step is to create a GitHub repository to host the Docusaurus project files.

For a detailed walkthrough on creating an organization, setting up a repository, and cloning it to your local machine using Visual Studio Code, please refer to the **[Getting Started with GitHub](../github/github-setup.md)** guide.

**Key Points to Remember:**

* **Organization vs. Personal Account**: While this repository is part of the `home-docs` organization, you can also create it under your personal GitHub account. The steps are nearly identical.
* **Cloning the Repository**: When you clone the repository to your local machine, it is best to clone it directly into your projects folder (e.g., `C:/Source/`). Avoid creating a new folder named `docusaurus` beforehand, as the clone command will create this folder for you, which could result in a nested path like `docusaurus/docusaurus`.

### Step 2: Initializing Docusaurus

Once the empty repository is cloned to your local machine, you can initialize the Docusaurus site.

1.  Navigate to the repository's root directory in your terminal.
2.  Run the Docusaurus initialization command:
    ```bash
    npm init docusaurus@latest my-website classic
    ```
    This command scaffolds a new Docusaurus project within a folder named `my-website`.

3.  Since the project should live in the root of the repository, move the contents of the `my-website` directory up to the root level.
    ```bash
    # On macOS or Linux
    mv my-website/* my-website/.* .
    
    # On Windows (using Command Prompt)
    move my-website\\* .
    ```
4.  After moving the files, you can safely delete the now-empty `my-website` folder.

### Step 3: Domain and GitHub Pages Configuration

To host the site on a custom domain, you need to configure both your domain provider and GitHub.

1.  **Domain Provider**: The domain for this site, `mnik28.dev`, was purchased from Porkbun and is managed using Cloudflare's DNS services. The DNS for `ketwork.in` is also managed by Cloudflare.
    > _**Note**: A detailed guide on domain registration and DNS management will be added in the future._

2.  **GitHub Pages**:
    * In your GitHub repository, navigate to **Settings** > **Pages**.
    * Under "Build and deployment", set the **Source** to **GitHub Actions**.
    * Under the "Custom domain" section, enter your domain name (e.g., `mnik28.dev`) and click **Save**. GitHub will provide you with the necessary DNS records (typically `A`, `AAAA`, or `CNAME` records) that you need to configure with your DNS provider (in this case, Cloudflare).

### Step 4: Automating Deployments with GitHub Actions

The deployment process is automated using GitHub Actions. Create a `.github` folder at the root of your project if it does not already exist. Inside this folder create another folder called `workflows` and create a `deploy-to-main-docs-folder.yml` file here. The content for this file is as below.

```yaml
name: Build and Deploy to mnik28.dev

on:
  push:
    branches:
      - main
  workflow_dispatch:
  
jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build

    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Workflow Breakdown:**

* **`on`**: This section defines the triggers for the workflow. It runs on any `push` to the `main` branch or when manually triggered via `workflow_dispatch`.
* **`permissions`**: This grants the necessary permissions to the `GITHUB_TOKEN` so the action can authenticate and deploy to GitHub Pages. `pages: write` and `id-token: write` are needed for the `deploy-pages` action.
* **`jobs`**:
    * **`build`**: This job handles the build process. It checks out the code, sets up Node.js v18, installs dependencies using `npm ci` for fast and reliable installs, and runs `npm run build` to generate the static site files. Finally, it uploads the `build` directory as a Pages artifact.
    * **`deploy`**: This job depends on the successful completion of the `build` job. It is configured for the `github-pages` environment and uses the standard `actions/deploy-pages@v4` action to deploy the artifact to GitHub Pages.

### Step 5: The Final Workflow

With this configuration, any commit pushed to the `main` branch automatically triggers the GitHub Action. The action builds the Docusaurus site and deploys the static files, making the updated content live on `mnik28.dev` within minutes.