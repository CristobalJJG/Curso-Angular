import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador'
})
export class MultiplicadorPipe implements PipeTransform {

  transform(v1: string, v2: string): string {
    return "La multiplicació de " + parseInt(v1) + " + " + parseInt(v2) + " = " + parseInt(v1) * parseInt(v2)
  }

}
