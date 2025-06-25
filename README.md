# WebGL Mouse Sensitivity Detection

A toolkit for automatic mouse sensitivity detection and normalization in WebGL games.

## Key Features

- 🎯 Automatic cm/360° measurement
- 🖱️ DPI-agnostic sensitivity calculation
- 🎮 Perspective camera-adapted detection


## Core Concepts

### Mouse Sensitivity Standards

| Term         | Description                          | Typical Values       |
|--------------|--------------------------------------|----------------------|
| **DPI**      | Dots per inch (hardware setting)     | 400, 800, 1600, 3200|
| **cm/360°**  | Physical distance for full rotation  | 20cm-50cm            |
| **eDPI**     | Effective DPI (DPI × in-game sens)   | 400-3200             |
| **Yaw**      | Horizontal turn speed (degrees/count)| 0.022° (Quake/CS:GO) |

#### Sensitivity Spectrum
```text
Ultra-Low: >50cm/360° (Tactical FPS)    |    High: 15-25cm (Fast-paced games)
Low: 35-50cm (Precision aiming)         |    Ultra-High: <15cm (Twitch shooters)
Medium: 25-35cm (Balanced gameplay)
