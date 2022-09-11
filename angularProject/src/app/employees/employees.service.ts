import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../shared/mock-employees';
import { Employee } from '../shared/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  getEmployess(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  constructor() { }
}
