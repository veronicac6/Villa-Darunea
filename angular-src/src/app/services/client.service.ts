import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  getClients() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/clienti/show', { headers: headers })
      .map(res => res.json());
  }

}
