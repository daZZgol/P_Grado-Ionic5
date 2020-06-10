import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoexpedientePage } from './nuevoexpediente.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoexpedientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoexpedientePageRoutingModule {}
