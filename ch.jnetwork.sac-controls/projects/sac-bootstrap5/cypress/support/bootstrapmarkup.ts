declare namespace Cypress {
  interface Chainable {
    // #region Public Methods

    shouldBeInvalid(tagName?: string): Chainable;
    shouldBeValid(tagName?: string): Chainable;
    shouldHaveLabel(label: string): Chainable;
    shouldNotHaveLabel(): Chainable;

    // #endregion Public Methods
  }
}

Cypress.Commands.add('shouldNotHaveLabel', () => {
  cy.get('label').should('have.class', 'visually-hidden');
});

Cypress.Commands.add('shouldHaveLabel', (label: string) => {
  cy.get('label').contains(label);
});

Cypress.Commands.add('shouldBeValid', (tagName: string = 'input') => {
  cy.get(tagName).focus().blur();
  cy.get(tagName).should('not.have.class', 'is-invalid');
});

Cypress.Commands.add('shouldBeInvalid', (tagName: string = 'input') => {
  cy.get(tagName).focus().blur();
  cy.get(tagName).should('have.class', 'is-invalid');
});
