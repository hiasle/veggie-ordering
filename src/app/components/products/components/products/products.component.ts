import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TabModel} from "../../../shared/models/tab.model";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ProductsComponent {

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
