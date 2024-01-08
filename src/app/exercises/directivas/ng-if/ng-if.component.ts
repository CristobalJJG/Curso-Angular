import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
  <p *ngIf="shown">Se ve</p>
  <p *ngIf="notShown">No se ve</p>
  `
})
export class NgIfComponent {
  notShown = false;
  shown = true;
}
