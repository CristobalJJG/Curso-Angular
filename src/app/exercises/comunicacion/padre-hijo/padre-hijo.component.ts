import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre-hijo',
  templateUrl: './padre-hijo.component.html'
})
export class PadreHijoComponent {
  @Input() dato: number | undefined;

}
