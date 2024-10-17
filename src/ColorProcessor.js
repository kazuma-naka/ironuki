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
    const isXterm256color = process.env.TERM === "xterm-256color";
    if (isXterm256color) {
      const colorCode = this.#rgbToAnsi256(r, g, b);
      return `\x1b[48;5;${colorCode}m  \x1b[0m`;
    } else {
      return `\x1b[48;2;${r};${g};${b}m  \x1b[0m`;
    }
  }

  #rgbToAnsi256(r, g, b) {
    if (r === g && g === b) {
      if (r < 8) return 16;
      if (r > 248) return 231;
      return Math.round(((r - 8) / 247) * 24) + 232;
    } else {
      const red = Math.round((r / 255) * 5);
      const green = Math.round((g / 255) * 5);
      const blue = Math.round((b / 255) * 5);
      return 16 + red * 36 + green * 6 + blue;
    }
  }
}

export default ColorProcessor;
