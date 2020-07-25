import { Component, OnInit, Input } from '@angular/core';
import { Canvas } from 'canvas-core';

@Component({
  selector: 'app-canvas-board',
  templateUrl: './canvas-board.component.html',
  styleUrls: ['./canvas-board.component.scss'],
})
export class CanvasBoardComponent implements OnInit {
  @Input() canvas: Canvas;
  constructor() {}

  ngOnInit(): void {}

  getBlockTooltip(x: number, y: number) {
    return `(${x + 1},${y + 1})`;
  }
}
