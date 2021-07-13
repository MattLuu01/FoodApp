import { AbstractControl } from '@angular/forms';

export class ConfirmEqualValidator {
   static MatchPassword(control: AbstractControl ) {
     let password = control.get('password')?.value;
     let confirmPassword = control.get('confirmPassword')?.value;
     if (password != confirmPassword) {
       control.get('confirmPassword')!.setErrors({ ConfirmPassword: true });
       return;
     }
     else {
       return null;
     }
   }
}