import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeOpretionsComponent } from './employee-opretions/employee-opretions.component';

const routes: Routes = [
  {path: '', component: EmployeeOpretionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
