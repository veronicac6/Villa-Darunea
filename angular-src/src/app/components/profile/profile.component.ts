import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ReservationService } from '../../services/reservation.service';
// import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {
    name: "",
    surname: "",
    username: "",
    contactNumber: "",
    email: "",
    gender: "",
    country: "",
    reservations: [""]
  };
  // newUserData: any;
  showProfile = true;
  showReservations = false;
  showEdit = false;
  nrDays = 0;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private reservationService: ReservationService
    // private modal:ModalDirective
  ) { }

  ngOnInit() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.authService.getUser(id).subscribe(
      profile => {
        this.userData = profile;
        // console.log(this.userData);
      },
      err => { console.log(err); return false; }
    );
  }

  getUserData() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.authService.getUser(id).subscribe(
      profile => {
        this.userData = profile;
        // console.log(profile);
      },
      err => { console.log(err); return false; }
    );
  }

  onClickBook() {
    this.router.navigate(['/booking']);
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      document.getElementById('saveDataModal').click();

      const newUserData = {
        _id: this.userData._id,
        name: myForm.value.name,
        surname: myForm.value.surname,
        contactNumber: myForm.value.contactNumber,
        email: myForm.value.email,
        sex: myForm.value.sex,
        country: myForm.value.country

      }
      // console.log(newUserData);
      this.authService.updateProfile(newUserData).subscribe(
        data => {
          this.flashMessage.show('Profile was successfully updated', {
            cssClass: 'alert-success',
            timeout: 3000
          });
          this.getUserData();
          this.onShowProfile();
        },
        err => {
          this.flashMessage.show('Error occured on updating the profile (suggestion: email address already used)', {
            cssClass: 'alert-danger',
            timeout: 3000
          });
          this.onShowProfile();
          console.log(err); return false;
        }
      );
    } else {
      document.getElementById('saveDataModal').click();
      this.flashMessage.show('Error occured on updating the profile, fields can not be empty', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
    }
  }

  onCancelUpdate() {
    this.onShowProfile();
  }

  onCancelBooking(id) {
    this.reservationService.deleteReservation(id).subscribe(
      data => {
        this.flashMessage.show('Reservation was deleted', {
          cssClass: 'alert-success',
          timeout: 3000
        });
      }, err => {
        this.flashMessage.show('Error occured on deleting the reservation', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        // this.onShowProfile();
        console.log(err); return false;
      }
    );
    document.getElementById('cancelBookingModal').click();
    this.getUserData();
  }

  onShowProfile() {
    this.showProfile = true;
    this.showReservations = false;
    this.showEdit = false;
  }
  onShowEdit() {
    this.showProfile = false;
    this.showReservations = false;
    this.showEdit = true;
  }
  onShowReservation() {
    this.showProfile = false;
    this.showReservations = true;
    this.showEdit = false;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
