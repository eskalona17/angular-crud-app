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
    {id: 3, nombre: "Ramón", pais: "España"},
  ];

  EmpleadoSeleccionado: Empleado

}
