import { Component, OnInit } from '@angular/core';
import {
  CanvasCore,
  Line,
  Rectangle,
  BucketFill,
  CanvasUtil,
  Shape,
} from 'canvas-core';
import { CanvasSize } from '../interface/canvas-size';
import { Subject } from 'rxjs';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  core: CanvasCore;
  onFormInputUpdated$ = new Subject();
  constructor() {}

  ngOnInit(): void {
    this.core = new CanvasCore(20, 4);
    this.core.addShape(new Line(1, 2, 6, 2));
    this.core.addShape(new Line(6, 3, 6, 4));
    this.core.addShape(new Rectangle(14, 1, 18, 3));
    this.core.addBucket(new BucketFill(10, 3));

    this.onFormInputUpdated$
      .pipe(untilDestroyed(this), debounceTime(100))
      .subscribe(() => {
        this.core.redraw();
      });
  }

  canvasSizeChange({ width, height }: CanvasSize) {
    if (CanvasUtil.isPositive(width) && CanvasUtil.isPositive(height)) {
      this.core.updateSize(width, height);
    }
  }

  createCanvas() {}

  addShape() {}

  deleteShape(shape: Shape, idx: number) {}

  deleteBucket(bucket: BucketFill, idx: number) {}

  onFormInputUpdated() {
    this.onFormInputUpdated$.next();
  }
}
