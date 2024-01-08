import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  styleUrls: ['./ng-class.component.scss'],
  template: `
  <input type="text" [(ngModel)]='clase'>
    <pre [ngClass]="{
      fondoDefault:clase,
      fondoAzul: clase == 'azul',
      fondoVerde: clase == 'verde',
    }">
    {{clase}}
  </pre>

  `
})
export class NgClassComponent {
  clase = 'verde';
}

