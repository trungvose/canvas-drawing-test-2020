import { CanvasUtil } from '../util/canvas';
import { Canvas } from '../core/canvas';

export abstract class Shape {
  abstract type: ShapeType;
  startX: number;
  startY: number;

  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number,
    public label: string
  ) {
    this.startX = Math.min(this.x1, this.x2) - 1;
    this.startY = Math.min(this.y1, this.y2) - 1;
  }

  abstract isValid(canvasWidth: number, canvasHeight: number): boolean;

  protected isInsideCanvas(canvasWidth: number, canvasHeight: number) {
    return (
      CanvasUtil.isValid(this.x1, canvasWidth) &&
      CanvasUtil.isValid(this.x2, canvasWidth) &&
      CanvasUtil.isValid(this.y1, canvasHeight) &&
      CanvasUtil.isValid(this.y2, canvasHeight)
    );
  }

  abstract drawToCanvas(
    canvas: Canvas,
    canvasWidth: number,
    canvasHeight: number
  );
}

export enum ShapeType {
  Line = 'Line',
  Rectangle = 'Rectangle',
}
