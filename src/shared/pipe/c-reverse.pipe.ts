import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'c_reverse'})
export class CReversePipe implements PipeTransform {

  transform(value:Array<any>):Array<any> {
    return value.reverse();
  }
}
