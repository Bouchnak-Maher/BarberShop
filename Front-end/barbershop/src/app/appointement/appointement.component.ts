import { Component,OnInit } from '@angular/core';
import {Appointments} from '../appointments';
import {Services} from '../services';
import {EmployeesSchedule} from '../employeesschedule';

import {ServicesService} from '../services.service'
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeService} from '../employee.service'
import {EmployeesScheduleService} from '../employees-schedule.service'

import {ServicesbookedService} from '../servicesbooked.service'
import {ClientService} from '../client.service'
import {Client} from '../client';

import {AppointmentsService} from '../appointments.service'
import { Employee } from '../employee';
import { Servicesbooked } from '../servicesbooked';
import { Time } from '@angular/common';
import { DatePipe } from '@angular/common';

interface CheckboxOption {
  value: string;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit  {
  
  checkboxOptions: CheckboxOption[] = [
    { value: '1', label: 'Select', checked: false },
    { value: '2', label: 'Select', checked: false },
    { value: '3', label: 'Select', checked: false },
    { value: '4', label: 'Select', checked: false },
    { value: '5', label: 'Select', checked: false },
    { value: '6', label: 'Select', checked: false },
    { value: '7', label: 'Select', checked: false },
    { value: '8', label: 'Select', checked: false },
    { value: '9', label: 'Select', checked: false },
    
    // Add more options as needed
  ];
  currentTime:Time={ hours: 0, minutes: 0};
  numberOfOptions=9;
  checkedValues: number[] = [];
  appointments: Appointments = new Appointments();
  client:Client=new Client();
  employeesSchedule:EmployeesSchedule=new EmployeesSchedule();
   servicesBooked = new Servicesbooked();
  services: Services = new Services();
   id= 3;
   last=0;
   idc: number =0;
   fromHour1: String="";
   toHour:string="";
   EmployeesSchedule:EmployeesSchedule[]=[];
   Appointments: Appointments[] = [];
   Serviceslist: Services[] = [];
   EmployeeList:Employee[]=[];
   currentDate = new Date(); // Current date
   appointmentDays: any[] = []; // Populate with actual data
   availableTimeSlots: any = {}; // Populate with actual data
  status = false;
  startTimes: any[] = [];

  addToggle(){
    this.status = !this.status;       
  }
  constructor(private appointmentsService: AppointmentsService,private employeesScheduleService:EmployeesScheduleService,private clientService:ClientService,private servicesbookedService:ServicesbookedService,private servicesService: ServicesService,private employeeService:EmployeeService, private route: ActivatedRoute,
    private router: Router) {   this.initializeAppointmentDays(); // Populate appointmentDays
    this.initializeAvailableTimeSlots(); // Populate availableTimeSlots  
     
  }
  
  ngOnInit(): void {

     
    this.getServices();
    this.getEmployee();
   
    this.getEmployeeScheduled();
  }



    getAppointmentsdate(year: number, month: number, day: number): Promise<any[]> {
      return new Promise((resolve) => {
        this.appointmentsService
          .getStartTimesForDate(year, month, day)
          .subscribe((data) => {
            this.startTimes = data;
            this.startTimes = this.startTimes.map((datetime: string) => {
              const datePipe = new DatePipe('en-US');
              return datePipe.transform(datetime, 'yyyy-MM-ddTHH:mm:ss+00:00');
            });
    
            console.log(this.startTimes);
    
            resolve(this.startTimes); // Resolve with the startTimes array
          });
      });
    }
    
    formatDateTime(date: Date, start: string) {
      const dateTimeString = `${date.toISOString().split('T')[0]} ${start}`;
      return new Date(dateTimeString).getTime();

    }

    setTimeOnDate(date: Date, start: string) {
      const [hours, minutes] = start.split(':').map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
      
      return newDate;
      
    }
    
  
    private initializeAppointmentDays(): void {
      // Example: Populating appointmentDays for 10 days starting from today
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        this.appointmentDays.push({
          dayOfWeek: currentDate.getDay(), // Day of the week (0 - Sunday, 1 - Monday, ...)
          date: currentDate,
        });
      }
    }
  
    private initializeAvailableTimeSlots(): void {
      
      // Example: Populating availableTimeSlots for each day of the week
      for (let day = 0; day < 8; day++) {
        
      
      }
    }
    inputValue: string = '';

