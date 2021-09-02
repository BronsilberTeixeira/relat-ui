import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './core/component/navigation/navigation.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'categoria',
        loadChildren: () =>
          import('./modules/category/category.module').then((m) => m.CategoryModule),
      },

      {
        path: 'produto',
        loadChildren: () =>
          import('./modules/produto/produto.module').then((m) => m.ProdutoModule)
      },

      {
        path: 'brand',
        loadChildren: () =>
          import('./modules/brand/brand.module').then((m) => m.BrandModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
