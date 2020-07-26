import { Component, OnInit } from '@angular/core';
import { CanvasCore, Line, Rectangle, BucketFill } from 'canvas-core';
import { CanvasSize } from '../interface/canvas-size';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  core: CanvasCore;
  constructor() {}

  ngOnInit(): void {
    this.core = new CanvasCore(20, 4);
    this.core.addShape(new Line(1, 2, 6, 2));
    this.core.addShape(new Line(6, 3, 6, 4));
    this.core.addShape(new Rectangle(14, 1, 18, 3));
    this.core.addBucket(new BucketFill(10, 3));
  }

  canvasSizeChange({ width, height }: CanvasSize) {
    this.core.updateSize(width, height);
  }

  createCanvas() {}

  addShape() {}

  addBucket() {}
}
