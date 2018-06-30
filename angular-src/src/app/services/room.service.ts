import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomService {

  constructor(private http: Http) { }

  getRooms() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/rooms/show', { headers: headers })
      .map(res => res.json());
  }
  getRoom(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/rooms/show/'+id, { headers: headers })
      .map(res => res.json());
  }


}
