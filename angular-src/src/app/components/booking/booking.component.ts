//import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { RoomService } from '../../services/room.service';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ReservationService } from '../../services/reservation.service';
import { SearchByIdPipe } from '../../pipes/searchById.pipe';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {


  constructor(
    private roomService: RoomService,
    private clientService: ClientService,
    private flashMessage: FlashMessagesService,
    private reservationService: ReservationService
  ) { }

  rooms: any[];
  availableRooms: any[];
  currDate = new Date();
  nextDayDate = new Date();
  curRoom: any;
  freeRoom = true;
  // roomCapacity = 2;
  // btnDisable: boolean = false;
  // nrDays: any;
  // room: any;
  // capacity: number;
  // price: any;
  // CheckIn: any = new Date();
  // CheckOut: any = new Date();
  // stayTooShort: boolean = false;

  ngOnInit() {
    this.GetRooms();
    this.nextDayDate.setDate(this.nextDayDate.getDate() + 1);
  }

  checkAvailability(availabilityForm: NgForm) {
    if (availabilityForm.valid) {
      // this.GetRooms();
      this.availableRooms = this.rooms.filter(function(room) {
        var freeRoom = true;
        room.reservations.forEach(function(reservation) {
          var reservCheckIn = new Date(reservation.checkInDate).getTime();
          var reservCheckOut = new Date(reservation.checkOutDate).getTime();
          var newReservCheckIn = new Date(availabilityForm.value.checkIn).getTime();
          var newReservCheckOut = new Date(availabilityForm.value.checkOut).getTime();
          if (
            newReservCheckIn >= reservCheckIn && newReservCheckIn <= reservCheckOut ||
            newReservCheckOut >= reservCheckIn && newReservCheckOut <= reservCheckOut
          ) freeRoom = false;
        });
        return freeRoom;
      });
    }

    else
      this.flashMessage.show("Fill all the fields!",
        {
          cssClass: 'alert-danger',
          timeout: 5000
        });
  }

  inAvailableRooms(object) {
    return this.availableRooms.indexOf(object) > -1;
  }

  setNewRoom(id) {
    this.curRoom = this.rooms.filter(room => room._id == id)[0];
    // console.log(this.curRoom);
    this.availableRooms = null;
  }




  // room = GetRoom(myForm.value.room);


  range(min, max) {
    var input = [];
    for (var i = min; i <= max; i += 1) {
      input.push(i);
    }
    return input;
  };


  GetRooms() {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
      },
      err => { console.error(err); return false }
    );
  }

  GetRoom(id) {
    this.roomService.getRoom(id).subscribe(
      data => {
        return data.capacity;
      },
      err => { console.error(err); return false; }
    );
  }

  // getRoomCapacity(id){
  // if (this.GetRoom(id)){
  //   this.roomCapacity=this.room.capacity;
  // };
  // }


  // getRoomData(myForm: NgForm) {
  //   this.roomService.getRoom(myForm.value.camera).subscribe(data => {
  //     this.capacity = data.capacitate;
  //     this.price = data.pret;
  //     // console.log(this.price);
  //     // console.log(this.capacity);
  //   },
  //     err => { console.error(err); return false });
  // }

  // getCheckIn(myForm: NgForm) {
  //   {
  //     this.CheckIn = new Date(myForm.value.checkIn);
  //     // this.CheckIn.setDate(this.CheckIn.getDate()+1);
  //     // console.log(this.CheckIn);
  //     // console.log(this.CheckIn);
  //   }
  // }

  // getCheckOut(myForm: NgForm) {
  //   {
  //     this.CheckOut = new Date(myForm.value.checkOut);
  //     this.nrDays = new Date(this.CheckOut).getDate() - new Date(this.CheckIn).getDate()
  //     // console.log(this.CheckOut);
  //     // if (this.CheckOut == this.CheckIn) {
  //     //   this.stayTooShort = false;
  //     // } else this.stayTooShort = true;
  //     // console.log(this.stayTooShort);
  //   }
  // }

  // save(myForm: NgForm) { }

  onSubmit(myForm: NgForm) {
    // if (myForm.valid) {
    //   const user = {
    //     token: localStorage.getItem('id_token')
    //   };
    //   // const newClient = {
    //   //   name: myForm.value.surname,
    //   //   prenume: myForm.value.name,
    //   //   email: myForm.value.email,
    //   //   telefon: myForm.value.contact
    //   // };
    //
    //   // const newReservation = {
    //   //   user: "",
    //   //   room: myForm.value.room,
    //   //   nrPeople: myForm.value.nrPeople,
    //   //   checkInDate: myForm.value.checkIn,
    //   //   checkOutDate: myForm.value.checkOut,
    //   //   totalPrice: this.price * this.nrDays * myForm.value.nrPeople
    //   // };
    //
    //   // this.clientService.postClient(newClient).subscribe(data => {
    //   //   if (data.success) {
    //   //     newReservation.client = data.clientId;
    //   //   } else {
    //   //     this.flashMessage.show("There is a problem with adding client, try later!",
    //   //       {
    //   //         cssClass: 'alert-danger',
    //   //         timeout: 5000
    //   //       });
    //   //   }
    //   // });
    //   // console.log(newReservation);
    //
    //   this.reservationService.postReservation(newReservation).subscribe(data => {
    //     if (data.success) {
    //       this.flashMessage.show("Reservation was succesful!",
    //         {
    //           cssClass: 'alert-success',
    //           timeout: 5000
    //         });
    //       // console.log("Reservation added");
    //       // console.log(newReservation);
    //     } else {
    //       this.flashMessage.show("Sorry, it's not possible to create reservation, try later!",
    //         {
    //           cssClass: 'alert-danger',
    //           timeout: 5000
    //         });
    //     }
    //   });
    // } else {
    //   this.flashMessage.show("Sorry, it's not possible to create reservation, try later!",
    //     {
    //       cssClass: 'alert-danger',
    //       timeout: 5000
    //     });
    // }
  }

}
