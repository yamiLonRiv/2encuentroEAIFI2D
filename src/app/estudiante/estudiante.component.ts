import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
   nombre:string = "Yamile";
   apellido:String = "Londoño";
   correo:string = "yamile.1701521184@ucaldas.edu.co";


   set setNombre(nombre: string) {
    this.nombre = nombre;
}

  constructor() {

   }

  ngOnInit(): void {
  }

}
