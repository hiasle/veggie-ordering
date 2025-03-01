import { Component } from '@angular/core';
import {TabModel} from "../../../shared/models/tab.model";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss',
    standalone: false
})
export class OrdersComponent {

  tabs: TabModel[] = [{
    main: true,
    link: 'list',
    linkName: 'Liste'
  }, {
    main: false,
    link: 'detail',
    linkName: 'Neu'
  }];

}
