import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebEmbebedPageRoutingModule } from './web-embebed-routing.module';

import { WebEmbebedPage } from './web-embebed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebEmbebedPageRoutingModule
  ],
  declarations: [WebEmbebedPage]
})
export class WebEmbebedPageModule {}
