import { Injectable } from '@angular/core';
import { EMPLOYEESBONUSES } from '../shared/mock-employees-bonuses';
import { EmployeesBonuses } from '../shared/employees-bonuses'; 
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BonusesService {

  getEmployeesBonuses(): Observable<EmployeesBonuses[]> {
    return of(EMPLOYEESBONUSES);
  } 
  constructor() { }
}