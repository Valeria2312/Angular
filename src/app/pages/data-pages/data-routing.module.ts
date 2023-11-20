import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DataPageComponent} from "./data-page.component";
import {TableComponent} from "./components/table/table.component";
import {GraphsComponent} from "./components/graphs/graphs.component";

const routes: Routes = [
  {
    path: '',
    component: DataPageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tables' }, // Изменено на 'tables'
      { path: 'tables', component: TableComponent },
      { path: 'graphs', component: GraphsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}

