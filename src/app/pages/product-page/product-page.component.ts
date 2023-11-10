import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  title = 'Angular App';
  loading = false
  //стрим
  //$ пототму что приходит Observable
  products$: Observable<IProduct[]>
  term = ''
  constructor(
    public productsService: ProductsService,
    public modalService:ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe((products) => {
      this.loading = false
    })
  }



}
