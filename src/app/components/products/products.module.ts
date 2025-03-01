import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsSharedModule } from '@shared/forms';
import {TabContentHeaderComponent} from "../shared/tab-content-header/tab-content-header.component";

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        FormsSharedModule,
        TabContentHeaderComponent,
    ],
  declarations: [ProductsComponent, ProductFormComponent, ProductListComponent],
})
export class ProductsModule {}
