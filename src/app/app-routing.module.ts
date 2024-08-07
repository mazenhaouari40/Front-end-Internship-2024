// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        // redirectTo: '/dashboard/default',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      },
      {
        path: 'liste-absence',
        loadComponent: () => import('./demo/liste-absence/liste-absence.component').then(m => m.ListeAbsenceComponent)
      },
      {
        path: 'Dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'ValidationAbsence',
        loadComponent: () => import('./demo/validation-absence/validation-absence.component').then(m => m.ValidationAbsenceComponent)
      },
      {
        path: 'DemandeAbsence',
        loadComponent: () => import('./demo/demande-absence/demande-absence.component').then(m => m.DemandeAbsenceComponent)
      },
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
