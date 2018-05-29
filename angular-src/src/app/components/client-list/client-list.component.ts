import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
  clients: any[];
  reservations: any[];

//  reservations = [{ camera: "camera1", nrPersoane: "2" }, { camera: "camera1", nrPersoane: "2" }];

  constructor(private clientService: ClientService, private reservationService: ReservationService) { }
  checked = false;

  ngOnInit() {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );

    this.reservationService.getReservations().subscribe(
      data => {
        this.rezervations = data;
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );
  }
  //editClient() { }
  //deleteClient() { }

  addClient() { }

  showValue() {
    this.checked = !this.checked;
  }
}
