import { Component } from '@angular/core';
import { SACBootstrap3FormModule, SACBootstrap3TabsModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3TabsModule,
    ],
})
export class DemoTabsComponent {

}
