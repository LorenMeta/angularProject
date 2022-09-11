import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees.service';



@NgModule({
  declarations: [
    EmployeesListComponent
  ],
  providers: [EmployeesService],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
