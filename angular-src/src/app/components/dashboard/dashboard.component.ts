import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // selectedFile: File = null;
  // constructor(private http: HttpClient) { }
//

constructor(private user: UserService){

}
 ngOnInit() {
   }

 }
