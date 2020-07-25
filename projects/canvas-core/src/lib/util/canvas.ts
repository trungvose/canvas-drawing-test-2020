import { Canvas } from '../core/canvas';

export class CanvasUtil {
  static isInside(coordinate: number, axisLength: number) {
    return coordinate >= 1 && coordinate <= axisLength;
  }

  static getEmptyRow(width: number) {
    return new Array(width).fill(' ');
  }

  static getEmptyCanvas(width: number, height: number): Canvas {
    return Array(height)
      .fill(' ')
      .map(() => this.getEmptyRow(width));
  }
}
