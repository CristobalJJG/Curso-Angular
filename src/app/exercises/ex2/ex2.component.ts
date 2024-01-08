import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  template: `
    <button (click)="change()">Cambiar</button>
    <p *ngIf="show" style="background-color:whitesmoke">Fondo blanco</p>
    <p *ngIf="!show" style="background-color:green">Fondo verde</p>
  `,
})
export class Ex2Component {
  show = true;
  change() { this.show = !this.show }
}
