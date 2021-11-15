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
    <ngInputArea
      name="field"
      label="My Label"
      [maxlength]="maxlength"
      [allowedchars]="allowedchars"
      [(ngModel)]="value"
    ></ngInputArea>
  </form>`,
})
export class NgInputareaComponentTest {
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
  declarations: [NgInputareaComponentTest],
  exports: [NgInputareaComponentTest],
})
export class NgInputareaModuleTest {}

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

  mount(NgInputareaComponentTest, {
    imports: [NgInputareaModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('NgInputareaComponent', () => {
  it('should show label and text', () => {
    createComponent(
      '<ngInputArea name="field" label="My Label" [ngModel]="\'My Text\'"></ngInputArea>'
    );

    cy.shouldHaveLabel('My Label');
    cy.get('textarea').should('have.value', 'My Text');
  });

  it('should show required', () => {
    createComponent(
      '<ngInputArea name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInputArea>'
    );

    cy.shouldHaveLabel('My Label');
    cy.shouldBeInvalid('textarea');

    cy.get('textarea').should('have.value', '');
    cy.get('textarea').type('My Text');

    cy.shouldBeValid('textarea');

    cy.get('textarea').should('have.value', 'My Text');
  });

  it('should hide label', () => {
    createComponent(
      '<ngInputArea name="field" label="My Label" [disablelabel]="true" [ngModel]="\'\'"></ngInputArea>'
    );

    cy.shouldNotHaveLabel();
    cy.get('textarea').should('exist');
  });

  it('should have placeholder', () => {
    createComponent(
      '<ngInputArea name="field" label="My Label" placeholder="My Placeholder" [ngModel]="\'\'"></ngInputArea>'
    );

    cy.shouldHavePlaceholder('My Placeholder', 'textarea');
  });

  it('should have be readonly', () => {
    createComponent(
      '<ngInputArea name="field" label="My Label" [readonly]="true" [ngModel]="\'MyValue\'"></ngInputArea>'
    );

    cy.shouldBeReadonly('textarea');
  });

  it('should have be disabled', () => {
    createComponent(
      '<ngInputArea name="field" label="My Label" [disabled]="true" [ngModel]="\'MyValue\'"></ngInputArea>'
    );

    cy.shouldBeDisabled('textarea');
  });

  it('should handle model binding', () => {
    let inputs = { value: 'first value' };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('textarea').should('have.value', 'first value');
    cy.get('textarea').clear().type('second value');
    cy.get('textarea').should('have.value', 'second value');
    cy.validateValueChanged('second value'.length + 1);
  });

  it('should limit string', () => {
    let inputs = { value: 'first value', maxlength: 6 };
    let outputs = { valueChange(v) {} };
    createComponentObject(inputs, outputs);

    cy.get('textarea').clear().type('12345678');
    cy.get('textarea').should('have.value', '123456');
    cy.validateValueChanged('123456'.length + 1);
  });
});
