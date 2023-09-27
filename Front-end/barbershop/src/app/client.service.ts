import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8886/api/users/clients";
  constructor(private httpClient: HttpClient) { }
  getclientBynumber(number: String): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/${number}`);
  }
  createAppointments(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, client);
  }
  getLastClientId(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseURL}`);
  }
  getclient(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}/find`);
  }
}
