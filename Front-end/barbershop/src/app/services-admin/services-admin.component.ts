import { Component } from '@angular/core';
import {ServicesService} from '../services.service'
import {Services} from '../services';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms'; // Import NgForm if you haven't already

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrls: ['./services-admin.component.css']
})

export class ServicesAdminComponent {
  Serviceslist: Services[] = [];
  successMessage: string="";
  service:Services=new Services();

  services:Services=new Services();
constructor(private servicesService: ServicesService){
  this.successMessage$.subscribe((message) => {
    this.successMessage = message;
    // Clear the message after a certain time, if desired
    setTimeout(() => {
      this.successMessage = '';
    }, 5000); // 5 seconds
  });
}
ngOnInit(): void {
  this.getServices();
}

private getServices(){
  this.servicesService.getServices().subscribe(data => {
    this.Serviceslist=data;

    
  });
  
  
      

}
refreshServicesList() {
  this.servicesService.getServices().subscribe(data => {
    this.Serviceslist = data;
  });
}
getServicesbyid(id:number){
  this.servicesService.getServicesById(id).subscribe(data=>{
    this.services=data;
    console.log(this.services
      );

  });
}
createServices(){
  this.servicesService.createServices(this.services).subscribe( (data: any) =>{
   
  
    console.log(this.services);
    this.showCard = false; // Set showCard to false to hide the card
    this.refreshServicesList();

    this.showSuccessMessage('Service  added successfully');

  },
  
)
}

CreateServices(){
  this.servicesService.createServices(this.services).subscribe( (data: any) =>{
   
  
    console.log(this.services);
    this.refreshServicesList();

    this.showSuccessMessage('Service  Updated successfully');

  },
  
)
}
showCard: boolean = true; // Initially, the card is visible


private successMessageSubject = new Subject<string>();

successMessage$ = this.successMessageSubject.asObservable();

showSuccessMessage(message: string) {
  this.successMessageSubject.next(message);
}
deleteServices(id:number){
  this.servicesService.deleteServices(id).subscribe();
  this.Serviceslist = this.Serviceslist.filter(Services=> Services.service_id !== id);
  this.showSuccessMessage('Service deleted successfully');

}
}
