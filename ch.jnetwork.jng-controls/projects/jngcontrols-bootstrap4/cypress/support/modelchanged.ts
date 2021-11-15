declare namespace Cypress {
  interface Chainable {
    validateValueChanged(requiredCount: number): Chainable;
  }
}

Cypress.Commands.add('validateValueChanged', (requiredCount: number) => {
  cy.get('@valueChange').should('have.been.called');
  cy.get('@valueChange').its('callCount').should('equal', requiredCount);
});

