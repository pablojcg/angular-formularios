import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevoJuego: string = "";

  persona: Persona = {
    nombre: 'Pablo',
    favoritos: [
      {id: 1, nombre: 'Avenger 1'},
      {id: 2, nombre: 'Dr Strange'}
    ]
  }

  guardar(){
    console.log("Formulario posteado");
  }

  eliminar(id : number){
    this.persona.favoritos.splice(id,1);
  }

  agregarJuego(){
    const addFavorito: Favorito = {
      id: this.persona.favoritos.length + 1, 
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({...addFavorito});
    this.nuevoJuego = "";
  }

}
