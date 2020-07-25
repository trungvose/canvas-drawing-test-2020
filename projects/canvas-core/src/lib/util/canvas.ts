import { Canvas } from '../core/canvas';

export class CanvasUtil {
  static isValid(coordinate: number, axisLength: number) {
    return coordinate >= 0 && coordinate <= axisLength;
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
