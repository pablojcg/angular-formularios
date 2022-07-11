import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern          : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  notUsername(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    console.log(valor);

    if(valor === 'babyyoda'){
      return {
        noBabyYoda: true
      };
    }

    return null;
  }

  fieldEquals( field1: string, field2: string){
    return ( control: AbstractControl): ValidationErrors | null => {

      const pass1 = control.get(field1)?.value;
      const pass2 = control.get(field2)?.value;

      if(pass1 !== pass2){
        control.get(field2)?.setErrors({noEquals: true});
        return {noEquals: true};
      }

      control.get(field2)?.setErrors(null);
      
      return null;
    };
  }

}
