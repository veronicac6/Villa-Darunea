import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationService {

  constructor(private http: Http) { }

  getReservations() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/reservations/show', { headers: headers })
      .map(res => res.json());
  }

  postReservation(reservation) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/reservations/new', reservation,{ headers: headers })
      .map(res => res.json());
  }
}
