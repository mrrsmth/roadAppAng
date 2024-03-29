import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { TableComponent } from './pages/table/table.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'table', component: TableComponent },
          { path: 'registration', component: RegistrationComponent },
          { path: 'login', component: LoginComponent },
        ],
      },
      { path: '',   redirectTo: '', pathMatch: 'full' },
      { path: '**', component: ErrorComponent },
];
