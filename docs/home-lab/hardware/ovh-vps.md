---
id: ovh-vps
title: OVH VPS
sidebar_label: OVH VPS
slug: /home-lab/hardware/ovh-vps
---

## Introduction and Overview
The OVH VPS serves as an external component of the home lab, providing a public-facing server for services that require external access or for off-site backups/monitoring. It offers a small but capable environment for various online tasks.

## Hardware Specifications
* **Model**: VPS vps2020-starter-1-2-20
* **CPU**: 1 vCores
* **Memory**: 2GB
* **Storage**: 20GB

## Operating System
* **OS**: Ubuntu Server (Latest LTS version, managed by OVH Cloud)

## Initial Setup Guide (Conceptual)
Since this is a managed VPS, the initial hardware setup (powering on, connecting to network) is handled by OVH. Your primary setup steps would involve:

1.  **Accessing the VPS**: Typically via SSH using the credentials provided by OVH.
2.  **Initial OS Configuration**:
    * Updating system packages:
        ```bash
        sudo apt update && sudo apt upgrade -y
        ```
    * Setting up a non-root user with sudo privileges.
    * Configuring SSH key-based authentication and disabling password login (highly recommended for security).
    * Setting up a basic firewall (e.g., UFW - Uncomplicated Firewall) to allow only necessary inbound traffic (SSH, web server ports, etc.).
3.  **Software Installation**: Install any services or applications you plan to run on the VPS (e.g., a VPN server, a small web application, monitoring agents).

## Networking
The OVH VPS has its own public IP address and is outside your local home network. Communication with internal home lab devices would typically be established via VPN tunnels or secured port forwarding on the Unifi Dream Machine.