import { Shape } from '../shape/shape';
import { CanvasUtil } from '../util/canvas';
import { Canvas } from './canvas';
import { BucketFill } from '../bucket/bucket-fill';

export class CanvasCore {
  shapes: Shape[];
  buckets: BucketFill[];
  canvas: Canvas;

  constructor(public canvasWidth: number, public canvasHeight: number) {
    this.shapes = [];
    this.buckets = [];
    this.canvas = CanvasUtil.getEmptyCanvas(canvasWidth, canvasHeight);
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
    this._drawShape(shape);
    console.table(this.canvas);
  }

  addBucket(bucket: BucketFill) {
    this.buckets.push(bucket);
    this._fillBucket(bucket);
    console.table(this.canvas);
  }

  redraw() {
    this.shapes.forEach((shape) => {
      this._drawShape(shape);
    });

    this.buckets.forEach((bucket) => {
      this._fillBucket(bucket);
    });
  }

  private _fillBucket(bucket: BucketFill) {
    bucket.fill(this.canvas, this.canvasWidth, this.canvasHeight);
  }

  private _drawShape(shape: Shape) {
    shape.drawToCanvas(this.canvas, this.canvasWidth, this.canvasHeight);
  }
}
