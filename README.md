# ironuki

<b>ironuki</b> is a simple tool to capture the color under the mouse cursor. Hit <b> Enter Key </b> to capture the color.

Thanks for the note! I'll update the `README.md` draft to include **`pngjs`** in the acknowledgments. Here's the updated draft:

---

# Ironuki

![npm](https://img.shields.io/npm/v/ironuki)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## Installation

You can use `Ironuki` directly with `npx` without needing to install it globally:

```bash
npx ironuki
```

Alternatively, you can install it globally if you prefer:

```bash
npm install -g ironuki
```

## Usage

1. Run the tool using `npx`:

   ```bash
   npx ironuki
   ```

2. Follow the on-screen instructions:

   - Press **Enter** to capture the color under the mouse cursor.
   - Type `exit` to quit the program.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- This project uses [robotjs](https://github.com/octalmage/robotjs) for capturing mouse position and screen size.
- It uses [screenshot-desktop](https://github.com/bencevans/screenshot-desktop) for capturing the screen.
- It uses [pngjs](https://github.com/lukeapage/pngjs) for parsing PNG images.
