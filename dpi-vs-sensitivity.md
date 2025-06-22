# Mouse DPI vs In-Game Sensitivity: The Complete Guide

## Core Concepts

### Measurement Standards
- **cm/360°**: Distance to do a full 360° turn (e.g., 30cm/360°)
- **inches/360°**: Imperial version (e.g., 12"/360°)
- **eDPI (Effective DPI)**: DPI × in-game sensitivity

### Conversion Formulas
cm/360° = (360 / (yaw_sensitivity × mouse_dpi)) × 2.54
eDPI = mouse_dpi × in_game_sensitivity

### Sensitivity Ranges
| Player Type       | cm/360° Range | Typical eDPI |
|-------------------|---------------|-------------|
| Ultra-Low Sens    | 50cm+         | <400        |
| Low Sens          | 35-50cm       | 400-800     |
| Medium Sens       | 25-35cm       | 800-1600    |
| High Sens         | 15-25cm       | 1600-3200   |
| Ultra-High Sens   | <15cm         | >3200       |

## WebGL Implementation Challenges
1. No direct DPI access
2. Browser/OS acceleration effects
3. Pixel density variations

