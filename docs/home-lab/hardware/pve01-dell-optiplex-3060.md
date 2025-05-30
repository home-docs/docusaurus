---
id: pve01-dell-optiplex-3060
title: pve01 - Dell OptiPlex 3060 (Primary Proxmox)
sidebar_label: Dell OptiPlex 3060 (pve01)
slug: /home-lab/hardware/pve01-dell-optiplex-3060
---

## Introduction and Overview
`pve01` is the primary Proxmox VE hypervisor in my home lab. It hosts a variety of virtual machines and containers, serving as the backbone for my self-hosted services and experimental environments.

## Hardware Specifications
* **Processor**: 4 x Intel(R) Core(TM) i3-8100T CPU @ 3.10GHz (1 Socket)
* **RAM**: 8GB
* **SSD (Boot)**: Samsung MZNTY256HDHP-000L7 - 256GB M.2 2280 SATA III NGFF Solid State SSD (M.2 slot)
* **SSD (Storage)**: Samsung 860 EVO 1TB SATA 2.5" Internal Solid State Drive (SSD) (SATA port)
* **HDD (Storage 1)**: Seagate One Touch 5TB External HDD (USB 3.0)
* **HDD (Storage 2)**: Seagate One Touch 5TB External HDD (USB 3.0)

## Operating System
* **OS**: Proxmox VE (Latest Stable Version)

## Initial Setup Guide

