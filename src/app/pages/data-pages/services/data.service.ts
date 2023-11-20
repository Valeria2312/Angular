import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../../services/error.service";
import {ITable} from "../../../../models/table";
import {IGraph} from "../../../../models/graph";


@Injectable()
export class DataService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {
  }
  getTable(): Observable<ITable[]> {
    return this.http.get<ITable[]>(`/data`);
  }

  getGraphs(): Observable<IGraph[]> {
    return this.http.get<IGraph[]>(`/data_detailed`);
  }
  groupGraphsByOfficeId(graphs: IGraph[]): any[] {
    const groupedGraphs = graphs.reduce((map, graph) => {
      const officeId = graph.office_id.toString();
      map.set(officeId, (map.get(officeId) || []).concat(graph));
      return map;
    }, new Map<string, IGraph[]>());

    return Array.from(groupedGraphs.entries()).map(([officeId, officeGraphs]) => {
      const mappedData = officeGraphs.map((row: IGraph) => ({ x: row.dt_date, y: row.qty }));

      return {
        label: `Office ${officeId}`,
        data: mappedData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      };
    });
  }

}
