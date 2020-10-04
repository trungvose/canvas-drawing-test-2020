import { BucketFill } from './bucket-fill';
import { Matrix } from '../core/matrix';
import { CanvasUtil } from '../util/canvas';
import { TestUtil } from '../util/test';

describe('Bucket Fill', () => {
  let matrix: Matrix;
  beforeEach(() => {
    matrix = CanvasUtil.getEmptyCanvas(
      TestUtil.CanvasWidth,
      TestUtil.CanvasHeight
    );
  });
  
  it('should validate the against the canvas', () => {
    let bucket = new BucketFill(10, 3);
    expect(
      bucket.isValid(matrix, TestUtil.CanvasWidth, TestUtil.CanvasHeight)
    ).toEqual(true);

    let outsideBucket = new BucketFill(21, 3);
    expect(
      outsideBucket.isValid(matrix, TestUtil.CanvasWidth, TestUtil.CanvasHeight)
    ).toEqual(false);
  });
});
