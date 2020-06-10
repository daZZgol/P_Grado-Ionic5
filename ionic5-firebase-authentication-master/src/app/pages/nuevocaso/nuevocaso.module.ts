import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevocasoPageRoutingModule } from './nuevocaso-routing.module';

import { NuevocasoPage } from './nuevocaso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevocasoPageRoutingModule
  ],
  declarations: [NuevocasoPage]
})
export class NuevocasoPageModule {}
