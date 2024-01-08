import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-ng-switch-ng-style',
  templateUrl: './ng-switch-ng-style.component.html'
})
export class NgSwitchNgStyleComponent {
  protected trabajadores: Array<Empleado>;
  protected color: string = 'brown'

  constructor() {
    this.trabajadores = [
      new Empleado("Manolo", 23, true),
      new Empleado("Lorito", 18, true),
      new Empleado("Gonzalez", 32, true),
      new Empleado("Roberto", 45, true)
    ]
  }

}
