import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EmployeesListComponent
  ],
  providers: [EmployeesService],
  imports: [
    CommonModule, SharedModule
  ]
})
export class EmployeesModule { }
