import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeResidentePageRoutingModule } from './home-residente-routing.module';

import { HomeResidentePage } from './home-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeResidentePageRoutingModule
  ],
  declarations: [HomeResidentePage]
})
export class HomeResidentePageModule {}
