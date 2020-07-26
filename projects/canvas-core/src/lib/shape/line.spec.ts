import { Line, LineDirection } from './line';
import { TestUtil } from '../util/test';

describe('Line', () => {
  it('should initialize with correct length and direction', () => {
    let horizontalLine = new Line(1, 2, 6, 2);
    expect(horizontalLine.direction).toEqual(LineDirection.Horizontal);
    expect(horizontalLine.length).toEqual(6);

    let verticalLine = new Line(6, 3, 6, 4);
    expect(verticalLine.direction).toEqual(LineDirection.Vertical);
    expect(verticalLine.length).toEqual(2);

    let notSupported = new Line(5, 3, 6, 4);
    expect(notSupported.direction).toEqual(LineDirection.NotSupported);
    expect(notSupported.length).toEqual(0);
  });

  it('should validate the against the canvas', () => {
    let horizontalLine = new Line(1, 2, 6, 2);
    expect(
      horizontalLine.isValid(TestUtil.CanvasWidth, TestUtil.CanvasHeight)
    ).toBe(true);
    expect(horizontalLine.isValid(5, 4)).toBe(false);
  });
});
