import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: any[] = [];

  constructor(private roomService: RoomService) { }
  ngOnInit() {
    this.roomService.getRooms().subscribe(
      data => {
        var i = 0;
        for (i = 0; i < data.length; i++) {
          this.rooms.push(data[i]);
          // this.roomName.push(data[i].denumire);

          // if (data[i].villa) {
          //   this.showVillaName(data[i].villa);
          // }
          console.log(this.rooms);
        }
      },
      err => { console.error(err); return false }
    );
  }

}
