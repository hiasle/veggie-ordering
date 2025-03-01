import {Component, input} from '@angular/core';
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TabModel} from "../models/tab.model";

@Component({
  selector: 'app-tab-content-header',
    imports: [
        MatTabLink,
        MatTabNav,
        MatTabNavPanel,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './tab-content-header.component.html',
  styleUrl: './tab-content-header.component.scss',
  standalone: true
})
export class TabContentHeaderComponent {
  readonly heading = input.required<string>();
  readonly tabs = input.required<TabModel[]>();
}
