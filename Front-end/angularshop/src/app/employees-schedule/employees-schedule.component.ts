import { Component } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'
import {EmployeesScheduleService} from '../employees-schedule.service'
import {EmployeesSchedule} from '../employeesschedule';
import { Time } from '@angular/common';

@Component({
  selector: 'app-employees-schedule',
  templateUrl: './employees-schedule.component.html',
  styleUrls: ['./employees-schedule.component.css']
})

export class EmployeesScheduleComponent {
  EmployeeList:Employee[]=[];
  EmployeesSchedule:EmployeesSchedule[]=[];
  id:number=0 ; // Replace with the desired ID
   from_hour = ''; // Replace with the desired from_hour
   to_hour = ''; // Replace with the desired to_hour
   message: string = ''; // Initialize the message variable

  ngOnInit(): void {

     
   this.getEmployee();
   this.getEmployeeScheduled();
  }
  daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  getDays(id:number): string {
    const currentDate = new Date();
    const days = [];

    for (let i = 0; i <=7; i++) {
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + i);
      const dayIndex = nextDay.getDay();
      days.push(this.daysOfWeek[dayIndex]);
    }

    
    return days[id-1];
  }
constructor(private employeeService:EmployeeService,private employeesScheduleService:EmployeesScheduleService){}
  getEmployee(){
    this.employeeService.getEmployee().subscribe(data => {
      this.EmployeeList=data;
    });
}
getEmployeeScheduled() {
  this.employeesScheduleService.getemployees_schedule().subscribe(async data => {
    this.EmployeesSchedule = data;
    console.log(this.EmployeesSchedule);

})}
Message: string = '';


showCustomAlert: boolean = false;
customAlertMessage: string = '';

updateSchedule(id: number,from_hour:Time,to_hour:Time) {

  this.employeesScheduleService.updateSchedule(id, from_hour, to_hour).subscribe(response => {
    console.log('Schedule updated:', response);
  });
  this.message = 'Schedule saved successfully';
  this.showCustomAlert = true;
  this.customAlertMessage = 'Schedule updated successfully';

}
closeCustomAlert() {
  // Close the custom alert
  this.showCustomAlert = false;
}

}
