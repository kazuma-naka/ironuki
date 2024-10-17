#!/usr/bin/env node

import UserInterface from "./src/UserInterface.js";
import ColorCapture from "./src/ColorCapture.js";

const ui = new UserInterface();
const colorCapture = new ColorCapture();

ui.startListening(colorCapture);
