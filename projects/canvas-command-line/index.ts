import { CanvasCore, Line } from 'canvas-core';

var core = new CanvasCore(20, 4);
core.addShape(new Line(1, 2, 6, 2));
console.table(core.canvas);
