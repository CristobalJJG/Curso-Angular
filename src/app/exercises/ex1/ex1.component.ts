import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'empleados',
  templateUrl: './ex1.component.html'
})
export class Ex1Component {
  protected title: string;
  protected empleado: Empleado;
  protected trabajadores: Array<Empleado>;


  constructor() {
    this.title = "Ejercicio 1";
    this.empleado = new Empleado("Manolo", 23, true);
    this.trabajadores = [
      new Empleado("Manolo", 23, true),
      new Empleado("Lorito", 18, true),
      new Empleado("Gonzalez", 32, true),
      new Empleado("Roberto", 45, true)
    ]
  }
}
