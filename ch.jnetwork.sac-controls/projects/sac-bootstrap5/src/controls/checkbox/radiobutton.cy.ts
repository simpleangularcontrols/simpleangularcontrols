import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';

describe('NgRadiobuttonComponent', () => {
  it('should show label and checkbox text', () => {
    cy.mount(
      `<form>
      <sac-radiobuttons name="radiobuttons" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      <sac-radiobutton [label]="rbLabel1" [value]="1"></sac-radiobutton>
      <sac-radiobutton [label]="rbLabel2" [value]="2"></sac-radiobutton>
      </sac-radiobuttons>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacRadiobuttonsComponent,
          SacRadiobuttonComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Radiobutton Test',
          rbLabel1: 'Control Label 1',
          rbLabel2: 'Control Label 2',
          value: 1,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('label.col-form-label').should('have.text', 'Radiobutton Test');
    cy.get('label.form-check-label')
      .first()
      .should('have.text', 'Control Label 1');
    cy.get('label.form-check-label')
      .eq(1)
      .should('have.text', 'Control Label 2');
    cy.get('input').first().should('be.checked');
    cy.get('input').eq(1).should('not.be.checked');
    cy.get('input').eq(1).click();
    cy.get('@valueSpy').should('be.calledWith', 2);
    cy.get('input').first().click();
    cy.get('@valueSpy').should('be.calledWith', 1);
  });

  it('should be disabled', () => {
    cy.mount(
      `<form>
      <sac-radiobuttons name="radiobuttons" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      <sac-radiobutton [label]="rbLabel1" [value]="1"></sac-radiobutton>
      <sac-radiobutton [label]="rbLabel2" [value]="2" [disabled]="true"></sac-radiobutton>
      </sac-radiobuttons>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacRadiobuttonsComponent,
          SacRadiobuttonComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Radiobutton Test',
          rbLabel1: 'Control Label 1',
          rbLabel2: 'Control Label 2',
          value: 1,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').first().should('be.checked');
    cy.get('input').eq(1).should('not.be.checked');
    cy.get('input').eq(1).should('be.disabled');
    cy.get('input').eq(1).click({ force: true });
    cy.get('@valueSpy').should('not.have.been.called');
  });

  it('should not show label', () => {
    cy.mount(
      `<form>
      <sac-radiobuttons name="radiobuttons" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      <sac-radiobutton [label]="rbLabel1" [value]="1"></sac-radiobutton>
      <sac-radiobutton [label]="rbLabel2" [value]="2"></sac-radiobutton>
      </sac-radiobuttons>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacRadiobuttonsComponent,
          SacRadiobuttonComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Radiobutton Test',
          rbLabel1: 'Control Label 1',
          rbLabel2: 'Control Label 2',
          value: 1,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('label.col-form-label').should('not.exist');
  });

  it('should be work with string values', () => {
    cy.mount(
      `<form>
      <sac-radiobuttons name="radiobuttons" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      <sac-radiobutton [label]="rbLabel1" value="item1"></sac-radiobutton>
      <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
      </sac-radiobuttons>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacRadiobuttonsComponent,
          SacRadiobuttonComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'Radiobutton Test',
          rbLabel1: 'Control Label 1',
          rbLabel2: 'Control Label 2',
          value: 'item2',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').eq(1).should('be.checked');
  });
});
