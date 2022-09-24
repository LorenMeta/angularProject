import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesBonusesComponent } from './employees-bonuses.component';

describe('EmployeesBonusesComponent', () => {
  let component: EmployeesBonusesComponent;
  let fixture: ComponentFixture<EmployeesBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesBonusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
