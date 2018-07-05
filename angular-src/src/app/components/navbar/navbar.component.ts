import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger, keyframes } from "@angular/animations";
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navbar-menu', [
      transition('* => *', [

        query('.nav-item', style({ opacity: 0, transform: 'translateY(-40px)' })),

        query('.nav-item', stagger('200ms', [
          animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ]))

      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  adminRole: any;
  userLoggedIn = JSON.parse(localStorage.getItem('user'));
  // adminVal = false;
  // user: Object;
  // console.log(user);
  // adminVal:false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // console.log(this.userLoggedIn.id);
    // this.authService.getProfile().subscribe(
    //   profile => {
    //     this.user = profile.user;
    //     // console.log(this.user.role);
    //     if (this.user.role == 1) {
    //       // console.log("da");
    //       this.adminVal = true;
    //     } else this.adminVal=false;
    //   },
    //   err => { console.log(err); return false; }
    // );

    // this.adminVal=false;
    // this.authService.getProfile().subscribe(
    //   profile => { this.adminRole = profile.user.role; },
    //   err => { console.log(err); return false; }
    // );
    // console.log(this.adminRole);
    // if (this.adminRole = "1") {
    //   this.adminVal = true;
    // }
    //
    // this.adminVal=this.authService.isAdmin(this.user);
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

  isAdmin() {
    this.authService.getProfile().subscribe(
      profile => {
        this.adminRole = profile.user.role;
        // console.log(this.user.role);
      },
      err => { console.log(err); return false; }
    );

    if (this.adminRole == 1) {
      return true;
    } else { return false; };
  }
}
