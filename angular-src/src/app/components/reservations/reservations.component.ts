import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { SearchByDatePipe } from '../../pipes/searchByDate.pipe';
import 'rxjs/Rx';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {

    // console.log(this.searchCheckIn);
    // console.log(this.searchCheckOut);
    this.reservationService.getReservations().subscribe(
      data => {
        this.reservations = data;
        // console.log(this.reservations);
      },
      err => { console.error(err); return false; }
    );
  }
  getDays(a, b) {
    let days = (new Date(a).getTime() - new Date(b).getTime()) / (1000 * 3600 * 24);
    // console.log(days);
    return days;
  }

}
