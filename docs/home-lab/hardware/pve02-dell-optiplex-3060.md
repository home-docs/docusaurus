---
id: pve02-dell-optiplex-3060
title: pve02 - Dell OptiPlex 3060 (Secondary Proxmox)
sidebar_label: Dell OptiPlex 3060 (pve02)
slug: /home-lab/hardware/pve02-dell-optiplex-3060
---

## Introduction and Overview
`pve02` is the secondary Proxmox VE hypervisor and is clustered with `pve01` for high availability. This Dell OptiPlex 3060 hosts various utility services and manages the lab's printer.

## Hardware Specifications
* **Model**: Dell OptiPlex 3060
* **Processor**: 4 x Intel(R) Core(TM) i3-8100T CPU @ 3.10GHz (1 Socket)
* **RAM**: 8GB
* **SSD (Boot)**: GEONIX M.2 SSD 256 GB
* **SSD (VM/LXC Storage)**: Crucial BX500 1TB 3D NAND SATA 2.5-inch SSD

## Physical Connections
* **Printer**: An HP 1212 Printer is connected directly to this machine via USB 2.0. This connection is managed by the CUPS Print Server VM.

## Hosted Services
* **[LXC: heimdall (Internal Proxy)](/docs/home-lab/software-services/utility-services)**: An LXC container running Caddy as an internal reverse proxy.
* **[LXC: n8n](/docs/home-lab/software-services/utility-services)**: A dedicated Debian container for the n8n workflow automation platform.
* **[LXC: Stirling-PDF](/docs/home-lab/software-services/utility-services)**: A Debian container for the Stirling-PDF application.
* **[VM: CUPS Print Server](/docs/home-lab/software-services/utility-services)**: A dedicated Ubuntu Server VM that manages the attached printer and makes it accessible across the network.