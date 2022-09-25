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

  addEmployee(employee: Employee): Observable<number> {
    const listOfEmployees: Array<Employee> = EMPLOYEES;
    const id: number = listOfEmployees.map((employee: Employee) => employee.id).sort().reverse[0] + 1;
    return of(EMPLOYEES.push({
      ...employee, id
    }))
  }

  removeEmployee(id: number): Observable<Employee[]> {
    const index: number = EMPLOYEES.findIndex(employee => employee.id === id);
    return of(EMPLOYEES.splice(index, 1))
  }

  constructor() { }
}
