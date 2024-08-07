import { Component } from '@angular/core';
import {
  SACBootstrap5ContextmenuModule,
  SACBootstrap5FormModule,
  SACBootstrap5TabsModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap5FormModule,
    SACBootstrap5TabsModule,
    SACBootstrap5ContextmenuModule,
  ],
})
export class DemoTabsComponent {
  // #region Properties

  public languages = ['de', 'fr', 'it'];

  // #endregion Properties
}
