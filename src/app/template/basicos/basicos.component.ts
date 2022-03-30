import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  productoValido(): boolean 
  {
    return this.miFormulario?.controls.producto?.invalid
          && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean 
  {
    return this.miFormulario?.controls.precio?.invalid
          && this.miFormulario?.controls.precio?.touched
          && this.miFormulario?.value.precio < 0;
  }

  existenciasValido(): boolean 
  {
    return this.miFormulario?.controls.existencias?.invalid
          && this.miFormulario?.controls.existencias?.touched
          && this.miFormulario?.value.existencias < 0;
  }

  //guardar( miFormulario: NgForm ){
  guardar(){
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

}
