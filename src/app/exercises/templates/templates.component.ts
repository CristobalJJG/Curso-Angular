import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  titulo: string;
  administrador: boolean;

  constructor() {
    this.titulo = 'Plantillas en angular'
    this.administrador = false
  }

  cambiar() {
    this.administrador = !this.administrador;
  }
}