### How to Install Proxmox VE
1.  **Download Proxmox VE ISO**: Go to the official [Proxmox VE Downloads](https://www.proxmox.com/en/downloads) page and download the latest stable ISO installer.
2.  **Create Bootable USB Drive**:
    * Download and install [Rufus](https://rufus.ie/en/) (for Windows) or [BalenaEtcher](https://www.balena.io/etcher/) (for Windows/macOS/Linux).
    * Insert a USB drive (8GB or larger).
    * Open the chosen tool, select the downloaded Proxmox VE ISO, and select your USB drive. Flash the image.
3.  **Boot from USB**:
    * Connect the USB drive to the Dell OptiPlex 3060.
    * Power on the OptiPlex and repeatedly press `F2` or `F12` (depending on your BIOS/UEFI settings) to enter the boot menu or BIOS/UEFI setup.
    * Select the USB drive as the boot device.
4.  **Proxmox VE Installation**:
    * Follow the on-screen prompts.
    * Select the **Samsung MZNTY256HDHP-000L7 (256GB M.2 SSD)** as the installation target for the Proxmox VE operating system.
    * Configure network settings (IP address, netmask, gateway, DNS). It's recommended to assign a static IP address for a hypervisor.
    * Set a strong root password and provide a valid email address.
    * Review the summary and proceed with the installation. The system will reboot upon completion.

### Configuring Initial Network Settings
During installation, you set up basic networking. After rebooting, you can access the Proxmox Web UI to further refine network settings if needed.

1.  **Access Proxmox Web UI**: Open a web browser and navigate to `https://<YOUR_PVE01_IP_ADDRESS>:8006`.
2.  **Login**: Use `root` as the username and the password you set during installation.
3.  **Network Configuration**:
    * Navigate to `Datacenter -> pve01 (or your node name) -> System -> Network`.
    * You can edit existing network devices (`vmbr0` for your bridge) or add new ones.
    * Ensure your bridge is correctly configured for your network (e.g., using a static IP within your home lab's IP range).

### Adding and Configuring Storage Drives

#### Samsung 860 EVO 1TB SSD (SATA)
This SSD will be used for fast VM and container storage.

1.  **Access Proxmox Web UI**: Login to `https://<YOUR_PVE01_IP_ADDRESS>:8006`.
2.  **Navigate to Disks**: Go to `Datacenter -> pve01 -> Disks`.
3.  **Initialize Disk**: Locate the 1TB Samsung 860 EVO SSD. It might be listed as `/dev/sdb` or similar. Select it and click on "Initialize Disk with GPT".
4.  **Add as LVM or ZFS (Recommended)**:
    * **For LVM (Logical Volume Manager)**:
        * Navigate to `Datacenter -> Storage -> Add -> LVM Group`.
        * Select the initialized 1TB SSD.
        * Give it an ID (e.g., `local-lvm-ssd`).
        * Select `Content: Disk Image, Container` if you plan to store VMs and containers.
        * Click "Add".
    * **For ZFS (ZFS on Linux)**:
        * This is more robust for data integrity but requires more RAM. Ensure you have enough RAM (ideally 1GB per TB of ZFS storage, though less can work for small setups).
        * Navigate to `Datacenter -> Storage -> Add -> ZFS`.
        * Select the initialized 1TB SSD.
        * Give it an ID (e.g., `zfs-ssd-pool`).
        * Choose a RAID level (e.g., `RAID0` for a single disk, or `RAID1` if you later add another similar SSD).
        * Select `Content: Disk Image, Container`.
        * Click "Add".

#### Seagate One Touch 5TB External HDDs (USB 3.0)
These will be used for slower, bulk storage, backups, or ISO images. USB drives are generally not recommended for high-performance VM storage.

1.  **Connect HDDs**: Ensure both 5TB Seagate USB HDDs are connected to the USB 3.0 ports on `pve01`.
2.  **Access Proxmox Web UI**: Login to `https://<YOUR_PVE01_IP_ADDRESS>:8006`.
3.  **Identify USB Drives**: Go to `Datacenter -> pve01 -> Disks`. Note their device names (e.g., `/dev/sdc`, `/dev/sdd`).
4.  **Format and Add as Directory Storage**:
    * You'll need to format these drives from the command line on Proxmox. Open a shell from the Proxmox UI (`Datacenter -> pve01 -> Shell`).
    * **For each HDD**:
        ```bash
        # Identify the correct disk (e.g., /dev/sdc). BE CAREFUL!
        lsblk
        # Create a new GPT partition table
        sgdisk -Z /dev/sdc
        sgdisk -g /dev/sdc
        # Create a single partition
        sgdisk -n 1:0:0 /dev/sdc
        # Format the partition with ext4 (or XFS)
        mkfs.ext4 -F /dev/sdc1 # For the first partition on sdc
        # Create a mount point
        mkdir /mnt/pve/usb_hdd_01
        # Mount the drive (add to /etc/fstab for persistent mounts)
        echo "/dev/sdc1 /mnt/pve/usb_hdd_01 ext4 defaults 0 2" >> /etc/fstab
        mount -a
        ```
    * Repeat the formatting and mounting steps for the second 5TB HDD (e.g., `/dev/sdd1` to `/mnt/pve/usb_hdd_02`).
5.  **Add Directory Storage in Proxmox**:
    * Navigate to `Datacenter -> Storage -> Add -> Directory`.
    * For the first HDD:
        * **ID**: `usb-hdd-01`
        * **Directory**: `/mnt/pve/usb_hdd_01`
        * **Content**: `ISO image, Backup` (or whatever content you plan to store)
        * Click "Add".
    * Repeat for the second HDD:
        * **ID**: `usb-hdd-02`
        * **Directory**: `/mnt/pve/usb_hdd_02`
        * **Content**: `ISO image, Backup`
        * Click "Add".

## Basic Proxmox VE Configuration

### Accessing the Proxmox UI
As mentioned, the Proxmox Web UI is accessible at `https://<YOUR_PVE01_IP_ADDRESS>:8006`. All subsequent configurations can be done through this interface.

### Creating Initial Virtual Machines or Containers
1.  **Upload ISO Images (for VMs)**:
    * Navigate to `Datacenter -> Storage -> your_iso_storage (e.g., usb-hdd-01)`.
    * Click "Upload" to upload operating system ISOs (e.g., Ubuntu Server, Windows Server) to your designated ISO storage.
2.  **Create a VM**:
    * Click the "Create VM" button in the top right corner of the Proxmox UI.
    * Follow the wizard:
        * **General**: Node (pve01), VM ID, Name.
        * **OS**: Select "Use CD/DVD disc image file" and choose your uploaded ISO. Select the correct Guest OS type.
        * **System**: Default settings are usually fine.
        * **Disks**: Choose your SSD storage (`local-lvm-ssd` or `zfs-ssd-pool`) for better performance. Allocate appropriate disk size.
        * **CPU**: Assign CPU cores.
        * **Memory**: Assign RAM.
        * **Network**: Use the `Bridged Mode` (vmbr0) to connect to your physical network.
        * **Confirm**: Review settings and click "Finish".
3.  **Start the VM**: Select the newly created VM from the sidebar and click "Start". Open the "Console" to interact with the OS installation.
4.  **Create a Container (LXC)**:
    * Download a container template: Navigate to `Datacenter -> Storage -> local (or another storage) -> CT Templates`. Click "Templates" and choose a template (e.g., `ubuntu-22.04-standard`). Click "Download".
    * Click the "Create CT" (Create Container) button.
    * Follow the wizard:
        * **General**: Node (pve01), CT ID, Hostname, Password.
        * **Template**: Select the downloaded template.
        * **Disk**: Allocate disk space (use `local-lvm-ssd` for better performance).
        * **CPU**: Assign CPU cores.
        * **Memory**: Assign RAM.
        * **Network**: Configure network (static IP recommended).
        * **DNS**: Use your preferred DNS servers.
        * **Confirm**: Review settings and click "Finish".
    * Start the container and access its console to perform initial configurations.

This setup provides a solid foundation for building out your home lab environment.