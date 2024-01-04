import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { SacFormDirective } from '../form';
import { SacInputDecimalComponent } from './inputdecimal';

describe('NgInputDecimalComponent', () => {
  it('should show label and text', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
        componentProperties: {
          label: 'My Label',
          value: 1.33,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', '1.33');
  });

  it('should show required', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
    cy.get('input').type('145.54');

    cy.shouldBeValid();

    cy.get('input').should('have.value', '145.54');
  });

  it('should hide label', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
        componentProperties: {
          label: 'My Label',
          value: 1.45,
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
      <sac-inputdecimal name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
      <sac-inputdecimal name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
        componentProperties: {
          label: 'My Label',
          value: 1.45,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
        componentProperties: {
          label: 'My Label',
          value: 1.99,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeDisabled();
  });

  it('should handle model binding', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
      <sac-inputdecimal name="field" [label]="label" [maxvalue]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
      <sac-inputdecimal name="field" [label]="label" [minvalue]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
      <sac-inputdecimal name="field" [label]="label" [allownegativ]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
      <sac-inputdecimal name="field" [label]="label" [allownegativ]="false" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
      <sac-inputdecimal name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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

  it('should allow decimal char', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
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
    cy.get('input').should('have.value', '1.4');
  });

  it('should not allow multiple decimal char', () => {
    cy.mount(
      `<form>
      <sac-inputdecimal name="field" [label]="label" [maxvalue]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputdecimal>
      </form>`,
      {
        imports: [FormsModule, SacFormDirective, SacInputDecimalComponent],
        componentProperties: {
          label: 'My Label',
          value: 0,
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');

    cy.get('input').should('have.value', '0');
    cy.get('input').type('1.4.4');
    cy.get('input').should('have.value', '1.44');
  });
});
