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
import { JNetworkBootstrap4CheckboxModule } from './checkbox.module';

@Component({
  template: `<form>
    <ngCheckbox
      name="myCheckbox"
      [label]="label"
      [checkboxtext]="text"
      [disablelabel]="labeldisabled"
      [disabled]="disabled"
      [(ngModel)]="value"
    ></ngCheckbox>
  </form>`,
})
export class NgCheckboxComponentTest {
  @Input()
  public label = 'Control Label';

  @Input()
  public labeldisabled = false;

  @Input()
  public text = 'Checkbox Test';

  @Input()
  public disabled = false;

  @Input()
  public isprimary = false;

  private _value = false;

  @Input()
  public set value(v) {
    this._value = v;
    this.valueChange.emit(v);
  }
  public get value() {
    return this._value;
  }

  @Output()
  public valueChange = new EventEmitter<boolean>();
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4CheckboxModule,
  ],
  declarations: [NgCheckboxComponentTest],
  exports: [NgCheckboxComponentTest],
})
export class NgCheckboxModuleTest {}

function createComponentObject(inputs: any, outputs: any) {
  cy.spy(outputs, 'valueChange').as('valueChange');

  mount(NgCheckboxComponentTest, {
    imports: [NgCheckboxModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('NgCheckboxComponent', () => {
  it('should show label and checkbox text', () => {
    let inputs = {};
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('.form-group .col-12').first().should('have.text', 'Control Label');
    cy.get('label').should('have.text', 'Checkbox Test');
    cy.get('input').should('not.be.checked');
    cy.get('input').click();
    cy.wrap(outputs.valueChange).should('be.calledWith', true);
    cy.get('input').click();
    cy.wrap(outputs.valueChange).should('be.calledWith', false);
  });

  it('should be disabled', () => {
    let inputs = { disabled: true };
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('input').should('not.be.checked');
    cy.get('input').should('be.disabled');
    cy.get('input').click({ force: true });
    cy.wrap(outputs.valueChange).should('not.have.been.called');
  });

  it('should not show label', () => {
    let inputs = { labeldisabled: true };
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('.form-group .col-12')
      .first()
      .should('not.have.text', 'Control Label');
    cy.get('label').should('have.text', 'Checkbox Test');
  });

  it('should be work with true string', () => {
    let inputs = { value: 'true' };
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('input').should('be.checked');
  });
});
