---
id: pve01-dell-optiplex-3060
title: pve01 - Dell OptiPlex 3060 (Primary Proxmox)
sidebar_label: Dell OptiPlex 3060 (pve01)
slug: /home-lab/hardware/pve01-dell-optiplex-3060
---

## Introduction and Overview
`pve01` is the primary Proxmox VE hypervisor in the home lab cluster. It is a Dell OptiPlex 3060 that hosts the lab's core media and networking infrastructure.

## Hardware Specifications
* **Model**: Dell OptiPlex 3060
* **Processor**: 4 x Intel(R) Core(TM) i3-8100T CPU @ 3.10GHz (1 Socket)
* **RAM**: 8GB
* **SSD (Boot)**: Samsung MZNTY256HDHP-000L7 - 256GB M.2
* **SSD (VM/LXC Storage)**: Samsung 860 EVO 1TB SATA SSD
* **HDD Storage**:
    * **Disk 1**: Seagate One Touch 5TB External HDD (USB 3.0)
    * **Disk 2**: Seagate One Touch 5TB External HDD (USB 3.0)

## Storage Configuration
* **Proxmox OS**: Installed on the 256GB M.2 SSD.
* **ZFS Mirror Pool**: The two 5TB external HDDs are configured as a **ZFS Mirror Pool**, providing 5TB of usable, redundant storage. This pool is dedicated to storing media files and is passed through to the `mediaserver-v2` LXC.
* **VM/LXC Storage**: The 1TB Samsung SSD is used for storing the virtual disks of all containers and VMs running on this host for faster performance.

## Hosted Services
* **[LXC: Media Server](/docs/home-lab/software-services/mediaserver)**: The main media server running Plex, Jellyfin, and Portainer which manages numerous Docker containers.
* **[LXC: Tailscale Exit Node](/docs/home-lab/software-services/networking-services)**: Acts as a secure gateway and subnet router for the Tailscale network.