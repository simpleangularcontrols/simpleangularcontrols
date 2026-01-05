declare namespace Cypress {
    interface Chainable {
        shouldBeReadonly(tagName?: string): Chainable;
        shouldBeDisabled(tagName?: string): Chainable;
        shouldHavePlaceholder(text: string, tagName?: string): Chainable;
        isTruncated(): Chainable;
    }
}

Cypress.Commands.add('shouldBeReadonly', (tagName: string = 'input') => {
    cy.get(tagName).should('have.attr', 'readonly', 'readonly');
});

Cypress.Commands.add('shouldBeDisabled', (tagName: string = 'input') => {
    cy.get(tagName).should('have.attr', 'disabled');
});

Cypress.Commands.add('shouldHavePlaceholder', (text: string, tagName: string = 'input') => {
    cy.get(tagName).should('have.attr', 'placeholder', text);
});

Cypress.Commands.add('isTruncated', { prevSubject: ['element'] }, (subject) => {
    const el = subject[0];
    expect(el.scrollWidth).to.be.greaterThan(el.offsetWidth);
    return cy.wrap(subject);
});
