import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

//  selectedFile:File = null;

  ngOnInit() {
  }
  constructor() { } //private user: UserService, private http: HttpClient

  
  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  // }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('http://localhost:3000/imagini/upload', fd)
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }
}
