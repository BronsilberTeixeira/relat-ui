import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { ListBrandComponent } from './pages/list-brand/list-brand.component';
import { TableBrandComponent } from './pages/table-brand/table-brand.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListBrandComponent,
    TableBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BrandModule { }
