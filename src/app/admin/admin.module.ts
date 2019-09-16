import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';

@NgModule({
  declarations: [HomeComponent, AdminlistComponent, AdmindetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
