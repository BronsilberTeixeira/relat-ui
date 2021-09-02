import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListProdutoComponent } from './pages/list-produto/list-produto.component';
import { TableProdutoComponent } from './pages/table-produto/table-produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [
    ListProdutoComponent,
    TableProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProdutoModule { }
