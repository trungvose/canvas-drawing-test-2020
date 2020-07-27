import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Canvas, BucketFill } from 'canvas-core';

@Component({
  selector: 'app-canvas-board',
  templateUrl: './canvas-board.component.html',
  styleUrls: ['./canvas-board.component.scss'],
})
export class CanvasBoardComponent implements OnInit {
  @Input() canvas: Canvas;
  @Output() onAddBucket = new EventEmitter<BucketFill>();

  get canvasHeader() {
    let length = this.canvas[0]?.length || 0;
    return Array(length + 1).fill(0);
  }

  constructor() {}

  ngOnInit(): void {}

  getBlockTooltip(x: number, y: number) {
    return `(${x + 1},${y + 1})`;
  }

  addBucket(rowIdx: number, colIdx: number) {
    this.onAddBucket.emit(new BucketFill(colIdx + 1, rowIdx + 1));
  }

  isFilledBlock(i: number, j: number) {
    return this.canvas[i][j].isFilled;
  }

  getPopupTitle(rowIdx: number, colIdx: number) {
    return `Add a new bucket at (${colIdx + 1}, ${rowIdx + 1})?`;
  }
}
