---
id: raspberry-pi-4-64
title: Raspberry Pi 4 Model B (8GB)
sidebar_label: Raspberry Pi 4 (rpi)
slug: /home-lab/hardware/raspberry-pi-4-64
---

## Raspberry Pi Setup: Network Connector and IaC Control Node

**Boot Media**: We will use a Samsung 128GB SATA SSD in a Orico USB3.0 case.

### OS Selection

While options like DietPi and Ubuntu Server were considered, **Raspberry Pi OS Lite (64-Bit)** was selected as this OS is officially supported by Raspberry Pi and allows for headless operation.

### OS Installation and First Boot

#### Raspberry Pi Imager

Download and install the Raspberry Pi Imager from the [raspberry pi software site](https://www.raspberrypi.com/software/). This tool is required for both the EEPROM update and the OS Installation.

#### Optional but Recommended: Update EEPROM

This Pi had been in operation for over a year running Home Assistant OS. The EEPROM was an older version which always gave me trouble with USB3.0 boot (Although booting from USB2.0 worked just fine).
The latest USB EEPROM image (August 2025 at the time of this document) fixed the USB3.0 boot issue.

* In the imager, select the EEPROM update image (`Choose OS -> Misc Utility Images -> Raspberry PI 4 -> USB Boot`).
* Flash the image to a separate SD card or USB Drive (An SD card is recommended as that is the default boot media but USB drive worked just as well in this case).
* Disconnect the power, insert the update media (USB drive/SD Card) and connect power.
* The Red 🔴 and Green 🟢 LED's will flash steadily during the update (Should take around 10 mins).
* The update is complete when the Green 🟢 LED flashes rapidly in a steady pattern. Power Off the Pi and remove the update media.

#### Installing the OS

The process for installing the OS remains the same regardless what OS we use as long as we are using the Raspberry Pi Imager.

* Open the imager and select `Raspberry Pi 4` under `Choose Device`.
* Select **Raspberry Pi OS Lite (64-Bit)** under `Choose OS -> Raspberry Pi OS (Other) -> Raspberry Pi OS Lite (64-Bit)`.
* Select the 128GB USB SSD under `Choose Storage`.

:::warning
Writing the image will wipe all data from the selected drive. Ensure that the correct drive is selected.
:::

:::tip
Before writing the image, update settings in the **OS Customization Menu**.
:::

* Open the **OS Customization Menu** by clicking inside the imager window and using the shortcut `Ctrl+Shift+x`.
* Set the `hostname` (e.g. rpi).
* Configure `username` and `password`.
* Enable `SSH` and select `Use password authentication`.
* Set `locale` settings (e.g. time zone, keyboard layout etc).
* Save the customization changes.
* Click `Next` to begin the flashing process.

:::note[Security Consideration]

It is highly recommended to disable password authentication and configure SSH key-based authentication after the initial setup is complete.

:::

#### First Boot

* Once the imager has finished writing and verifying, safely eject the USB drive.
* Ensure that the Raspberry Pi is powered off (power cable disconnected).
* Connect the `USB drive` to one of the USB3.0 ports (the port closer to the board is preferred).
* Connect the `Ethernet Cable`.
* Connect the `power cable` to boot the device.
* **Observe the Green 🟢 LED:** IT will flash irregularly while reading from the drive during boot and then settle into a regular continuous pattern once boot is successful.
* The device will also appear on the unifi console with its updated hostname.

### Initial Device Setup

* **Assign Static IP:** A static IP should be assigned to the device via the Unifi Controller.
* **Update system:** Log into the device via SSH and perform a full system update.

    ```bash title="bash"
    sudo apt update && sudo apt upgrade
    ```

:::info

To SSH, open powershell and type `ssh <username from imager>@<static ip of rpi>` enter the password we set in the imager when prompted.

```powershell title="powershell-example"
ssh username@192.168.1.1
```

:::

### Software Installation

#### System utilities and development tools

The following apps can be installed using `apt`.

* **tree:** Useful to view folder structures (Also used by claude when discovering code structure).
* **btop:** Alternative to htop. I like how this looks.
* **git:** To track and sync code changes.
* **npm:** npm is needed to install Claude.
* **pipx:** pipx is the recommended method to install Ansible (As opposed to the old python3 method)

```bash title="bash"
sudo apt install tree

sudo apt install btop

sudo apt install git

sudo apt install npm

sudo apt install pipx
```

#### IaC Tools

##### Ansible

Install Ansible and its dependencies using `pipx` (Do not run the following commands as sudo).

```bash title="bash"
pipx install --include-deps ansible
```

##### OpenTofu

Install OpenTofu using the official installation script.

```bash title="bash"
# Download the installer script:
curl --proto '=https' --tlsv1.2 -fsSL https://get.opentofu.org/install-opentofu.sh -o install-opentofu.sh

# Alternatively: wget --secure-protocol=TLSv1_2 --https-only https://get.opentofu.org/install-opentofu.sh -O install-opentofu.sh

# Give it execution permissions:
chmod +x install-opentofu.sh

# Please inspect the downloaded script

# Run the installer:
./install-opentofu.sh --install-method deb

# Remove the installer:
rm -f install-opentofu.sh

```

#### Directory Structure

##### Project Folders

* Create a `source` directory in the user's home folder to act as the main workspace.
* Create an `AI` subdirectory within `source`. This folder will be the initialization path for AI tools like Claude which ensures that all AI related files are kept separate and do not get checked in to veersion control.

```bash title="Bash"
mkdir ~/source
mkdir ~/source/AI
```
