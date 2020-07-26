import { ValidatorFn, AbstractControl } from "@angular/forms";

export function positiveNumberValidator(minValue = 0, maxValue = Number.POSITIVE_INFINITY, onlyAllowInteger = false): ValidatorFn {
  minValue = Number(minValue);
  maxValue = Number(maxValue);
  return (control: AbstractControl): { [key: string]: any } => {
    let controlValue = control.value;
    
    if (controlValue == null || controlValue === "") {
      return null;
    }
    
    if (onlyAllowInteger && !Number.isInteger(controlValue)) {
      return { nonInteger: { value: controlValue } }
    }    

    if (typeof controlValue !== "number" || Number.isNaN(controlValue)) {
      return { notANumber: { value: controlValue } }
    }

    let number = Number(controlValue);
    const isNotOk = number < (minValue || 0) || number > maxValue;
    return isNotOk ? { nonPositive: { value: controlValue } } : null;
  };
}
