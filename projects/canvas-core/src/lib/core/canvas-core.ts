import { Shape } from '../shape/shape';
import { CanvasUtil } from '../util/canvas';
import { Canvas } from './canvas';
import { BucketFill } from '../bucket/bucket-fill';

export class CanvasCore {
  canvas: Canvas;
  shapes: Shape[];
  buckets: BucketFill[];

  constructor(public canvasWidth: number, public canvasHeight: number) {
    this.shapes = [];
    this.buckets = [];
    this.canvas = CanvasUtil.getEmptyCanvas(canvasWidth, canvasHeight);
  }

  updateSize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.redraw();
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
    this._drawShape(shape);
  }

  addBucket(bucket: BucketFill) {
    this.buckets.push(bucket);
    this._fillBucket(bucket);
  }

  redraw() {
    this.canvas = CanvasUtil.getEmptyCanvas(
      this.canvasWidth,
      this.canvasHeight
    );

    this.shapes.forEach((shape) => {
      shape.reCalculation();
      this._drawShape(shape);
    });

    this.buckets.forEach((bucket) => {
      this._fillBucket(bucket);
    });
  }

  clear() {
    this.shapes = [];
    this.buckets = [];
    this.canvas = CanvasUtil.getEmptyCanvas(
      this.canvasWidth,
      this.canvasHeight
    );
  }

  private _fillBucket(bucket: BucketFill) {
    bucket.fill(this.canvas, this.canvasWidth, this.canvasHeight);
  }

  private _drawShape(shape: Shape) {
    shape.drawToCanvas(this.canvas, this.canvasWidth, this.canvasHeight);
  }
}
