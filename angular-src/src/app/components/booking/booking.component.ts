import { Router, ActivatedRoute } from '@angular/router';
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
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.route.params.subscribe(params => console.log(params););
  }

  rooms: any[];
  availableRooms: any[];
  currDate = new Date();
  nextDayDate = this.addDays(this.currDate, 1);
  curRoom: any;
  freeRoom = true;
  nrDays: any;
  showForm = false;
  showFormCurRoom = false;
  newReservation = {
    user: JSON.parse(localStorage.getItem('user')).id,
    room: "",
    nrPeople: 0,
    checkInDate: new Date(),
    checkOutDate: new Date(),
    totalPrice: 0,
    createDate: new Date()
  };
  // one=1;
  // CheckOut: any this.addDays(this.CheckIn,1);
  // roomCapacity = 2;
  // btnDisable: boolean = false;
  // room: any;
  // capacity: number;
  // price: any;
  // stayTooShort: boolean = false;

  ngOnInit() {
    this.GetRooms();
    // console.log(this.newReservation);
  }

  book(room) {
    this.newReservation.room = room._id;
    this.newReservation.totalPrice = this.newReservation.nrPeople * room.price * this.nrDays;
    // console.log(this.newReservation);
    this.reservationService.postReservation(this.newReservation).subscribe(data => {
      // console.log(data);
      if (data.success) {
        this.flashMessage.show("Reservation was succesful",
          {
            cssClass: 'alert-success',
            timeout: 5000
          });
        this.router.navigate(['profile']);
        // console.log("Reservation added");
        // console.log(newReservation);
      } else {
        this.flashMessage.show("Error occured, try again",
          {
            cssClass: 'alert-danger',
            timeout: 5000
          });
      }
    });
  }

  addDays(date, days) {
    var val = new Date(date);
    val.setDate(val.getDate() + days);
    // console.log(val);
    // console.log( typeof val);
    return val;
  }

  checkAvailability(availabilityForm: NgForm) {
    if (availabilityForm.valid) {
      if (availabilityForm.value.checkIn < availabilityForm.value.checkOut) {
        this.nrDays = new Date(availabilityForm.value.checkOut).getDate() - new Date(availabilityForm.value.checkIn).getDate();
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
        }
        // console.log(this.availableRooms);
      );
      } else this.flashMessage.show("Wrong dates!",
        {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      this.newReservation.checkInDate =new Date(availabilityForm.value.checkIn);
      this.newReservation.checkOutDate =new Date(availabilityForm.value.checkOut);
      this.newReservation.nrPeople = parseInt(availabilityForm.value.adults);
      // console.log(this.newReservation);
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

  nextDay(value) {
    var date = new Date(value);
    date.setDate(date.getDate() + 1);
    console.log(date);
    return date;
    // value.setDate(value.getDate() + 1);
  }

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

  // getCheckIn(availabilityForm: NgForm) {
  //   {
  //     var CheckIn: any = new Date();
  //     const date = new Date(availabilityForm.value.checkIn);
  //     CheckIn.setDate(date.getDate() + 1);
  //     console.log(CheckIn);
  //     return CheckIn;
  //     document.getElementById("checkOutInput").min = CheckIn.;
  //   }
  // }

  // getCheckOut(availabilityForm: NgForm) {
  //   {
  //     this.CheckOut = new Date(availabilityForm.value.checkOut);
  //   }
  // }

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
