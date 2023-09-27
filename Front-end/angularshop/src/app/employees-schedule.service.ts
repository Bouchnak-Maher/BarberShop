import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, scheduled } from 'rxjs';
import { EmployeesSchedule } from './employeesschedule';
import { Time } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class EmployeesScheduleService {
  private baseURL = "http://localhost:8886/api/users/employees_schedule";
  constructor(private httpClient: HttpClient) { }
  getemployees_schedule(): Observable<EmployeesSchedule[]>{
    return this.httpClient.get<EmployeesSchedule[]>(`${this.baseURL}`);
  }
  updateSchedule(id: number, from_hour: Time, to_hour: Time): Observable<any> {
    const url = `${this.baseURL}/${id}?from_hour=${from_hour}&to_hour=${to_hour}`;
    const body = { from_hour, to_hour };
    return this.httpClient.post(url, body);
  }
}
