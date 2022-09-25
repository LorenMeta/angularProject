import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesBonusesComponent } from './employees-bonuses/employees-bonuses.component';
import { BonusesService } from './bonuses.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeesBonusesComponent
  ],
  imports: [
    CommonModule, SharedModule
  ]
})
export class BonusesModule { }
