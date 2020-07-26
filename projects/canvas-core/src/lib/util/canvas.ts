import { Canvas } from '../core/canvas';
import { Block } from '../block/block';
import { EmptyBlock } from '../block/empty-block';

export class CanvasUtil {
  static isInside(coordinate: number, axisLength: number) {
    return coordinate >= 1 && coordinate <= axisLength;
  }

  static getEmptyRow(width: number): Block[] {
    return new Array(width).fill('').map(() => new EmptyBlock());
  }

  static getEmptyCanvas(width: number, height: number): Canvas {
    return Array(height)
      .fill('')
      .map(() => this.getEmptyRow(width));
  }

  static isPositive(num: number) {
    return Number.isInteger(num) && num >= 0;
  }
}
