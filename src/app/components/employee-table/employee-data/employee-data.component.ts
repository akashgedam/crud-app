import { Employee } from './../../../models/employee-data.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GetEmployeeService } from 'src/app/services/get-employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit, OnDestroy {
  public employees: any;
  public headers: any;
  private destroySubject: Subject<void> = new Subject();
  public headerValues: any;
  constructor(private employeeService: GetEmployeeService) { }

  ngOnInit(): void {
      this.employeeService.getEmployeDetails().pipe(
      takeUntil(this.destroySubject)).subscribe((res)=>{
        if(res){
        this.employees = res;
        this.headers = Object.keys(this.employees.Employees[0]);
        console.log(this.headers);
        }
      });
    }
    
   
  ngOnDestroy(): void {
      this.destroySubject.next();
  }
}
