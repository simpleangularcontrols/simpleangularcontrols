import { Component } from '@angular/core';
import { SACBootstrap5FormModule, SACBootstrap5TabsModule } from '@simpleangularcontrols/sac-bootstrap5';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5TabsModule,
    ],
})
export class DemoTabsComponent {

}
