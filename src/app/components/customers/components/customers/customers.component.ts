import { Component } from '@angular/core';
import { ClientModel } from '../../../../models/client.model';
import {TabModel} from "../../../shared/models/tab.model";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
    standalone: false
})
export class CustomersComponent {

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
