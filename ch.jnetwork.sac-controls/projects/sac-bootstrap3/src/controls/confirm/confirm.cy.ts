import { SacFormDirective } from '../form';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3ConfirmModule } from './confirm.module';
import { ServiceConfirm } from './confirm.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACCommonUtliltiesModule, SACICON_SERVICE } from '@simpleangularcontrols/sac-common';
import { take } from 'rxjs/operators';

describe('ServiceConfirm', () => {
    it('opens dialog via service and returns the clicked button key', () => {
        @Component({
            template: `<button id="open" (click)="open()">Open</button>
                <div id="result">{{ result }}</div>`,
        })
        class HostComponent {
            public result = '';
            constructor(private readonly confirm: ServiceConfirm) {}
            public open() {
                this.confirm
                    .ConfirmMessage('Titel', 'Frage')
                    .pipe(take(1))
                    .subscribe((r) => (this.result = r));
            }
        }

        cy.intercept('GET', 'assets/icons/dialog/question.png', {
            fixture: 'question.png',
        }).as('getConfirmIcon');

        cy.mount(HostComponent, {
            declarations: [SacFormDirective],
            imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule, SACBootstrap3ConfirmModule],
            providers: [
                ServiceConfirm,
                {
                    provide: SACICON_SERVICE,
                    useValue: {
                        ConfirmDefaultImage: '/assets/icons/dialog/question.png',
                    },
                },
            ],
        });

        cy.get('#open').click();
        cy.get('.modal').should('exist');
        cy.get('.modal-header').should('have.text', 'Titel');
        cy.get('.modal-body').should('have.text', 'Frage');
        cy.get('img[src="/assets/icons/dialog/question.png"]').should('exist');
        cy.get('a#yes').click();
        cy.get('#result').should('contain', 'yes');

        cy.get('.modal').should('not.exist');
    });

    it('should have custom image', () => {
        @Component({
            template: `<button id="open" (click)="open()">Open</button>
                <div id="result">{{ result }}</div>`,
        })
        class HostComponent {
            public result = '';
            constructor(private readonly confirm: ServiceConfirm) {}
            public open() {
                this.confirm
                    .ConfirmMessage('Titel', 'Frage')
                    .pipe(take(1))
                    .subscribe((r) => (this.result = r));
            }
        }

        cy.intercept('GET', 'assets/customicon.png', {
            fixture: 'question.png',
        }).as('getConfirmIcon');

        cy.mount(HostComponent, {
            declarations: [SacFormDirective],
            imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule, SACBootstrap3ConfirmModule],
            providers: [
                ServiceConfirm,
                {
                    provide: SACICON_SERVICE,
                    useValue: {
                        ConfirmDefaultImage: '/assets/customicon.png',
                    },
                },
            ],
        });

        cy.get('#open').click();
        cy.get('.modal').should('exist');
        cy.get('img[src="/assets/customicon.png"]').should('exist');
    });

    it('should have custom buttons', () => {
        @Component({
            template: `<button id="open" (click)="open()">Open</button>
                <div id="result">{{ result }}</div>`,
        })
        class HostComponent {
            public result = '';
            constructor(private readonly confirm: ServiceConfirm) {}
            public open() {
                this.confirm
                    .ConfirmMessage('Titel', 'Frage', [
                        { key: 'ok', text: 'OK', role: 'primary' },
                        { key: 'cancel', text: 'Abbrechen' },
                    ])
                    .pipe(take(1))
                    .subscribe((r) => (this.result = r));
            }
        }

        cy.intercept('GET', 'assets/customicon.png', {
            fixture: 'question.png',
        }).as('getConfirmIcon');

        cy.mount(HostComponent, {
            declarations: [SacFormDirective],
            imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule, SACBootstrap3ConfirmModule],
            providers: [
                ServiceConfirm,
                {
                    provide: SACICON_SERVICE,
                    useValue: {
                        ConfirmDefaultImage: '/assets/customicon.png',
                    },
                },
            ],
        });

        cy.get('#open').click();
        cy.get('.modal').should('exist');

        cy.get('a#ok').should('exist');
        cy.get('a#cancel').should('exist');

        cy.get('a#ok').click();
        cy.get('#result').should('contain', 'ok');
    });
});
