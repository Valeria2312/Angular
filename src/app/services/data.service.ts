import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {ITable} from "../../models/table";
import {IProduct} from "../../models/product";
import {IGraph} from "../../models/graph";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }
  getTable(): Observable<ITable[]> {
     return this.http.get<ITable[]>("http://localhost:3000/data")
  }
  getGraphs(): Observable<IGraph[]> {
   return this.http.get<IGraph[]>("http://localhost:3000/data_detailed")
  }


}
