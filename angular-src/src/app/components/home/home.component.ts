import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
latitude= 46.412408;
longitude= 30.080824;
  constructor(private router: Router) {

  }
  ngOnInit(){

  }
  onClick(){
    this.router.navigate(['booking']);
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
