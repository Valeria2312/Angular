import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from "@angular/core";
import {IGraph} from "../../../../../models/graph";
import {Chart} from "chart.js/auto";
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
  //AfterViewInit  гарантирует, что элементы шаблона готовы для использования
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() graphs: IGraph[];
  @ViewChild('Canvas', { static: true }) private Canvas: ElementRef;
  @ViewChildren('chartContainer', { read: ElementRef }) chartContainers: QueryList<ElementRef>;

  private chart: Chart;
  private charts: Chart[] = [];

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.createChart();
  }

  private createChart(): void {
    if (!this.graphs || this.graphs.length === 0 || !this.chartContainers) {
      return;
    }

    const chartContainersArray = this.chartContainers.toArray();
    const graphsByOfficeId = this.groupGraphsByOfficeId();

    for (const officeId in graphsByOfficeId) {
      if (graphsByOfficeId.hasOwnProperty(officeId)) {
        const canvas = document.createElement('canvas');
        const mappedData = graphsByOfficeId[officeId].map((row: any) => ({ x: row.dt_date, y: row.qty }));

        const dataset = {
          label: `Office ${officeId}`,
          data: mappedData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        };

        const newChart = new Chart(canvas, {
          type: 'line',
          data: {
            datasets: [dataset]
          },
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Quantity'
                }
              }
            }
          }
        });
        chartContainersArray[0].nativeElement.appendChild(canvas);
        this.charts.push(newChart);
      }
    }
  }

  private groupGraphsByOfficeId(): { [officeId: string]: IGraph[] } {
    const groupedGraphs: { [officeId: string]: IGraph[] } = {};
    this.graphs.forEach(graph => {
      const officeId = graph.office_id.toString();

      if (!groupedGraphs[officeId]) {
        groupedGraphs[officeId] = [];
      }
      groupedGraphs[officeId].push(graph);
    });
    return groupedGraphs;

  }
}
