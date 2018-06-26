import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


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
    private flashMessage: FlashMessagesService) {

  }
  ngOnInit() {

  }
  onClickBook() {
    // if (){
    //   this.flashMessage.show('You need to log in in order to book a room',
    //     {
    //       cssClass: 'alert-success',
    //       timeout: 5000
    //     });
    // } else
    this.router.navigate(['login']);
    this.flashMessage.show('You need to log in or register in order to book a room',
      {
        cssClass: 'alert-danger ',
        timeout: 5000
      });
// this.flashMessage.grayOut(true);
  }


  //   function initMap() {
  //     const uluru : {lat: -25.363, lng: 131.044};
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 4,
  //       center: uluru
  //     });
  //     const marker = new google.maps.Marker({
  //       position: uluru,
  //       map: map
  //     });
  //     console.log("worked");
  //   }
}
