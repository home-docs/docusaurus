---
id: mediaserver
title: LXC - Media Server
sidebar_label: Media Server (LXC)
slug: /home-lab/software-services/mediaserver
---

## Overview
The `mediaserver-v2` container is the heart of the home lab's media ecosystem. It is an LXC (Linux Container) running on `pve01`. It hosts several key services, primarily managed through Portainer. The 5TB ZFS mirror pool from the host is mounted into this container for media storage.

## Core Services

### Portainer
Portainer is used to manage all the Docker containers and stacks running within this LXC. It provides a user-friendly graphical interface for container management, making it easy to deploy, monitor, and troubleshoot services.

### Plex & Jellyfin
Both **Plex** and **Jellyfin** are hosted to serve media content. They are pointed to the same media libraries on the ZFS storage mount, providing two different experiences for accessing the media collection.

## Docker Stacks Managed by Portainer

### VPN Media Stack (gluetun)
To ensure privacy and security, most media-related services route their traffic through a dedicated VPN container.

- **gluetun**: This is the core of the stack, establishing a persistent VPN connection via AirVPN.
- **Media Automation**: The following services run within this stack and have their traffic routed through `gluetun`:
  - **Prowlarr**: Manages indexers for media searching.
  - **Radarr**: Automates movie downloading.
  - **Sonarr**: Automates TV show downloading.
  - **Bazarr**: Manages and downloads subtitles.
  - **Jellyseerr**: A request management and media discovery tool for Plex and Jellyfin.
  - **qBittorrent**: The client used for downloading media.
- **Utilities**:
  - **FlareSolverr**: A proxy server to bypass Cloudflare protection for web scraping.
  - **Profilarr**: A tool for managing application profiles.
  - **Chromium**: A headless Chrome browser instance for specific automation tasks.

### Other Docker Containers
- **drawio**: A self-hosted instance of Draw.io (now diagrams.net) for creating diagrams.
- **watchtower**: Automatically updates running Docker containers to their latest versions.