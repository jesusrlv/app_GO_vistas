import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebEmbebedPage } from './web-embebed.page';

const routes: Routes = [
  {
    path: '',
    component: WebEmbebedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebEmbebedPageRoutingModule {}
