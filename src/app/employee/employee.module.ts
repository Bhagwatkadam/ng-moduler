import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeOpretionsComponent } from './employee-opretions/employee-opretions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeOpretionsComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
