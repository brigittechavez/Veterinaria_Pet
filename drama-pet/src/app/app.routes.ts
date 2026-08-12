import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.page').then(m => m.HomePageComponent)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/services/services-page/services-page.component').then(
        m => m.ServicesPageComponent
      )
  },
  {
    path: 'reservar',
    loadComponent: () =>
      import('./features/booking/booking-page/booking-page.component').then(
        m => m.BookingPageComponent
      )
  },
  {
    path: 'nuestra-manada',
    loadComponent: () =>
      import('./features/about/team-page/team-page.component').then(
        m => m.TeamPageComponent
      )
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contact/contact-page/contact-page.component').then(
        m => m.ContactPageComponent
      )
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./features/faq/faq-page/faq-page.component').then(
        m => m.FaqPageComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
