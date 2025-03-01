import { InjectDemoComponent } from './injectdemo.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4ContextmenuModule, SACBootstrap4FormModule } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [FormsModule, InjectDemoComponent, SACBootstrap4FormModule, SACBootstrap4ContextmenuModule],
})
export class DemoContextmenuComponent {
    // #region Public Methods

    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
