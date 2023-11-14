import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./product.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./map.module').then(
        (m) => m.MapModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
