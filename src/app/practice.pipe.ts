 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practice'
})
export class PracticePipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    const [price]=args;
    return value*price;

  }

}
