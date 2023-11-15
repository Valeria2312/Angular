import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {async, Subject, switchMap, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  title = 'Angular App';
  loading = false
  products: IProduct[]
  private load$ = new Subject<void>();
  term = ''
  destroy$ = new Subject<void>()
  constructor(
    public productsService: ProductsService,
    public modalService:ModalService
  ) {
    this.load$.pipe(
      tap(() => {
          this.loading = true
      }),
        switchMap(() => this.productsService.getAll().pipe( tap( () => {
          this.loading = false
        }))),
        takeUntil(this.destroy$)
  ).subscribe({
        next: (products) => {
          this.products = products
        },
    })
  }

  ngOnInit(): void {
      this.refresh()
  }
  refresh() {
    this.load$.next()
  }
  ngOnDestroy() {
    this.destroy$.next()
      this.destroy$.complete()

  }
}
