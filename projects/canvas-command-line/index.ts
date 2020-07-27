import { CanvasCore } from 'canvas-core';
import { Command } from './model/Command';
import { CommandManager } from './model/command-manager';
const readline = require('readline');

let core: CanvasCore;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Canvas Drawing! You can start entering the command.")
rl.on('line', (input) => {
  processInput(input)
});

function processInput(str: string) {
  if (!str) {
    CommandManager.reEnterMessage();
    return;
  }

  let chars = str.trim().split(" ").filter(Boolean);
  let [command, ...coordinatesInString] = chars;
  let coors = coordinatesInString.map(Number);
  let hasAllNumberEntered = command === Command.Line || command === Command.Rectangle || command === Command.Canvas
  if (hasAllNumberEntered && ! CommandManager.isValidCoordinates(coors)) {
    CommandManager.reEnterMessage();
    return;
  }

  switch (command) {
    case Command.Canvas:
      createCanvas(coors);
      break;

    case Command.Line:
      CommandManager.createLine(core, coors);
      break;

    case Command.Rectangle:
      CommandManager.createRectangle(core, coors);
      break;

    case Command.Bucket:
      CommandManager.createBucket(core, coordinatesInString);
      break;


    case Command.Quit:
      rl.close();
      break;

    default:
      break;
  }
}

function createCanvas(coors: number[]) {
  if (coors.length === 2) {
    let [w, h] = coors;
    core = new CanvasCore(w, h);
    CommandManager.renderCanvas(core);
  } else {
    CommandManager.reEnterMessage()
  }
}
