import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "searchById"
})

export class SearchByIdPipe implements PipeTransform {

  transform(array: any[], searchText: string): any {
    if (searchText == null) {
      return array;
    }
    return array.filter(function(element) {
      // console.log(element_id);
      return element._id.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
