import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Root } from '../models/employee-data.model';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {

  constructor(private httpClient: HttpClient) { }

  
  getEmployeDetails():Observable<Root>{
    return this.httpClient.get<Root>('../../assets/employee.json');
  }
}
