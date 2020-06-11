import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs/expedientes',
    loadChildren: () => import('./pages/expedientes/expedientes.module').then( m => m.ExpedientesPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./pages/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'cliente/:id',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'nuevoexpediente',
    loadChildren: () => import('./pages/nuevoexpediente/nuevoexpediente.module').then( m => m.NuevoexpedientePageModule)
  },
  {
    path: 'nuevocaso/:id',
    loadChildren: () => import('./pages/nuevocaso/nuevocaso.module').then( m => m.NuevocasoPageModule)
  },
  {
    path: 'caso/:id',
    loadChildren: () => import('./pages/caso/caso.module').then( m => m.CasoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
