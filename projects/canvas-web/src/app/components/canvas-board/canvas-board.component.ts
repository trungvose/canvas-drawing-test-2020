import { Component, OnInit, Input } from '@angular/core';
import { Canvas } from 'canvas-core';

@Component({
  selector: 'app-canvas-board',
  templateUrl: './canvas-board.component.html',
  styleUrls: ['./canvas-board.component.scss'],
})
export class CanvasBoardComponent implements OnInit {
  @Input() canvas: Canvas;
  get canvasHeader() {
    let length = this.canvas[0]?.length || 0;
    return Array(length + 1).fill(0);
  }

  constructor() {}

  ngOnInit(): void {}

  getBlockTooltip(x: number, y: number) {
    return `(${x + 1},${y + 1})`;
  }
}
