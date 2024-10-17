import robot from "robotjs";

class Screen {
  screenResolution() {
    const screen = robot.getScreenSize();
    return { width: screen.width, height: screen.height };
  }

  mousePosition() {
    return robot.getMousePos();
  }
}

export default Screen;
