import { Component, OnInit} from '@angular/core';
import {Appointments} from '../appointments';
import {AppointmentsService} from '../appointments.service'
import {ServicesbookedService} from '../servicesbooked.service'
import {ServicesService} from '../services.service'
import {Services} from '../services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'
import {ClientService} from '../client.service'
import {Client} from '../client';

interface AppointmentsWithClient {
  appointment_id: number;
  date_created: string;
  start_time: string;
  end_time_expected: string;
  canceled: number;
  cancellation_reason: string;
  client_firstName: string;
  client_lastName: string;
  employee_lastName:string;
  employee_firstName:string;// Include the client name field
  services: string[]; // Add the services property here

}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit  {
  todayDate : Date = new Date();
  EmployeeList:Employee[]=[];
  appointmentsForToday: AppointmentsWithClient[] = [];

  appointmentsWithClients: AppointmentsWithClient[] = [];
  Appointments: Appointments[] = [];
  Appointmentscancled: AppointmentsWithClient[] = [];
  ClientList:Client[]=[];

  serviceNames: string[] = [];
  appointmentId: number=0;
  cancellationReason: string="";
  message: string="";
  Serviceslist:Services[]=[];
  constructor(private appointmentsService: AppointmentsService,private servicesbookeSdervice:ServicesbookedService,
    private router: Router ,private employeeService:EmployeeService,private clientService:ClientService, private servicesService:ServicesService, private httpClient: HttpClient 
    ) { }
    ngOnInit(): void {
      this.getcancled();
      this.getAppointments();
      this.getServices();
      this.getEmployee();
      this.getClient();
    }

    getClient(){
      this.clientService.getclient().subscribe(data => {
        this.ClientList=data;
    
      });
    }
    getEmployee(){
      this.employeeService.getEmployee().subscribe(data => {
        this.EmployeeList=data;
        
      });
}
     getServices(){
      this.servicesService.getServices().subscribe(data => {
        this.Serviceslist=data;
    
        
      });
      
      
          
    
    }
    private getAppointments(){
      this.httpClient.get<AppointmentsWithClient[]>("http://localhost:8886/api/users/appointments/info").subscribe(
        data => {
          this.appointmentsWithClients = data;
          const currentDate = new Date();

          // Filter appointments for the current day
          this.appointmentsForToday = this.appointmentsWithClients.filter(appointment => {
            const appointmentDate = new Date(appointment.start_time);
            return (
              appointmentDate.getDate() === currentDate.getDate() &&
              appointmentDate.getMonth() === currentDate.getMonth() &&
              appointmentDate.getFullYear() === currentDate.getFullYear()&&
              appointment.canceled===0
            );
          });
          this.fetchServicesForAppointments();

        },
        error => {
          console.log(error);
        }
      );

   } 
   isFutureAppointment(start_time: string): boolean {
    const currentDate = new Date();
    const appointmentStartTime = new Date(start_time);
    
    // Extract only the date parts (year, month, and day) from both dates
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const appointmentStartTimeOnly = new Date(appointmentStartTime.getFullYear(), appointmentStartTime.getMonth(), appointmentStartTime.getDate());
  
    // Compare the appointment start date with the current date
    return appointmentStartTimeOnly.getDate() === currentDateOnly.getDate();
  }

   getAllServicesNames(appointmentId:number){
   this.servicesbookeSdervice.getAllServicesNames(appointmentId)
      .subscribe(
        (servicesNames: string[]) => {
          this.serviceNames = servicesNames;        },
          (error) => {
            console.error('Error fetching services names:', error);
          }
        
      );}
     
    
      fetchServicesForAppointments(): void {
        this.appointmentsWithClients.forEach(appointment => {
          this.fetchServicesForAppointment(appointment.appointment_id);
        });
      }
    
      fetchServicesForAppointment(appointmentId: number): void {
        this.servicesbookeSdervice.getAllServicesNames(appointmentId).subscribe(
          (servicesNames: string[]) => {
            const appointmentToUpdate = this.appointmentsWithClients.find(
              appointment => appointment.appointment_id === appointmentId
            );
            if (appointmentToUpdate) {
              appointmentToUpdate.services = servicesNames;
            }
          },
          (error) => {
            console.error('Error fetching services names:', error);
          }
        );
      }
      cancelAppointment(appointmentId:number) {
        this.appointmentsService.cancelAppointment(appointmentId, this.cancellationReason).subscribe(
          (response) => {
            // Handle success, e.g., show a success message
            console.log(response);

          },
          (error) => {
            // Handle error, e.g., show an error message
            console.error(error);
          }
        );
        this.appointmentsWithClients = this.appointmentsWithClients.filter(Services=> Services.appointment_id !== appointmentId);

      }
      getcancled(){
       
        this.httpClient.get<AppointmentsWithClient[]>("http://localhost:8886/api/users/appointments/cancled").subscribe(
        data => {
          this.Appointmentscancled=data;
  
        });
      }
    
  }
