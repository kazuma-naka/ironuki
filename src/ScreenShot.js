import screenshot from "screenshot-desktop";
import { PNG } from "pngjs";

class Screenshot {
  async captureScreen() {
    return await screenshot({ format: "png", screen: "" });
  }

  parseImageBuffer(imgBuffer) {
    return PNG.sync.read(imgBuffer);
  }
}

export default Screenshot;
