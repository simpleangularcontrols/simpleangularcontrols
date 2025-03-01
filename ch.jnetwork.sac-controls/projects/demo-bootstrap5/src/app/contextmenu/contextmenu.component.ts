import { InjectDemoComponent } from './injectdemo.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5ContextmenuModule, SACBootstrap5FormModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [FormsModule, InjectDemoComponent, SACBootstrap5FormModule, SACBootstrap5ContextmenuModule],
})
export class DemoContextmenuComponent {
    // #region Public Methods

    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
