import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppointementComponent } from './appointement/appointement.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeesScheduleComponent } from './employees-schedule/employees-schedule.component';
import { ServicesAdminComponent } from './services-admin/services-admin.component';
import { ClientAdminComponent } from './client-admin/client-admin.component';
import { EmployeAdminComponent } from './employe-admin/employe-admin.component';

@NgModule({
  declarations: [
    AppComponent,
  
    AcceuilComponent,
    
    AppointementComponent,
    
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    EmployeesScheduleComponent,
    ServicesAdminComponent,
    ClientAdminComponent,
    EmployeAdminComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
