import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacCheckboxComponent } from './checkbox';

describe('sac-checkboxComponent', () => {
  it('should show label and checkbox text', () => {
    cy.mount(
      `<form>
      <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-checkbox>
      </form>`,
      {
        declarations: [],
        imports: [
          FormsModule,
          SacCheckboxComponent,
          SacFormDirective,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Control Label',
          checkboxtext: 'Checkbox Test',
          value: false,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('.row .col-12').first().should('have.text', 'Control Label');
    cy.get('label').should('have.text', 'Checkbox Test');
    cy.get('input').should('not.be.checked');
    cy.get('input').click();
    cy.get('@valueSpy').should('be.calledWith', true);
    cy.get('input').click();
    cy.get('@valueSpy').should('be.calledWith', false);
  });

  it('should be disabled', () => {
    cy.mount(
      `<form>
      <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-checkbox>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacCheckboxComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Control Label',
          checkboxtext: 'Checkbox Test',
          value: false,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').should('not.be.checked');
    cy.get('input').should('be.disabled');
    cy.get('input').click({ force: true });
    cy.get('@valueSpy').should('not.have.been.called');
  });

  it('should not show label', () => {
    cy.mount(
      `<form>
      <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-checkbox>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacCheckboxComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Control Label',
          checkboxtext: 'Checkbox Test',
          value: false,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('.row .col-12').first().should('not.have.text', 'Control Label');
    cy.get('label').should('have.text', 'Checkbox Test');
  });

  it('should be work with true string', () => {
    cy.mount(
      `<form>
      <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-checkbox>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacCheckboxComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Control Label',
          checkboxtext: 'Checkbox Test',
          value: 'true',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').should('be.checked');
  });
});
