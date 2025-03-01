import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'injectdemo-component',
    templateUrl: './injectdemo.component.html',
})
export class InjectDemoComponent {
    // #region Properties

    @ContentChild('externalActions', { static: true })
    public template: TemplateRef<any>;

    // #endregion Properties
}
