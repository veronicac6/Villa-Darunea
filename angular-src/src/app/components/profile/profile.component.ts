import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router) {
    this.authService.getProfile().subscribe(
      profile => {
        this.userData = profile.user;
        // console.log(this.userData);
      },
      err => { console.log(err); return false; }
    );
  }

  ngOnInit() {

  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    // this.adminVar = false;
    return false;
    // userRole=null;
    // this.adminVal = false;
  }

}
