import { Routes } from '@angular/router';
import { EmployeeRegistration } from './features/auth/employee-registration/employee-registration';
import { Login } from './features/auth/login/login';
export const routes: Routes = [
  {
    path: '',
    component: Login
  }
];