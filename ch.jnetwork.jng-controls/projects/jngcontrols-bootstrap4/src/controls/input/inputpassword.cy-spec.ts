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
    <ngInputPassword
      name="field"
      label="My Label"
      [maxlength]="maxlength"
      [minlength]="minlength"
      [allowedchars]="allowedchars"
      [(ngModel)]="value"
    ></ngInputPassword>
  </form>`,
})
export class ngInputPasswordComponentTest {
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
  public minlength = null;

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
  declarations: [ngInputPasswordComponentTest],
  exports: [ngInputPasswordComponentTest],
})
export class ngInputPasswordModuleTest {}

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

  mount(ngInputPasswordComponentTest, {
    imports: [ngInputPasswordModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('ngInputPasswordComponent', () => {
  it('should show label and text', () => {
    createComponent(
      '<ngInputPassword name="field" label="My Label" [ngModel]="\'My Text\'"></ngInputPassword>'
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', 'My Text');
  });

  it('should show required', () => {
    createComponent(
      '<ngInputPassword name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInputPassword>'
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
      '<ngInputPassword name="field" label="My Label" [disablelabel]="true" [ngModel]="\'\'"></ngInputPassword>'
    );

    cy.shouldNotHaveLabel();
    cy.get('input').should('exist');
  });

  it('should have placeholder', () => {
    createComponent(
      '<ngInputPassword name="field" label="My Label" placeholder="My Placeholder" [ngModel]="\'\'"></ngInputPassword>'
    );

    cy.shouldHavePlaceholder('My Placeholder');
  });

  it('should have be readonly', () => {
    createComponent(
      '<ngInputPassword name="field" label="My Label" [readonly]="true" [ngModel]="\'MyValue\'"></ngInputPassword>'
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    createComponent(
      '<ngInputPassword name="field" label="My Label" [disabled]="true" [ngModel]="\'MyValue\'"></ngInputPassword>'
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

  it('should have min string', () => {
    let inputs = { value: 'first value', minlength: 6 };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('input').clear().type('12345');
    cy.get('input').should('have.value', '12345');
    cy.validateValueChanged('12345'.length + 1);

    cy.shouldBeInvalid();

    cy.get('input').clear().type('12345678');

    cy.shouldBeValid();
  });
});
