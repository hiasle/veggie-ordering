import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDto } from '@openapi/generated';
import { map, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type UiItem = { toggled: boolean };

export type OrderUiItem = OrderDto & UiItem;

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss',
  standalone: false,
})
export class OrdersTableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'name',
    'purchasedate',
    'details',
    'info',
  ];

  dataSource: OrderDto[] = [];
  destroy$ = new Subject<void>();

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService
      .getOrders()
      .pipe(
        map((orders) => {
          return orders.map((order) => {
            return { ...order, toggled: false };
          });
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((orders) => {
        console.log(orders);
        this.dataSource = orders;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
