import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3FormModule, SACBootstrap3TabsModule } from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true,
    imports: [FormsModule, SACBootstrap3FormModule, SACBootstrap3TabsModule],
})
export class DemoTabsComponent {
    // #region Properties

    public languages = ['de', 'fr', 'it'];

    // #endregion Properties
}
