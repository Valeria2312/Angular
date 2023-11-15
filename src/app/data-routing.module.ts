import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DataPageComponent} from "./pages/data-pages/data-page.component";

const routes: Routes = [
  {
    path: "", component: DataPageComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
