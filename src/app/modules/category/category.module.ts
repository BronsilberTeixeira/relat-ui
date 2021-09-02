import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoriaComponent } from './pages/list-categoria/list-categoria.component';
import { TableCategoriaComponent } from './pages/table-categoria/table-categoria.component';
import { FormCategoriaComponent } from './pages/components/form-categoria/form-categoria.component';




@NgModule({
  declarations: [
    ListCategoriaComponent,
    TableCategoriaComponent,
    FormCategoriaComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoryModule { }
