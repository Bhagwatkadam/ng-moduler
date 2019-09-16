import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HrDetilsComponent } from './hr-detils/hr-detils.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'hr-details', component: HrDetilsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
