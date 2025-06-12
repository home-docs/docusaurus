---
id: networking-services
title: Networking Overview
sidebar_label: Networking Overview
slug: /home-lab/software-services/networking-services
---

## Overview
The home lab's network is designed for security, remote access, and local service management. It uses a combination of physical hardware and software-defined networking to achieve this.

### Core Infrastructure
- **Internet Provider**: The lab is connected to the internet via ACT Fibernet. 
- **Unifi Dream Machine (UDM)**: The primary router and firewall. It manages all local network traffic, DHCP, and Wi-Fi. 
- **TP-Link Managed Switch**: Extends the wired network, connecting the Proxmox hosts (`pve01`, `pve02`) to the UDM. 

### External Access & DNS
- **Cloudflare**: Manages the DNS for the `ketwork.in` domain. All public-facing services are routed through Cloudflare. 
- **OVH VPS & Caddy**: A Caddy instance on the public OVH VPS acts as the external reverse proxy.  It terminates SSL for `ketwork.in` and proxies requests to the appropriate internal service directly over the Tailscale network. 

### Secure Remote Access (Tailscale)
Tailscale is used to create a secure mesh network between devices, regardless of their physical location.
- **OVH VPS Node**: Allows the external Caddy proxy to connect to internal services. 
- **Tailscale Exit Node (LXC on pve01)**: This is the primary entry point for proxied traffic into the home lab. It also acts as a **subnet router**, making the entire `10.0.0.0/22` home lab LAN accessible to authorized Tailscale clients. 
- **Raspberry Pi 4 Node**: This Home Assistant device also runs Tailscale and is configured as a backup exit node.