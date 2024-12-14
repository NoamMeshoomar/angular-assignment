import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return '';

    const valueStr = value.toString();

    return `${+valueStr[0] === 0 ? '' : '0'}${valueStr.substring(0, 2)}-${valueStr.substring(2, 4)}${valueStr.substring(4)}`;
  }
}