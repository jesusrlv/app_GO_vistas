import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudCodigoPageRoutingModule } from './solicitud-codigo-routing.module';

import { SolicitudCodigoPage } from './solicitud-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudCodigoPageRoutingModule
  ],
  declarations: [SolicitudCodigoPage]
})
export class SolicitudCodigoPageModule {}
