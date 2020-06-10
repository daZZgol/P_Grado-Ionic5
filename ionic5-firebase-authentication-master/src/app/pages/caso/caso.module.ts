import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoPageRoutingModule } from './caso-routing.module';

import { CasoPage } from './caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoPageRoutingModule
  ],
  declarations: [CasoPage]
})
export class CasoPageModule {}
