import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ContextmenuModule,
  SACBootstrap4FormModule,
  SACBootstrap4TabsModule,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap4FormModule,
    SACBootstrap4TabsModule,
    SACBootstrap4ContextmenuModule,
  ],
})
export class DemoTabsComponent {}
