import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5ListModule } from './list.module';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

describe('SacListboxComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-listbox name="listbox" [label]="label" [(ngModel)]="value">
                    <option [ngValue]="1">Value 1</option>
                    <option [ngValue]="2">Value 2</option>
                    <option [ngValue]="3">Value 4</option>                
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [1],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').should('exist');
    });

    it('should preselect options with option tag', () => {
        cy.mount(
            `<form>
                <sac-listbox name="listbox" [label]="label" [(ngModel)]="value">
                    <option [ngValue]="1">Element 1</option>
                    <option [ngValue]="2">Element 2</option>
                    <option [ngValue]="3">Element 3</option>                
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [3],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.value', 'Element 3');
        cy.get('select').should('exist');
    });

    it('should preselect options with options', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    name="listbox"
                    [label]="label"
                    [(ngModel)]="value" 
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value">           
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [3],
                    options: [
                        { id: 1, value: 'Element 1' },
                        { id: 2, value: 'Element 2' },
                        { id: 3, value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.value', '3');
        cy.get('select').should('exist');
    });

    it('should preselect options with options - string value', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    name="listbox"
                    [label]="label"
                    [(ngModel)]="value" 
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value">    
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: ['1'],
                    options: [
                        { id: '1', value: 'Element 1' },
                        { id: '2', value: 'Element 2' },
                        { id: '3', value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.value', "0: '1'");
        cy.get('select').should('exist');
    });

    it('should preselect options with options - object value', () => {
        const item = { key: '1' };
        cy.mount(
            `<form>
                <sac-listbox 
                    name="listbox"
                    [label]="label"
                    [(ngModel)]="value" 
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value">    
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [item],
                    options: [
                        { id: item, value: 'Element 1' },
                        { id: { key: '2' }, value: 'Element 2' },
                        { id: { key: '3' }, value: 'Element 3' },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.value', '0: Object');
        cy.get('select').should('exist');
    });

    it('should disable options', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    name="listbox"
                    [label]="label"
                    [(ngModel)]="value" 
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    optionenabled="enabled">           
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [2],
                    options: [
                        { id: 1, value: 'Element 1', enabled: true },
                        { id: 2, value: 'Element 2', enabled: true },
                        { id: 3, value: 'Element 3', enabled: false },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').find('option:selected').should('have.value', '2');
        cy.get('select').find('option:disabled').should('have.text', 'Element 3');
    });

    it('should validate with required attribute', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    name="listbox"
                    [label]="label"
                    [(ngModel)]="value" 
                    [options]="options"
                    optionvalue="id"
                    optionlabel="value"
                    optionenabled="enabled"
                    [isrequired]="true">           
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [],
                    options: [
                        { id: 1, value: 'Element 1', enabled: false },
                        { id: 2, value: 'Element 2', enabled: false },
                        { id: 3, value: 'Element 3', enabled: false },
                    ],
                },
            }
        );

        cy.get('select').shouldBeInvalid('select');
    });

    it('option should not raise exception if not saclistbox', () => {
        cy.mount(
            `<form>
                <select multiple name="defaultSelect" [ngModel]="value">
                    <option [value]="0">Value Item 1</option>
                    <option [value]="1">Value Item 2</option>
                    <option [value]="2">Value Item 3</option>
                </select>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [1],
                },
            }
        );
        cy.get('select').find('option:selected').should('have.text', 'Value Item 2');
    });

    it('should with selected state at options', () => {
        cy.mount(
            `<form>
                <sac-listbox name="listbox" [label]="label" [(ngModel)]="value">
                    <option [value]="1">Value 1</option>
                    <option [value]="2" selected="true">Value 2</option>
                    <option [value]="3">Value 4</option>                
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: [],
                },
            }
        );

        cy.get('select').find('option:selected').should('have.text', 'Value 2');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    name="myControl" 
                    label="MyLabel"
                    [ngModel]="null">
                    <option [ngValue]="0">Value Item 1</option>
                    <option [ngValue]="1">Value Item 2</option>
                    <option [ngValue]="2">Value Item 3</option>                    
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-listbox > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    name="myControl"
                    e2eidentifier="myTestidentifier"
                    label="MyLabel"
                    [ngModel]="null">
                    <option [ngValue]="0">Value Item 1</option>
                    <option [ngValue]="1">Value Item 2</option>
                    <option [ngValue]="2">Value Item 3</option>                    
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-listbox > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    e2eidentifier="myTestidentifier"
                    label="MyLabel">
                    <option [ngValue]="0">Value Item 1</option>
                    <option [ngValue]="1">Value Item 2</option>
                    <option [ngValue]="2">Value Item 3</option>                    
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-listbox > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-listbox 
                    label="MyLabel">
                    <option [ngValue]="0">Value Item 1</option>
                    <option [ngValue]="1">Value Item 2</option>
                    <option [ngValue]="2">Value Item 3</option>                    
                </sac-listbox>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap5ListModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-listbox > div');
    });
});
