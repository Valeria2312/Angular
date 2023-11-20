import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './global-error/global-error.component';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import { FocusDirective } from './derectives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MapComponent } from './pages/map/map.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {ProductsModule} from "./pages/product-page/product.module";
import {RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    FocusDirective,
    ProductPageComponent,
    NavigationComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    ProductsModule,
    TitleCasePipe,
    RouterOutlet,
    MatToolbarModule,
    MatListModule,
    NgIf,
    NgForOf,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
