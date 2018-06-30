import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  contactNumber: string;

  ngOnInit() { }

  validateEmail(email) {
    if (!this.validateService.validateEmail(email)) {
      //   this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
  }

  onRegisterSubmit(myForm: NgForm) {
    if (myForm.valid) {

      const user = {
        name: myForm.value.name,
        surname: myForm.value.surname,
        username: myForm.value.username,
        email: myForm.value.email,
        password: myForm.value.password,
        contactNumber: myForm.value.contactNumber
      };

      //Register user
      this.authService.registerUser(user).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/login']);
        } else {
          myForm.reset();
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });

    } else {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
}
