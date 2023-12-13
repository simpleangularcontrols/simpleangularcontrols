import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { NgFormularDirective } from '../form';
import { NgInputIntegerComponent } from './inputinteger';

describe('ngInputIntegerComponent', () => {
  it('should show label and text', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 133,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', '133');
  });

  it('should show required', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
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
    cy.get('input').type('145');

    cy.shouldBeValid();

    cy.get('input').should('have.value', '145');
  });

  it('should hide label', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 145,
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
      <sac-inputinteger name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
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
      <sac-inputinteger name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 145,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 199,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeDisabled();
  });

  it('should handle model binding', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 15,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').should('have.value', '15');
    cy.get('input').clear().type('2355');
    cy.get('input').should('have.value', '2355');
    cy.validateValueChanged('2355'.length + 1);
  });

  it('should use maxvalue', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [maxvalue]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 4,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeValid();

    cy.get('input').clear().type('10');
    cy.get('input').should('have.value', '10');

    cy.validateValueChanged('10'.length + 1);
    cy.shouldBeInvalid();
  });

  it('should use minvalue', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [minvalue]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 8,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeValid();

    cy.get('input').clear().type('4');
    cy.get('input').should('have.value', '4');

    cy.validateValueChanged('4'.length + 1);
    cy.shouldBeInvalid();
  });

  it('should allow negativ numbers', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [allownegativ]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 8,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeValid();

    cy.get('input').clear().type('-4');
    cy.get('input').should('have.value', '-4');

    cy.validateValueChanged('-4'.length + 1);
    cy.shouldBeValid();
  });

  it('should allow only positiv numbers', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [allownegativ]="false" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 8,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeValid();

    cy.get('input').clear().type('-4');
    cy.get('input').should('have.value', '4');

    cy.validateValueChanged('4'.length + 1);
    cy.shouldBeValid();
  });

  it('should not allow chars', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 0,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');

    cy.get('input').should('have.value', '0');
    cy.get('input').type('abc');
    cy.get('input').should('have.value', '0');
  });

  it('should not allow decimal char', () => {
    cy.mount(
      `<form>
      <sac-inputinteger name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputinteger>
      </form>`,
      {
        declarations: [NgFormularDirective, NgInputIntegerComponent],
        imports: [FormsModule],
        componentProperties: {
          label: 'My Label',
          value: 0,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');

    cy.get('input').should('have.value', '0');
    cy.get('input').type('1.4');
    cy.get('input').should('have.value', '14');
  });
});
