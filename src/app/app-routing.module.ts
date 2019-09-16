import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'hr', loadChildren: './hr/hr.module#HrModule'},
  {path: 'product', loadChildren: './product/product.module#ProductModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
