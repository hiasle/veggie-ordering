import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './components/orders/orders.component';
import {OrdersListComponent} from './components/orders-list/orders-list.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {FormsSharedModule} from '@shared/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {OrdersTableComponent} from './components/orders-table/orders-table.component';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsSharedModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButton,
    MatIcon,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  declarations: [
    OrdersComponent,
    OrdersListComponent,
    OrderFormComponent,
    OrdersTableComponent,
  ],
})
export class OrdersModule {
}
