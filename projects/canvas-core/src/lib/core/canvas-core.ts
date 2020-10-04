import { Shape } from '../shape/shape';
import { CanvasUtil } from '../util/canvas';
import { Matrix } from './matrix';
import { BucketFill } from '../bucket/bucket-fill';
import { BlockColor } from '../util/color';
import { Point } from '../point/point';

export class CanvasCore {
  matrix: Matrix;
  shapes: Shape[];
  buckets: BucketFill[];

  constructor(public canvasWidth: number, public canvasHeight: number) {
    this.shapes = [];
    this.buckets = [];
    this.matrix = CanvasUtil.getEmptyCanvas(canvasWidth, canvasHeight);
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

  deleteShape(shapeIdx: number) {
    this.shapes = this.shapes.filter((shape, i) => i !== shapeIdx);
    this.redraw();
  }

  addBucket(bucket: BucketFill) {
    this.buckets.push(bucket);
    this._fillBucket(bucket);
  }

  deleteBucket(bucketIdx: number) {
    this.buckets = this.buckets.filter((bucket, i) => i !== bucketIdx);
    this.redraw();
  }

  setCanvasColor(
    points: Point[],
    background: BlockColor,
    color: BlockColor
  ) {
    points.forEach(({ x, y }) => {
      let block = this.matrix[x][y];
      block.backgroundColor = background;
      block.color = color;
    });
  }

  redraw() {
    this.matrix = CanvasUtil.getEmptyCanvas(
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
    this.matrix = CanvasUtil.getEmptyCanvas(
      this.canvasWidth,
      this.canvasHeight
    );
  }

  private _fillBucket(bucket: BucketFill) {
    bucket.fill(this.matrix, this.canvasWidth, this.canvasHeight);
  }

  private _drawShape(shape: Shape) {
    shape.drawToCanvas(this.matrix, this.canvasWidth, this.canvasHeight);
  }
}
