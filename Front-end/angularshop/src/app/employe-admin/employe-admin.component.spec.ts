import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAdminComponent } from './employe-admin.component';

describe('EmployeAdminComponent', () => {
  let component: EmployeAdminComponent;
  let fixture: ComponentFixture<EmployeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeAdminComponent]
    });
    fixture = TestBed.createComponent(EmployeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
