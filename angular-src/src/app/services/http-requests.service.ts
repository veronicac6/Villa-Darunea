import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpRequestsService {

  constructor(private http: Http) { }

  // incrementHttpRequests(id){
  //     let headers = new Headers();
  //     headers.append('Content-type', 'application/json');
  //     return this.http.put('http://localhost:3000/httpRequests/increment/'+id, { headers: headers })
  //     .map(res => res.json());
  //   }

  showHttpRequests(){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/httpRequests/show', { headers: headers })
    .map(res => res.json());
  }

}
