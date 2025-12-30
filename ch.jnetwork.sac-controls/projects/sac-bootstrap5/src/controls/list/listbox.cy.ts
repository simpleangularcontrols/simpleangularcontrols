import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5ListModule } from './list.module';
import { FormsModule } from '@angular/forms';

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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ListModule, SACBootstrap5LayoutModule],
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ListModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: [3],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        // cy.get('select').select('Value 3');
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ListModule, SACBootstrap5LayoutModule],
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
        // cy.get('select').select('Value 3');
        cy.get('select').find('option:selected').should('have.value', 'Element 3');
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
                imports: [FormsModule, SacFormDirective, SACBootstrap5ListModule, SACBootstrap5LayoutModule],
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
        cy.get('select').find('option:selected').should('have.value', 'Element 2');
        cy.get('select').find('option:disabled').should('have.text', 'Element 3');
    });

    it('should validate with required attribute', () => {});

    it('option should work without saclistbox', () => {});

    it('should with selected state at options', () => {});
});
