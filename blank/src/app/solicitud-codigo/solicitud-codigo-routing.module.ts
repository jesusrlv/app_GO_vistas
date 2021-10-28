import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudCodigoPage } from './solicitud-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudCodigoPageRoutingModule {}
