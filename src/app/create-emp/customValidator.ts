import { AbstractControl } from '@angular/forms';

export function firstNameValidation(
  control: AbstractControl
): { [key: string]: any } | null {
  const lastName = control.get('last_name');
  console.log(lastName)
  if (lastName!.touched) {
    return { lastNameTouched: true };
  } else {
    return null;
  }
}
