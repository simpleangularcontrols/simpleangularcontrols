import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacInputComponent } from './input';
import { FormsModule } from '@angular/forms';
import { ControlHeight, SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('NgInputComponent', () => {
    it('should show label and text', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
    });

    it('should show label and text with large height by control', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [componentHeight]="size" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                    size: ControlHeight.Large,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
        cy.get('.form-control').should('have.class', 'form-control-lg');
    });

    it('should show label and text with small height by control', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [componentHeight]="size" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                    size: ControlHeight.Small,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
        cy.get('.form-control').should('have.class', 'form-control-sm');
    });

    it('should show label and text with large height by formlayout', () => {
        cy.mount(
            `<form [sacFormLayout] [componentHeight]="size">
                <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                    size: ControlHeight.Large,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
        cy.get('.form-control').should('have.class', 'form-control-lg');
    });

    it('should show label and text with small height by formlayout', () => {
        cy.mount(
            `<form [sacFormLayout] [componentHeight]="size">
                <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                    size: ControlHeight.Small,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
        cy.get('.form-control').should('have.class', 'form-control-sm');
    });

    it('should show label and text with large height in configuration service', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            ComponentHeight: ControlHeight.Large,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
        cy.get('.form-control').should('have.class', 'form-control-lg');
    });

    it('should show label and text with small height in configuration service', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            ComponentHeight: ControlHeight.Small,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
        cy.get('.form-control').should('have.class', 'form-control-sm');
    });

    it('should show required', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required with inline error in control', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [inlineerrorenabled]="true" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();
        cy.shouldHaveInlineErrorMessage();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required without inline error in control', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [inlineerrorenabled]="false" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();
        cy.shouldNotHaveInlineErrorMessage();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required with inline error in formlayout', () => {
        cy.mount(
            `<form [sacFormLayout] [inlineError]="true">
                <sac-input name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();
        cy.shouldHaveInlineErrorMessage();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required without inline error in formlayout', () => {
        cy.mount(
            `<form [sacFormLayout] [inlineError]="false">
                <sac-input name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();
        cy.shouldNotHaveInlineErrorMessage();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required with inline error in configuration service', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            InlineErrorEnabled: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();
        cy.shouldHaveInlineErrorMessage();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required without inline error in configuration service', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            InlineErrorEnabled: false,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();
        cy.shouldNotHaveInlineErrorMessage();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should hide label', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldNotHaveLabel();
        cy.get('input').should('exist');
    });

    it('should have placeholder', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHavePlaceholder('My Placeholder');
    });

    it('should have be readonly', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'MyValue',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldBeReadonly();
    });

    it('should have be disabled', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'MyValue',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldBeDisabled();
    });

    it('should handle model binding', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', 'first value');
        cy.get('input').clear().type('second value');
        cy.get('input').should('have.value', 'second value');
        cy.validateValueChanged('second value'.length + 1);
    });

    it('should limit string', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" [maxtextlength]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').clear().type('12345678');
        cy.get('input').should('have.value', '123456');
        cy.validateValueChanged('123456'.length + 1);
    });

    it('should limit characters', () => {
        cy.mount(
            `<form>
      <sac-input name="field" [label]="label" allowedchars="abc" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-input>
      </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').type('abcde');
        cy.get('input').should('have.value', 'abc');
        cy.validateValueChanged('abc'.length);
    });

    it('should validate with regex', () => {});

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-input name="myControl" label="my Label">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-input > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-input name="myControl" e2eidentifier="myTestidentifier" label="my Label">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-input > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-input e2eidentifier="myTestidentifier" label="my Label">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-input > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-input label="my Label">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-input > div');
    });

    it('should have floating label with config service', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            LabelMode: 'floating',
                        },
                    },
                ],
            }
        );

        cy.shouldHaveFloatingClass();
        cy.get('input').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with layout directive', () => {
        cy.mount(
            `<form sacFormLayout labelMode="floating">
                <sac-input name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveFloatingClass();
        cy.get('input').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with component property', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveFloatingClass();
        cy.get('input').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with component property', () => {
        cy.mount(
            `<form>
                <sac-input name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'This is a value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', 'This is a value');
    });
});
