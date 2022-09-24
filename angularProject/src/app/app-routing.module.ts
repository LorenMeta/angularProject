import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesBonusesComponent } from './bonuses/employees-bonuses/employees-bonuses.component';

const routes: Routes = [
  {
    path: 'employees-list', component: EmployeesListComponent
  },
  {
    path: 'employees-bonuses', component: EmployeesBonusesComponent
  },
  {
    path: '**', redirectTo: 'employees-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
