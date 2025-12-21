import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacMultilanguageInputComponent } from './multilanguageinput';
import { FormsModule } from '@angular/forms';
import { IconType, SACLANGUAGE_SERVICE } from '@simpleangularcontrols/sac-common';
import { of } from 'rxjs';

describe('SacMultilanguageInputComponent', () => {
    it('should show label and component', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('getIconDe');

        cy.intercept('GET', 'icons/en.png', {
            fixture: 'en.png',
        }).as('getIconEn');

        cy.intercept('GET', 'icons/fr.png', {
            fixture: 'fr.png',
        }).as('getIconEn');

        cy.mount(
            `<form>
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [(ngModel)]="initValue"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: '', en: '' },
                },
                providers: [
                    {
                        provide: SACLANGUAGE_SERVICE,
                        useValue: {
                            GetLanguages() {
                                return of([
                                    {
                                        IsoCode: 'de',
                                        Text: 'Deutsch',
                                        Icon: '/icons/de.png',
                                        IconType: IconType.Image,
                                    },
                                    {
                                        IsoCode: 'en',
                                        Text: 'English',
                                        Icon: '/icons/en.png',
                                        IconType: IconType.Image,
                                    },
                                ]);
                            },
                        },
                    },
                ],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('exist');
        cy.get('button.dropdown-toggle').should('exist');
    });
});
