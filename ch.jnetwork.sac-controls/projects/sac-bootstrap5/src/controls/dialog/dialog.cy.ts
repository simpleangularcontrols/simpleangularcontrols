import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacDialogComponent } from './dialog';
import { FormsModule } from '@angular/forms';

describe('SacDialogComponent', () => {
    it('should show label and component', () => {
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
});
