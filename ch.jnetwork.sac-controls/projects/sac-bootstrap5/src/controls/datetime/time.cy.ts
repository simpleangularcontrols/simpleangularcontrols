import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacTimeComponent } from './time';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacTimeComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-time [label]="label"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                <sac-time name="field" [label]="label" [ngModel]="value"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(0, 0, 1, 13, 17, 0, 0), // Month is Index and not Month Value
                },
            }
        );

        cy.get('input').should('have.value', '13:17');
    });

    it('should hide label', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [disablelabel]="true"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                <sac-time name="field" [label]="label" [mintime]="mintime" [ngModel]="value">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mintime: '18:15',
                    value: new Date(0, 0, 1, 17, 20, 0),
                },
            }
        );

        cy.shouldBeInvalid();
    });

    it('should be invalid when value is after maxdate', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [maxtime]="maxtime" [ngModel]="value">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    maxtime: '11:20',
                    value: new Date(0, 0, 1, 14, 53),
                },
            }
        );

        cy.shouldBeInvalid();
    });

    it('should accept validation message inputs (MinTime)', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [mintime]="mintime" [ngModel]="value" [validationmessagemintime]="validationmessagemintime"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mintime: '18:15',
                    value: new Date(0, 0, 1, 17, 20, 0),
                    validationmessagemintime: 'MinTimeMsg',
                    validationmessagesummarymintime: 'SummaryMin',
                },
            }
        );

        cy.shouldBeInvalid();
        cy.shouldHaveErrorMessage('MinTimeMsg');
    });

    it('should accept validation message inputs (MaxTime)', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [maxtime]="maxtime" [ngModel]="value" [validationmessagemaxtime]="validationmessagemaxtime"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    maxtime: '11:20',
                    value: new Date(0, 0, 1, 14, 53),
                    validationmessagemaxtime: 'MaxTimeMsg',
                    validationmessagesummarymaxtime: 'SummaryMax',
                },
            }
        );

        cy.shouldBeInvalid();
        cy.shouldHaveErrorMessage('MaxTimeMsg');
    });

    it('should be invalid when value is required', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [isrequired]="true" [ngModel]="value">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                },
            }
        );

        cy.shouldBeInvalid();
    });

    it('should have be disabled', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [disabled]="true" [ngModel]="value" >
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '__:__');

        cy.resetSpy('@valueSpy');
        cy.get('input').clear().type('12:55');

        cy.get('input').should('have.value', '12:55');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return a instanceof Date && a.getTime() === new Date(0, 0, 1, 12, 55).getTime();
            }).length;

            expect(nullCount).to.equal(3);
            expect(dateCount).to.equal(1);
        });
    });

    it('should not allow invalid chars', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '__:__');

        cy.resetSpy('@valueSpy');
        cy.get('input').clear().type('ss:h-');

        cy.get('input').should('have.value', '__:__');

        cy.get('@valueSpy').should('not.be.called');
    });

    it('should reset time via selector', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(0, 0, 1, 13, 42), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );
        const _now = new Date();

        cy.get('input').should('have.value', '13:42');

        cy.resetSpy('@valueSpy');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Reset').click();
        cy.get('input').should('have.value', '__:__');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date && a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes()).getTime()
                );
            }).length;

            expect(nullCount).to.equal(1);
            expect(dateCount).to.equal(0);
        });
    });

    it('should reset time via selector with focus', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(0, 0, 1, 13, 42), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );
        const _now = new Date();

        cy.get('input').should('have.value', '13:42');

        cy.get('input').click();

        cy.resetSpy('@valueSpy');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Reset').click();
        cy.get('input').should('have.value', '__:__');

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date && a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes()).getTime()
                );
            }).length;

            expect(nullCount).to.equal(1);
            expect(dateCount).to.equal(0);
        });
    });

    it('should reset time via selector with reactive forms', () => {
        const form = new UntypedFormGroup({
            date: new UntypedFormControl(new Date(0, 0, 1, 13, 42)), // Month is Index and not Month Value
        });

        cy.mount(
            `<form [formGroup]="value">
                <sac-time name="field" [label]="label" formControlName="date" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [ReactiveFormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: form,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );
        const _now = new Date();

        cy.get('input').should('have.value', '13:42');

        cy.resetSpy('@valueSpy');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Reset').click();
        cy.get('input').should('have.value', '__:__');

        cy.wrap(form.get('date')).its('value').should('be.null');
        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => {
                return c.args && c.args.length > 0 && c.args[0] === null;
            }).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date && a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes()).getTime()
                );
            }).length;

            expect(nullCount).to.equal(1);
            expect(dateCount).to.equal(0);
        });
    });

    it('should set time via selector', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '__:__');

        cy.resetSpy('@valueSpy');

        // aktuelle Tageswerte (Tag, Monat, Jahr) mit Formatierung
        const _now = new Date();
        const hours = _now.getHours().toString().padStart(2, '0');
        const minutes = _now.getMinutes().toString().padStart(2, '0');

        cy.get('button').click();

        // set minutes
        cy.get('input[max="23"]').clear().type(`${hours[0]}{del}${hours[1]}{del}`);
        cy.get('input[max="59"]').clear().type(`${minutes[0]}{del}${minutes[1]}{del}`);

        cy.get('.calendar-selector button.btn-primary').click();

        cy.get('input').should('have.value', `${hours}:${minutes}`);

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date &&
                    a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes(), 0, 0).getTime()
                );
            }).length;

            expect(nullCount).to.equal(0);
            expect(dateCount).to.equal(1);
        });
    });

    it('cancel via selector should not change value', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(0, 0, 1, 6, 44), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '06:44');

        cy.resetSpy('@valueSpy');

        // aktuelle Tageswerte (Tag, Monat, Jahr) mit Formatierung
        const _now = new Date();
        const tag = ('0' + _now.getDate()).slice(-2);

        cy.get('button').click();
        cy.get('input[max="23"]').clear().type('15');
        cy.get('#field').click();

        cy.get('.calendar-selector').should('not.exist');
        cy.get('input').should('have.value', '06:44');

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

    it('current time via selector should change value', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(0, 0, 1, 8, 4), // Month is Index and not Month Value
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '08:04');

        cy.resetSpy('@valueSpy');

        // aktuelle Tageswerte (Tag, Monat, Jahr) mit Formatierung
        const _now = new Date();
        const hours = _now.getHours().toString().padStart(2, '0');
        const minutes = _now.getMinutes().toString().padStart(2, '0');

        cy.get('button').click();
        cy.contains('.calendar-selector button', 'Heute').click();
        cy.get('.calendar-selector button.btn-primary').click();

        cy.get('.calendar-selector').should('not.exist');
        cy.get('input').should('have.value', `${hours}:${minutes}`);

        cy.get('@valueSpy').then((spy: any) => {
            const calls = spy.getCalls ? spy.getCalls() : spy.calls && spy.calls.all ? spy.calls.all() : [];
            const nullCount = calls.filter((c: any) => c.args && c.args.length > 0 && c.args[0] === null).length;
            const dateCount = calls.filter((c: any) => {
                const a = c.args && c.args.length > 0 ? c.args[0] : undefined;
                return (
                    a instanceof Date && a.getTime() === new Date(0, 0, 1, _now.getHours(), _now.getMinutes()).getTime()
                );
            }).length;

            expect(nullCount).to.equal(0);
            expect(dateCount).to.equal(1);
        });
    });

    it('should disable max validator when maxdate is invalid', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [maxtime]="maxtime" [ngModel]="value" [validationmessagemaxtime]="validationmessagemaxtime"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    maxtime: '11:666',
                    value: new Date(0, 0, 1, 14, 53),
                    validationmessagemaxtime: 'MaxTimeMsg',
                    validationmessagesummarymaxtime: 'SummaryMax',
                },
            }
        );

        cy.shouldBeValid();
    });

    it('should disable mix validator when mindate is invalid', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" [mintime]="mintime" [ngModel]="value" [validationmessagemintime]="validationmessagemintime"></sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    mintime: '18:444',
                    value: new Date(0, 0, 1, 17, 20, 0),
                    validationmessagemintime: 'MinTimeMsg',
                    validationmessagesummarymintime: 'SummaryMin',
                },
            }
        );

        cy.shouldBeValid();
    });

    it('should toggle window when click button', () => {
        cy.mount(
            `<form>
                <div id="clicktarget"></div>
                <sac-time name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                    <sac-time name="myControl" [label]="label"></sac-time>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-time > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                    <sac-time name="myControl" e2eidentifier="myTestidentifier" [label]="label"></sac-time>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-time > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                    <sac-time [label]="label" e2eidentifier="myTestidentifier"></sac-time>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-time > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-time [label]="label"></sac-time>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-time > div');
    });

    it('should have floating label with config service', () => {
        cy.mount(
            `<form>
                <sac-time name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                <sac-time name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                <sac-time name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
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
                <sac-time name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-time>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTimeComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: new Date(0, 0, 1, 14, 17),
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', '14:17');
    });
});
