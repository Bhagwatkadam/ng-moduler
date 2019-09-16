import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDetilsComponent } from './hr-detils.component';

describe('HrDetilsComponent', () => {
  let component: HrDetilsComponent;
  let fixture: ComponentFixture<HrDetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
