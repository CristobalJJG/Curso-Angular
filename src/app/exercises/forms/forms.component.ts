import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  protected coche: Coche = new Coche("", "", "");

  protected coches: Coche[] = [
    new Coche("Toyota Papa", "120", "#ffffff")
  ]

  send(nombre: string, caballaje: string, color: string) {
    debugger
    this.coches.push(new Coche(nombre, color, caballaje));
  }
}
