---
id: raspberry-pi-4-64
title: Raspberry Pi 4 (8GB)
sidebar_label: Raspberry Pi 4 (8GB)
slug: /home-lab/hardware/raspberry-pi-4-64
---

## Introduction and Overview
This Raspberry Pi 4 with 8GB RAM serves as the dedicated Home Assistant server for my home lab. It acts as the central hub for smart home automation, integrating various devices and services into a unified control system. Its low power consumption and small form factor make it ideal for this always-on role.

## Hardware Specifications
* **Processor**: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC
* **RAM**: 8GB
* **SSD**: Samsung_SSD_840_EVO_120GB (Connected via USB 3.0 port) (Boot Drive)

## Operating System
* **OS**: HomeAssistant OS

## Initial Setup Guide

### How to Flash HomeAssistant OS to the SSD
1.  **Download Home Assistant OS**: Go to the official Home Assistant website and download the latest Home Assistant OS image for Raspberry Pi 4.
2.  **Prepare the SSD**:
    * Connect the Samsung_SSD_840_EVO_120GB to your computer using a USB 3.0 to SATA adapter.
    * Download and install [BalenaEtcher](https://www.balena.io/etcher/) (or a similar flashing tool).
    * Open BalenaEtcher, select the downloaded Home Assistant OS image, and then select your connected SSD as the target drive. **Ensure you select the correct drive to avoid data loss!**
    * Click "Flash!" and wait for the process to complete.
3.  **Boot the Raspberry Pi**:
    * Safely eject the SSD from your computer.
    * Connect the flashed SSD to one of the blue USB 3.0 ports on the Raspberry Pi 4.
    * Connect the Raspberry Pi to your network via an Ethernet cable.
    * Connect the power supply to the Raspberry Pi. It should automatically boot from the SSD.

### Initial Boot-up and Network Configuration
During the first boot, Home Assistant OS will expand the filesystem and download necessary components. This process can take some time (up to 20-30 minutes, depending on your internet connection).

You can monitor the boot process by connecting a display to the Raspberry Pi, but it's generally not necessary.

Once the boot process is complete, Home Assistant should be accessible on your local network.

1.  **Access the Home Assistant UI**: Identify the Raspberry Pi's IP address through your [Unifi Dream Machine](/docs/home-lab/hardware/unifi-dream-machine)'s UniFi Controller interface. Then, open a web browser on a device connected to the same network and navigate to `http://homeassistant.local:8123` or `http://<YOUR_RPI_IP_ADDRESS>:8123`.

## Basic Home Assistant Configuration

### Accessing the Home Assistant UI
Upon first access, Home Assistant will prompt you to create a new user account.
1.  **Create Account**: Follow the on-screen instructions to create your administrator account (username and password).
2.  **Name your Home Assistant instance**: Give your Home Assistant instance a name (e.g., "My Smart Home").
3.  **Location and Units**: Set your location on the map and choose your preferred units (metric/imperial).

### Setting Up Basic Integrations
Home Assistant will automatically discover some devices and services on your network.
1.  **Review Discovered Devices**: On the "Integrations" page (usually the first page after setup, or navigate via `Configuration -> Devices & Services -> Integrations`), review any automatically discovered devices.
2.  **Add Network Integration**: Ensure your network configuration is stable. For most users, DHCP is sufficient. If you need a static IP, you can configure it via the Home Assistant OS terminal or the Home Assistant Supervisor UI, and then make it static on the [Unifi Dream Machine](/docs/home-lab/hardware/unifi-dream-machine).
    * **Via Supervisor (Recommended)**: Go to `Supervisor -> System -> Host` and click on "IP Address". You can configure your network settings there.
3.  **Add Initial Devices**: Start adding your smart home devices (e.g., smart lights, switches, sensors) by searching for their respective integrations in `Configuration -> Devices & Services -> Integrations -> Add Integration`. Follow the specific instructions for each device.

For more advanced configurations and troubleshooting, refer to the official Home Assistant documentation.