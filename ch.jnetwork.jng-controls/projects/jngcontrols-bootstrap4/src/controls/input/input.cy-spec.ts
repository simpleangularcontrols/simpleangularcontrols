import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4InputModule } from './input.module';

@Component({
  template: `<form>
    <ngInput
      name="field"
      label="My Label"
      [maxlength]="maxlength"
      [allowedchars]="allowedchars"
      [(ngModel)]="value"
    ></ngInput>
  </form>`,
})
export class NgInputComponentTest {
  private _value = '';

  @Input()
  public set value(v) {
    this._value = v;
    this.valueChange.emit(v);
  }
  public get value() {
    return this._value;
  }

  @Output()
  public valueChange = new EventEmitter<string>();

  @Input()
  public maxlength = null;

  @Input()
  public allowedchars = '';
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4InputModule,
  ],
  declarations: [NgInputComponentTest],
  exports: [NgInputComponentTest],
})
export class NgInputModuleTest {}

function createComponent(markup: string) {
  mount('<form>' + markup + '</form>', {
    imports: [
      FormsModule,
      JNetworkBootstrap4FormModule,
      JNetworkBootstrap4InputModule,
    ],
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

function createComponentObject(inputs: any, outputs: any) {
  cy.spy(outputs, 'valueChange').as('valueChange');

  mount(NgInputComponentTest, {
    imports: [NgInputModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('NgInputComponent', () => {
  it('should show label and text', () => {
    createComponent(
      '<ngInput name="field" label="My Label" [ngModel]="\'My Text\'"></ngInput>'
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', 'My Text');
  });

  it('should show required', () => {
    createComponent(
      '<ngInput name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInput>'
    );

    cy.shouldHaveLabel('My Label');
    cy.shouldBeInvalid();

    cy.get('input').should('have.value', '');
    cy.get('input').type('My Text');

    cy.shouldBeValid();

    cy.get('input').should('have.value', 'My Text');
  });

  it('should hide label', () => {
    createComponent(
      '<ngInput name="field" label="My Label" [disablelabel]="true" [ngModel]="\'\'"></ngInput>'
    );

    cy.shouldNotHaveLabel();
    cy.get('input').should('exist');
  });

  it('should have placeholder', () => {
    createComponent(
      '<ngInput name="field" label="My Label" placeholder="My Placeholder" [ngModel]="\'\'"></ngInput>'
    );

    cy.shouldHavePlaceholder('My Placeholder');
  });

  it('should have be readonly', () => {
    createComponent(
      '<ngInput name="field" label="My Label" [readonly]="true" [ngModel]="\'MyValue\'"></ngInput>'
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    createComponent(
      '<ngInput name="field" label="My Label" [disabled]="true" [ngModel]="\'MyValue\'"></ngInput>'
    );

    cy.shouldBeDisabled();
  });

  it('should handle model binding', () => {
    let inputs = { value: 'first value' };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('input').should('have.value', 'first value');
    cy.get('input').clear().type('second value');
    cy.get('input').should('have.value', 'second value');
    cy.validateValueChanged('second value'.length + 1);
  });

  it('should limit string', () => {
    let inputs = { value: 'first value', maxlength: 6 };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('input').clear().type('12345678');
    cy.get('input').should('have.value', '123456');
    cy.validateValueChanged('123456'.length + 1);
  });

  it('should limit characters', () => {
    let inputs = { value: '', allowedchars: 'abc' };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('input').type('abcde');
    cy.get('input').should('have.value', 'abc');
    cy.validateValueChanged('abc'.length);
  });
});
