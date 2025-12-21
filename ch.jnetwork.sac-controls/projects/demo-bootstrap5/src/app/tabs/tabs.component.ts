import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ContextmenuModule,
    SACBootstrap5FormModule,
    SACBootstrap5TabsModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true,
    imports: [FormsModule, NgForOf, SACBootstrap5FormModule, SACBootstrap5TabsModule, SACBootstrap5ContextmenuModule],
})
export class DemoTabsComponent {
    // #region Properties

    public languages = ['de', 'fr', 'it'];

    // #endregion Properties
}
