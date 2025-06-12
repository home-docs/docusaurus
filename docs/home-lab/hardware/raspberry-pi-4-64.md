---
id: raspberry-pi-4-64
title: Raspberry Pi 4 (8GB)
sidebar_label: Raspberry Pi 4 (8GB)
slug: /home-lab/hardware/raspberry-pi-4-64
---

## Introduction and Overview
This Raspberry Pi 4 with 8GB RAM serves as the dedicated Home Assistant server for my home lab. Its low power consumption and small form factor make it ideal for this always-on role.

## Hardware Specifications
* **Processor**: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC
* **RAM**: 8GB
* **Storage**: Samsung 840 EVO 120GB SSD (Connected via USB 3.0)

## Role and Services
* **Primary Role**: Runs **Home Assistant OS**, acting as the central hub for all smart home automation.
* **Networking**: It is a node in the Tailscale mesh network and is configured to act as a **backup exit node**, providing redundant secure access to the home lab.