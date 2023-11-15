import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/product-page/product.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./pages/map/map.module').then(
        (m) => m.MapModule
      ),
  },
  {
    path: 'data',
    loadChildren: () =>
      import('./pages/data-pages/data-page.module').then(
        (m) => m.DataPageModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
