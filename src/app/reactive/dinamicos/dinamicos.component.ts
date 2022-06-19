import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required,Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Avenger 1', Validators.required],
      ['Dr Strange', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  
  fieldIsValid( field: string ){
    return this.miFormulario.controls[field].errors 
    && this.miFormulario.controls[field].touched;
  }

  get favoritoArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  addFavorite(){
    if(this.nuevoFavorito.invalid) return;
    
    this.favoritoArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  delete(id : number){
    this.favoritoArr.removeAt(id);
  }

  save(){
    
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

  a = 1;

  ngOnInit(): void {
  }

}
