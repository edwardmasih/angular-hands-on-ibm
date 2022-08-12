import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
    // loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'createEmp',
    component: CreateEmpComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
