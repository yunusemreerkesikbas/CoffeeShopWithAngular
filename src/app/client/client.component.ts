import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {

  constructor(
    private clientService : ClientService
  ) { }
  title = "Referanslarımız";
  clients : Client[];
  ngOnInit() {
    this.clientService.getClients().subscribe(data => {
      this.clients = data
    })
  }

}
