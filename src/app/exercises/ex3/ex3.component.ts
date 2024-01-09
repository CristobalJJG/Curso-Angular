import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  providers: [RopaService]
})
export class Ex3Component implements OnInit {
  ropa: string[] = [];

  prenda: string = ""

  constructor(private rs: RopaService) { }
  ngOnInit(): void {
    this.ropa = this.rs.getColeccion()
    console.log(this.ropa);
  }

  add() {
    this.rs.addRopa(this.prenda);
  }

  remove(i: number) {
    this.rs.removeRopa(i)
  }
}
