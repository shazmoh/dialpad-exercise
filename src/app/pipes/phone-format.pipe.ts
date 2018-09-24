import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    // TODO: convert number format `8628479392` to `862-847-9392`
    return value;
  }

}
