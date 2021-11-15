declare namespace Cypress {
  interface Chainable {
    shouldBeReadonly(): Chainable;
    shouldBeDisabled(): Chainable;
    shouldHavePlaceholder(text: string): Chainable;
  }
}

Cypress.Commands.add('shouldBeReadonly', () => {
  cy.get('input').should('have.attr', 'readonly', 'readonly');
});

Cypress.Commands.add('shouldBeDisabled', () => {
  cy.get('input').should('have.attr', 'disabled');
});

Cypress.Commands.add('shouldHavePlaceholder', (text: string) => {
  cy.get('input').should('have.attr', 'placeholder', text);
});
