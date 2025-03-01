import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { SACBootstrap3ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'injectdemo-component',
    templateUrl: './injectdemo.component.html',
    standalone: true,
    imports: [SACBootstrap3ContextmenuModule, NgTemplateOutlet],
})
export class InjectDemoComponent {
    // #region Properties

    @ContentChild('externalActions', { static: true })
    public template: TemplateRef<any>;

    // #endregion Properties
}
