---
id: unifi-dream-machine
title: Unifi Dream Machine
sidebar_label: Unifi Dream Machine
slug: /home-lab/hardware/unifi-dream-machine
---

## Introduction and Overview
The Unifi Dream Machine (UDM) is the central networking device in my home lab, acting as the primary router, firewall, and Wi-Fi access point. It provides unified management for all network components, ensuring robust connectivity, security, and control over the local network environment.

## Key Features
* **Router**: Manages internet connectivity and routes traffic within the local network.
* **Wi-Fi Access Point**: Provides wireless connectivity for all devices in the home.
* **Managed Switch**: Includes built-in Ethernet ports for wired connections.
* **Integrated UniFi Controller**: Allows centralized management of the network via a web interface or mobile app.
* **Advanced Network Features**: Supports VLANs, VPN server/client, QoS, DPI (Deep Packet Inspection), and comprehensive firewall rules.

## Usage in Home Lab
The UDM is critical for the home lab's operation, responsible for:
* **Network Segmentation**: Setting up VLANs to isolate different segments of the network (e.g., IoT devices, guest network, lab network) for enhanced security.
* **Firewall Management**: Implementing firewall rules to control inbound and outbound traffic, protecting internal resources.
* **DNS Management**: Handling DNS resolution for local devices and potentially overriding public DNS for internal services.
* **Static IP Address Assignment**: Assigning static IP addresses to all persistent home lab devices.

## Network Configuration Details
* **IP Address Scheme**: The network uses an IP address scheme with a base address of `10.0.0.1` and a **subnet mask** of `/22`. A subnet mask defines the range of IP addresses within a network and helps routers determine where to send data packets. A `/22` netmask means that 22 bits are used for the network portion of the IP address, leaving 10 bits for host addresses ($2^{10} = 1024$ total addresses). After accounting for the network address and broadcast address, this provides **1022 usable IP addresses** for devices on this subnet (from `10.0.0.1` to `10.0.3.254`).
* **Static IP Assignment Workflow**: When a new machine (e.g., Dell OptiPlex) is added to the network, its IP address can be identified via the UniFi Controller. This IP address is then converted to a static IP reservation within the UDM's UniFi Controller interface by binding it to the device's MAC address. This ensures the device always receives the same IP address, which is crucial for internal service references and firewall rules.

## Maintenance and Management
Network configuration and management are primarily done through the UniFi Controller web interface (accessible by navigating to the UDM's IP address in a browser) or the UniFi Network mobile app. Regular updates of the UDM's firmware are performed to ensure security and access to new features.

For detailed configuration steps, refer to the official [Ubiquiti UniFi Documentation](https://help.ui.com/).