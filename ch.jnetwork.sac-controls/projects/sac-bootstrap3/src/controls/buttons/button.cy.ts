import { SacButtonComponent } from './button';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacButtonComponent', () => {
    it('should show label and click event', () => {
        cy.mount(SacButtonComponent, {
            componentProperties: {
                name: 'button',
                text: 'My Button',
                clicked: createOutputSpy('clickedSpy'),
            },
        });

        cy.get('#button').should('have.text', ' My Button\n');
        cy.get('#button').should('have.class', 'btn-default');
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

        cy.get('#button').should('have.text', ' My Button\n');
        cy.get('#button').should('have.class', 'btn-default');
        cy.get('#button').should('have.attr', 'disabled');
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

        cy.get('#button').should('have.text', ' My Button\n');
        cy.get('#button').should('have.class', 'btn-default');
        cy.get('#button i.glyphicon-repeat.spin').should('exist');
        cy.get('#button').should('have.attr', 'disabled');
        cy.get('#button').click({ force: true });
        cy.get('@clickedSpy').should('not.have.been.called');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(SacButtonComponent, {
            componentProperties: {
                name: 'myControl',
                role: 'primary',
                text: 'My Button',
            },
            providers: [
                {
                    provide: SACCONFIGURATION_SERVICE,
                    useValue: {
                        EnableE2EAttributes: true,
                    },
                },
            ],
        });

        cy.shouldHaveTestAttributeWithName('a', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(SacButtonComponent, {
            componentProperties: {
                name: 'myControl',
                e2eidentifier: 'myTestidentifier',
                role: 'primary',
                text: 'My Button',
            },
            providers: [
                {
                    provide: SACCONFIGURATION_SERVICE,
                    useValue: {
                        EnableE2EAttributes: true,
                    },
                },
            ],
        });

        cy.shouldHaveTestAttributeWithName('a', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(SacButtonComponent, {
            componentProperties: {
                e2eidentifier: 'myTestidentifier',
                role: 'primary',
                text: 'My Button',
            },
            providers: [
                {
                    provide: SACCONFIGURATION_SERVICE,
                    useValue: {
                        EnableE2EAttributes: true,
                    },
                },
            ],
        });

        cy.shouldHaveTestAttributeWithName('a', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(SacButtonComponent, {
            componentProperties: {
                name: 'myControl',
                role: 'primary',
                text: 'My Button',
            },
        });

        cy.shouldHaveDisabledTestAttribute('a');
    });
});
