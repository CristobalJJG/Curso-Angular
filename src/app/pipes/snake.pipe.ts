import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snake'
})
export class SnakePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
