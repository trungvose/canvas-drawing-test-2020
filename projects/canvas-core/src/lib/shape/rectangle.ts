import { Shape, ShapeType } from './shape';
import { Matrix } from '../core/matrix';
import { Line } from './line';
import { Point } from '../point/point';

export class Rectangle extends Shape {
  positionsOnCanvas: Point[];
  type: ShapeType;
  lines: Line[];

  constructor(x1: number, y1: number, x2: number, y2: number, label = 'x') {
    super(x1, y1, x2, y2, label);
    this.type = ShapeType.Rectangle;
    this.positionsOnCanvas = [];
    this.setLines();
  }

  reCalculation() {
    this.setLines();
  }

  setLines() {
    let topHorizontalLine = new Line(
      this.x1,
      this.y1,
      this.x1,
      this.y2,
      this.label
    );
    let bottomHorizontalLine = new Line(
      this.x2,
      this.y1,
      this.x2,
      this.y2,
      this.label
    );
    let leftVerticalLine = new Line(
      this.x1,
      this.y1,
      this.x2,
      this.y1,
      this.label
    );
    let rightVerticalLine = new Line(
      this.x1,
      this.y2,
      this.x2,
      this.y2,
      this.label
    );

    this.lines = [
      topHorizontalLine,
      bottomHorizontalLine,
      leftVerticalLine,
      rightVerticalLine,
    ];
  }

  isValid(canvasWidth: number, canvasHeight: number): boolean {
    return this.lines.every((line) => line.isValid(canvasWidth, canvasHeight));
  }

  drawToCanvas(matrix: Matrix, canvasWidth: number, canvasHeight: number) {
    this.positionsOnCanvas = [];
    if (!this.isValid(canvasWidth, canvasHeight)) {
      return;
    }
    this.lines.forEach((line) => {
      line.drawToCanvas(matrix, canvasWidth, canvasHeight);
      this.positionsOnCanvas.push(...line.positionsOnCanvas);
    });
  }
}
