import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IGraph} from "../../../models/graph";
import {DataService} from "../../services/data.service";
import {ChartData} from "chart.js";

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit{
  graphs:IGraph[] = [];
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getGraphsData()
  }
  getGraphsData() {
    this.dataService.getGraphs()
      .subscribe({next: value => {
          this.graphs = value
          console.log(this.graphs)
        }})
  }
}
