import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5DropdownModule } from './dropdown.module';
import { FormsModule } from '@angular/forms';

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
                imports: [FormsModule, SacFormDirective, SACBootstrap5DropdownModule, SACBootstrap5LayoutModule],
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5DropdownModule, SACBootstrap5LayoutModule],
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5DropdownModule, SACBootstrap5LayoutModule],
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5DropdownModule, SACBootstrap5LayoutModule],
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
});
