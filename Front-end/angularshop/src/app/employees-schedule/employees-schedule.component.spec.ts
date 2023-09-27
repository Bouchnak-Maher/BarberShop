import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesScheduleComponent } from './employees-schedule.component';

describe('EmployeesScheduleComponent', () => {
  let component: EmployeesScheduleComponent;
  let fixture: ComponentFixture<EmployeesScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesScheduleComponent]
    });
    fixture = TestBed.createComponent(EmployeesScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
