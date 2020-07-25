import { Shape, ShapeType } from './shape';
import { Canvas } from '../core/canvas';

export class Line extends Shape {
  type: ShapeType;
  constructor(x1: number, y1: number, x2: number, y2: number, label = 'x') {
    super(x1, y1, x2, y2, label);
    this.type = ShapeType.Line;
  }

  getPositionOnCanvas(canvasWidth: number, canvasHeight: number) {
    let positions: number[] = [];
    if (!this.isValid(canvasWidth, canvasHeight)) {
      return [];
    }

    if (this._isHorizontal) {
      let lineLength = Math.abs(this.x2 - this.x1);
      for (let i = 0; i <= lineLength; i++) {
        positions.push(this.x + i);
      }
      return positions;
    }

    if (this._isVertical) {
      let lineLength = Math.abs(this.y2 - this.y1);
      for (let i = 0; i <= lineLength; i++) {
        positions.push(this.y + i);
      }
      return positions;
    }

    return [];
  }

  isValid(canvasWidth: number, canvasHeight: number) {
    return (
      (this._isHorizontal || this._isVertical) &&
      this.isInsideCanvas(canvasWidth, canvasHeight)
    );
  }

  drawToCanvas(
    canvas: Canvas,
    canvasWidth: number,
    canvasHeight: number
  ): void {
    let positions = this.getPositionOnCanvas(canvasWidth, canvasHeight);
    positions.forEach((pos) => {
      if (this._isHorizontal) {
        canvas[this.y][pos] = this.label;
      }
      if (this._isVertical) {
        canvas[pos][this.x] = this.label;
      }
    });
  }

  private get _isHorizontal() {
    return this.y1 === this.y2;
  }

  private get _isVertical() {
    return this.x1 === this.x2;
  }
}
