import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  NgZone
} from "@angular/core";
import {Chart} from "chart.js/auto";
import 'chartjs-adapter-date-fns';
import { IDataset} from "../../../../../models/dataset";
import 'chartjs-adapter-moment';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

//AfterViewInit  гарантирует, что элементы шаблона готовы для использования
export class ChartComponent {
  private graphData: IDataset;
  private chart: any;
  @Input() set graph(newGraph: IDataset) {
    if (!newGraph) return;
    this.graphData = newGraph;
    this.updateChart();
  }
  @ViewChild('Canvas', { static: true }) private Canvas: ElementRef;

  constructor(private zone: NgZone) {}
  private createChart(): void {
    if (!this.graphData || !this.Canvas) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.chart?.destroy();
      const ctx = this.Canvas.nativeElement.getContext('2d');

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.graphData.data.map(point => point.x), // Мапим данные для оси X
          datasets: [{
            label: this.graphData.label,
            data: this.graphData.data.map(point => point.y), // Мапим данные для оси Y
            fill: this.graphData.fill,
            borderColor: this.graphData.borderColor,
            tension: this.graphData.tension
          }]
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
    });
  }

  private updateChart(): void {
    if (this.chart && this.graphData) {
      this.chart.data.datasets = [this.graphData];
      this.chart.update();
    } else {
      this.createChart(); // Создаем график, если его нет
    }
  }
}
