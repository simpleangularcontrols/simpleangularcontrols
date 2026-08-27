import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4MultilanguageModule } from './multilanguage.module';
import { SacMultilanguageInputAreaComponent } from './multilanguageinputarea';
import { FormsModule } from '@angular/forms';
import { IconType, SACCONFIGURATION_SERVICE, SACLANGUAGE_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';
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
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [isrequired]="true" [ngModel]="initValue" (ngModelChange)="valueChange.emit($event)"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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

        cy.get('textarea').should('have.value', 'German Text');
        cy.get('button.dropdown-toggle').click();

        cy.get('button.dropdown-item').contains('English').click();
        cy.get('textarea').clear().type('New English Text');

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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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

        cy.get('textarea').should('have.value', 'German Text');
        cy.get('button.dropdown-toggle').click();

        cy.get('button.dropdown-item').contains('English').click();
        cy.get('textarea').should('have.value', 'English Text');
    });

    it('should have empty value if language in model not exist', () => {
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4MultilanguageModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text' },
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

        cy.get('textarea').should('have.value', 'German Text');
        cy.get('button.dropdown-toggle').click();

        cy.get('button.dropdown-item').contains('English').click();
        cy.get('textarea').should('have.value', '');
    });

    it('should use image type of not set in languagemodel', () => {
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4MultilanguageModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text' },
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
                                    },
                                    {
                                        IsoCode: 'en',
                                        Text: 'English',
                                        Icon: '/icons/en.png',
                                    },
                                ]);
                            },
                        },
                    },
                ],
            }
        );

        cy.get('button.dropdown-toggle').click();
        cy.get('button.dropdown-item img').should('exist');
    });

    it('should not show icon if not set in languagemodel', () => {
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4MultilanguageModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: { de: 'German Text' },
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
                                        IconType: IconType.CssSprite,
                                    },
                                    {
                                        IsoCode: 'en',
                                        Text: 'English',
                                        Icon: '',
                                        IconType: IconType.Image,
                                    },
                                ]);
                            },
                        },
                    },
                ],
            }
        );

        cy.get('button.dropdown-toggle').click();
        cy.get('button.dropdown-item img').should('not.exist');
        cy.get('button.dropdown-item span').should('not.exist');
    });

    it('should can have empty language collection', () => {
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [requiredany]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4MultilanguageModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    initValue: {},
                },
                providers: [
                    {
                        provide: SACLANGUAGE_SERVICE,
                        useValue: {
                            GetLanguages() {
                                return of([]);
                            },
                        },
                    },
                ],
            }
        );

        cy.get('button.dropdown-toggle').click();
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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
        cy.get('textarea').should('exist');
        cy.get('textarea').shouldBeInvalid('textarea');
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [isrequired]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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
        cy.get('textarea').should('exist');
        cy.get('textarea').shouldBeValid('textarea');
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [requiredany]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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
        cy.get('textarea').shouldBeInvalid('textarea');
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
                <sac-multilanguageinputarea name="multilngcontrol" [label]="label" [requiredany]="true" [(ngModel)]="initValue"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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
        cy.get('textarea').should('exist');
        cy.get('textarea').shouldBeValid('textarea');
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
                <sac-multilanguageinputarea name="myControl" label="my Label"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-multilanguageinputarea > div', 'myControl');
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
                <sac-multilanguageinputarea name="myControl" e2eidentifier="myTestidentifier" label="my Label"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-multilanguageinputarea > div', 'myTestidentifier');
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
                <sac-multilanguageinputarea e2eidentifier="myTestidentifier" label="my Label"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-multilanguageinputarea > div', 'myTestidentifier');
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
                <sac-multilanguageinputarea label="my Label"></sac-multilanguageinputarea>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacMultilanguageInputAreaComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveDisabledTestAttribute('sac-multilanguageinputarea > div');
    });
});
