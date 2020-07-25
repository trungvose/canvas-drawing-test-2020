import { CanvasUtil } from '../util/canvas';
import { Canvas } from '../core/canvas';

export abstract class Shape {
  abstract type: ShapeType;

  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number,
    public label: string
  ) {
    
  }

  protected isInsideCanvas(canvasWidth: number, canvasHeight: number) {
    return (
      CanvasUtil.isInside(this.x1, canvasWidth) &&
      CanvasUtil.isInside(this.x2, canvasWidth) &&
      CanvasUtil.isInside(this.y1, canvasHeight) &&
      CanvasUtil.isInside(this.y2, canvasHeight)
    );
  }

  abstract isValid(canvasWidth: number, canvasHeight: number): boolean;

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
