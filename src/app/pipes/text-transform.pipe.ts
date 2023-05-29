import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { concat, Subject } from 'rxjs';
@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      let charsf = value.toString().split('');
      // console.log(charsf[0].toUpperCase());
      let firstChar = charsf[0].toUpperCase();
      let otherChar = charsf.slice(1);
      return firstChar+otherChar.join('')
    }
    return '';
  }

}
