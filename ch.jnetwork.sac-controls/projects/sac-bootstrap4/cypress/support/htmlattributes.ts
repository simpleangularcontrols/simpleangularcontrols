declare namespace Cypress {
    interface Chainable {
        shouldBeReadonly(tagName?: string): Chainable;
        shouldBeDisabled(tagName?: string): Chainable;
        shouldHavePlaceholder(text: string, tagName?: string): Chainable;
        isTruncated(): Chainable;
        filterByText(text: string): Chainable;
        tinyMceType(text: string): Chainable;
        tinyMceTouch(): Chainable;
        tinyMceWaitForInit(): Chainable;
    }
}

Cypress.Commands.add('shouldBeReadonly', (tagName = 'input') => {
    cy.get(tagName).should('have.attr', 'readonly', 'readonly');
});

Cypress.Commands.add('shouldBeDisabled', (tagName = 'input') => {
    cy.get(tagName).should('have.attr', 'disabled');
});

Cypress.Commands.add('shouldHavePlaceholder', (text: string, tagName = 'input') => {
    cy.get(tagName).should('have.attr', 'placeholder', text);
});

Cypress.Commands.add('isTruncated', { prevSubject: ['element'] }, (subject) => {
    const el = subject[0];
    expect(el.scrollWidth).to.be.greaterThan(el.offsetWidth);
    return cy.wrap(subject);
});

Cypress.Commands.add('filterByText', { prevSubject: ['element'] }, (subject, text: string) => {
    return cy.wrap(subject).filter((_, el) => el.innerText.trim() === text);
});

Cypress.Commands.add('tinyMceWaitForInit', { prevSubject: ['element'] }, (subject) => {
    cy.wrap(subject).get('iframe').its('0.contentDocument.body').should('not.be.empty');
});

Cypress.Commands.add('tinyMceType', { prevSubject: ['element'] }, (subject, text: string) => {
    cy.wrap(subject)
        .get('iframe')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .clear()
        .type(text);
});

Cypress.Commands.add('tinyMceTouch', { prevSubject: ['element'] }, (subject) => {
    cy.wrap(subject)
        .get('textarea')
        .invoke('attr', 'id')
        .then((id) => {
            cy.window().then((win: any) => {
                const editor = win.tinymce.get(id);
                if (editor) {
                    editor.focus();
                    editor.fire('blur');
                }
            });
        });
});
