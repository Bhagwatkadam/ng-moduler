import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'home', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', canActivate:[AuthGuard], loadChildren: './admin/admin.module#AdminModule' },
  { path: 'employee', canActivate:[AuthGuard], loadChildren: './employee/employee.module#EmployeeModule' },
  { path: 'hr', loadChildren: './hr/hr.module#HrModule' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
