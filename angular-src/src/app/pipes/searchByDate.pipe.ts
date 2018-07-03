import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "searchByDate"
})

export class SearchByDate implements PipeTransform {
  transform(array: any[], searchCheckIn: string, searchCheckOut:string): any {
    if (searchCheckIn == null || searchCheckOut==null || searchCheckIn == "" || searchCheckOut=="") {
      return array;
    }
    return array.filter(function(element) {
      let checkInDate=new Date(element.checkInDate).getTime();
      let checkOutDate=new Date(element.checkOutDate).getTime();
      let searchChckIn=new Date(searchCheckIn).getTime();
      let searchChckOut=new Date(searchCheckOut).getTime();
          if (
        checkInDate >= searchChckIn && checkInDate <= searchChckOut &&
        checkOutDate>= searchChckIn && checkOutDate <= searchChckOut
      ){
        // console.log(element.checkInDate.indexOf(searchCheckIn) > -1);
        return true;}
       else return false;
      // return element.checkInDate.toLowerCase().indexOf(searchCheckIn.toLowerCase()) > -1;
    });
  }

}
