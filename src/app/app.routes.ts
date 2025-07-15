import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'creative',
        loadComponent: () => import('./components/creative/creative.component').then(m => m.CreativeComponent),
        data: { title: 'Silco Creative - Diseño y Branding' }
    },
    {
        path: 'barberia',
        loadComponent: () => import('./components/barberia/barberia.component').then(m => m.BarberiaComponent),
        data: { title: 'Silco Barbería - Estilo Premium' }
    },
    // Si quieres una página 404 personalizada:
    // { path: '**', loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent) }
    { path: '**', redirectTo: '', pathMatch: 'full' }
];