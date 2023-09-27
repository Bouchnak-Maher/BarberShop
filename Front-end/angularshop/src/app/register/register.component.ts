import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
employeename:string="";
email:string="";
password:string="";

constructor(private http:HttpClient){}

save(){

let bodyData={
  "employeename":this.employeename,
  "email": this.email,
  "password": this.password
};

this.http.post("http://localhost:8885/save",bodyData,{responseType:'text'}).subscribe((resultData:any)=>
{
  console.log(resultData);
  alert("Employee Registred Successfully")
});

}


}
