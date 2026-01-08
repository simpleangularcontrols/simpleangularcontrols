import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacMultilanguageInputComponent } from './multilanguageinput';
import { FormsModule } from '@angular/forms';
import { IconType, SACCONFIGURATION_SERVICE, SACLANGUAGE_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';
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

    it('should save on change language', () => {
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
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [isrequired]="true" [ngModel]="initValue" (ngModelChange)="valueChange.emit($event)"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text', en: 'English Text' },
                    valueChange: createOutputSpy('valueChange'),
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

        cy.get('input').should('have.value', 'German Text');
        cy.get('button.dropdown-toggle').click();

        cy.get('button.dropdown-item').contains('English').click();
        cy.get('input').clear().type('New English Text');

        cy.get('@valueChange').should('be.calledWith', { de: 'German Text', en: 'New English Text' });
    });

    it('should can switch language', () => {
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
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text', en: 'English Text' },
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

        cy.get('input').should('have.value', 'German Text');
        cy.get('button.dropdown-toggle').click();

        cy.get('button.dropdown-item').contains('English').click();
        cy.get('input').should('have.value', 'English Text');
    });

    it('should be invalid when all values must be required', () => {
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
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text', en: '' },
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
        cy.get('input').shouldBeInvalid();
    });

    it('should be valid when all values must be required', () => {
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
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text', en: 'English Text' },
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
        cy.get('input').shouldBeValid();
    });

    it('should invalid when one value must be required', () => {
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
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [requiredany]="true" [(ngModel)]="initValue"></sac-multilanguageinput>
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
        cy.get('input').shouldBeInvalid();
    });

    it('should valid when one value must be required', () => {
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
                <sac-multilanguageinput name="multilngcontrol" [label]="label" [requiredany]="true" [(ngModel)]="initValue"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: '', en: 'English Text' },
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
        cy.get('input').shouldBeValid();
    });

    it('should has e2 testkey with name', () => {
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
                <sac-multilanguageinput name="myControl" label="my Label"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-multilanguageinput > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
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
                <sac-multilanguageinput name="myControl" e2eidentifier="myTestidentifier" label="my Label"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-multilanguageinput > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
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
                <sac-multilanguageinput e2eidentifier="myTestidentifier" label="my Label"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-multilanguageinput > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
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
                <sac-multilanguageinput label="my Label"></sac-multilanguageinput>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveDisabledTestAttribute('sac-multilanguageinput > div');
    });
});
