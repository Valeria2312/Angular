import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {
    BehaviorSubject,
    catchError,
    delay, map,
    Observable,
    of,
    pairwise,
    retry,
} from "rxjs";
import {IProduct} from "../../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})

export class ProductsService{
  private products$ = new BehaviorSubject<IProduct[]>([]);
  private readonly URL = "https://fakestoreapi.com/products";
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
      this.http.get<IProduct[]>(this.URL, {params: new HttpParams().append("limit", 5)})
          .pipe(
              delay(200),
              retry(2),
              catchError(this.errorHandler)
          ).subscribe({next: (products) => {
            this.products$.next(products)}})
  }
  getAll(): Observable<IProduct[]> {
      return this.products$.pipe(pairwise(), map(([prev, next]) => [...prev, ...next]))
  }
  create(product:IProduct) {
      this.products$.next([product])
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
      console.log("Ошибка")
    return of<IProduct[]>([]);
  }
}
