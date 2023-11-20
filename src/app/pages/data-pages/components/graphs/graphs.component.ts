import {Component, OnInit} from '@angular/core';
import {IGraph} from "../../../../../models/graph";
import {DataService} from "../../services/data.service";
import {IDataset} from "../../../../../models/dataset";
import {catchError, of} from "rxjs";
import {ITable} from "../../../../../models/table";

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit{
  graphs:IDataset[] = [];
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getGraphsData()
  }
  getGraphsData() {
    this.dataService.getGraphs()
      .pipe(
        catchError(errMsg => {
          console.log(errMsg, 'Не удалось получить данные для таблиц');
          return of<IGraph[]>([]);
        }),
      )
      .subscribe({next: value => {
          this.createGraphsInfo(value || [])
        }})
  }
  createGraphsInfo(value: IGraph[]) {
    this.graphs = this.dataService.groupGraphsByOfficeId(value);
  }
}
