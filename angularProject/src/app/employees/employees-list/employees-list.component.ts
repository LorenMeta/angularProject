import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService) { } //inject service

  ngOnInit(): void {
    this.loadEmplyees()
  }
  
  private loadEmplyees(): void {
    this.employeesService.getEmployess().subscribe((employees: Employee[]) => this.employees = employees)
  }

}
