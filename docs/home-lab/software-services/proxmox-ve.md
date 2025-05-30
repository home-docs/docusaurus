---
id: proxmox-ve
title: Proxmox VE
sidebar_label: Proxmox VE
slug: /home-lab/software-services/proxmox-ve
---

## Overview
Proxmox Virtual Environment (VE) is an open-source server virtualization management solution. It's a Debian-based Linux distribution with a modified Ubuntu LTS kernel and allows for the deployment and management of virtual machines (VMs) and containers (LXC). In this home lab, it is installed on both [pve01](/docs/home-lab/hardware/pve01-dell-optiplex-3060) and [pve02](/docs/home-lab/hardware/pve02-dell-optiplex-3060).

## Key Features
* **Virtual Machine Management**: Full virtualization using KVM (Kernel-based Virtual Machine) for various guest operating systems.
* **Container Management**: Lightweight virtualization using LXC (Linux Containers) for efficient resource utilization.
* **Web-based User Interface**: Centralized management through an intuitive web interface.
* **Clustering**: Ability to cluster multiple Proxmox nodes for high availability and live migration of VMs/containers.
* **Storage Management**: Supports various storage types including local storage (Directory, LVM, ZFS), NFS, iSCSI, and Ceph.
* **Backup and Restore**: Built-in tools for backing up and restoring VMs and containers.

## Usage in Home Lab
Proxmox VE is the core virtualization platform for the home lab, providing the flexibility to:
* Host multiple virtual machines for different services (e.g., Windows Server, various Linux distributions for self-hosted applications).
* Deploy lightweight containers for isolated application environments.
* Experiment with different operating systems and software configurations without impacting the physical hardware.
* (Future) Potentially create a high-availability cluster for critical services.

## Initial Setup and Configuration
For detailed steps on installing Proxmox VE and configuring storage on each node, refer to their respective hardware documentation:
* [pve01 - Dell OptiPlex 3060 (Primary Proxmox)](/docs/home-lab/hardware/pve01-dell-optiplex-3060)
* [pve02 - Dell OptiPlex 3060 (Secondary Proxmox)](/docs/home-lab/hardware/pve02-dell-optiplex-3060)

For advanced configurations, networking, and clustering, consult the [official Proxmox VE documentation](https://pve.proxmox.com/pve-docs/).