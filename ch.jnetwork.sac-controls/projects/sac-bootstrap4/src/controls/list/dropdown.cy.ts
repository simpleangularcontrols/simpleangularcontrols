import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4DropdownModule } from './dropdown.module';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacDropdownComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [ngModel]="null">
                    <option [ngValue]="0">Value Item 1</option>
                    <option [ngValue]="1">Value Item 2</option>
                    <option [ngValue]="2">Value Item 3</option>                    
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').should('exist');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '3: null');
        cy.get('select').should('have.value', '3: null');
    });

    it('should preselect model value with option tags', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [(ngModel)]="value">
                    <option [ngValue]="0">Value Item 1</option>
                    <option [ngValue]="1">Value Item 2</option>
                    <option [ngValue]="2">Value Item 3</option>
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 1,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Value Item 2');
        cy.get('select').find('option:selected').should('have.value', '1: 1');
    });

    it('should preselect model value with options', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    [(ngModel)]="value">
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 1,
                    options: [
                        { id: 1, value: 'Element 1' },
                        { id: 2, value: 'Element 2' },
                        { id: 3, value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Element 1');
        cy.get('select').find('option:selected').should('have.value', '1: 1');
    });

    it('should cannot select disabled element', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    optionenabled="enabled"
                    [(ngModel)]="value">
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 1,
                    options: [
                        { id: 1, value: 'Element 1', enabled: true },
                        { id: 2, value: 'Element 2', enabled: true },
                        { id: 3, value: 'Element 3', enabled: false },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Element 1');
        cy.get('select').find('option:selected').should('have.value', '1: 1');
        cy.get('select').find('option:disabled').should('have.text', 'Element 3');
    });

    it('should work with custom compare methode', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [options]="options"
                    optionvalue="item"
                    optionlabel="display"
                    [comparewith]="compareFunction"
                    [ngModel]="value"
                    (ngModelChange)="valueChange.emit($event)">
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: { id: 1, text: 'item 1' },
                    options: [
                        { id: 1, item: { id: 1, text: 'item 1' }, display: 'Element 1' },
                        { id: 2, item: { id: 2, text: 'item 2' }, display: 'Element 2' },
                        { id: 3, item: { id: 3, text: 'item 3' }, display: 'Element 3' },
                    ],
                    valueChange: createOutputSpy('valueSpy'),
                    compareFunction: (o1: any, o2: any) => {
                        if (
                            o1 === null ||
                            o2 === null ||
                            o1.id === null ||
                            o1.id === undefined ||
                            o2.id === null ||
                            o2.id === undefined
                        ) {
                            return false;
                        }

                        return o1.id === o2.id;
                    },
                },
            }
        );

        cy.get('select').find(':selected').should('have.text', 'Element 1');
        cy.get('select').select('Element 3');
        cy.get('@valueSpy').should('be.calledWith', { id: 3, text: 'item 3' });
    });

    it('should check required property', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    [(ngModel)]="value"
                    [isrequired]="true">
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: null,
                    options: [
                        { id: 1, value: 'Element 1' },
                        { id: 2, value: 'Element 2' },
                        { id: 3, value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '0: null');

        cy.get('select').shouldBeInvalid('select');
    });

    it('should check required property with custom emptyvalue (string)', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    emptylabel="Please select"
                    emptyvalue="empty"
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    [(ngModel)]="value"
                    [isrequired]="true">
                </sac-dropdown>
                </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DropdownModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: 'empty',
                    options: [
                        { id: 'value1', value: 'Element 1' },
                        { id: 'value2', value: 'Element 2' },
                        { id: 'value3', value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '0: empty');

        cy.get('select').shouldBeInvalid('select');
    });

    it('should check required property with custom emptyvalue (number)', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    emptylabel="Please select"
                    [emptyvalue]="0"
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    [(ngModel)]="value"
                    [isrequired]="true">
                </sac-dropdown>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DropdownModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: 0,
                    options: [
                        { id: 1, value: 'Element 1' },
                        { id: 2, value: 'Element 2' },
                        { id: 3, value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '0: 0');

        cy.get('select').shouldBeInvalid('select');
    });

    it('should check valid required property with custom emptyvalue', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    emptylabel="Please select"
                    emptyvalue="empty"
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    [(ngModel)]="value"
                    [isrequired]="true">
                </sac-dropdown>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4DropdownModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    label: 'My Label',
                    value: 'empty',
                    options: [
                        { id: 'value1', value: 'Element 1' },
                        { id: 'value2', value: 'Element 2' },
                        { id: 'value3', value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '0: empty');

        cy.get('select').select('Element 1');

        cy.get('select').shouldBeValid('select');
        cy.get('select').find('option:selected').should('have.value', '1: value1');
    });

    it('option should work with value attribute', () => {
        cy.mount(
            `<form>
                <sac-dropdown 
                    name="dropdown" 
                    [label]="label"
                    [emptyvalue]="null" 
                    emptylabel="Please select"
                    [(ngModel)]="value">
                    <option [value]="0">Value Item 1</option>
                    <option [value]="1">Value Item 2</option>
                    <option [value]="2">Value Item 3</option>
                </sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 1,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Value Item 2');
        cy.get('select').find('option:selected').should('have.value', '1');
    });

    it('option should not raise exception if not sacdropdown', () => {
        cy.mount(
            `<form>
                <select name="defaultSelect" [ngModel]="value">
                    <option [value]="0">Value Item 1</option>
                    <option [value]="1">Value Item 2</option>
                    <option [value]="2">Value Item 3</option>
                </select>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 1,
                },
            }
        );
        cy.get('select').find('option:selected').should('have.text', 'Value Item 2');
        cy.get('select').find('option:selected').should('have.value', '1');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-dropdown 
                        name="myControl" 
                        label="MyLabel"
                        [emptyvalue]="null" 
                        emptylabel="Please select"
                        [ngModel]="null">
                        <option [ngValue]="0">Value Item 1</option>
                        <option [ngValue]="1">Value Item 2</option>
                        <option [ngValue]="2">Value Item 3</option>                    
                    </sac-dropdown>
                  </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-dropdown > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                    <sac-dropdown 
                        name="myControl"
                        e2eidentifier="myTestidentifier"
                        label="MyLabel"
                        [emptyvalue]="null" 
                        emptylabel="Please select"
                        [ngModel]="null">
                        <option [ngValue]="0">Value Item 1</option>
                        <option [ngValue]="1">Value Item 2</option>
                        <option [ngValue]="2">Value Item 3</option>                    
                    </sac-dropdown>
                  </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-dropdown > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                    <sac-dropdown 
                        e2eidentifier="myTestidentifier"
                        label="MyLabel"
                        [emptyvalue]="null" 
                        emptylabel="Please select">
                        <option [ngValue]="0">Value Item 1</option>
                        <option [ngValue]="1">Value Item 2</option>
                        <option [ngValue]="2">Value Item 3</option>                    
                    </sac-dropdown>
                  </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-dropdown > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-dropdown 
                        label="MyLabel"
                        [emptyvalue]="null" 
                        emptylabel="Please select">
                        <option [ngValue]="0">Value Item 1</option>
                        <option [ngValue]="1">Value Item 2</option>
                        <option [ngValue]="2">Value Item 3</option>                    
                    </sac-dropdown>
                  </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-dropdown > div');
    });

    it('should allow numbers as empty value', () => {
        cy.mount(
            `<form>
                    <sac-dropdown 
                        name="dropdown" 
                        [label]="label"
                        [emptyvalue]="0" 
                        emptylabel="Please select"
                        [(ngModel)]="value">
                        <option [ngValue]="1">Value Item 1</option>
                        <option [ngValue]="2">Value Item 2</option>
                        <option [ngValue]="3">Value Item 3</option>
                    </sac-dropdown>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 0,
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '3: 0');
    });

    it('should allow string as empty value', () => {
        cy.mount(
            `<form>
                    <sac-dropdown 
                        name="dropdown" 
                        [label]="label"
                        emptyvalue="notset" 
                        emptylabel="Please select"
                        [(ngModel)]="value">
                        <option [ngValue]="value1">Value Item 1</option>
                        <option [ngValue]="value2">Value Item 2</option>
                        <option [ngValue]="value3">Value Item 3</option>
                    </sac-dropdown>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4DropdownModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'notset',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.text', 'Please select');
        cy.get('select').find('option:selected').should('have.value', '3: notset');
    });
});
