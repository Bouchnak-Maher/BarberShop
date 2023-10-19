import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';

import { AppointementComponent } from './appointement/appointement.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeesScheduleComponent } from './employees-schedule/employees-schedule.component';
import { ServicesAdminComponent } from './services-admin/services-admin.component';
import { ClientAdminComponent } from './client-admin/client-admin.component';
import { EmployeAdminComponent } from './employe-admin/employe-admin.component';

const routes: Routes = [
  { path:'acceuil',component:AcceuilComponent},
  
  { path:'services_admin',component:ServicesAdminComponent},
  { path:'client_admin',component:ClientAdminComponent},
  { path:'employee_admin',component:EmployeAdminComponent},

  { path:'appointement',component:AppointementComponent},
  { path:'login',component:LoginComponent},
  { path:'admin',component:AdminComponent},

  { path:'register',component:RegisterComponent},

  {path: '',redirectTo:'acceuil' ,pathMatch:'full'},
  {path:'employeesschedule',component:EmployeesScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
