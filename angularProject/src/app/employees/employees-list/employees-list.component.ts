import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {


  constructor(private employeesService: EmployeesService) { }
  displayBonusData: any = [];
  ngOnInit(): void {
    this.employeesService.getEmployess().subscribe(data => this.displayBonusData = data)
  }

}
