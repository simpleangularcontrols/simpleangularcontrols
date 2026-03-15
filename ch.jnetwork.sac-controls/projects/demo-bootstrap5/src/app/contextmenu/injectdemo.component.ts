import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { SACBootstrap5ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-injectdemo-component',
    templateUrl: './injectdemo.component.html',
    standalone: true,
    imports: [SACBootstrap5ContextmenuModule, NgTemplateOutlet],
})
export class InjectDemoComponent {
    // #region Properties

    @ContentChild('externalActions', { static: true })
    public template: TemplateRef<any>;

    // #endregion Properties
}
