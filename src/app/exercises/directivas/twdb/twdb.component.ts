import { Component } from '@angular/core';

@Component({
  selector: 'app-twdb',
  template: `
    <input type="text" [(ngModel)]="color" />
    <pre>{{color}}</pre>
    <p [ngStyle]="{'background':color, 'padding':'30px'}"></p>
  `
})
export class TwdbComponent {
  color: string = 'red';
}
