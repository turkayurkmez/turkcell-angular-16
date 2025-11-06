import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebab'
})
export class KebabPipe implements PipeTransform {

  transform(value?: string | null): string | undefined {
    "bu bir deneme"
    "bu-bir-deneme"
    
    return value?.replace(' ','-');
  }

}
