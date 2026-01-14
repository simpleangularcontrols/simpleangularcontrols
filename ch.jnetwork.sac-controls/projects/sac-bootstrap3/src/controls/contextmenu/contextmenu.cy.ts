import { SacFormDirective } from '../form';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3ContextmenuModule } from './contextmenu.module';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacContextmenuComponent', () => {
    it('should show component', () => {
        cy.mount(
            `<form>
                <sac-contextmenu>
                    <sac-contextmenubutton text="Action 1"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li a', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li a', 'Action 1').should('exist').should('be.visible');
    });

    it('should show component with icons in actions', () => {
        cy.intercept('GET', 'assets/icons/icon.png', {
            fixture: 'question.png',
        }).as('getConfirmIcon');

        cy.mount(
            `<form>
                <sac-contextmenu>
                    <sac-contextmenubutton text="Action 1" image="/assets/icons/icon.png"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li a', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li a', 'Action 1').should('exist').should('be.visible');
        cy.get('ul li a img[src="/assets/icons/icon.png"]').should('exist').should('be.visible');

        cy.get('ul li:last-child a').should('not.have.descendants', 'img');
        cy.get('ul li:last-child a div').should('have.length', 2);
    });

    it('should show component without icons colum', () => {
        cy.intercept('GET', 'assets/icons/icon.png', {
            fixture: 'question.png',
        }).as('getConfirmIcon');

        cy.mount(
            `<form>
                <sac-contextmenu>
                    <sac-contextmenubutton text="Action 1" image="/assets/icons/icon.png" [isicondisabled]="true"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2" [isicondisabled]="true"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3" [isicondisabled]="true"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li a', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li a', 'Action 1').should('exist').should('be.visible');
        cy.get('ul li a img[src="/assets/icons/icon.png"]').should('not.exist');

        cy.get('ul li:last-child a').should('not.have.descendants', 'img');
        cy.get('ul li:last-child a div').should('have.length', 1);
    });

    it('should show component with splitter', () => {
        cy.intercept('GET', 'assets/icons/icon.png', {
            fixture: 'question.png',
        }).as('getConfirmIcon');

        cy.mount(
            `<form>
                <sac-contextmenu>
                    <sac-contextmenubutton text="Action 1" image="/assets/icons/icon.png" [isicondisabled]="true"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2" [isicondisabled]="true"> </sac-contextmenubutton>
                    <sac-contextmenusplitter></sac-contextmenusplitter>
                    <sac-contextmenubutton text="Action 3" [isicondisabled]="true"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li a', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li a', 'Action 1').should('exist').should('be.visible');
        cy.get('ul li a img[src="/assets/icons/icon.png"]').should('not.exist');

        cy.get('ul li:last-child a').should('not.have.descendants', 'img');
        cy.get('ul li:last-child a div').should('have.length', 1);

        cy.get('ul li.divider').should('have.length', 1);
    });

    it('validate click events on buttons', () => {
        cy.mount(
            `<form>
                <sac-contextmenu>
                    <sac-contextmenubutton text="Action 1" (clicked)="clickEnabled.emit()"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2" isdisabled="true" (clicked)="clickDisabled.emit()"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {
                    clickEnabled: createOutputSpy('clickEnabledSpy'),
                    clickDisabled: createOutputSpy('clickDisabledSpy'),
                },
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li a', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li a', 'Action 1').click();
        cy.contains('ul li a', 'Action 2').click({ force: true });

        cy.get('@clickEnabledSpy').should('be.calledOnce');
        cy.get('@clickDisabledSpy').should('not.be.called');
    });

    it('should show component with custom placeholder', () => {
        cy.mount(
            `<form>
                <sac-contextmenu [buttontemplate]="customButton" #contextmenu>
                  <ng-template #customButton>
                        <button
                            id="contextmenubutton"
                            type="button"
                            sacContextMenuAnchor
                            class="btn btn-secondary dropdown-toggle"
                            (click)="contextmenu.toggle()">
                            Custom Button
                        </button>
                    </ng-template>
                    <sac-contextmenubutton text="Action 1"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('#contextmenubutton').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li a', 'Action 1').should('exist').should('not.be.visible');

        cy.get('#contextmenubutton').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li a', 'Action 1').should('exist').should('be.visible');
    });

    it('should close menu on item click', () => {
        // TODO: test required
    });

    it('should disable with boolean type', () => {
        // TODO: test required
    });

    it('should disable icon with boolean type', () => {
        // TODO: test required
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-contextmenu name="myContextMenu">
                    <sac-contextmenubutton text="Action 1"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-contextmenu > div', 'myContextMenu');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-contextmenu name="myContextMenu" e2eidentifier="myTestidentifier">
                    <sac-contextmenubutton text="Action 1"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-contextmenu > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-contextmenu e2eidentifier="myTestidentifier">
                    <sac-contextmenubutton text="Action 1"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-contextmenu > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-contextmenu>
                    <sac-contextmenubutton text="Action 1"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 2"> </sac-contextmenubutton>
                    <sac-contextmenubutton text="Action 3"> </sac-contextmenubutton>
                </sac-contextmenu>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3LayoutModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-contextmenu > div');
    });
});
