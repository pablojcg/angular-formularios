import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { emailPattern, nombreApellidoPattern, notUsername } from 'src/app/shared/validators/validations';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['',[Validators.required, this.validatorService.notUsername]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    cpassword: ['',[Validators.required]]
  },{
    validators: [this.validatorService.fieldEquals('password','cpassword')]
  });


  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El Correo es obligatorio';
    }else if(errors?.pattern){
      return 'El Formato de correo no es valido';
    }else if(errors?.emailCompare){
      return 'El Email ingresado ya esta registrado';
    }

    return '';

  }

  constructor( private fb: FormBuilder, private  validatorService: ValidatorService,
    private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Pablo Castro",
      email: "test1@test.com",
      username: "ironman "
    });
  }

  validField(field: string){
    return this.miFormulario.get(field)?.invalid
      && this.miFormulario.get(field)?.touched;
  }

  emailRequired(){
    return this.miFormulario.get('email')?.errors?.required
      && this.miFormulario.get('email')?.touched;
  }

  emailFormat(){
    return this.miFormulario.get('email')?.errors?.pattern
      && this.miFormulario.get('email')?.touched;
  }

  emailExists(){
    return this.miFormulario.get('email')?.errors?.emailCompare
      && this.miFormulario.get('email')?.touched;
  }

  submitForm(){

    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();

  }

}
