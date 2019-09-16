import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HomeComponent } from './home/home.component';
import { HrlistComponent } from './hrlist/hrlist.component';
import { HrDetilsComponent } from './hr-detils/hr-detils.component';

@NgModule({
  declarations: [HomeComponent, HrlistComponent, HrDetilsComponent],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
