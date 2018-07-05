import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { SearchByNamePipe } from '../../pipes/searchByName.pipe';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {


  constructor(private roomService: RoomService) { }

  rooms=[];
  checked = false;
  showDetails:boolean[]=[];

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      data => {
        var i = 0;
        for (i = 0; i < data.length; i++) {
          this.rooms.push(data[i]);
          for ( var i = 0; i < this.rooms.length; i++) {
          this.showDetails.push(false);}
        }
      },
      err => { console.error(err); return false }
    );
    // console.log(this.rooms);
  }

  showReservations(index) {
    this.showDetails[index] = !this.showDetails[index];
    // console.log(this.checked);
  }
}
