import { Component, OnInit } from '@angular/core';
import { GetEmployeeService } from 'src/app/services/get-employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor(private employeeService:GetEmployeeService) { }

  ngOnInit(): void {
  }

}
