import { Component, OnInit } from '@angular/core';
import { BonusesService } from 'src/app/bonuses/bonuses.service';
import { EmployeesBonuses } from 'src/app/shared/employees-bonuses';
@Component({
  selector: 'app-employees-bonuses',
  templateUrl: './employees-bonuses.component.html',
  styleUrls: ['./employees-bonuses.component.scss']
})
export class EmployeesBonusesComponent implements OnInit {
  employeesBonuses: EmployeesBonuses[] = [];

  constructor(private bonusesService: BonusesService) { }

  ngOnInit(): void { this.loadEmplyeesBonuses() }

  private loadEmplyeesBonuses(): void {
    this.bonusesService.getEmployeesBonuses().subscribe((employees: EmployeesBonuses[]) => this.employeesBonuses = employees)
  }
}
