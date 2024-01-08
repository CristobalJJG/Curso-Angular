import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  template: '<p (click)="sayHello()">Botón</p>',
})
export class ClickComponent {
  sayHello() { alert("HelloWorld :):") }
}
