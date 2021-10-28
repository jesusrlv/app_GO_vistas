import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeResidentePage } from './home-residente.page';

const routes: Routes = [
  {
    path: '',
    component: HomeResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeResidentePageRoutingModule {}
