import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  standalone: true
})
export class SumPipe implements PipeTransform {

  transform(value: number[]): number {
    if (!Array.isArray(value)) {
      return 0;
    }
    return value.reduce((acc, curr) => acc + curr, 0);
  }

}
