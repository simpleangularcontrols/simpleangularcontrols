import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4InputModule } from './input.module';


describe('inputDecimal', () => {
  it('should show label and text', () => {
    mount(
      '<form><ngInputDecimal name="field" label="My Label" [ngModel]="\'0\'"></ngInputDecimal></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('have.value', '0');
  });

  it('should not allow chars', () => {
    mount(
      '<form><ngInputDecimal name="field" label="My Label" [ngModel]="\'0\'"></ngInputDecimal></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('have.value', '0');
    cy.get('input').type('abc');
    cy.get('input').should('have.value', '0');
  });

  it('should allow decimal char', () => {
    mount(
      '<form><ngInputDecimal name="field" label="My Label" [ngModel]="\'0\'"></ngInputDecimal></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('have.value', '0');
    cy.get('input').type('1.4');
    cy.get('input').should('have.value', '1.4');
  });

  it('should not allow multiple decimal char', () => {
    mount(
      '<form><ngInputDecimal name="field" label="My Label" [ngModel]="\'0\'"></ngInputDecimal></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('have.value', '0');
    cy.get('input').type('1.4.4');
    cy.get('input').should('have.value', '1.44');
  });


});