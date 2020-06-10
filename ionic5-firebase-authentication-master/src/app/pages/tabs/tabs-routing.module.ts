import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: "profile",
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      }, 
      {
        path: "expediente",
        loadChildren: () => import('../expedientes/expedientes.module').then( m => m.ExpedientesPageModule)
      },
      {
        path: "seguimiento",
        loadChildren: () => import('../seguimiento/seguimiento.module').then(m => m.SeguimientoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
