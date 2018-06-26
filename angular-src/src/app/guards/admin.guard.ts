import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) {
  }

  canActivate() {

    return this.authService.getProfile().map(
      profile => {
        // console.log(profile);
        if (profile.user.role == 1) {
          // console.log(profile.user.role);
          return true;
        } else {
          this.router.navigate(['/profile']);
          return false;
        }
      }
    ).take(1);

  }

}
