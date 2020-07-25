import { Component, OnInit } from '@angular/core';
import { CanvasCore, Line } from 'canvas-core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var canvas = new CanvasCore(20, 4);
    canvas.addShape(new Line(1, 2, 6, 2));
    canvas.addShape(new Line(6, 3, 6, 4));
  }
}
