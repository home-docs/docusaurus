---
id: home-assistant-os
title: Home Assistant OS
sidebar_label: Home Assistant OS
slug: /home-lab/software-services/home-assistant-os
---

## Overview
Home Assistant OS is a minimal operating system designed to run Home Assistant. It includes Home Assistant Supervisor, which allows for easy management of Home Assistant Core, add-ons, and the underlying operating system. This is currently running on the [Raspberry Pi 4 (8GB)](/docs/home-lab/hardware/raspberry-pi-4-64) in the home lab.

## Key Features
* **Simple Setup**: Easy to install and get started with smart home automation.
* **Add-ons**: A wide range of community-driven and official add-ons for extended functionality (e.g., Mosquitto MQTT broker, Zigbee2MQTT, Node-RED).
* **Supervisor**: Provides a web-based interface for managing Home Assistant, backups, updates, and more.
* **Integrations**: Supports thousands of integrations with various smart home devices and services.

## Usage in Home Lab
Home Assistant OS on the Raspberry Pi 4 is the central brain of the smart home. It handles:
* Automating lights, climate control, and security systems.
* Collecting data from sensors (temperature, humidity, motion).
* Providing a unified dashboard for controlling all smart devices.
* Running various automations and scripts to enhance daily life.

## Maintenance and Updates
Regularly update Home Assistant OS and its components through the Home Assistant Supervisor UI to ensure security and access to new features. Always perform a backup before major updates.

For detailed setup and configuration, refer to the [Raspberry Pi 4 (8GB) documentation](/docs/home-lab/hardware/raspberry-pi-4-64) and the [official Home Assistant documentation](https://www.home-assistant.io/docs/).