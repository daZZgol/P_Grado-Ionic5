import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoexpedientePageRoutingModule } from './nuevoexpediente-routing.module';

import { NuevoexpedientePage } from './nuevoexpediente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoexpedientePageRoutingModule
  ],
  declarations: [NuevoexpedientePage]
})
export class NuevoexpedientePageModule {}
