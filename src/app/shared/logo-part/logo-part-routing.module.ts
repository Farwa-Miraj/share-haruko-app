import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoPartPage } from './logo-part.page';

const routes: Routes = [
  {
    path: '',
    component: LogoPartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoPartPageRoutingModule {}
