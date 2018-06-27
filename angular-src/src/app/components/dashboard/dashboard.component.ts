import { Component, OnInit, EventEmitter, Directive, Output, Input } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService } from '../../services/reservation.service';
import { ClientService } from '../../services/client.service';
import { VillaService } from '../../services/villa.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// @Directive({
//   selector: '[onCreate]'
// })

export class DashboardComponent implements OnInit {

  // @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  rooms: any[] = [];
  reservations: any[] = [];
  days: any[] = [];
  clientName: any[] = [];
  villaName: any[] = [];
  roomName: any[] = [];


  constructor(
    private roomService: RoomService,
    private reservationService: ReservationService,
    private clientService: ClientService,
    private villaService: VillaService) { }


  ngOnInit() {
    //
    // this.roomService.getRooms().subscribe(
    //   data => {
    //     var i = 0;
    //     for (i = 0; i < data.length; i++) {
    //       this.rooms.push(data[i]);
    //       // this.roomName.push(data[i].denumire);
    //
    //       // if (data[i].villa) {
    //       //   this.showVillaName(data[i].villa);
    //       // }
    //       console.log(this.rooms);
    //     }
    //   },
    //   err => { console.error(err); return false }
    // );
    //
    // this.reservationService.getReservations().subscribe(
    //   data => {
    //     this.reservations = data;
    //     // console.log( data[0].clientId);
    //     var i = 0;
    //     for (i = 0; i < data.length; i++) {
    //       this.days.push(new Date(data[i].dataCheckOut).getDate() - new Date(data[i].dataCheckIn).getDate());
    //
    //       if (data[i].client) {
    //         this.showClientName(data[i].client);
    //       }
    //     }
    //   },
    //   err => { console.error(err); return false; }
    // );

  }

  // // BUG
  // showClientName(clientId) {
  //   this.clientService.getClient(clientId).subscribe(
  //     data => {
  //       if (data) {
  //         this.clientName.push(data.nume + " " + data.prenume);
  //       }
  //     },
  //     err => { console.error(err); return false; }
  //   );
  // }
  //
  // // BUG
  // showVillaName(villaId) {
  //   this.villaService.getVilla(villaId).subscribe(
  //     data => {
  //       if (data) {
  //         this.villaName.push(data.denumire);
  //       }
  //     },
  //     err => { console.error(err); return false; }
  //   );
  // }

  // GOOGLE CHART----------------------------------------------------
  pieChartData = {
    chartType: 'LineChart',
    dataTable: [
      ['Day', 'Visitors per Day'],
      ['Monday', 11],
      ['Tuesday', 2],
      ['Wednesday', 2],
      ['Thursday', 2],
      ['Friday', 7],
      ['Saturday',10],
      ['Sunday',12]
    ],
    options: { title: 'Visitors',curveType: 'function',legend: { position: 'right' },colors: ['#7210A3']},
  };
  columnChartData = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: { title: 'Tasks',colors: ['#7210A3']},
  };

  geoChartData = {
    chartType: 'GeoChart',
    dataTable: [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
    options: { 'title': 'Countries', colors: ['#63450a'] },
  };

}
