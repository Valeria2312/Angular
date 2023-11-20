
export interface IDataset {
  label: string;
  data: Array<ChartDataPoint>;
  fill: boolean;
  borderColor: string;
  tension: number;
}

export interface ChartDataPoint {
  x: string;
  y: number;
}
