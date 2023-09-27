import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  status = false;
  addToggle(){
    this.status = !this.status;       
  }

  email:string="";
  password:string="";
  
  constructor(private router:Router,private http:HttpClient){}
  

  Login(){
    console.log(this.email);
    console.log(this.password);

    let bodyData={
      email:this.email,
      password:this.password,};
      
this.http.post("http://localhost:8885/api/departments/login",bodyData).subscribe((resultData:any)=>
{
  console.log(resultData);
  if(resultData.message=="Email not exist"){
    alert("Email not exists")
  }else if (resultData.message=="Login Succes"){
    this.router.navigateByUrl('/admin');

  }else{
    alert("Incorrect Email and password not match")

  }
});
    }
  }


