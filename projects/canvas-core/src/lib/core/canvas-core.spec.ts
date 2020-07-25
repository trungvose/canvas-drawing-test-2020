import { CanvasCore } from './canvas-core';
import { Line } from '../shape/line';
import { Shape } from '../shape/shape';

describe('Canvas Core', () => {
  let canvasCore: CanvasCore;
  beforeEach(() => {
    canvasCore = new CanvasCore(20, 4);
  });
  it('should instantiate with row and column', () => {
    expect(canvasCore.canvas.length).toEqual(4);
    canvasCore.canvas.forEach((row) => {
      expect(row.length).toEqual(20);
    });
  });

  it('should add shape to the shapes array', () => {
    const line = new Line(6, 1, 6, 2);

    expect(canvasCore.shapes.length).toEqual(0);
    canvasCore.addShape(line);
    expect(canvasCore.shapes.length).toEqual(1);
    assertCanvasAfterAddingShape(line);
  });

  const assertCanvasAfterAddingShape = (shape: Shape) => {
    canvasCore.canvas.forEach((row, i) => {
        row.forEach((col, j) => {
            
        })
    })
  }
});
