import Screen from "./Screen.js";
import ScreenShot from "./ScreenShot.js";
import ColorProcessor from "./ColorProcessor.js";

class ColorCapture {
  constructor() {
    this.screen = new Screen();
    this.screenshotCapture = new ScreenShot();
    this.colorProcessor = new ColorProcessor();
  }

  async getColorUnderMouse() {
    const mouse = this.screen.mousePosition();
    const screenResolution = this.screen.screenResolution();

    try {
      const imgBuffer = await this.screenshotCapture.captureScreen();
      const png = this.screenshotCapture.parseImageBuffer(imgBuffer);
      const mappedMouse = this.colorProcessor.mapMousePosition(
        mouse,
        screenResolution,
        png.width,
        png.height,
      );
      const { red, green, blue } = this.colorProcessor.extractColor(
        png,
        mappedMouse.x,
        mappedMouse.y,
      );
      const colorInHex = this.colorProcessor.rgbToHex(red, green, blue);
      const colorBlock = this.colorProcessor.rgbToColorBlock(red, green, blue);

      console.log(`${colorBlock} ${colorInHex}`);
    } catch (error) {
      console.error("Error capturing screenshot or processing image:", error);
    }
  }
}

export default ColorCapture;
