import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {ITable} from "../../models/table";
import {IGraph} from "../../models/graph";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //url если работает proxy
  private apiUrl = '/api';
  private url = "http://localhost:3000"
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }
  getTable(): Observable<ITable[]> {
    return this.http.get<ITable[]>(`${this.url}/data`);
  }

  getGraphs(): Observable<IGraph[]> {
    return this.http.get<IGraph[]>(`${this.url}/data_detailed`);
  }
  groupGraphsByOfficeId(graphs: IGraph[]): Map<string, IGraph[]> {
    const groupedGraphs = new Map<string, IGraph[]>();

    graphs.forEach(graph => {
      const officeId = graph.office_id.toString();

      if (!groupedGraphs.has(officeId)) {
        groupedGraphs.set(officeId, []);
      }

      groupedGraphs.get(officeId)!.push(graph);
    });

    return groupedGraphs;
  }

}
