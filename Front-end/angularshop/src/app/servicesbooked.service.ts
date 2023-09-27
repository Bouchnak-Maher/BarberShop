import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Servicesbooked} from './servicesbooked';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesbookedService {
  private baseURL = "http://localhost:8886/api/users/Servicesbooked";
  constructor(private httpClient: HttpClient) { }
  savesservices(servicesbooked: Servicesbooked): Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.httpClient.post(`${this.baseURL}`, servicesbooked,httpOptions);
  }

  getServicesnames(id: number): Observable<String>{
    return this.httpClient.get<String>(`${this.baseURL}/${id}`);
  }
  getAllServicesNames(appointmentId: number): Observable<string[]> {
    const url = `${this.baseURL}/${appointmentId}`;
    return this.httpClient.get<string[]>(url);
  }
}
