import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4DateTimeModule } from './datetime.module';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacDateSelectorComponent', () => {
    it('should show component', () => {
        cy.mount(
            `<form>
                <sac-dateselector name="dateselector" dateselection="true" timeselection="true"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('.calendar-selector').should('exist');
    });

    it('should show component only with date', () => {
        cy.mount(
            `<form>
                <sac-dateselector name="dateselector" [dateselection]="true" [timeselection]="false"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {},
            }
        );

        const _now = new Date();
        const dayWithoutLeadingZero = _now.getDate();
        const monthWithoutLeadingZero = _now.getMonth() + 1;
        const year = _now.getFullYear().toString().padStart(4, '0');

        cy.get('.calendar-selector').should('exist');

        cy.get('input[max="23"]').should('not.exist');
        cy.get('input[max="59"]').should('not.exist');

        cy.contains('div.col.text-center', `${monthWithoutLeadingZero}/${year}`).should('exist');

        cy.get('div.day-current').should('have.text', dayWithoutLeadingZero);
    });

    it('should show component only with time', () => {
        cy.mount(
            `<form>
                <sac-dateselector name="dateselector" [dateselection]="false" [timeselection]="true"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {},
            }
        );

        const _now = new Date();
        const monthWithoutLeadingZero = _now.getMonth() + 1;
        const year = _now.getFullYear().toString().padStart(4, '0');

        cy.get('.calendar-selector').should('exist');

        cy.get('input[max="23"]').should('exist');
        cy.get('input[max="59"]').should('exist');

        cy.contains('div.col.text-center', `${monthWithoutLeadingZero}/${year}`).should('not.exist');
    });

    it('displays initial month/year when initialvalue is set', () => {
        const initial = new Date(2022, 4, 15); // May 15, 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                },
            }
        );

        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', `${initial.getMonth() + 1}/${initial.getFullYear()}`);

        cy.get('div.day-selected').should('have.text', '15');
    });

    it('navigates months with next and prev controls', () => {
        const initial = new Date(2022, 4, 1); // May 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                },
            }
        );

        // click next (right control)
        cy.get('sac-dateselector').find('.calendar-selector .row .col.text-right a').click();
        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', `${initial.getMonth() + 2}/${initial.getFullYear()}`);

        // click prev (left control)
        cy.get('sac-dateselector').find('.calendar-selector .row .col.text-left a').click();
        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', `${initial.getMonth() + 1}/${initial.getFullYear()}`);
    });

    it('shows time inputs when timeselection is enabled', () => {
        const initial = new Date(0, 0, 1, 16, 56); // 16:56

        cy.mount(
            `<form>
                <sac-dateselector [initialvalue]="initialvalue" [timeselection]="timeselection"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    timeselection: true,
                },
            }
        );

        cy.get('sac-dateselector').contains('Stunde').should('exist');
        cy.get('sac-dateselector').contains('Minute').should('exist');

        cy.get('input[max="23"]').should('have.value', 16);
        cy.get('input[max="59"]').should('have.value', 56);
    });

    it('should set correct date with selected date', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue" (selectdate)="valueChange.emit($event)"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.contains('.calendar-selector div', '10').click();
        cy.get('.calendar-selector button.btn-primary').click();

        cy.get('@valueSpy')
            .should('have.been.called')
            .its('lastCall.args.0.date')
            .invoke('format', 'YYYY-MM-DD HH:mm:ss')
            .should('contain', '2022-05-10 00:00:00');
    });

    it('should set correct date with initialvalue', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue" (selectdate)="valueChange.emit($event)"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', `${initial.getMonth() + 1}/${initial.getFullYear()}`);

        cy.get('div.day-selected').should('have.text', '15');

        cy.get('.calendar-selector button.btn-primary').click();

        cy.get('@valueSpy')
            .should('have.been.called')
            .its('lastCall.args.0.date')
            .invoke('format', 'YYYY-MM-DD HH:mm:ss')
            .should('contain', '2022-05-15 00:00:00');
    });

    it('should switch to december to january when click back', () => {
        const initial = new Date(2022, 0, 1); // Jan 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                },
            }
        );

        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', '1/2022');

        // click prev (left control)
        cy.get('sac-dateselector').find('.calendar-selector .row .col.text-left a').click();
        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', '12/2021');
    });

    it('should switch to january to december when click next', () => {
        const initial = new Date(2022, 11, 31); // Jan 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                },
            }
        );

        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', '12/2022');

        // click prev (right control)
        cy.get('sac-dateselector').find('.calendar-selector .row .col.text-right a').click();
        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', '1/2023');
    });

    it('should auto set value with auto apply', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue" [autoapplyselection]="true" (selectdate)="valueChange.emit($event)"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.contains('.calendar-selector div', '10').click();

        cy.get('@valueSpy')
            .should('have.been.called')
            .its('lastCall.args.0.date')
            .invoke('format', 'YYYY-MM-DD HH:mm:ss')
            .should('contain', '2022-05-10 00:00:00');
    });

    it('should has e2 testkey with name', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022
        cy.mount(
            `<form>
                <sac-dateselector name="myControl" [initialvalue]="initialvalue" dateselection="true"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-dateselector > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022
        cy.mount(
            `<form>
                <sac-dateselector name="myControl" e2eidentifier="myTestidentifier" [initialvalue]="initialvalue" dateselection="true"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-dateselector > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022
        cy.mount(
            `<form>
                <sac-dateselector e2eidentifier="myTestidentifier" [initialvalue]="initialvalue" dateselection="true"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-dateselector > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        const initial = new Date(2022, 4, 15, 0, 0, 0, 0); // May 14, 2022
        cy.mount(
            `<form>
                <sac-dateselector [initialvalue]="initialvalue" dateselection="true"></sac-dateselector>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DateTimeModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    initialvalue: initial,
                },
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-dateselector > div');
    });
});
