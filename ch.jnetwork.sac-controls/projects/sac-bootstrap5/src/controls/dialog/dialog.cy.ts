import { SacButtonComponent } from '../buttons';
import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacDialogComponent } from './dialog';
import { NgIf } from '@angular/common';
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');

        cy.get('div.modal').type('{esc}');

        cy.get('div.modal').should('exist');
    });

    it('should close when click outside window', () => {
        cy.mount(
            `<form>
                <div id="clicktarget"></div>
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');

        cy.get('div.modal').click({ force: true });

        cy.get('div.modal').should('not.exist');
    });

    it('should not close when click outside window and allowesc disabled', () => {
        cy.mount(
            `<form>
                <div id="clicktarget"></div>
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('div.modal').should('exist');

        cy.get('div.modal').click({ force: true });

        cy.get('div.modal').should('exist');
    });

    it('should close when visible property is set to false', () => {
        cy.mount(
            `<form>
                <div id="clicktarget"></div>
                <sac-dialog #modaldialog [isvisible]="isvisible">
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    isvisible: true,
                },
            }
        ).then(({ component, fixture }) => {
            cy.get('div.modal')
                .should('exist')
                .then(() => {
                    component.isvisible = false;
                    fixture.detectChanges();
                });
        });

        cy.get('div.modal').should('not.exist');
    });

    it('body should remove modal-open class', () => {
        cy.mount(
            `<form>
                <div id="clicktarget"></div>
                <sac-dialog #modaldialog *ngIf="componentExist" [isvisible]="isvisible">
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacDialogComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                    NgIf,
                ],
                componentProperties: {
                    isvisible: true,
                    componentExist: true,
                },
            }
        ).then(({ component, fixture }) => {
            cy.get('body').should('have.class', 'modal-open');
            cy.get('div.modal')
                .should('exist')
                .then(() => {
                    component.componentExist = false;
                    fixture.detectChanges();
                });
        });

        cy.get('body').should('not.have.class', 'modal-open');
    });
});
