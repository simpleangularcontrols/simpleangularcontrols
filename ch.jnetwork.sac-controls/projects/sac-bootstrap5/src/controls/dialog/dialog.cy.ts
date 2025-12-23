import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacDialogComponent } from './dialog';
import { FormsModule } from '@angular/forms';

describe('SacDialogComponent', () => {
    it('should show component', () => {
        cy.mount(
            `<form>
                <sac-dialog #modaldialog [isvisible]="true">
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');
    });

    it('should show small component', () => {
        cy.mount(
            `<form>
                <sac-dialog #modaldialog [isvisible]="true" size="small">
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');
        cy.get('div.modal .modal-dialog').should('have.class', 'modal-sm');
    });

    it('should close on keydown esc', () => {
        cy.mount(
            `<form>
                <sac-dialog #modaldialog [isvisible]="true">
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');

        cy.get('div.modal').type('{esc}');

        cy.get('div.modal').should('not.exist');
    });

    it('should open dialog with code', () => {
        cy.mount(
            `<form>
                <button id="openDialog" (click)="modaldialog.show()">Open Dialog</button>
                <sac-dialog #modaldialog>
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('not.exist');

        cy.get('#openDialog').click();

        cy.get('div.modal').should('exist');
    });

    it('should have backdrop', () => {
        cy.mount(
            `<form>
                <button id="openDialog">Open Dialog</button>
                <sac-dialog #modaldialog [isvisible]="true">
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');
        cy.get('div.modal').should('be.visible');
        cy.get('.modal-backdrop').should('exist');
    });

    it('should not have backdrop', () => {
        cy.mount(
            `<form>
                <button id="openDialog">Open Dialog</button>
                <sac-dialog #modaldialog [isvisible]="true" [backdrop]="false">
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');
        cy.get('div.modal').should('be.visible');
        cy.get('.modal-backdrop').should('not.exist');
    });

    it('should not close on keydown esc when allow esc disabled', () => {
        cy.mount(
            `<form>
                <sac-dialog #modaldialog [isvisible]="true" [allowesc]="false">
                    <div dialogbody>Dialog Header</div>
                    <div dialogfooter>
                        <sac-button
                            name="modalClose1"
                            text="Close"
                            (clicked)="modaldialog.hide()">
                        </sac-button>
                    </div>                
                </sac-dialog>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacDialogComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');

        cy.get('div.modal').type('{esc}');

        cy.get('div.modal').should('exist');
    });
});
