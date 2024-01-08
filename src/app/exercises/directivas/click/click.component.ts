import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  template: `
    <pre>
      <p (click)="sayHello()">Botón</p>
      sayHello() alert("HelloWorld")
    </pre>
    <p (click)="sayHello()">Botón</p>
  `,
})
export class ClickComponent {
  sayHello() { alert("HelloWorld :):") }
}
