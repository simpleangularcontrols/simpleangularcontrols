import { Component } from '@angular/core';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
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
