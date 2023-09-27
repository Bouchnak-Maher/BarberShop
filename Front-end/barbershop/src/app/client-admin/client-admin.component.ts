import { Component } from '@angular/core';
import {ClientService} from '../client.service'
import {Client} from '../client';

@Component({
  selector: 'app-client-admin',
  templateUrl: './client-admin.component.html',
  styleUrls: ['./client-admin.component.css']
})
export class ClientAdminComponent {
  ClientList:Client[]=[];

constructor(private clientService:ClientService){}
ngOnInit(): void {

     
this.getClient();
}
getClient(){
  this.clientService.getclient().subscribe(data => {
    this.ClientList=data;

  });
}
}
