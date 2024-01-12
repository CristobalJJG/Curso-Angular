import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {
  hijo1 = 0;
  hijo2 = 0;

  recieve(event: any) {
    this.hijo2 = event;
  }
}
