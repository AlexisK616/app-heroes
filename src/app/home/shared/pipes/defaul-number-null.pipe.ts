import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaulNumberNull'
})
export class DefaulNumberNullPipe implements PipeTransform {
  numberDefault:number = 0 ;

  transform(value: string, ...args: unknown[]): unknown {
   if(value === null || value === undefined) {
     return this.numberDefault;
   }

   return parseInt(value);
  }

}
