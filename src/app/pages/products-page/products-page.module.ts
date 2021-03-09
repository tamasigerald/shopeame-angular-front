import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductsPageComponent, GalleryViewComponent, ListViewComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductsPageModule { }
