import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Appointments} from './appointments';
import { HttpHeaders } from '@angular/common/http';

import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private baseURL = "http://localhost:8886/api/users/appointments";
  constructor(private httpClient: HttpClient) { }
  /*****************Appointments***************/
  getAppointments(): Observable<Appointments[]>{
    return this.httpClient.get<Appointments[]>(`${this.baseURL}`);
  }
  getAppointmentscancled(): Observable<Appointments[]>{
    return this.httpClient.get<Appointments[]>(`${this.baseURL}/cancled`);
  }
  createAppointments(appointments: Appointments): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, appointments);
  }

  getAppointmentsById(id: number): Observable<Appointments>{
    return this.httpClient.get<Appointments>(`${this.baseURL}/${id}`);
  }
  updateAppointments(ids: number[], appointments: any): Observable<any> {
    const url = `${this.baseURL}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { ids: ids.join(',') } // Convert ids array to comma-separated string
    };

 
    return this.httpClient.put(url, appointments,httpOptions);

  }
  
   
    

  
  cancelAppointment(appointmentId: number, cancellationReason: string): Observable<string> {
    const url = `${this.baseURL}/cancel?appointment_id=${appointmentId}&cancellation_reason=${cancellationReason}`;
    const params = {
      appointment_id: appointmentId,
      cancellation_reason: cancellationReason
      
      
    };
    
    return this.httpClient.post<string>(url,{ params } );
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getStartTimesForDate(year: number, month: number, day: number): Observable<Date[]> {
    const params = {
      year: year.toString(),
      month: month.toString(),
      day: day.toString(),
    };

    return this.httpClient.get<Date[]>(`${this.baseURL}/startTimes`, { params });

  }
}



