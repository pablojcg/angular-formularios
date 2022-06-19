import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   precio : new FormControl(1500),
  //   existencias : new FormControl(5),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required,Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  });

  constructor( private fb: FormBuilder ) { }

  fieldIsValid( field: string ){
    return this.miFormulario.controls[field].errors 
    && this.miFormulario.controls[field].touched;
  }

  save(){
    
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1500
    });
  }

}
