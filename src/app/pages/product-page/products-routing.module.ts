import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductPageComponent} from "./product-page.component";
import {MapComponent} from "../map/map.component";

const routes: Routes = [
  {
    path: "", component: ProductPageComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
