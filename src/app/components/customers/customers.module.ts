import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import {TabContentHeaderComponent} from "../shared/tab-content-header/tab-content-header.component";

@NgModule({
    imports: [CommonModule, CustomersRoutingModule, TabContentHeaderComponent],
  declarations: [CustomersComponent],
})
export class CustomersModule {}
