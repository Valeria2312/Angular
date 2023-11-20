import {NgModule} from "@angular/core";
import {DataPageComponent} from "./data-page.component";
import {DataRoutingModule} from "./data-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {TableComponent} from "./components/table/table.component";
import {GraphsComponent} from "./components/graphs/graphs.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ChartComponent} from "./components/chart/chart.component";
import {DataService} from "./services/data.service";


@NgModule({
  declarations: [
    DataPageComponent,
    TableComponent,
    GraphsComponent,
    ChartComponent
  ],
    imports: [
        DataRoutingModule,
        MatTabsModule,
        MatTableModule,
        NgIf,
        MatPaginatorModule,
        NgForOf,
    ],
  providers: [
    DataService
  ]
})
export class DataPageModule {}
