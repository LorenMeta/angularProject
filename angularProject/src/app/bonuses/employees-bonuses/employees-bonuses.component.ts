import { Component, OnInit } from '@angular/core';
import { BonusesService } from 'src/app/bonuses/bonuses.service';

@Component({
  selector: 'app-employees-bonuses',
  templateUrl: './employees-bonuses.component.html',
  styleUrls: ['./employees-bonuses.component.scss']
})
export class EmployeesBonusesComponent implements OnInit {

  constructor(private bonusesService: BonusesService) { }
  displayBonusData:any = [];
  ngOnInit(): void {
    this.bonusesService.getEmployeesBonuses().subscribe(data => this.displayBonusData = data)
  }

}
