import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product/product.component";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {ModalComponent} from "./components/modal/modal.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {FocusDirective} from "./derectives/focus.directive";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {MapComponent} from "./pages/map/map.component";
import {AppModule} from "./app.module";

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ProductsRoutingModule,
  ],
  providers: []
})
export class ProductsModule {}
