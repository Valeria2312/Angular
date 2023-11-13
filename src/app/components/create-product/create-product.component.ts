import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {ProductPageComponent} from "../../pages/product-page/product-page.component";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(private productService: ProductsService, private modalService: ModalService, ) {
  }
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }
  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 43,
        count: 1
      }
    })
      this.modalService.close()
      // .subscribe( {next: (product) => {
      //     this.modalService.close()
      //   }, error: () => { console.log("z nen")}
      // } )
  }

}
