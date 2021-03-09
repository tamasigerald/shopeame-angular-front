import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPageRoutingModule } from './management-page-routing.module';
import { ManagementPageComponent } from './management-page.component';
import { FormsModule } from '@angular/forms'; 
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [ManagementPageComponent, CardPreviewComponent, ProductFormComponent, DialogComponent],
  imports: [
    CommonModule,
    ManagementPageRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ManagementPageModule { }
