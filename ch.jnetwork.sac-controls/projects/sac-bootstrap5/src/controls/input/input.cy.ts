import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';
import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacInputComponent } from './input';

describe('NgInputComponent', () => {
  it('should show label and text', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'My Label',
          value: 'My Text',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', 'My Text');
  });

  it('should show required', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
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
    cy.get('input').type('My Text');

    cy.shouldBeValid();

    cy.get('input').should('have.value', 'My Text');
  });

  it('should hide label', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
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
      <sac-input name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
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
      <sac-input name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'My Label',
          value: 'MyValue',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'My Label',
          value: 'MyValue',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.shouldBeDisabled();
  });

  it('should handle model binding', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'My Label',
          value: 'first value',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').should('have.value', 'first value');
    cy.get('input').clear().type('second value');
    cy.get('input').should('have.value', 'second value');
    cy.validateValueChanged('second value'.length + 1);
  });

  it('should limit string', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" [maxlength]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'My Label',
          value: 'first value',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').clear().type('12345678');
    cy.get('input').should('have.value', '123456');
    cy.validateValueChanged('123456'.length + 1);
  });

  it('should limit characters', () => {
    cy.mount(
      `<form>
      <sac-input name="field" [label]="label" allowedchars="abc" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
      {
        imports: [
          FormsModule,
          SacFormDirective,
          SacInputComponent,
          SACBootstrap5LayoutModule,
        ],
        componentProperties: {
          label: 'My Label',
          value: '',
          valueChange: createOutputSpy('valueSpy'),
        },
      }
    );

    cy.get('input').type('abcde');
    cy.get('input').should('have.value', 'abc');
    cy.validateValueChanged('abc'.length);
  });
});
