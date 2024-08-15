import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { authGuard } from './Service/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'liste-absence',
        loadComponent: () => import('./demo/liste-absence/liste-absence.component').then(m => m.ListeAbsenceComponent)
        ,canActivate : [authGuard]

      },
      {
        path: 'Dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then(m => m.DashboardComponent)
        ,canActivate : [authGuard]
      },
      {
        path: 'ValidationAbsence',
        loadComponent: () => import('./demo/validation-absence/validation-absence.component').then(m => m.ValidationAbsenceComponent)
        ,canActivate : [authGuard]
      },
      {
        path: 'DemandeAbsence',
        loadComponent: () => import('./demo/demande-absence/demande-absence.component').then(m => m.DemandeAbsenceComponent)
        ,canActivate : [authGuard]
      },
      {
        path: 'UserForm',
        loadComponent: () => import('./demo/user-form/user-form.component').then(m => m.UserFormComponent)
        ,canActivate : [authGuard]
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./demo/user-form/user-form.component').then(m => m.UserFormComponent)
        ,canActivate : [authGuard]

      }

    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
