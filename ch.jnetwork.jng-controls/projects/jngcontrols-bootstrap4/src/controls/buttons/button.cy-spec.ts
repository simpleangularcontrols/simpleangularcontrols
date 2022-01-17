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
import { JNetworkBootstrap4ButtonModule } from './button.module';

@Component({
  template: `<form>
    <ngButton
      name="button"
      [text]="label"
      [isdisabled]="disabled"
      [role]="isprimary ? 'primary' : null"
      [icon]="icon"
      (onclick)="clickevent.emit()"
    ></ngButton>
  </form>`,
})
export class NgButtonComponentTest {
  @Input()
  public label = 'My Button';

  @Input()
  public disabled = false;

  @Input()
  public isprimary = false;

  @Input()
  public icon = '';

  @Output()
  public clickevent = new EventEmitter<void>();
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
  ],
  declarations: [NgButtonComponentTest],
  exports: [NgButtonComponentTest],
})
export class NgButtonModuleTest {}

function createComponentObject(inputs: any, outputs: any) {
  cy.spy(outputs, 'clickevent').as('clickevent');

  mount(NgButtonComponentTest, {
    imports: [NgButtonModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('NgButtonComponent', () => {
  it('should show label and click event', () => {
    let inputs = { label: 'My Button' };
    let outputs = { clickevent() {} };
    createComponentObject(inputs, outputs);

    cy.get('button').should('have.text', 'My Button\n');
    cy.get('button').should('have.class', 'btn-secondary');
    cy.get('button').click();
    cy.wrap(outputs.clickevent).should('be.calledOnce');
  });

  it('should not call click event', () => {
    let inputs = { label: 'My Button', disabled: true };
    let outputs = { clickevent() {} };
    createComponentObject(inputs, outputs);

    cy.get('button').should('have.text', 'My Button\n');
    cy.get('button').should('have.class', 'btn-secondary');
    cy.get('button').should('be.disabled');
    cy.get('button').click({ force: true });
    cy.wrap(outputs.clickevent).should('not.have.been.called');
  });

  it('should has primary state', () => {
    let inputs = { label: 'My Button', isprimary: true };
    let outputs = { clickevent() {} };
    createComponentObject(inputs, outputs);

    cy.get('button').should('have.class', 'btn-primary');
  });

  it('should have custom icon', () => {
    let inputs = { label: 'My Button', icon: 'fa fa-save' };
    let outputs = { clickevent() {} };
    createComponentObject(inputs, outputs);

    cy.get('button').children('i').should('have.length', 1);
    cy.get('button').children('i').should('have.class', 'fa fa-save');

  });
});
