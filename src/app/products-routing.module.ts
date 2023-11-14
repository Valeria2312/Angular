import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {MapComponent} from "./pages/map/map.component";

const routes: Routes = [
  {
    path: "products", component: ProductPageComponent
  },
  {
    path: "about", component: MapComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
