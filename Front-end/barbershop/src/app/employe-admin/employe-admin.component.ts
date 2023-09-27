import { Component } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employe-admin',
  templateUrl: './employe-admin.component.html',
  styleUrls: ['./employe-admin.component.css']
})
export class EmployeAdminComponent {
  successMessage: string="";
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService){
    this.successMessage$.subscribe((message) => {
      this.successMessage = message;
      // Clear the message after a certain time, if desired
      setTimeout(() => {
        this.successMessage = '';
      }, 5000); // 5 seconds
    });
  }
  
  EmployeeList:Employee[]=[];
  ngOnInit(): void {

     
    this.getEmployee();
    }
    showCard=true;
    createemployee(){
      this.employeeService.createEmployee(this.employee).subscribe( (data: any) =>{
       
      
        console.log(this.employee);
       this.getEmployee();
       this.showCard = false; // Set showCard to false to hide the card

        this.showSuccessMessage('Employee  added successfully');
    
      },
      
    )
    }
    getEmployee(){
      this.employeeService.getEmployee().subscribe(data => {
        this.EmployeeList=data;
        console.log(this.EmployeeList);
        
      });
}
private successMessageSubject = new Subject<string>();

successMessage$ = this.successMessageSubject.asObservable();

showSuccessMessage(message: string) {
  this.successMessageSubject.next(message);
}
deleteEmployee(id:number){
  this.employeeService.deleteEmployee(id).subscribe();
  this.showSuccessMessage('Employee deleted successfully');
  this.EmployeeList = this.EmployeeList.filter(employee => employee.employee_id !==id);

}


}