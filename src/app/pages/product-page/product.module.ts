import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product/product.component";
import {GlobalErrorComponent} from "../../global-error/global-error.component";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {ModalComponent} from "./components/modal/modal.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {FocusDirective} from "../../derectives/focus.directive";
import {ProductPageComponent} from "./product-page.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DecimalPipe, NgClass, NgIf, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NavigationComponent} from "../../navigation/navigation.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {MapComponent} from "../map/map.component";
import {AppModule} from "../../app.module";
import {ProductsService} from "./services/products.service";
import {ModalService} from "./services/modal.service";
import {ErrorService} from "../../services/error.service";

@NgModule({
  declarations: [
    CreateProductComponent,
    ModalComponent,
    ProductComponent,
    FilterProductsPipe
  ],
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NgOptimizedImage,
    TitleCasePipe,
    MatCardModule,
    NgClass,
    DecimalPipe,
    NgIf,
  ],
  exports: [
    ProductComponent,
    ModalComponent,
    CreateProductComponent,
    FilterProductsPipe
  ],
  providers: [ProductsService, ModalService, ErrorService]
})
export class ProductsModule {}
