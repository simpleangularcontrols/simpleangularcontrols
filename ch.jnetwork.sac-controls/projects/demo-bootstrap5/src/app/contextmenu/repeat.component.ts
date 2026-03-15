import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SACBootstrap5ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-contextmenu-repeat',
    standalone: true,
    templateUrl: './repeat.component.html',
    imports: [SACBootstrap5ContextmenuModule, NgIf],
})
export class RepeatComponent {
    // #region Properties

    @Input()
    public index = 0;
    @Input()
    public name = '';

    // #endregion Properties
}
