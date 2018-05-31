import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService } from '../../services/reservation.service';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rooms: any[];
  reservations: any[];




  constructor(
    private roomService: RoomService,
    private reservationService: ReservationService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
      },
      err => { console.error(err); return false }
    );

    this.reservationService.getReservations().subscribe(
      data => {
        this.reservations = data;
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );

  }

  angular.module('controller', [])
  .controller('reservationController', reservationController);

  function reservationController() {
  this.days = "yes";
}
}
