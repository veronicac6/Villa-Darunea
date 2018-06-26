import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  admin:any;

  constructor(private http: Http) { }
// ----------------------------------------
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------------
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // this.isAdmin();
    return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------------
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------------
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user)); //localstorage can store only strings, no objects
    this.authToken = token;
    this.user = user;
  }
  // ----------------------------------------
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  // ----------------------------------------
  loggedIn() {
    return tokenNotExpired('id_token');
  }
  // ----------------------------------------
  isAdmin(user) {
  // console.log(user);
  return user.user.role==1;
  //   return this.getProfile(this.user).map(user => {
  //     if (user.user.role == 1) {
  //       this.admin=true;
  //       return this.admin;
  //     } else {
  //       return this.admin;
  //     }
  //   }, err => { console.log(err); return this.admin; }
  //   ).take(1);
  }
  // ----------------------------------------
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    // this.isAdmin();
  }
}
