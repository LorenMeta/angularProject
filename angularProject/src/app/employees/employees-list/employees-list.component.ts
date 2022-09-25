import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private employeesService: EmployeesService) { } //inject service

  ngOnInit(): void {
    this.loadEmplyees();
    this.employeeForm = this.createEmployeeForm()
  }

  addEmployee(): void {
    this.employeesService.addEmployee(this.employeeForm.value).subscribe(() => { this.loadEmplyees(); this.employeeForm.reset() })
  }

  removeEmployee(id: number): void {
    this.employeesService.removeEmployee(id).subscribe(() => this.loadEmplyees())
  }

  private createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      position: ["", Validators.required],
      salary: ["", Validators.required]
    })
  }

  private loadEmplyees(): void {
    this.employeesService.getEmployess().subscribe((employees: Employee[]) => this.employees = employees)
  }

}
