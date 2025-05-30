---
id: pve02-dell-optiplex-3060
title: pve02 - Dell OptiPlex 3060 (Secondary Proxmox)
sidebar_label: Dell OptiPlex 3060 (pve02)
slug: /home-lab/hardware/pve02-dell-optiplex-3060
---

## Introduction and Overview
`pve02` is the secondary Proxmox VE hypervisor in my home lab. It serves as a redundant host for virtual machines and containers, providing increased availability and the potential for Proxmox clustering with `pve01`.

## Hardware Specifications
* **Processor**: 4 x Intel(R) Core(TM) i3-8100T CPU @ 3.10GHz (1 Socket)
* **RAM**: 8GB
* **SSD (Boot)**: GEONIX M.2 SSD 256 GB (M.2 slot)
* **SSD (Storage)**: Crucial BX500 1TB 3D NAND SATA 2.5-inch SSD (SATA port)

## Operating System
* **OS**: Proxmox VE (Latest Stable Version)

## Initial Setup Guide

### How to Install Proxmox VE
1.  **Download Proxmox VE ISO**: Obtain the latest stable ISO installer from the official [Proxmox VE Downloads](https://www.proxmox.com/en/downloads) page.
2.  **Create Bootable USB Drive**:
    * Use [Rufus](https://rufus.ie/en/) (for Windows) or [BalenaEtcher](https://www.balena.io/etcher/) (for Windows/macOS/Linux) to flash the ISO to a USB drive (8GB or larger).
    * **Double-check that you select the correct USB drive to avoid data loss!**
3.  **Boot from USB**:
    * Connect the USB drive to the Dell OptiPlex 3060 (`pve02`).
    * Power on the OptiPlex and repeatedly press `F2` or `F12` to access the boot menu or BIOS/UEFI settings.
    * Prioritize booting from the USB drive.
4.  **Proxmox VE Installation**:
    * Follow the on-screen installation wizard.
    * Select the **GEONIX M.2 SSD 256 GB** as the installation target for the Proxmox VE operating system.
    * Configure network settings (IP address, netmask, gateway, DNS). It's recommended to assign a static IP address for a hypervisor.
    * Set a strong root password and provide a valid email.
    * Complete the installation and reboot the system.

### Configuring Initial Network Settings
Similar to `pve01`, initial network settings are set during installation.

1.  **Access Proxmox Web UI**: Identify the OptiPlex's IP address via the [Unifi Dream Machine](/docs/home-lab/hardware/unifi-dream-machine)'s UniFi Controller interface. Then, open your web browser and navigate to `https://<YOUR_PVE02_IP_ADDRESS>:8006`.
2.  **Login**: Use `root` and your set password.
3.  **Verify Network Configuration**: Navigate to `Datacenter -> pve02 (or your node name) -> System -> Network` to confirm the static IP and bridge setup, and make sure the IP is reserved on the [Unifi Dream Machine](/docs/home-lab/hardware/unifi-dream-machine).

### Adding and Configuring the Crucial BX500 Storage Drive

1.  **Access Proxmox Web UI**: Login to `https://<YOUR_PVE02_IP_ADDRESS>:8006`.
2.  **Navigate to Disks**: Go to `Datacenter -> pve02 -> Disks`.
3.  **Initialize Disk**: Locate the 1TB Crucial BX500 SSD. Select it and click on "Initialize Disk with GPT".
4.  **Add as LVM or ZFS**:
    * **For LVM**:
        * Navigate to `Datacenter -> Storage -> Add -> LVM Group`.
        * Select the initialized 1TB SSD.
        * Give it an ID (e.g., `local-lvm-pve02-ssd`).
        * Select `Content: Disk Image, Container`.
        * Click "Add".
    * **For ZFS**:
        * Navigate to `Datacenter -> Storage -> Add -> ZFS`.
        * Select the initialized 1TB SSD.
        * Give it an ID (e.g., `zfs-pve02-pool`).
        * Choose `RAID0`.
        * Select `Content: Disk Image, Container`.
        * Click "Add".

## Basic Proxmox VE Configuration

### Accessing the Proxmox UI
The web interface for `pve02` is now accessible at `https://<YOUR_PVE02_IP_ADDRESS>:8006`.

### Creating Initial Virtual Machines or Containers
You can now create VMs and containers on `pve02` using the available storage, similar to the process for `pve01`.

1.  **Upload ISO Images (for VMs)**: Use `Datacenter -> Storage -> local (or your chosen storage) -> ISO Images -> Upload`.
2.  **Create VM/Container**: Follow the "Create VM" or "Create CT" wizards in the Proxmox UI, ensuring you select `pve02` as the node and the new storage (`local-lvm-pve02-ssd` or `zfs-pve02-pool`) for the virtual disks.

### Joining a Proxmox Cluster (Future Plans)
One of the key advantages of having multiple Proxmox hosts is the ability to form a cluster, which allows for live migration of VMs, shared storage management, and high availability.

**Prerequisites for Clustering:**
* All Proxmox nodes must have static IP addresses.
* All nodes must be able to resolve each other's hostnames (update `/etc/hosts` on each node if you don't have a DNS server).
* Ensure consistent time synchronization (e.g., NTP) across all nodes.
* No VMs or containers should be running on `pve02` before joining the cluster if you intend to merge their storage. It's often easier to migrate them after clustering.

**Steps to Join Cluster (from `pve02` shell):**
1.  **On `pve01` (Existing Cluster Member)**:
    * Navigate to `Datacenter -> Cluster`.
    * Click "Create Cluster".
    * Note the "Join Information" which includes the `Corosync Information` and `Fingerprint`.
2.  **On `pve02` (Node to be Joined)**:
    * Open a shell (`Datacenter -> pve02 -> Shell`).
    * Run the join command, replacing placeholders with your actual information:
        ```bash
        pvecm add <IP_of_pve01> -force --nodeid <UNIQUE_NODE_ID> --corosync_transport_port <PORT> --ring0_addr <IP_of_pve02> --fingerprint <FINGERPRINT_FROM_PVE01>
        ```
        * Replace `<IP_of_pve01>` with the IP address of your `pve01` node.
        * `<UNIQUE_NODE_ID>` should be a unique integer, e.g., `2`.
        * `<PORT>` is typically `5405`.
        * `<IP_of_pve02>` is the IP address of `pve02`.
        * `<FINGERPRINT_FROM_PVE01>` is the cluster fingerprint from `pve01`.
    * You will be prompted for the root password of `pve01`.

After successful execution, `pve02` will reboot and join the `pve01` cluster. You will then see both nodes in the Proxmox Web UI under the `Datacenter` view.