import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacMultilanguageInputAreaComponent } from './multilanguageinputarea';
import { FormsModule } from '@angular/forms';
import { IconType, SACLANGUAGE_SERVICE } from '@simpleangularcontrols/sac-common';
import { of } from 'rxjs';

describe('SacMultilanguageInputAreaComponent', () => {
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap5LayoutModule],
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
        cy.get('textarea').should('exist');
        cy.get('button.dropdown-toggle').should('exist');
    });

    it('should save on change language', () => {});

    it('should validate when all values must be required', () => {});

    it('should validate when one values must be required', () => {});
});
