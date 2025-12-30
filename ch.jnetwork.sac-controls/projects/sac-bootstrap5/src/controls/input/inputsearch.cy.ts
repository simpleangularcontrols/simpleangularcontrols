import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacInputPasswordComponent } from './inputpassword';
import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';

describe('ngInputPasswordComponent', () => {
    it('should emit clicked when search', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [passwordeye]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputPasswordComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.attr', 'type', 'password');
        cy.get('input').parent().get('a').should('exist');
        cy.get('input').parent().get('.btn').should('exist');

        cy.get('input').parent().get('a').click();
        cy.get('input').should('have.attr', 'type', 'text');

        cy.get('input').parent().get('a').click();
        cy.get('input').should('have.attr', 'type', 'password');
    });

    it('should have button with text', () => {});

    it('should have button with icon', () => {});

    it('should have button with icon and text', () => {});

    it('should have button mode from control', () => {});

    it('should have button mode from layout', () => {});
});
