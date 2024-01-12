import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { SacFormDirective } from '../form';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacCheckboxComponent } from './checkbox';

describe('sac-checkboxComponent', () => {
  it('should show label and checkbox text', () => {
    cy.mount(
      `<form>
      <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-checkbox>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacCheckboxComponent,
          SacToLabelWidthCssPipe,
          SacToControlWidthCssPipe,
        ],
        componentProperties: {
          label: 'Control Label',
          checkboxtext: 'Checkbox Test',
          value: false,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('.form-group .control-label')
      .first()
      .should('have.text', 'Control Label');
    cy.get('.checkbox label span').should('have.text', 'Checkbox Test');
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
          SacToLabelWidthCssPipe,
          SacToControlWidthCssPipe,
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
          SacToLabelWidthCssPipe,
          SacToControlWidthCssPipe,
        ],
        componentProperties: {
          label: 'Control Label',
          checkboxtext: 'Checkbox Test',
          value: false,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('.form-group .control-label').should('not.exist');
    cy.get('.checkbox label span').should('have.text', 'Checkbox Test');
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
          SacToLabelWidthCssPipe,
          SacToControlWidthCssPipe,
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
