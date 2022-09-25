import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionUppercased'
})
export class PositionUppercasedPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLowerCase() === 'manager') {
      return value.toUpperCase();
    }
    return value;
  }

}
