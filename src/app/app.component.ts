import { Component } from '@angular/core';

import { Empleado } from './models/empleado';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadosArray: Empleado[] = [
    {id: 1, nombre: "Paco", pais: "España"},
    {id: 2, nombre: "Manolo", pais: "España"},
    {id: 3, nombre: "Ramón", pais: "España"}
  ];

  //creamos un nuevo empleado en blanco
  EmpleadoSeleccionado: Empleado = new Empleado();

  openForEdit(empleado: Empleado){
    this.EmpleadoSeleccionado = empleado;
  }

  addOrEdit(){
    this.EmpleadoSeleccionado.id = this.empleadosArray.length + 1;
    this.empleadosArray.push(this.EmpleadoSeleccionado);
    console.log(this.empleadosArray);

    this.EmpleadoSeleccionado = new Empleado();
    
  }

}
