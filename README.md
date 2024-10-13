# Ironuki

![Node Version](https://img.shields.io/node/v/ironuki) ![npm](https://img.shields.io/npm/v/ironuki) ![Build Status](https://img.shields.io/github/actions/workflow/status/kazuma-naka/ironuki/build.yml)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![npm downloads](https://img.shields.io/npm/dt/ironuki.svg) ![Bundle Size](https://img.shields.io/bundlephobia/min/ironuki)

## PreRequirement

This npm package used `robotjs` to retrieve mouse cursor position. `robotjs` requires [node-gyp](https://github.com/nodejs/node-gyp).

Please refer [this pre-requirement for robotjs](https://www.npmjs.com/package/robotjs#:~:text=docs/syntax.-,Building,-Please%20ensure%20you)

## Usage

1. Run the tool using `npx`:

   ```bash
   npx ironuki
   ```

2. Follow the on-screen instructions:

   - Press **Enter** to capture the color under the mouse cursor.
   - Type `exit` to quit the program.

## GUI App Made by Electron

##### GUI Installers are avaiable [in here](https://github.com/kazuma-naka/ironuki-gui/releases)

please find details in [this repo](https://github.com/kazuma-naka/ironuki-gui)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- This project uses [robotjs](https://github.com/octalmage/robotjs) for capturing mouse position and screen size.
- It uses [screenshot-desktop](https://github.com/bencevans/screenshot-desktop) for capturing the screen.
- It uses [pngjs](https://github.com/lukeapage/pngjs) for parsing PNG images.
