declare namespace Cypress {
  interface Chainable {
    shouldBeReadonly(tagName?: string): Chainable;
    shouldBeDisabled(tagName?: string): Chainable;
    shouldHavePlaceholder(text: string, tagName?: string): Chainable;
  }
}

Cypress.Commands.add('shouldBeReadonly', (tagName: string = 'input') => {
  cy.get(tagName).should('have.attr', 'readonly', 'readonly');
});

Cypress.Commands.add('shouldBeDisabled', (tagName: string = 'input') => {
  cy.get(tagName).should('have.attr', 'disabled');
});

Cypress.Commands.add(
  'shouldHavePlaceholder',
  (text: string, tagName: string = 'input') => {
    cy.get(tagName).should('have.attr', 'placeholder', text);
  }
);
