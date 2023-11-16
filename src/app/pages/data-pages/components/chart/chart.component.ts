import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  NgZone
} from "@angular/core";
import {IGraph} from "../../../../../models/graph";
import {Chart} from "chart.js/auto";
import 'chartjs-adapter-date-fns';
import {DataService} from "../../../../services/data.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
  //AfterViewInit  гарантирует, что элементы шаблона готовы для использования
export class ChartComponent implements AfterViewInit {
  private graphsData: IGraph[];
  private chart: Chart;
  private charts: Chart[] = [];
  @Input() set graphs(newGraphs: IGraph[]) {
    this.graphsData = newGraphs;
    if (this.chart) {
      this.chart.destroy();
    }
    this.createChart();
  }

  @ViewChild('Canvas', { static: true }) private Canvas: ElementRef;
  @ViewChildren('chartContainer', { read: ElementRef }) chartContainers: QueryList<ElementRef>;

  constructor(private dataService: DataService, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    if (!this.graphsData || this.graphsData.length === 0 || !this.chartContainers) {
      return;
    }

    const chartContainersArray = this.chartContainers.toArray();
    const graphsByOfficeId = this.dataService.groupGraphsByOfficeId(this.graphsData);

    for (const [officeId, officeGraphs] of graphsByOfficeId.entries()) {
      const canvas = document.createElement('canvas');
      const mappedData = officeGraphs.map((row: IGraph) => ({ x: row.dt_date, y: row.qty }));

      const dataset = {
        label: `Office ${officeId}`,
        data: mappedData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      };

      this.zone.runOutsideAngular(() => {
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
        this.charts.push(newChart as unknown as Chart);
      });
    }
  }
}
