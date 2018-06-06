import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VillaService {

  constructor(private http: Http) { }

  getVillas() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/ville/show', { headers: headers })
      .map(res => res.json());
  }
  getVilla(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/ville/show/'+id, { headers: headers })
      .map(res => res.json());
  }


}