    onKey(event: any) {
      this.inputValue = event.target.value;
      console.log(this.inputValue);
      this.clientService.getclientBynumber(this.inputValue).subscribe(data=>{
        this.idc=data;})
      console.log( this.idc);
     
    }
    onInputChange() {
      console.log('Input value changed:', this.inputValue);
      }
    OnS(){
      this.clientService.getclientBynumber(this.inputValue).subscribe(data=>{
        this.idc=data;})
      console.log( this.idc);
     
    }
    getRange(count: number): number[] {
      return Array.from({ length: count }, (_, index) => index);
    }
  
    getDayName(offset: number): string {
      const date = new Date(this.currentDate);
      date.setDate(date.getDate() + offset);
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    }
  
    getDayNumber(offset: number): string {
      const date = new Date(this.currentDate);
      date.setDate(date.getDate() + offset);
      return date.getDate().toString();
    }
  
    getMonthName(offset: number): string {
      const date = new Date(this.currentDate);
      date.setDate(date.getDate() + offset);
      return date.toLocaleDateString('en-US', { month: 'short' });
    }
    updateAppointements(id: number){
      this.appointmentsService.getAppointmentsById(id).subscribe(data=>{
        this.appointments=data;
        console.log("elijbdtha" ,this.appointments);


        this.appointmentsService.updateAppointments(this.checkedValues, this.appointments).subscribe(
          response => {
            console.log('Appointments updated:', response);
            // Handle response as needed
          },
          error => {
            console.error('Error updating appointments:', error);
            // Handle error as needed
          }
        );
     // Assuming that this.checkedValues contains the array of IDs to process
this.checkedValues.forEach(value => {
  const serviceToSave = new Servicesbooked(); // Create a new instance for each iteration
  serviceToSave.service_id = value;
  serviceToSave.appointment_id = this.appointments.appointment_id;

  this.servicesbookedService.savesservices(serviceToSave).subscribe(
    (data: any) => {

      console.log(`Saved service with ID: ${serviceToSave.service_id}`);
      console.log(serviceToSave);
    },
    (error: any) => {
      console.log(`Error saving service with ID: ${serviceToSave.service_id}`);
      console.error(error);
    }
  );
});

      this.goToEmployeeList();
      
    });
  }
  async getEmployeeScheduled() {
    this.employeesScheduleService.getemployees_schedule().subscribe(async data => {
      this.EmployeesSchedule = data;
      const slotDurationMinutes = 30;
      this.availableTimeSlots = []; // Initialize an array to store time slots
      const date = new Date();
      let day:String;
      let month:String;
      let year:number
      let currentDate:String;
     
      for (let i = 0; i < this.EmployeesSchedule.length; i++) {

        if(date.getMonth() + 1<=10){       
          day = date.getDate().toString().padStart(2, '0');
         
         month = (date.getMonth() + 1).toString().padStart(2, '0');;
         year = date.getFullYear();
         currentDate = `${year}-${month}-${day}`;
 
       }
       else{
           day = String(date.getDate());
           month = String(date.getMonth() + 1);
          year = date.getFullYear();
 
          currentDate = `${day}-${month}-${year}`;
         
       }
        console.log(currentDate);
        const schedule = this.EmployeesSchedule[i];
        const timeSlots = [];
        // Parse from_hour and to_hour into Date objects
        const currentTimestr = parseTime(String(schedule.from_hour));
        const currentTimestR = String(schedule.from_hour);

        const tohour = parseTime(String(schedule.to_hour));
       
        // Concatenate the date and time parts and add the time zone offset
        let formattedDatetimea = `${currentDate}T${currentTimestR}.000+00:00`;


        let currentTime = new Date(currentTimestr); // Convert to Date object
      
        const datePipe = new DatePipe('en-US');
        const formattedcurrentTime = datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
        const originalDatetime = String (formattedcurrentTime); // The original datetime string
        const dateParts = originalDatetime.split(' '); // Split the date and time
        const dateStr = dateParts[0]; // Extract the date part
        const timeStr = dateParts[1]; // Extract the time part
        
        // Format the date and time
        const formattedDatetime = `${dateStr}T${String(schedule.from_hour)}+00:00`;
        console.log(formattedDatetimea);

        let timePart = formattedDatetimea.slice(11, 16);

          console.log(formattedDatetime);
          console.log(this.startTimes);

          const existsInList =this.startTimes.includes(formattedDatetime);
          await this.getAppointmentsdate(year, +month, +day)
          console.log( this.availableTimeSlots)
      while (((compareTimes(currentTime, tohour)) <= 0 ) ){
        
        const datePipe = new DatePipe('en-US');
        const formattedcurrentTime = datePipe.transform(formattedDatetimea, 'yyyy-MM-dd HH:mm:ss');
        const originalDatetime = String (formattedcurrentTime); // The original datetime string
        const dateParts = originalDatetime.split(' '); // Split the date and time
        const dateStr = dateParts[0]; // Extract the date part
        const timeStr = dateParts[1]; // Extract the time part
        
        // Format the date and time
        const formattedDatetime = `${dateStr}T${timePart}:00+00:00`; 
        console.log(this.startTimes);
        console.log(this.appointmentDays);



if(!this.startTimes.includes(formattedDatetime)){
        timeSlots.push({
            start: `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`,
            end: addminutes( `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`, slotDurationMinutes),
          });
        }
          currentTime = Addminutes(currentTime, slotDurationMinutes);
          timePart=addminutes(timePart, slotDurationMinutes);
        }
        
        // Push the time slots for this employee schedule into the array
      

        // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayOfWeek = date.getDay();

// Use splice to insert timeSlots at the specified index
        this.availableTimeSlots.splice(dayOfWeek, 0, timeSlots);
      
        date.setDate(date.getDate() + 1);
      }
    });
  
    // Helper function to parse time strings into Date objects
    function parseTime(timeStr: string): Date {
      const [hours, minutes, seconds] = timeStr.split(':').map(Number);
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(seconds);
      return date;
    }
  
    // Helper function to compare two Date objects
    function compareTimes(time1: Date, time2: Date): number {
      return time1.getTime() - time2.getTime();
    }
    
function Addminutes(time: Date, minutesToAdd: number): Date {
  const newTime = new Date(time);
  newTime.setMinutes(newTime.getMinutes() + minutesToAdd);
  return newTime;
}
    // Helper function to add minutes to a Date object
    function addminutes(time: string, minutesToAdd: number): string {
      const [hours, minutes] = time.split(':').map(Number);
      const newMinutes = minutes + minutesToAdd;
      const newHours = hours + Math.floor(newMinutes / 60);
      const formattedHours = String(newHours).padStart(2, '0');
      const formattedMinutes = String(newMinutes % 60).padStart(2, '0');
      return `${formattedHours}:${formattedMinutes}`;
    }
    
    
  }
  
  
  // Define the Time type outside of the function
 
  
    private getAppointments(){
      this.appointmentsService.getAppointments().subscribe(data => {
        this.Appointments=data;

      });
    }
    private getServices(){
      this.servicesService.getServices().subscribe(data => {
        this.Serviceslist=data;
   
        
      });
      
      
          

    }
    getlastid(){
      this.clientService.getLastClientId().subscribe(data =>{
        this.last=data;
       

        this.appointments.client_id=this.last+1;
       

      })
    }
     getEmployee(){
      this.employeeService.getEmployee().subscribe(data => {
        this.EmployeeList=data;
        
      });
      
      
          

    }
    getLabelForValue(value: string): string {
      const option = this.checkboxOptions.find(option => option.value === value);
      return option ? option.label : '';
    }
  saveEmployee(){
    if (this.idc == null) {
      this.clientService.getLastClientId().subscribe(data =>{
        this.last=data;
       
    
        this.appointments.client_id=this.last+1;
       
       
        this.clientService.createAppointments(this.client).subscribe((data:any) =>{
          this.appointmentsService.createAppointments(this.appointments).subscribe( (data: any) =>{
   
            this.getAppointments();
            console.log(this.appointments);
      
          
          },
            (    error: any) => console.log(error));
          
    
        },(    error: any) => console.log(error));
      })   }else{
    
      console.log(this.idc);
    
      this.appointments.client_id=this.idc;
      console.log(this.appointments.client_id);}

    
    

    this.appointmentsService.createAppointments(this.appointments).subscribe( (data: any) =>{
   
      this.getAppointments();
      console.log(this.appointments);

    
    },
      (    error: any) => console.log(error));
    
  }
  
  goToEmployeeList(){
    this.router.navigate(['']);
  }
  
  onSubmit(){
    this.checkedValues = this.checkboxOptions
        .filter(option => option.checked)
        .map(option => parseInt(option.value, 10)); 
      
  
    console.log(this.checkedValues); // Array of checked numbers
    this.checkedValues.forEach(value => {
      // Use the value as an ID or perform any other action
      console.log(`Processing ID: ${value}`);
      this.servicesService.getServicesById(value).subscribe(data=>{
        this.services=data;
        console.log(this.services
          );
  
      });
    });
            
    

    
  }
  OnSubmit(){
   
    this.saveEmployee();
   
   
    
  }

   
  
   
  }

