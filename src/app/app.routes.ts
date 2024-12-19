import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  {
    path: 'alumnos',
    loadComponent: () => import('./pages/alumnos/alumnos.page').then(m => m.AlumnosPage)
  },
  {
    path: 'agregar-alumno',
    loadComponent: () => import('./pages/agregar-alumno/agregar-alumno.page').then(m => m.AgregarAlumnoPage)
  },
  {
    path: 'editar-alumno/:id',
    loadComponent: () => import('./pages/editar-alumno/editar-alumno.page').then(m => m.EditarAlumnoPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./pages/acerca-de/acerca-de.page').then(m => m.AcercaDePage)
  }
];
