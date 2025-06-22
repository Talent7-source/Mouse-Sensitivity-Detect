export class PerspectiveCameraSensitivityDetector {
  constructor(camera, canvas) {
    this.camera = camera;
    this.canvas = canvas;
    this.samples = [];
    this.referenceDistance = 1.0; // meters/units in 3D space
    
    // Default FPS controls values
    this.config = {
      yawSpeed: 0.0022, // radians per pixel
      pitchSpeed: 0.0022,
      fov: 75, // degrees
      smoothing: 0.15
    };
  }

  startCalibration() {
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.canvas.addEventListener('click', this.completeCalibration);
  }

  handleMouseMove = (e) => {
    if (!this.calibrating) return;
    
    const movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    const movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    
    this.samples.push({
      time: performance.now(),
      movement: [movementX, movementY],
      cameraRotation: [this.camera.rotation.x, this.camera.rotation.y]
    });
    
    // Apply movement to camera for real-time feedback
    this.camera.rotation.y -= movementX * this.config.yawSpeed;
    this.camera.rotation.x -= movementY * this.config.pitchSpeed;
  };

  completeCalibration = () => {
    this.calibrating = false;
    this.calculateSensitivity();
  };

  calculateSensitivity() {
    if (this.samples.length < 10) return;
    
    // Calculate pixel-to-radians ratio
    const pixelToRad = this.calculatePixelToRadians();
    
    // Convert to cm/360° measurement
    const screenDPI = window.devicePixelRatio * 96;
    const radiansPerPixel = pixelToRad;
    const pixelsPer360 = (2 * Math.PI) / radiansPerPixel;
    const inchesPer360 = pixelsPer360 / screenDPI;
    const cmPer360 = inchesPer360 * 2.54;
    
    this.results = {
      cmPer360,
      radiansPerPixel,
      effectiveDPI: this.estimateEffectiveDPI(cmPer360)
    };
    
    return this.results;
  }

  estimateEffectiveDPI(cmPer360) {
    // Assuming standard FPS yaw sensitivity
    const inchesPer360 = cmPer360 / 2.54;
    const countsPer360 = 360 / 0.022; // Standard FPS yaw
    return countsPer360 / inchesPer360;
  }
}
