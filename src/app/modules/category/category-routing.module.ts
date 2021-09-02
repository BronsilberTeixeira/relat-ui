
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriaComponent } from './pages/list-categoria/list-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
