import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {MapComponent} from "./pages/map/map.component";

const routes: Routes = [
  {
    path: 'all',
    loadChildren: () =>
      import('./product.module').then(
        (m) => m.ProductsModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
