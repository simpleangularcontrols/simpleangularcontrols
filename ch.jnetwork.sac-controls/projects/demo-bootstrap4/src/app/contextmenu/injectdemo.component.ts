import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { SACBootstrap4ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-injectdemo-component',
    templateUrl: './injectdemo.component.html',
    standalone: true,
    imports: [SACBootstrap4ContextmenuModule, NgTemplateOutlet],
})
export class InjectDemoComponent {
    // #region Properties

    @ContentChild('externalActions', { static: true })
    public template: TemplateRef<any>;

    // #endregion Properties
}
