import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../services/customers.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CustomerDto } from '@openapi/generated';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer-list',
    imports: [CommonModule],
    templateUrl: './customer-list.component.html',
    styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy {

  customers$ = new BehaviorSubject<CustomerDto[]>([]);

  constructor(
    public customerService: CustomersService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.reloadCustomers();
  }

  async reloadCustomers(): Promise<void> {
    let customers = await lastValueFrom(this.customerService.getCustomers());
    this.customers$.next(customers);
  }

  async delete(customer: CustomerDto): Promise<void> {
    console.log('Deleting customer: ', customer);
    await lastValueFrom(this.customerService.deleteCustomer(customer));
    await this.reloadCustomers();
  }

  edit(customer: CustomerDto): void {
    this.router.navigate(['kaeufer/detail/', customer.id]);
  }

  ngOnDestroy(): void {
    this.customers$.complete();
  }
}
