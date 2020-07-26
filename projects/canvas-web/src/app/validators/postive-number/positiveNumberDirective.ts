import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { positiveNumberValidator } from './positiveNumberValidator';

@Directive({
  selector: '[tPositiveNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PositiveNumberDirective,
      multi: true,
    },
  ],
})
export class PositiveNumberDirective implements Validator {
  @Input('tPositiveNumber') maxValue: number;
  @Input('min') minValue: number;
  @Input() onlyInteger = true;

  validate(c: AbstractControl): { [key: string]: any } {
    this.maxValue = this.maxValue || Number.POSITIVE_INFINITY;
    return positiveNumberValidator(
      this.minValue,
      this.maxValue,
      this.onlyInteger
    )(c);
  }
}
