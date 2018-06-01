import { Component, OnInit, EventEmitter, Directive, Output, Input } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService } from '../../services/reservation.service';
import { ClientService } from '../../services/client.service';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@Directive({
  selector: '[onCreate]'
})

export class DashboardComponent implements OnInit {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  rooms: any[];
  id: string;
  reservations: any[];
  days: any[] = [];
  client: any;

  constructor(
    private roomService: RoomService,
    private reservationService: ReservationService,
    private clientService: ClientService) { }

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
// console.log( data[0].clientId);
        var i = 0;
        for (i = 0; i < data.length; i++) {
          this.days.push(new Date(data[i].dataCheckOut).getDate() - new Date(data[i].dataCheckIn).getDate());
        }
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );

  }

  showClient(clientId) {
    this.clientService.getClient(clientId).subscribe(
      data => {
        if (data) {
          this.client = data.nume + " " + data.prenume;
          console.log(this.client);
          this.onCreate.emit(this.client);
        } else console.log("no data");

      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );
  }
}
