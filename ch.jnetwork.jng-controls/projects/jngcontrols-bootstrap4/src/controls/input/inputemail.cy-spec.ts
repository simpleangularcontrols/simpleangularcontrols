import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  NgModule,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4InputModule } from './input.module';

@Component({
  template: `<form>
    <ngInputEmail
      name="field"
      label="My Label"
      [(ngModel)]="value"
    ></ngInputEmail>
  </form>`,
})
export class NgInputEmailComponentTest {
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
  public minvalue = undefined;
  @Input()
  public maxvalue = undefined;
  @Input()
  public allownegativ = false;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4InputModule,
  ],
  declarations: [NgInputEmailComponentTest],
  exports: [NgInputEmailComponentTest],
})
export class NgInputEmailModuleTest {}

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

  mount(NgInputEmailComponentTest, {
    imports: [NgInputEmailModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('inputEmail', () => {
  it('should show label and text', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [ngModel]="\'0\'"></ngInputEmail>'
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', '0');
  });

  it('should show required', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInputEmail>'
    );

    cy.shouldHaveLabel('My Label');
    cy.shouldBeInvalid();
    cy.get('input').should('have.value', '');

    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.com');

    cy.shouldBeValid();
  });

  it('should hide label', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [disablelabel]="true" [ngModel]="\'\'"></ngInputEmail>'
    );

    cy.shouldNotHaveLabel();
    cy.get('input').should('exist');
  });

  it('should have placeholder', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" placeholder="My Placeholder" [ngModel]="\'\'"></ngInputEmail>'
    );

    cy.shouldHavePlaceholder('My Placeholder');
  });

  it('should have be readonly', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" readonly="true" [ngModel]="\'MyValue\'"></ngInputEmail>'
    );

    cy.shouldBeReadonly();
  });

  it('should have be disabled', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [disabled]="true" [ngModel]="\'MyValue\'"></ngInputEmail>'
    );

    cy.shouldBeDisabled();
  });

  it('should handle model binding', () => {
    let inputs = { value: '15' };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('input').should('have.value', '15');
    cy.get('input').clear().type('2355');
    cy.get('input').should('have.value', '2355');
    cy.validateValueChanged('2355'.length + 1);
  });

  it('should email validation', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [ngModel]="\'\'"></ngInputEmail>'
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
