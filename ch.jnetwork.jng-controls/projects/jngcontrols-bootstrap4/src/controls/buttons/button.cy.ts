import { createOutputSpy } from 'cypress/angular';
import { NgButtonComponent } from './button';

describe('NgButtonComponent', () => {
  it('should show label and click event', () => {
    cy.mount(NgButtonComponent, {
      componentProperties: {
        name: 'button',
        text: 'My Button',
        onclick: createOutputSpy('onclickSpy'),
      },
    });

    cy.get('#button').should('have.text', 'My Button\n');
    cy.get('#button').should('have.class', 'btn-secondary');
    cy.get('#button').click();
    cy.get('@onclickSpy').should('be.calledOnce');
  });

  it('should not call click event', () => {
    cy.mount(NgButtonComponent, {
      componentProperties: {
        name: 'button',
        isdisabled: true,
        text: 'My Button',
        onclick: createOutputSpy('onclickSpy'),
      },
    });

    cy.get('#button').should('have.text', 'My Button\n');
    cy.get('#button').should('have.class', 'btn-secondary');
    cy.get('#button').should('be.disabled');
    cy.get('#button').click({ force: true });
    cy.get('@onclickSpy').should('not.have.been.called');
  });

  it('should has primary state', () => {
    cy.mount(NgButtonComponent, {
      componentProperties: {
        name: 'button',
        role: 'primary',
        text: 'My Button',
      },
    });

    cy.get('#button').should('have.class', 'btn-primary');
  });

  it('should have custom icon', () => {
    cy.mount(NgButtonComponent, {
      componentProperties: {
        name: 'button',
        icon: 'fa fa-save',
        text: 'My Button',
      },
    });

    cy.get('#button').children('i').should('have.length', 1);
    cy.get('#button').children('i').should('have.class', 'fa fa-save');
  });
});
