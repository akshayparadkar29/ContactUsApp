// src/app/phone-number.directive.ts
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberDirective,
      multi: true,
    },
  ],
})
export class PhoneNumberDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const phoneNumber = control.value;

    // Check if the input contains only digits and has a length of 10
    if (!/^\d{10}$/.test(phoneNumber)) {
      return { phoneNumber: true };
    }

    return null; // Validation successful
  }
}
