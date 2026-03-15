import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5MultilanguageModule } from './multilanguage.module';
import { FormsModule } from '@angular/forms';
import {
    IconType,
    SACCONFIGURATION_SERVICE,
    SACCommonUtliltiesModule,
    SACLANGUAGE_SERVICE,
} from '@simpleangularcontrols/sac-common';
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
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

    it('should have floating label with config service', () => {
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
                <sac-multilanguageinputarea name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-multilanguageinputarea>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: { de: '', en: 'English Text' },
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            LabelMode: 'floating',
                        },
                    },
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

        cy.shouldHaveFloatingClass();
        cy.get('textarea').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with layout directive', () => {
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
            `<form sacFormLayout labelMode="floating">
                <sac-multilanguageinputarea name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-multilanguageinputarea>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: { de: '', en: 'English Text' },
                    valueChange: createOutputSpy('valueSpy'),
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

        cy.shouldHaveFloatingClass();
        cy.get('textarea').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with component property', () => {
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
                <sac-multilanguageinputarea name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-multilanguageinputarea>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: { de: '', en: 'English Text' },
                    valueChange: createOutputSpy('valueSpy'),
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

        cy.shouldHaveFloatingClass();
        cy.get('textarea').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with component property', () => {
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
                <sac-multilanguageinputarea name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-multilanguageinputarea>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap5MultilanguageModule,
                    SACBootstrap5LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: { de: 'This is a value', en: 'English Text' },
                    valueChange: createOutputSpy('valueSpy'),
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

        cy.get('textarea').should('have.value', 'This is a value');
    });
});
