---
id: ovh-vps
title: OVH VPS
sidebar_label: OVH VPS
slug: /home-lab/hardware/ovh-vps
---

## Introduction and Overview
The OVH VPS is a small cloud server located in Singapore that serves as the public-facing entry point for the entire home lab. Its primary function is to securely route external traffic to internal services without exposing the home lab's IP address directly.

## Hardware Specifications
* **Model**: VPS vps2020-starter-1-2-20
* **CPU**: 1 vCores
* **Memory**: 2GB
* **Storage**: 20GB
* **OS**: Ubuntu Server LTS

## Core Services

### Caddy (External Reverse Proxy)
Caddy is installed on this VPS to act as the primary reverse proxy for the `ketwork.in` domain. It handles all incoming HTTPS traffic, automatically provisions and renews SSL certificates, and proxies requests to the appropriate internal service.

### Tailscale
Tailscale is the backbone of the secure connection between this public VPS and the private home lab. The VPS is a node on the Tailscale network, which allows Caddy to forward traffic to services running on the internal `10.0.0.0/22` subnet via the secure tunnel.

## Networking
This VPS has a public IP address managed by OVH. All communication with the internal home lab devices is done exclusively over the **Tailscale mesh network**. There are no direct open ports to the home lab from this VPS, ensuring a secure boundary. DNS for `ketwork.in` is managed by Cloudflare, which points to this VPS's public IP.