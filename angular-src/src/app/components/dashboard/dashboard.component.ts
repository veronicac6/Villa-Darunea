import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clienti: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    }
  }
