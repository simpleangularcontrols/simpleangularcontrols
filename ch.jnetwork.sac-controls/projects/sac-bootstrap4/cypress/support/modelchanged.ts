declare namespace Cypress {
    interface Chainable {
        validateValueChanged(requiredCount: number): Chainable;
        resetSpy(identifier: string): Chainable;
    }
}

Cypress.Commands.add('validateValueChanged', (requiredCount: number) => {
    cy.get('@valueSpy').should('have.been.called');
    cy.get('@valueSpy').its('callCount').should('equal', requiredCount);
});

Cypress.Commands.add('resetSpy', (identifier: string) => {
    cy.get(identifier).then((spy: any) => {
        if (spy && typeof spy.resetHistory === 'function') spy.resetHistory();
        else if (spy && typeof spy.reset === 'function') spy.reset();
    });
});
