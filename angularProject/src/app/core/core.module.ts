import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
