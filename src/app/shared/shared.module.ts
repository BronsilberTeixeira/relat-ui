import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './components/busca/busca.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [
    BuscaComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    BuscaComponent
  ]
})
export class SharedModule { }
