import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacDateSelectorComponent } from './dateselector';
import { FormsModule } from '@angular/forms';

describe('SacDateSelectorComponent', () => {
    it('should show component', () => {
        cy.mount(
            `<form>
                <sac-dateselector name="dateselector" dateselection="true" timeselection="true"></sac-dateselector>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateSelectorComponent, SACBootstrap5LayoutModule],
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
                imports: [FormsModule, SacFormDirective, SacDateSelectorComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        const _now = new Date();
        const tag = _now.getDate();
        const monat = ('0' + (_now.getMonth() + 1)).slice(-2);
        const jahr = _now.getFullYear().toString().padStart(4, '0');

        cy.get('.calendar-selector').should('exist');

        cy.get('input[max="23"]').should('not.exist');
        cy.get('input[max="59"]').should('not.exist');

        cy.contains('div.col.text-center', `${monat}/${jahr}`).should('exist');

        cy.get('div.day-current').should('have.text', tag);
    });

    it('should show component only with time', () => {
        cy.mount(
            `<form>
                <sac-dateselector name="dateselector" [dateselection]="false" [timeselection]="true"></sac-dateselector>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateSelectorComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        const _now = new Date();
        const monat = ('0' + (_now.getMonth() + 1)).slice(-2);
        const jahr = _now.getFullYear().toString().padStart(4, '0');

        cy.get('.calendar-selector').should('exist');

        cy.get('input[max="23"]').should('exist');
        cy.get('input[max="59"]').should('exist');

        cy.contains('div.col.text-center', `${monat}/${jahr}`).should('not.exist');
    });

    it('displays initial month/year when initialvalue is set', () => {
        const initial = new Date(2022, 4, 15); // May 15, 2022

        cy.mount(
            `<form>
                <sac-dateselector name="controlname" [dateselection]="dateselection" [initialvalue]="initialvalue"></sac-dateselector>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateSelectorComponent, SACBootstrap5LayoutModule],
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
                imports: [FormsModule, SacFormDirective, SacDateSelectorComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    initialvalue: initial,
                    dateselection: true,
                },
            }
        );

        // click next (right control)
        cy.get('sac-dateselector').find('.calendar-selector .row .col.text-end a').click();
        cy.get('sac-dateselector')
            .find('.calendar-selector .container .row .col.text-center')
            .first()
            .should('contain', `${initial.getMonth() + 2}/${initial.getFullYear()}`);

        // click prev (left control)
        cy.get('sac-dateselector').find('.calendar-selector .row .col.text-start a').click();
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
                imports: [FormsModule, SacFormDirective, SacDateSelectorComponent, SACBootstrap5LayoutModule],
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

    it('should set correct date with initialvalue', () => {
        // TODO: test required
    });

    it('should switch to december to january when click back', () => {
        // TODO: test required
    });

    it('should switch to january to december when click next', () => {
        // TODO: test required
    });

    it('should auto set value with auto apply', () => {
        // TODO: test required
    });
});
