import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortname',
  standalone: true
})
export class ShortnamePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word.charAt(0).toUpperCase())
      .join('.') + '.';
  }

}
