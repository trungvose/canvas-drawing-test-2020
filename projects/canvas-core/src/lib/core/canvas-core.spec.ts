import { CanvasCore } from './canvas-core';
import { Line } from '../shape/line';
import { Matrix } from './matrix';
import { Rectangle } from '../shape/rectangle';
import { BucketFill } from '../bucket/bucket-fill';
import { Point } from '../point/point';

describe('Canvas Core', () => {
  let canvasCore: CanvasCore;
  beforeEach(() => {
    canvasCore = new CanvasCore(20, 4);
  });

  it('should instantiate with row and column', () => {
    expect(canvasCore.matrix.length).toEqual(4);
    canvasCore.matrix.forEach((row) => {
      expect(row.length).toEqual(20);
    });
  });

  it('should add a shape to the shapes array', () => {
    const line = new Line(1, 2, 6, 2);

    expect(canvasCore.shapes.length).toEqual(0);
    canvasCore.addShape(line);
    expect(canvasCore.shapes.length).toEqual(1);

    const rectangle = new Rectangle(14, 1, 18, 3);
    canvasCore.addShape(rectangle);
    expect(canvasCore.shapes.length).toEqual(2);
  });

  it('should draw a line into the canvas', () => {
    const line = new Line(1, 2, 6, 2);
    expect(line.positionsOnCanvas.length).toEqual(0);
    canvasCore.addShape(line);
    expect(line.positionsOnCanvas.length).toEqual(6);
    expect(
      assertCanvasAfterDrawing(line.positionsOnCanvas, canvasCore.matrix)
    ).toEqual(true);
  });

  it('should draw a rectangle into the canvas', () => {
    const rectangle = new Rectangle(14, 1, 18, 3);
    expect(rectangle.positionsOnCanvas.length).toEqual(0);
    canvasCore.addShape(rectangle);
    expect(rectangle.positionsOnCanvas.length).toEqual(16);
    expect(
      assertCanvasAfterDrawing(rectangle.positionsOnCanvas, canvasCore.matrix)
    ).toEqual(true);
  });

  it('should add a bucket to the buckets array', () => {
    const bucket = new BucketFill(10, 3);

    expect(canvasCore.buckets.length).toEqual(0);
    canvasCore.addBucket(bucket);
    expect(canvasCore.buckets.length).toEqual(1);
  });

  it('should draw a bucket fill into the canvas', () => {
    const bucket = new BucketFill(10, 3);
    expect(bucket.positionsOnCanvas.length).toEqual(0);

    canvasCore.addBucket(bucket);
    expect(bucket.positionsOnCanvas.length).toEqual(80);

    expect(
      assertCanvasAfterDrawing(bucket.positionsOnCanvas, canvasCore.matrix)
    ).toEqual(true);
  });

  it('should draw a bucket fill into the canvas with mixed shapes', () => {
    canvasCore.addShape(new Line(1, 2, 6, 2));
    canvasCore.addShape(new Line(6, 3, 6, 4));
    canvasCore.addShape(new Rectangle(14, 1, 18, 3));
    const bucket = new BucketFill(10, 3);

    canvasCore.addBucket(bucket);

    expect(bucket.positionsOnCanvas.length).toEqual(47);
    expect(
      assertCanvasAfterDrawing(bucket.positionsOnCanvas, canvasCore.matrix)
    ).toEqual(true);
  });

  it('should clear the canvas', () => {
    const bucket = new BucketFill(10, 2);
    canvasCore.addBucket(bucket);
    const line = new Line(1, 2, 6, 2);
    canvasCore.addShape(line);
    canvasCore.clear();
    expect(canvasCore.buckets.length).toEqual(0);
    expect(canvasCore.shapes.length).toEqual(0);
  });

  const assertCanvasAfterDrawing = (
    points: Point[],
    matrix: Matrix
  ): boolean => {
    return points.every(({ x, y }) => matrix[x][y].isFilled);
  };
});
