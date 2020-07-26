import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { NoWhitespaceValidator } from './no-whitespace.validator';

@Directive({
  selector: '[tNoSpaces]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NoWhitespaceDirective, multi: true },
  ],
})
export class NoWhitespaceDirective implements Validator {
  private _enable: boolean;
  private _onChange: () => void;

  @Input('tNoSpaces')
  get enable(): boolean | string {
    return this._enable;
  }

  set enable(value: boolean | string) {
    this._enable = value != null && value !== false && `${value}` !== 'false';
    if (this._onChange) this._onChange();
  }

  private valFn = NoWhitespaceValidator();
  validate(control: AbstractControl): { [key: string]: any } {
    return this._enable ? this.valFn(control) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
}
