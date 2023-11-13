import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipePipe implements PipeTransform {
  transform(value: any, searchTxt: string): any {
    return value.filter((item: string) => item.startsWith(searchTxt));
  }
}
