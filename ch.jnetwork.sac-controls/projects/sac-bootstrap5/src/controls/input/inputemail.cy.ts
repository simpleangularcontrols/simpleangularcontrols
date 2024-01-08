import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacInputEmailComponent } from './inputemail';

describe('inputEmail', () => {
  it('should show label and text', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: 'info@jnetwork.ch',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', 'info@jnetwork.ch');
  });

  it('should show required', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: '',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');
    cy.shouldBeInvalid();
    cy.get('input').should('have.value', '');

    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.com');

    cy.shouldBeValid();
  });

  it('should hide label', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: 'My Value',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldNotHaveLabel();
    cy.get('input').should('exist');
  });

  it('should have placeholder', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: '',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHavePlaceholder('My Placeholder');
  });

  it('should have be readonly', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: 'info@jnetwork.ch',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: 'info@jnetwork.ch',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeDisabled();
  });

  it('should handle model binding', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: 'info@jnetwork.ch',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').should('have.value', 'info@jnetwork.ch');
    cy.get('input').clear().type('support@jnetwork.ch');
    cy.get('input').should('have.value', 'support@jnetwork.ch');
    cy.validateValueChanged('support@jnetwork.ch'.length + 1);
  });

  it('should email validation', () => {
    cy.mount(
      `<form>
      <sac-inputemail name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputemail>
      </form>`,
      {
        declarations: [SacFormDirective, SacInputEmailComponent],
        imports: [FormsModule, SACBootstrap5LayoutModule],
        componentProperties: {
          label: 'My Label',
          value: '',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').type('max.muster');
    cy.get('input').should('have.value', 'max.muster');
    cy.shouldBeInvalid();

    cy.get('input').clear();
    cy.get('input').type('max.muster@localhost');
    cy.get('input').should('have.value', 'max.muster@localhost');
    cy.get('input').should('not.have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.com');
    cy.shouldBeValid();

    cy.get('input').clear();
    cy.get('input').type('max.muster@hotmail.intra.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.intra.com');
    cy.shouldBeValid();

    cy.get('input').clear();
    cy.get('input').type('@hotmail.com');
    cy.get('input').should('have.value', '@hotmail.com');
    cy.shouldBeInvalid();

    cy.get('input').clear();
    cy.get('input').type('max.muster@');
    cy.get('input').should('have.value', 'max.muster@');
    cy.shouldBeInvalid();
  });
});
