import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';
import { SearchByUsernamePipe } from '../../pipes/searchByUsername.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users = [];
  date = new Date();
  show = false;
  showDetails:boolean[]=[];
  // showDetails:boolean[]=[];
  // reservations: any[];
  // selectedReservation = "";

  constructor(
    private flashMessage: FlashMessagesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUsers().subscribe(
      data => {
        this.users = data;
        for ( var i = 0; i < this.users.length; i++) {
        this.showDetails.push(false);}
        // console.log(this.showDetails);
      }, //onNext-receive HTTP response
      err => { console.error(err); return false; } //onError-if returns an error code
    );
  }

  editUser() { }

  showReservations(index) {
    this.showDetails[index]=!this.showDetails[index];
  }

  // showClients() {
  //   this.clientService.getClients().subscribe(
  //     data => {
  //       this.clients = data;
  //     }, //onNext-receive HTTP response
  //     err => { console.error(err); return false; } //onError-if returns an error code
  //   );
  // }


  // deleteClient(clientId) {
  //   this.clientService.deleteClient(clientId).subscribe(data => {
  //     if (data) {
  //       this.flashMessage.show("Client " + clientId + " was deleted!",
  //         {
  //           cssClass: 'alert-success',
  //           timeout: 5000
  //         });
  //       this.showClients();
  //     }
  //   });
  // }


  //
  // onChange(val) {
  //   this.selectedReservation = val;
  //   console.log(this.selectedReservation);
  // }

  // save(myForm: NgForm) { }

  // onSubmit(myForm: NgForm) {
  //   if (myForm.valid) {
  //     const newClient = {
  //       nume: myForm.value.surname,
  //       prenume: myForm.value.name,
  //       email: myForm.value.email,
  //       telefon: myForm.value.contact,
  //       rezervare: myForm.value.reservation
  //     };
  //     this.clientService.postClient(newClient)
  //       .subscribe(data => {
  //         if (data.success) {
  //           this.flashMessage.show(data.msg,
  //             {
  //               cssClass: 'alert-success',
  //               timeout: 5000
  //             });
  //           myForm.reset();
  //           this.router.navigate(['dashboard']);
  //
  //         } else {
  //           this.flashMessage.show(data.msg,
  //             {
  //               cssClass: 'alert-danger',
  //               timeout: 5000
  //             });
  //         }
  //       });
  //   }
  //   this.showClients();
  // }
  // showValue() {
  //   this.checked = !this.checked;
  // }
}
