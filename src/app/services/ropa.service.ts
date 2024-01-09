import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  private ropa: string = 'yeezy 350 boost v2'
  private coleccion: string[] = ["Yeezy 350 mejores", 'camiseta suprimo'];

  constructor() { }

  getRopa(nombre: string) {
    return nombre;
  }

  addRopa(ropa: string) {
    this.coleccion.push(ropa);
    return this.getRopa(ropa);
  }

  getColeccion() {
    return this.coleccion;
  }

  removeRopa(i: number) {
    this.coleccion.splice(i, 1);
  }
}
