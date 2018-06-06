import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
//import { Router } from '@angular/router';
// import {BookingService} from '../../services/booking.service';
import { RoomService } from '../../services/room.service';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {


  constructor(
    private roomService: RoomService,
    private clientService: ClientService,
    private flashMessage: FlashMessagesService
  ) { }

  rooms: any[] = [];
  capacity: number;
  price: any;
  btnDisable: boolean = false;
  nrDays: any;
  CheckIn: any = new Date();
  CheckOut: any = new Date();
  date = new Date();
  // stayTooShort: boolean = false;

  ngOnInit() {
    this.GetRooms();
  }

  GetRooms() {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
      },
      err => { console.error(err); return false }
    );
  }

  getRoomData(myForm: NgForm) {
    this.roomService.getRoom(myForm.value.camera).subscribe(data => {
      this.capacity = data.capacitate;
      this.price = data.pret;
      console.log(this.price);
      console.log(this.capacity);
    },
      err => { console.error(err); return false });
  }

  getCheckIn(myForm: NgForm) {
    {
      this.CheckIn = new Date(myForm.value.checkIn);
      // this.CheckIn.setDate(this.CheckIn.getDate()+1);
      console.log(this.CheckIn);
      // console.log(this.CheckIn);
    }
  }

  getCheckOut(myForm: NgForm) {
    {
      this.CheckOut = new Date(myForm.value.checkOut);
      this.nrDays = new Date(this.CheckOut).getDate() - new Date(this.CheckIn).getDate()
      console.log(this.CheckOut);
      // if (this.CheckOut == this.CheckIn) {
      //   this.stayTooShort = false;
      // } else this.stayTooShort = true;
      // console.log(this.stayTooShort);
    }
  }

  save(myForm: NgForm) { }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const newClient = {
        nume: myForm.value.surname,
        prenume: myForm.value.name,
        email: myForm.value.email,
        telefon: myForm.value.contact
      };

      console.log(newClient);

      this.clientService.postClient(newClient)
        .subscribe(data => {
          if (data.success) {
            // console.log(data._id);
          } else {
            this.flashMessage.show("There is a problem with adding client, try later!",
              {
                cssClass: 'alert-danger',
                timeout: 5000
              });
          }
        });

      const newReservation = {
        // client: newClient._id,
        camera: myForm.value.camera._id,
        nrPersoane: myForm.value.nrPeople,
        dataCheckIn: myForm.value.checkIn,
        dataCheckOut: myForm.value.checkOut,
        pretTotal: myForm.value.totalPrice
      };

      // this.reservationService.postReservation(newReservation)
      //   .subscribe(data => {
      //     if (data.success) {
      //       this.flashMessage.show("Reservation was succesful!",
      //         {
      //           cssClass: 'alert-success',
      //           timeout: 5000
      //         });
      //       console.log("Reservation added")
      //     } else {
      //       this.flashMessage.show("Sorry, it's not possible to create reservation, try later!",
      //         {
      //           cssClass: 'alert-danger',
      //           timeout: 5000
      //         });
      //     }
      //   });

    }
  }
}
