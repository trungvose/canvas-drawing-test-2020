import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CanvasSize } from '../../interface/canvas-size';
import { debounceTime } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-canvas-size',
  templateUrl: './canvas-size.component.html',
  styleUrls: ['./canvas-size.component.scss'],
})
export class CanvasSizeComponent implements OnInit, OnChanges {
  @Input() width: number;
  @Input() height: number;
  @Output() sizeChange = new EventEmitter<CanvasSize>();

  canvasForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    let widthChange = changes.width;
    let heightChange = changes.height;
    if (this.hasValueChange(widthChange) || this.hasValueChange(heightChange)) {
      this.updateForm(this.width, this.height);
    }
  }

  initForm() {
    this.canvasForm = this._fb.group({
      width: [this.width || 0, Validators.required],
      height: [this.height || 0, Validators.required],
    });

    this.canvasForm.valueChanges
      .pipe(untilDestroyed(this), debounceTime(200))
      .subscribe((value) => {
        if (this.canvasForm.valid) {
          this.sizeChange.emit(value);
        }
      });
  }

  updateForm(width: number, height: number) {
    this.canvasForm?.patchValue({
      width,
      height,
    });
  }

  hasValueChange(change: SimpleChange) {
    return change?.previousValue !== change?.currentValue;
  }
}
