import { Rectangle } from './rectangle';
import { TestUtil } from '../util/test';

describe('Rectangle', () => {
  it('should initialize with correct number of lines', () => {
    let rectangle = new Rectangle(14, 1, 18, 3);
    expect(rectangle.lines.length).toEqual(4);
  });

  it('should validate the against the canvas', () => {
    let rectangle = new Rectangle(15, 1, 18, 3);
    expect(rectangle.isValid(TestUtil.CanvasWidth, TestUtil.CanvasHeight)).toBe(
      true
    );
  });
});
