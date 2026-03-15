import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SACBootstrap3ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-contextmenu-repeat',
    standalone: true,
    templateUrl: './repeat.component.html',
    imports: [SACBootstrap3ContextmenuModule, NgIf],
})
export class RepeatComponent {
    // #region Properties

    @Input()
    public index = 0;
    @Input()
    public name = '';

    // #endregion Properties

    // #region Public Methods

    public showdialog(message: string): void {
        alert(message);
    }

    // #endregion Public Methods
}
