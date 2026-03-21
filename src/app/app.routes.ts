import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'bindings', 
    pathMatch: 'full' 
  },
  { 
    path: 'bindings', 
    loadComponent: () => import('./components/bindings-demo/bindings-demo').then(m => m.BindingsDemoComponent) 
  },
  { 
    path: 'services', 
    loadComponent: () => import('./components/services-demo/services-demo').then(m => m.ServicesDemoComponent) 
  },
  { 
    path: 'directives', 
    loadComponent: () => import('./components/directives-demo/directives-demo').then(m => m.DirectivesDemoComponent) 
  },
  { 
    path: 'forms', 
    loadComponent: () => import('./components/forms-demo/forms-demo').then(m => m.FormsDemoComponent) 
  },
];
