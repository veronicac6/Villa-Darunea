import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RoomService } from '../../services/room.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  latitude = 46.412408;
  longitude = 30.080824;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private roomService: RoomService,
    private authService: AuthService) {
  }

  rooms: any[];

  getRooms() {
    this.roomService.getRooms().subscribe(
      data => {
        var rooms = data;
        return rooms;
      },
      err => { console.error(err); return false; }
    );
  }

  ngOnInit() {
    // console.log(this.rooms);
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
        // console.log(this.rooms);
      },
      err => { console.error(err); return false; }
    );
  }

  onClickBook() {
    // if (){
    //   this.flashMessage.show('You need to log in in order to book a room',
    //     {
    //       cssClass: 'alert-success',
    //       timeout: 5000
    //     });
    // } else
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
      this.flashMessage.show('You need to log in or register in order to book a room',
        {
          cssClass: 'alert-danger ',
          timeout: 5000
        });
      } else
        this.router.navigate(['/booking']);
    // this.flashMessage.grayOut(true);
  }

}
