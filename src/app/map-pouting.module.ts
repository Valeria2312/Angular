import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MapComponent} from "./pages/map/map.component";

const routes: Routes = [
  {
    path: "", component: MapComponent
  },
  // {
  //   path: "about", component: MapComponent
  // }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
