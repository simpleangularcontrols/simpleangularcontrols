declare namespace Cypress {
    interface Chainable {
        shouldNotHaveLabel(): Chainable;
        shouldNotHaveInlineErrorMessage(): Chainable;
        shouldHaveLabel(label: string): Chainable;
        shouldBeValid(tagName?: string): Chainable;
        shouldBeInvalid(tagName?: string): Chainable;
        shouldHaveInlineErrorMessage(): Chainable;
        shouldHaveErrorMessage(errorMessage: string): Chainable;
        shouldHaveTestAttributeWithName(tagName: string, testkey: string): Chainable;
        shouldHaveDisabledTestAttribute(tagName: string): Chainable;
    }
}

Cypress.Commands.add('shouldNotHaveLabel', () => {
    cy.get('label').should('have.class', 'sr-only');
});

Cypress.Commands.add('shouldNotHaveInlineErrorMessage', () => {
    cy.get('.invalid-feedback').should('not.exist');
});

Cypress.Commands.add('shouldHaveLabel', (label: string) => {
    cy.get('label').contains(label);
});

Cypress.Commands.add('shouldBeValid', (tagName: string = 'input') => {
    // trigger blur manuell, does not works with integrated blur()
    cy.get(tagName).focus().trigger('blur');
    cy.get(tagName).should('not.have.class', 'is-invalid');
});

Cypress.Commands.add('shouldBeInvalid', (tagName: string = 'input') => {
    // trigger blur manuell, does not works with integrated blur()
    cy.get(tagName).focus().trigger('blur');
    cy.get(tagName).should('have.class', 'is-invalid');
});

Cypress.Commands.add('shouldHaveErrorMessage', (errorMessage: string) => {
    cy.get('.invalid-feedback').contains(errorMessage);
});

Cypress.Commands.add('shouldHaveInlineErrorMessage', () => {
    cy.get('.invalid-feedback').should('be.visible');
});

Cypress.Commands.add('shouldHaveTestAttributeWithName', (tagName: string, testkey: string) => {
    cy.get(tagName).should('have.attr', 'data-e2e-key', testkey);
});

Cypress.Commands.add('shouldHaveDisabledTestAttribute', (tagName: string) => {
    cy.get(tagName).should('not.have.attr', 'data-e2e-key');
});
