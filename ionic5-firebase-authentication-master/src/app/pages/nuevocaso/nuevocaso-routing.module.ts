import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevocasoPage } from './nuevocaso.page';

const routes: Routes = [
  {
    path: '',
    component: NuevocasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevocasoPageRoutingModule {}
