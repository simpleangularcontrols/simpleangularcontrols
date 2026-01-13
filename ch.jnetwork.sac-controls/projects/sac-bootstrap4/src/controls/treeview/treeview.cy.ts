import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TreeviewModule } from './treeview.module';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacTreeviewComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                { id: 2, label: 'Sub Item 1', icon: '', expanded: false, children: [] },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');

        cy.get('sac-treeview').should('exist');
        cy.get('li[data-path="/1"]').should('have.text', 'Root');
        cy.get('li[data-path="/1/3"]').should('have.text', 'Sub Item 2');
    });

    it('should have expanded and collabsed icons', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');

        cy.get('sac-treeview').should('exist');
        cy.get('li[data-path="/1"]').should('have.text', 'Root');
        cy.get('li[data-path="/1/2"]').find('div').eq(1).should('have.class', 'fa-folder-plus');
        // set focus
        cy.get('li[data-path="/1/2"] span').click();
        // expand node
        cy.get('li[data-path="/1/2"] span').click();
        cy.get('li[data-path="/1/2"]').find('div').eq(1).should('have.class', 'fa-folder-open');
        cy.get('li[data-path="/1/3"]').should('have.text', 'Sub Item 2');
    });

    it('should have action icon', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1/4"] a i').should('not.exist');
        cy.get('li[data-path="/1/4"] span').click();
        cy.get('li[data-path="/1/4"] a i').should('exist');
    });

    it('should work with custom children field', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" attrchildren="subnodes" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            subnodes: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    subnodes: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, subnodes: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, subnodes: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, subnodes: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1"]').should('have.text', 'Root');
        cy.get('li[data-path="/1/3"]').should('have.text', 'Sub Item 2');
    });

    it('should work with custom text field', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" attrlabel="text" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            text: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    text: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, text: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, text: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, text: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1"]').should('have.text', 'Root');
        cy.get('li[data-path="/1/3"]').should('have.text', 'Sub Item 2');
    });

    it('should have disabled state', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    disabled: true,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1"]').should('have.text', 'Root');
        cy.get('li[data-path="/1/2"]').find('div').eq(1).should('have.class', 'fa-folder-plus');
        // set focus
        cy.get('li[data-path="/1/2"] span').click();
        // expand node
        cy.get('li[data-path="/1/2"] span').click();

        // state should not change
        cy.get('li[data-path="/1/2"]').find('div').eq(1).should('have.class', 'fa-folder-plus');
    });

    it('should emit action event', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data" (actionclicked)="actionHandler.emit($event)"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    actionHandler: createOutputSpy('actionHandler'),
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1/4"] a i').should('not.exist');
        cy.get('li[data-path="/1/4"] span').click();
        cy.get('li[data-path="/1/4"] a i').should('exist');
        cy.get('li[data-path="/1/4"] a i').click();

        cy.get('@actionHandler').should((spy: any) => {
            expect(spy).to.have.been.called;

            const param = spy.lastCall.args[0];
            expect(param.action).to.equal('default');
            expect(param.node.id).to.equal(4);
            expect(param.node.expanded).to.equal(false);
        });
    });

    it('should change selected state on click element', () => {});

    it('should have hover state on hover element', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1/4"] a i').should('not.exist');
        cy.get('li[data-path="/1/4"]').trigger('mouseenter');
        cy.get('li[data-path="/1/4"] a i').should('exist');
        cy.get('li[data-path="/1/4"]').trigger('mouseleave');
        cy.get('li[data-path="/1/4"] a i').should('not.exist');
    });

    it('should validate required state', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [isrequired]="true" [label]="label" [data]="data" [ngModel]="value" (ngModelChange)="valueChange.emit($event)"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueChange'),
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('form').should('have.class', 'ng-invalid');
        cy.get('li[data-path="/1/4"] span').click();
        cy.get('form').should('have.class', 'ng-valid');
    });

    it('should handle model binding', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" (actionclicked)="actionHandler.emit($event)"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueChange'),
                    actionHandler: createOutputSpy('actionHandler'),
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1/4"] a i').should('not.exist');
        cy.get('li[data-path="/1/4"] span').click();
        cy.get('li[data-path="/1/4"] a i').should('exist');
        cy.get('li[data-path="/1/4"] a i').click();

        cy.get('@actionHandler').should((spy: any) => {
            expect(spy).to.have.been.called;

            const param = spy.lastCall.args[0];
            expect(param.action).to.equal('default');
            expect(param.node.id).to.equal(4);
            expect(param.node.expanded).to.equal(false);
        });

        cy.get('@valueChange').should('be.calledWith', 4);
    });

    it('should be preselect by model binding', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" (actionclicked)="actionHandler.emit($event)"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: 4,
                    valueChange: createOutputSpy('valueChange'),
                    actionHandler: createOutputSpy('actionHandler'),
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                {
                                    id: 2,
                                    label: 'Sub Item 1',
                                    icon: '',
                                    expanded: false,
                                    children: [
                                        { id: 5, label: 'Sub Sub Item 1', icon: '', expanded: false, children: [] },
                                    ],
                                },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.get('li[data-path="/1/4"] a i').should('exist');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-treeview name="myControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                { id: 2, label: 'Sub Item 1', icon: '', expanded: false, children: [] },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-treeview > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-treeview name="myControl" e2eidentifier="myTestidentifier" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                { id: 2, label: 'Sub Item 1', icon: '', expanded: false, children: [] },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-treeview > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-treeview e2eidentifier="myTestidentifier" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                { id: 2, label: 'Sub Item 1', icon: '', expanded: false, children: [] },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-treeview > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-treeview [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4TreeviewModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                { id: 2, label: 'Sub Item 1', icon: '', expanded: false, children: [] },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-treeview > div');
    });
});
