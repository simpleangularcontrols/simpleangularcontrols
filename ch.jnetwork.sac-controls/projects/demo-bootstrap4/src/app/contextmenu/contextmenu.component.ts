import { InjectDemoComponent } from './injectdemo.component';
import { RepeatComponent } from './repeat.component';
import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4ContextmenuModule, SACBootstrap4FormModule } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [
        FormsModule,
        RepeatComponent,
        InjectDemoComponent,
        SACBootstrap4FormModule,
        SACBootstrap4ContextmenuModule,
        NgForOf,
    ],
})
export class DemoContextmenuComponent {
    // #region Properties

    public numbers: number[];

    // #endregion Properties

    // #region Constructors

    constructor() {
        this.numbers = Array(5)
            .fill(1)
            .map((x, i) => i + 1);
    }

    // #endregion Constructors

    // #region Public Methods

    public debugAction1(): void {
        alert('Action 1');
    }

    public switchItems(): void {
        [this.numbers[0], this.numbers[1]] = [this.numbers[1], this.numbers[0]];
    }

    // #endregion Public Methods
}
