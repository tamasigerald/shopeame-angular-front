import { ManagementPageComponent } from './management-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ManagementPageComponent},
  // {path: '/:idProduct', component: ManagementPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPageRoutingModule { }
