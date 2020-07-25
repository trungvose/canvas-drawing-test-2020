import { CanvasUtil } from '../util/canvas';
import { Canvas } from '../core/canvas';

export abstract class Shape {
  abstract type: ShapeType;

  get x() {
    return this.x1 - 1;
  }

  get y() {
    return this.y1 - 1;
  }

  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number,
    public label: string
  ) {}

  abstract isValid(canvasWidth: number, canvasHeight: number): boolean;

  protected abstract getPositionOnCanvas(
    canvasWidth: number,
    canvasHeight: number
  ): number[];

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
