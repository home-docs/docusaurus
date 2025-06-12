---
id: utility-services
title: Utility Services
sidebar_label: Utility Services
slug: /home-lab/software-services/utility-services
---

## Overview
This page documents the various utility containers and VMs running on `pve02`, which handle tasks from workflow automation to print services. 

### Internal Reverse Proxy (`heimdall` LXC)
This container is named `heimdall` to signify its role as a network gateway.
- **Caddy**: This container's primary role is to run an instance of Caddy that serves as a reverse proxy for **internal-only services**. It provides easy-to-remember hostnames on the local network without exposing them externally. 
- **Future Plans**: This LXC is also earmarked to run an **Unbound** DNS server for internal DNS resolution, which will eventually replace the reliance on Cloudflare for internal queries.

### n8n (LXC)
A dedicated Debian container hosts **n8n**, a powerful workflow automation tool.  It is used to create custom automations and integrations between various services in the lab.

### Stirling-PDF (LXC)
This Debian container runs **Stirling-PDF**, a self-hosted, web-based PDF manipulation tool that allows for operations like merging, splitting, and converting PDFs. 

### CUPS Print Server (VM)
A lightweight Ubuntu Server VM is dedicated to running the **CUPS (Common Unix Printing System)**. 
- **Purpose**: It manages the HP 1212 printer, which is physically connected to `pve02` via USB. 
- **Function**: By running CUPS in a dedicated VM, the printer is made available as a standard network printer to all devices on the LAN, regardless of their operating system.