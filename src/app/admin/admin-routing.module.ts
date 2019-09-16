import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';


const routes: Routes = [
  {path: '', component: HomeComponent, 
  children: [
    {path: 'admin-list', component: AdminlistComponent},
    {path: 'admin-details', component: AdmindetailsComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
