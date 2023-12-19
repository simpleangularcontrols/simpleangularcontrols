declare namespace Cypress {
  interface Chainable {
    validateValueChanged(requiredCount: number): Chainable;
  }
}

Cypress.Commands.add('validateValueChanged', (requiredCount: number) => {
  cy.get('@valueSpy').should('have.been.called');
  cy.get('@valueSpy').its('callCount').should('equal', requiredCount);
});

