import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacContextmenuComponent } from './contextmenu';
import { SACBootstrap5ContextmenuModule } from './contextmenu.module';
import { SacContextmenuItemButtonComponent } from './contextmenuitembutton';
import { FormsModule } from '@angular/forms';
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ContextmenuModule, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li button', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li button', 'Action 1').should('exist').should('be.visible');
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ContextmenuModule, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li button', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li button', 'Action 1').should('exist').should('be.visible');
        cy.get('ul li button img[src="/assets/icons/icon.png"]').should('exist').should('be.visible');

        cy.get('ul sac-contextmenubutton:last-child button').should('not.have.descendants', 'img');
        cy.get('ul sac-contextmenubutton:last-child button div div').should('have.length', 2);
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacContextmenuComponent,
                    SacContextmenuItemButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li button', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li button', 'Action 1').should('exist').should('be.visible');
        cy.get('ul li button img[src="/assets/icons/icon.png"]').should('not.exist');

        cy.get('ul sac-contextmenubutton:last-child button').should('not.have.descendants', 'img');
        cy.get('ul sac-contextmenubutton:last-child button div div').should('have.length', 1);
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ContextmenuModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    clickEnabled: createOutputSpy('clickEnabledSpy'),
                    clickDisabled: createOutputSpy('clickDisabledSpy'),
                },
            }
        );

        cy.get('sac-contextmenu').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li button', 'Action 1').should('exist').should('not.be.visible');

        cy.get('div.dropdown > button').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li button', 'Action 1').click();
        cy.contains('ul li button', 'Action 2').click({ force: true });

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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ContextmenuModule, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('#contextmenubutton').should('exist');

        cy.get('ul').should('not.be.visible');
        cy.contains('ul li button', 'Action 1').should('exist').should('not.be.visible');

        cy.get('#contextmenubutton').click();
        cy.get('ul').should('be.visible');

        cy.contains('ul li button', 'Action 1').should('exist').should('be.visible');
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
});
