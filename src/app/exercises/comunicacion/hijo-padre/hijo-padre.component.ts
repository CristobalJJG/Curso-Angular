import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-padre',
  templateUrl: './hijo-padre.component.html'
})
export class HijoPadreComponent {
  @Output() event = new EventEmitter();

  send(number: string) {
    this.event.emit(+number);
  }
}
