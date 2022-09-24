import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { BonusesModule } from './bonuses/bonuses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    BonusesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
