import { Component } from '@angular/core';
import { SACBootstrap4FormModule, SACBootstrap4TabsModule } from '@simpleangularcontrols/sac-bootstrap4';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4TabsModule,
    ],
})
export class DemoTabsComponent {

}
