import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/Rx';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  clients: any[];
  reservations: any[];
  date = new Date();
  checked = false;
  selectedReservation = "";

  constructor(
    private clientService: ClientService,
    private flashMessage: FlashMessagesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private reservationService: ReservationService) { }

  ngOnInit() {

    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );

    this.reservationService.getReservations().subscribe(
      data => {
        this.reservations = data;
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );

  }

  showClients() {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );
  }
  editClient() { }

  deleteClient(clientId) {
    this.clientService.deleteClient(clientId).subscribe(data => {
      if (data) {
        this.flashMessage.show("Client " + clientId + " was deleted!",
          {
            cssClass: 'alert-success',
            timeout: 5000
          });
        this.showClients();
      }
    });
  }



  onChange(val) {
    this.selectedReservation = val;
    console.log(this.selectedReservation);
  }

  save(myForm: NgForm) { }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const newClient = {
        nume: myForm.value.surname,
        prenume: myForm.value.name,
        email: myForm.value.email,
        telefon: myForm.value.contact,
        rezervare: myForm.value.reservation
      };
      this.clientService.postClient(newClient)
        .subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg,
              {
                cssClass: 'alert-success',
                timeout: 5000
              });
            myForm.reset();
            this.router.navigate(['dashboard']);

          } else {
            this.flashMessage.show(data.msg,
              {
                cssClass: 'alert-danger',
                timeout: 5000
              });
          }
        });
    }
    this.showClients();
  }
  showValue() {
    this.checked = !this.checked;
  }
}
