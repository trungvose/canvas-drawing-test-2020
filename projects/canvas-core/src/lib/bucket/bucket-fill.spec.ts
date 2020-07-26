import { BucketFill } from './bucket-fill';
import { Canvas } from '../core/canvas';
import { CanvasUtil } from '../util/canvas';
import { TestUtil } from '../util/test';

describe('Bucket Fill', () => {
  let canvas: Canvas;
  beforeEach(() => {
    canvas = CanvasUtil.getEmptyCanvas(
      TestUtil.CanvasWidth,
      TestUtil.CanvasHeight
    );
  });
  
  it('should validate the against the canvas', () => {
    let bucket = new BucketFill(10, 3);
    expect(
      bucket.isValid(canvas, TestUtil.CanvasWidth, TestUtil.CanvasHeight)
    ).toEqual(true);

    let outsideBucket = new BucketFill(21, 3);
    expect(
      outsideBucket.isValid(canvas, TestUtil.CanvasWidth, TestUtil.CanvasHeight)
    ).toEqual(false);
  });
});
