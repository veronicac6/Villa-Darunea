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

  // user: Object;
  // console.log(user);
adminVal:false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // this.authService.getProfile().subscribe(
    //   profile => { this.user = profile.user; },
    //   err => { console.log(err); return false; }
    // );
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
    // adminVar = false;
    return false;
    // userRole=null;
  }
}
