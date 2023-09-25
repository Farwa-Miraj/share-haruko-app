import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoPartPageRoutingModule } from './logo-part-routing.module';

import { LogoPartPage } from './logo-part.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoPartPageRoutingModule
  ],
  declarations: [LogoPartPage],
  exports:[LogoPartPage],

})
export class LogoPartPageModule {}
