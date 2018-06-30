import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "searchByUsername"
})
export class SearchByUsernamePipe implements PipeTransform {
  transform(users: any[], searchText: string, value: string): any {
    if(searchText==null){
      return users;
    }
    return users.filter(function(user){
      return user.value.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  }
}
