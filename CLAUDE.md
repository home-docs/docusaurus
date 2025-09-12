# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal documentation website built with Docusaurus v3.8.1. The site serves as:
- A personal home lab documentation hub
- Azure certification study notes (AZ-104)
- Professional resume showcase
- Tools and technologies reference

## Development Commands

**Package Manager**: Use `npm` - standard package manager for this project

### Essential Commands
- `npm install` - Install dependencies
- `npm start` - Start local development server with live reload
- `npm run build` - Build static site to `build/` directory
- `npm run serve` - Serve built site locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run clear` - Clear Docusaurus cache

### Deployment
- `npm run deploy` - Deploy to GitHub Pages (requires GIT_USER env var)
- `USE_SSH=true npm run deploy` - Deploy using SSH

## Architecture

### Core Structure
- **Configuration**: `docusaurus.config.ts` - Main site configuration
- **Sidebar**: `sidebars.ts` - Complex nested sidebar structure with categories and generated indexes
- **Content**: `docs/` directory organized by topic areas
- **Pages**: `src/pages/` - Custom React pages (homepage, resume)
- **Styling**: `src/css/custom.css` - Site-wide custom styles
- **Client Modules**: `src/client-modules/navbar-hider.ts` - Custom client-side functionality

### Content Organization
The docs are hierarchically structured:
```
docs/
├── home-lab/           # Hardware & software documentation
├── tools-technologies/ # GitHub, Docusaurus guides  
└── notes/
    └── certification/
        └── AZ-104/     # Extensive Azure certification notes
```

### Custom Features
- **Custom Resume Page**: `src/pages/resume.tsx` with dedicated styling
- **Navbar Logo Override**: `src/theme/Navbar/Logo/index.tsx` 
- **Client-side Navbar Logic**: Custom navbar hiding functionality
- **View Transitions**: Experimental feature enabled in theme config

### Site Configuration
- **Deployment**: GitHub Pages at `home-docs.github.io`
- **Styling**: GitHub light theme, Dracula dark theme
- **Languages**: PowerShell, Bash, YAML, JSON syntax highlighting
- **Navigation**: Resume and LinkedIn links in navbar

## TypeScript Setup
- Extends `@docusaurus/tsconfig` 
- JSX configured for React 17+ (`react-jsx`)
- Excludes `.docusaurus` and `build` directories

## Content Management
The sidebar configuration in `sidebars.ts` uses extensive category nesting with generated index pages. When adding new documentation, follow the existing pattern of using `type: 'category'` with `generated-index` links for overview pages.