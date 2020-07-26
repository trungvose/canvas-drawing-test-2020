import { CanvasUtil } from '../util/canvas';
import { Canvas } from '../core/canvas';
import { Point } from '../point/point';

export class BucketFill {
  constructor(public x: number, public y: number, public color: string = 'o') {}

  isValid(canvas: Canvas, canvasWidth: number, canvasHeight: number): boolean {
    return this.isAvailablePoint(
      this.x,
      this.y,
      canvas,
      canvasWidth,
      canvasHeight
    );
  }

  fill(canvas: Canvas, canvasWidth: number, canvasHeight: number) {
    if (!this.isValid(canvas, canvasWidth, canvasHeight)) {
      return;
    }

    let xyAdjacentCors = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    let queue: Point[] = [new Point(this.x, this.y)];
    while (queue.length) {
      let { x, y } = queue.shift();
      canvas[y - 1][x - 1] = this.color;

      for (let i = 0; i < xyAdjacentCors.length; i++) {
        const newX = x + xyAdjacentCors[i][0];
        const newY = y + xyAdjacentCors[i][1];
        if (
          this.isAvailablePoint(newX, newY, canvas, canvasWidth, canvasHeight)
        ) {
          queue.push(new Point(newX, newY));
        }
      }
    }
  }

  isAvailablePoint(
    x: number,
    y: number,
    canvas: Canvas,
    canvasWidth: number,
    canvasHeight: number
  ) {
    return (
      CanvasUtil.isInside(x, canvasWidth) &&
      CanvasUtil.isInside(y, canvasHeight) &&
      canvas[y - 1][x - 1] === ' '
    );
  }
}


