import { Shape } from '../shape/shape';
import { CanvasUtil } from '../util/canvas';
import { Canvas } from './canvas';

export class CanvasCore {
  shapes: Shape[];
  canvas: Canvas;

  constructor(public canvasWidth: number, public canvasHeight: number) {
    this.shapes = [];
    this.canvas = CanvasUtil.getEmptyCanvas(canvasWidth, canvasHeight);
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
    this.drawShape(shape);
    console.table(this.canvas);
  }

  redraw() {
    this.shapes.forEach((shape) => {
      this.drawShape(shape);
    });
  }

  drawShape(shape: Shape) {
    shape.drawToCanvas(this.canvas, this.canvasWidth, this.canvasHeight);
  }
}
