import { createOutputSpy } from 'cypress/angular';
import { SacButtonComponent } from './button';

describe('SacButtonComponent', () => {
  it('should show label and click event', () => {
    cy.mount(SacButtonComponent, {
      componentProperties: {
        name: 'button',
        text: 'My Button',
        clicked: createOutputSpy('clickedSpy'),
      },
    });

    cy.get('#button').should('have.text', 'My Button\n');
    cy.get('#button').should('have.class', 'btn-secondary');
    cy.get('#button span.spinner-border').should('not.exist');
    cy.get('#button').click();
    cy.get('@clickedSpy').should('be.calledOnce');
  });

  it('should not call click event', () => {
    cy.mount(SacButtonComponent, {
      componentProperties: {
        name: 'button',
        isdisabled: true,
        text: 'My Button',
        clicked: createOutputSpy('clickedSpy'),
      },
    });

    cy.get('#button').should('have.text', 'My Button\n');
    cy.get('#button').should('have.class', 'btn-secondary');
    cy.get('#button').should('be.disabled');
    cy.get('#button').click({ force: true });
    cy.get('@clickedSpy').should('not.have.been.called');
  });

  it('should has primary state', () => {
    cy.mount(SacButtonComponent, {
      componentProperties: {
        name: 'button',
        role: 'primary',
        text: 'My Button',
      },
    });

    cy.get('#button').should('have.class', 'btn-primary');
  });

  it('should have custom icon', () => {
    cy.mount(SacButtonComponent, {
      componentProperties: {
        name: 'button',
        icon: 'fa fa-save',
        text: 'My Button',
      },
    });

    cy.get('#button').children('i').should('have.length', 1);
    cy.get('#button').children('i').should('have.class', 'fa fa-save');
  });

  it('should show spinner and be disabled', () => {
    cy.mount(SacButtonComponent, {
      componentProperties: {
        name: 'button',
        text: 'My Button',
        isloading: true,
        clicked: createOutputSpy('clickedSpy'),
      },
    });

    cy.get('#button').should('have.text', 'My Button\n');
    cy.get('#button').should('have.class', 'btn-secondary');
    cy.get('#button span.spinner-border').should('exist');
    cy.get('#button').should('be.disabled');
    cy.get('#button').click({ force: true });
    cy.get('@clickedSpy').should('not.have.been.called');
  });
});
