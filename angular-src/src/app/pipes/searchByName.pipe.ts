import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "searchByName"
})
export class SearchByNamePipe implements PipeTransform {

  transform(array: any[], searchText: string): any {
    if (searchText == null) {
      return array;
    }
    return array.filter(function(element) {
      return element.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
