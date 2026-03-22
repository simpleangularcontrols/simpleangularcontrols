import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacDateTimeComponent } from './datetime';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacDateTimeComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-datetime [label]="label"></sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('exist');
    });

    it('should have correct date', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value"></sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(2025, 12 - 1, 5, 13, 17, 0, 0), // Month is Index and not Month Value
                },
            }
        );

        cy.get('input').should('have.value', '05.12.2025 13:17');
    });

    it('should hide label', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [disablelabel]="true"></sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldNotHaveLabel();
        cy.get('input').should('exist');
    });

    it('should be invalid when value is before mindate', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [mindate]="mindate" [ngModel]="value">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mindate: '31.12.1999 18:15',
                    value: new Date(1999, 11, 31, 17, 20, 0),
                },
            }
        );

        cy.shouldBeInvalid();
    });

    it('should be invalid when value is after maxdate', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [maxdate]="maxdate" [ngModel]="value">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    maxdate: '02.01.2000 11:20',
                    value: new Date(2000, 0, 2, 14, 53),
                },
            }
        );

        cy.shouldBeInvalid();
    });

    it('should accept validation message inputs (MinDate)', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [mindate]="mindate" [ngModel]="value" [validationmessagemindate]="validationmessagemindate"></sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mindate: '31.12.1999 18:15',
                    value: new Date(1999, 11, 31, 17, 20, 0),
                    validationmessagemindate: 'MinDateMsg',
                    validationmessagesummarymindate: 'SummaryMin',
                },
            }
        );

        cy.shouldBeInvalid();
        cy.shouldHaveErrorMessage('MinDateMsg');
    });

    it('should accept validation message inputs (MaxDate)', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [maxdate]="maxdate" [ngModel]="value" [validationmessagemaxdate]="validationmessagemaxdate"></sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    maxdate: '02.01.2000 11:20',
                    value: new Date(2000, 0, 2, 14, 53),
                    validationmessagemaxdate: 'MaxDateMsg',
                    validationmessagesummarymaxdate: 'SummaryMax',
                },
            }
        );

        cy.shouldBeInvalid();
        cy.shouldHaveErrorMessage('MaxDateMsg');
    });

    it('should be invalid when value is required', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [isrequired]="true" [ngModel]="value">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mindate: '01.01.2000 15:22',
                    value: null,
                },
            }
        );

        cy.shouldBeInvalid();
    });

    it('should have be disabled', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [disabled]="true" [ngModel]="value" >
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                },
            }
        );

        cy.shouldBeDisabled();
    });

    it('should handle model binding', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.resetSpy('@valueSpy');
        cy.get('input').clear().type('01.01.2025 12:55');

        cy.get('input').should('have.value', '01.01.2025 12:55');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return a instanceof Date && a.getTime() === new Date(2025, 1 - 1, 1, 12, 55).getTime();
            }).length;

            expect(nullCount).to.equal(11);
            expect(dateCount).to.equal(1);
        });
    });

    it('should not allow invalid chars', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.resetSpy('@valueSpy');
        cy.get('input').clear().type('ab.#d.@-ac ss:h-');

        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.get('@valueSpy').should('not.be.called');
    });

    it('should reset date via selector', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(2025, 12 - 1, 5, 13, 42), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );
        const _now = new Date();

        cy.get('input').should('have.value', '05.12.2025 13:42');

        cy.resetSpy('@valueSpy');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Reset').click();
        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date &&
                    a.getTime() ===
                        new Date(
                            _now.getFullYear(),
                            _now.getMonth(),
                            _now.getDate(),
                            _now.getHours(),
                            _now.getMinutes()
                        ).getTime()
                );
            }).length;

            expect(nullCount).to.equal(1);
            expect(dateCount).to.equal(0);
        });
    });

    it('should reset date via selector with focus', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(2025, 12 - 1, 5, 13, 42), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );
        const _now = new Date();
        cy.get('input').should('have.value', '05.12.2025 13:42');

        cy.get('input').click();

        cy.resetSpy('@valueSpy');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Reset').click();
        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date && a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes()).getTime()
                );
            }).length;

            expect(nullCount).to.equal(2);
            expect(dateCount).to.equal(0);
        });
    });

    it('should reset date via selector with reactive forms', () => {
        const form = new UntypedFormGroup({
            date: new UntypedFormControl(new Date(2025, 12 - 1, 5, 13, 42)), // Month is Index and not Month Value
        });

        cy.mount(
            `<form [formGroup]="value">
                <sac-datetime name="field" [label]="label" formControlName="date" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [ReactiveFormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: form,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );
        const _now = new Date();
        cy.get('input').should('have.value', '05.12.2025 13:42');

        cy.resetSpy('@valueSpy');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Reset').click();
        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date && a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes()).getTime()
                );
            }).length;

            expect(nullCount).to.equal(2);
            expect(dateCount).to.equal(0);
        });
    });

    it('should set date via selector', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '__.__.____ __:__');

        cy.resetSpy('@valueSpy');

        // Current daily values (day, month, year) with formatting
        const _now = new Date();
        const day = ('0' + _now.getDate()).slice(-2);
        const dayWithoutLeadingZero = _now.getDate();
        const month = ('0' + (_now.getMonth() + 1)).slice(-2);
        const year = _now.getFullYear().toString().padStart(4, '0');
        const hours = _now.getHours().toString().padStart(2, '0');
        const minutes = _now.getMinutes().toString().padStart(2, '0');

        cy.get('button').click();
        cy.get('.calendar-selector div').filterByText(dayWithoutLeadingZero.toString()).click();

        // set minutes
        cy.get('input[max="23"]').clear().type(`${hours[0]}{del}${hours[1]}{del}`);
        cy.get('input[max="59"]').clear().type(`${minutes[0]}{del}${minutes[1]}{del}`);

        cy.get('.calendar-selector button.btn-primary').click();

        cy.get('input').should('have.value', `${day}.${month}.${year} ${hours}:${minutes}`);

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date &&
                    a.getTime() ===
                        new Date(
                            _now.getFullYear(),
                            _now.getMonth(),
                            _now.getDate(),
                            _now.getHours(),
                            _now.getMinutes(),
                            0,
                            0
                        ).getTime()
                );
            }).length;

            expect(nullCount).to.equal(0);
            expect(dateCount).to.equal(1);
        });
    });

    it('cancel via selector should not change value', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(2025, 12 - 1, 5, 6, 44), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '05.12.2025 06:44');

        cy.resetSpy('@valueSpy');

        // Current daily values (day, month, year) with formatting
        const _now = new Date();
        const dayWithoutLeadingZero = _now.getDate();

        cy.get('button').click();
        cy.contains('.calendar-selector div', dayWithoutLeadingZero).click();
        cy.get('#field').click();

        cy.get('.calendar-selector').should('not.exist');
        cy.get('input').should('have.value', '05.12.2025 06:44');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date &&
                    a.getTime() ===
                        new Date(
                            _now.getFullYear(),
                            _now.getMonth(),
                            _now.getDate(),
                            _now.getHours(),
                            _now.getMinutes()
                        ).getTime()
                );
            }).length;

            expect(nullCount).to.equal(0);
            expect(dateCount).to.equal(0);
        });
    });

    it('current day via selector should change value', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(2025, 10 - 1, 5, 8, 4), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '05.10.2025 08:04');

        cy.resetSpy('@valueSpy');

        // Current daily values (day, month, year) with formatting
        const _now = new Date();
        const day = ('0' + _now.getDate()).slice(-2);
        const month = ('0' + (_now.getMonth() + 1)).slice(-2);
        const year = _now.getFullYear().toString().padStart(4, '0');
        const hours = _now.getHours().toString().padStart(2, '0');
        const minutes = _now.getMinutes().toString().padStart(2, '0');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Heute').click();
        cy.get('.calendar-selector button.btn-primary').click();

        cy.get('.calendar-selector').should('not.exist');
        cy.get('input').should('have.value', `${day}.${month}.${year} ${hours}:${minutes}`);

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date &&
                    a.getTime() ===
                        new Date(
                            _now.getFullYear(),
                            _now.getMonth(),
                            _now.getDate(),
                            _now.getHours(),
                            _now.getMinutes()
                        ).getTime()
                );
            }).length;

            expect(nullCount).to.equal(0);
            expect(dateCount).to.equal(1);
        });
    });

    it('should disable max validator when maxdate is invalid', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [maxdate]="maxdate" [ngModel]="value">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    maxdate: '55.01.2000 11:20',
                    value: new Date(2000, 0, 2, 14, 53),
                },
            }
        );

        cy.shouldBeValid();
    });

    it('should disable mix validator when mindate is invalid', () => {
        cy.mount(
            `<form>
                <sac-datetime name="field" [label]="label" [mindate]="mindate" [ngModel]="value">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mindate: '44.12.1999 18:15',
                    value: new Date(1999, 11, 31, 17, 20, 0),
                },
            }
        );

        cy.shouldBeValid();
    });

    it('should toggle window when click button', () => {
        cy.mount(
            `<form>
                <div id="clicktarget"></div>
                <sac-datetime name="field" [label]="label" [mindate]="mindate" [ngModel]="value">
                </sac-datetime>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('button').click();
        cy.get('.calendar-selector').should('exist');

        cy.get('#clicktarget').click({ force: true });

        cy.get('.calendar-selector').should('not.exist');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                        <sac-datetime name="myControl" [label]="label"></sac-datetime>
                    </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-datetime > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                        <sac-datetime name="myControl" e2eidentifier="myTestidentifier" [label]="label"></sac-datetime>
                    </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-datetime > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                        <sac-datetime [label]="label" e2eidentifier="myTestidentifier"></sac-datetime>
                    </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-datetime > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                        <sac-datetime [label]="label"></sac-datetime>
                    </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDateTimeComponent, SACBootstrap4LayoutModule],
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-datetime > div');
    });
});
