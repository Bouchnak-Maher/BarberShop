import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Services} from './services';
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  private baseURL = "http://localhost:8886/api/users/findservices";
  constructor(private httpClient: HttpClient) { }
  getServicesById(id: number): Observable<Services>{
    return this.httpClient.get<Services>(`${this.baseURL}/${id}`);
  }
  getServices(): Observable<Services[]>{
    return this.httpClient.get<Services[]>(`${this.baseURL}`);
  }
  deleteServices(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  createServices(services: Services): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, services);
  }
}
