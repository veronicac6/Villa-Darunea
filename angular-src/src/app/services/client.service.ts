import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

  getClient(id) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return this.http.get('http://localhost:3000/clienti/show/' + id, { headers: headers })
    .map(res => res.json());
  }

  postClient(client) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:3000/clienti/new', client, { headers: headers })
      .map(res => res.json());
  }

  deleteClient(id) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return this.http.delete('http://localhost:3000/clienti/delete/' + id, { headers: headers })
      .map(res => res);
  }


}
