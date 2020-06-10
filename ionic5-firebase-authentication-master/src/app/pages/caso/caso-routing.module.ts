import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoPage } from './caso.page';

const routes: Routes = [
  {
    path: '',
    component: CasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoPageRoutingModule {}
