import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesBonusesComponent } from './employees-bonuses/employees-bonuses.component';
import { BonusesService } from './bonuses.service';


@NgModule({
  declarations: [
    EmployeesBonusesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeesBonusesComponent
  ],
  providers: [
    BonusesService
  ]
})
export class BonusesModule { }
