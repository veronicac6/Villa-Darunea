import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  // admin: any;
  // adminVal = false;
  role: any;

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
    this.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .map(res => res.json());
  }

  getUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/show/' + id, { headers: headers })
      .map(res => res.json());
  }
  //----------------------------------------
  updateProfile(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/update/' + data._id, data, { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------------
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user)); //localstorage can store only strings, no objects
    localStorage.setItem('role', JSON.stringify(user.role));
    this.role = user.role;
    this.authToken = token;
    this.user = user;
    // this.adminRole=user.role;
    // console.log(this.adminRole);
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
  isAdmin() {
    const role = localStorage.getItem('role');
    if (role == '1') {
      return true;
    }
    return false;
  }
  // ----------------------------------------
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    // this.isAdmin();
  }

  //............................................
  getUsers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/show', { headers: headers })
      .map(res => res.json());
  }
}
