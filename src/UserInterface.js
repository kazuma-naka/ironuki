import readline from "readline";

class UserInterface {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true,
    });
  }

  startListening(colorCapture) {
    console.log(
      "Press Enter to get the color under the mouse cursor. Type 'exit' to quit.",
    );
    this.rl.on("line", async (input) => {
      if (input.trim().toLowerCase() === "exit") {
        console.log("Exiting...");
        this.rl.close();
      } else {
        await colorCapture.getColorUnderMouse();
      }
    });
  }
}

export default UserInterface;
