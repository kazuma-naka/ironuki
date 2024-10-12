class ColorProcessor {
  mapMousePosition(
    mouse,
    screenResolution,
    capturedImageWidth,
    capturedImageHeight,
  ) {
    const scaleX = capturedImageWidth / screenResolution.width;
    const scaleY = capturedImageHeight / screenResolution.height;
    return {
      x: Math.floor(mouse.x * scaleX),
      y: Math.floor(mouse.y * scaleY),
    };
  }

  extractColor(png, x, y) {
    const idx = (y * png.width + x) * 4;
    return {
      red: png.data[idx],
      green: png.data[idx + 1],
      blue: png.data[idx + 2],
    };
  }

  rgbToHex(r, g, b) {
    return [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  }

  rgbToColorBlock(r, g, b) {
    return `\x1b[48;2;${r};${g};${b}m  \x1b[0m`;
  }
}

export default ColorProcessor;
