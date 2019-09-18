import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOpretionsComponent } from './employee-opretions.component';

describe('EmployeeOpretionsComponent', () => {
  let component: EmployeeOpretionsComponent;
  let fixture: ComponentFixture<EmployeeOpretionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOpretionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOpretionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
