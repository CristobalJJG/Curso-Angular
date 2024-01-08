import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'empleados',
  templateUrl: './ex1.component.html'
})
export class Ex1Component implements OnInit {
  protected title: string;
  protected empleado: string = '';
  protected nombre: string = ''
  protected trabajadores: Array<Empleado>;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title = "Ejercicio 1";

    this.trabajadores = [
      new Empleado("Manolo", 23, true),
      new Empleado("Lorito", 18, true),
      new Empleado("Gonzalez", 32, true),
      new Empleado("Roberto", 45, true)
    ]
  }

  ngOnInit() {
    this.route.params.forEach((p: Params) => {
      this.empleado = p['id']
    })
  }

  redirigir() {
    this.router.navigate(['/exer/ex1/', this.nombre])
  }
}
