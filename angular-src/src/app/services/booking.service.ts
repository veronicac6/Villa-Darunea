import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {Client} from '../components/booking/client';

@Injectable()
export class BookingService {

  //private clientUrl = '/clienti';

// class Rezervare {
//   client: {},
//   camera: {},
//   nrPersone: number,
//   dataCreare: Date,
//   dataCheckIn: date,
//   dataCheckOut: date,
//   pretTotal: number
// }

constructor() { }

//http//:localhost:3000/rezervare
// createClient(newClient: Client): Promise < void | Client> {
//   return this.http.post(this.clientUrl, newClient)
//     .toPromise()
//     .then(res => rest.json() as Client)
//     .catch(this.handleError);
// }
}
