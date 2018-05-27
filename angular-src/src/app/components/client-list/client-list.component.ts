import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
  clients: any[];


  constructor(private clientService: ClientService) { }

  ngOnInit() {

    this.clientService.getClients().subscribe(
      data => {this.clients= data;},//onNext-receive HTTP response
      err => { console.error(err); return false; }//onError-if returns an error code
      // () => console.log('done loading clients')
    );//onCompleted-wehn Observable finished returning its data
  }
}
