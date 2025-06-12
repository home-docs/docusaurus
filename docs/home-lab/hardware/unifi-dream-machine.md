---
id: unifi-dream-machine
title: Unifi Dream Machine
sidebar_label: Unifi Dream Machine
slug: /home-lab/hardware/unifi-dream-machine
---

## Introduction and Overview
The Unifi Dream Machine (UDM) is the central networking device in my home lab, acting as the primary router, firewall, and Wi-Fi access point. It is the gateway for all internet traffic from the ACT Fibernet ISP.

## Role in Network Topology
The UDM is the core of the physical network. It provides:
* **Internet Gateway**: Connects the home lab to the external network.
* **Core Switching**: All key hardware, including the TP-Link Managed Switch, Raspberry Pi, and Proxmox hosts, are connected to it.
* **DNS Management**: Handles DNS resolution for all local devices, forwarding external requests to Cloudflare's DNS servers.
* **Network Segmentation**: Manages VLANs for isolating different parts of the network (e.g., main lab, IoT, guest networks).
* **Static IP Reservations**: Assigns static IPs via MAC address reservation to all servers and critical devices, ensuring consistent network locations.

## Network Configuration Details
* **IP Address Scheme**: The network uses an IP address scheme with a base address of `10.0.0.1` and a **subnet mask** of `/22`, providing 1022 usable IP addresses.