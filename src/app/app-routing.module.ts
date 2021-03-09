import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'products', loadChildren: () =>
    import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'management', loadChildren: () =>
    import('./pages/management-page/management-page.module').then(m => m.ManagementPageModule)
  },
  {
    path: 'management/:idProduct', loadChildren: () =>
    import('./pages/management-page/management-page.module').then(m => m.ManagementPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
