import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  providers: [PeticionesService]
})
export class PeticionesComponent {
  ex: Object[] = [];
  constructor(private p: PeticionesService) {
    this.p.getPosts().forEach(
      (res: any) => {
        this.ex = res.products
        console.log(res);
      }
    );
  }
}
