import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SACBootstrap4ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'contextmenu-repeat',
    standalone: true,
    templateUrl: './repeat.component.html',
    imports: [SACBootstrap4ContextmenuModule, NgIf],
})
export class RepeatComponent {
    // #region Properties

    @Input()
    public index = 0;
    @Input()
    public name = '';

    // #endregion Properties
}
