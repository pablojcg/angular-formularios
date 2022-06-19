import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirectve,
        multi: true
    }]
})
export class CustomMinDirectve implements Validator{

    @Input() minimo!: number;

    constructor() {}

    validate( control: FormControl){
        const inputValue = control.value;

        console.log(inputValue);
        console.log(this.minimo);

        return (inputValue < this.minimo)
                ? {'customMin': true}
                : null;
    }
}