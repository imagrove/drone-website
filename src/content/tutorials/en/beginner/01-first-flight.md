---
title: "Project 01: First Flight"
description: "Build your first ESP32 drone from scratch. Learn assembly, firmware flashing, and complete your maiden flight."
level: beginner
order: 1
duration: "2 hours"
prerequisites: ["Basic soldering skills"]
---

## Overview

Welcome to your first drone project! In this tutorial, you'll build a fully functional ESP32 drone from individual components and complete your first flight.

## What You'll Learn

- Drone frame assembly
- Motor and ESC connection
- ESP32 firmware flashing
- Basic flight controls
- Safety procedures

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S2 DevKit | 1 | Main flight controller |
| 7x16mm Motors | 4 | 2 CW, 2 CCW |
| Propellers | 4 | Match motor rotation |
| LiPo Battery 1S 3.7V | 1 | 300-500mAh |
| Frame Kit | 1 | 65mm wheelbase |
| USB Cable | 1 | For programming |

## Step 1: Frame Assembly

### 1.1 Attach Motor Mounts

1. Identify the four arms of the frame
2. Mount each motor using the provided screws
3. **Important**: Note the motor rotation direction (CW vs CCW)

```
Motor Layout (Top View):
    Front
     ↑
  1     2  (1,3 = CW | 2,4 = CCW)
   \   /
    \ /
    / \
   /   \
  4     3
```

### 1.2 Install Flight Controller

Mount the ESP32 board in the center of the frame using double-sided tape or standoffs.

## Step 2: Wiring

### 2.1 Motor Connections

Connect each motor to the corresponding ESC pins:

| Motor | GPIO Pin | Rotation |
|-------|----------|----------|
| M1 | GPIO 4 | CW |
| M2 | GPIO 5 | CCW |
| M3 | GPIO 6 | CCW |
| M4 | GPIO 7 | CW |

### 2.2 Power Connection

Connect the battery to the 5V and GND pins through a power switch.

## Step 3: Firmware Setup

### 3.1 Install ESP-IDF

Follow the [official ESP-IDF installation guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/).

### 3.2 Flash the Firmware

```bash
# Clone the ESP-Drone repository
git clone https://github.com/espressif/esp-drone.git
cd esp-drone

# Set target and build
idf.py set-target esp32s2
idf.py build

# Flash to your drone
idf.py -p /dev/ttyUSB0 flash
```

## Step 4: First Flight

### 4.1 Pre-flight Checklist

- [ ] Battery fully charged
- [ ] Propellers securely attached
- [ ] No loose wires
- [ ] Firmware flashed successfully
- [ ] Wi-Fi connection established

### 4.2 Using the Mobile App

1. Download the ESP-Drone app (iOS/Android)
2. Connect to the drone's Wi-Fi hotspot
3. Open the app and wait for connection
4. Arm the motors (both sticks bottom-right)

### 4.3 Takeoff

1. Start with **Stabilized Mode**
2. Slowly increase throttle
3. Hover at 1-2 meters
4. Practice basic movements

> **Safety First**: Always fly in open areas away from people and property.

## Troubleshooting

### Drone won't arm
- Check battery voltage (>3.5V)
- Verify radio connection
- Ensure level surface for calibration

### Drone flips on takeoff
- Check propeller direction
- Verify motor order matches configuration
- Check gyro calibration

## Next Steps

Congratulations on your first flight! In the next project, you'll learn to customize LED patterns and add sound effects.

[Continue to Project 02: Customization →](/tutorials/02-customization)
