import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-ngfor',
  template: `
  <div>
    <h2>Empleados</h2>
    <ul> <li *ngFor="let t of trabajadores; let i = index">{{t | json}}, {{i}}</li> </ul>
  </div>
  `,
})
export class NgforComponent {
  protected trabajadores: Array<Empleado>;

  constructor() {
    this.trabajadores = [
      new Empleado("Manolo", 23, true),
      new Empleado("Lorito", 18, true),
      new Empleado("Gonzalez", 32, true),
      new Empleado("Roberto", 45, true)
    ]
  }
}
