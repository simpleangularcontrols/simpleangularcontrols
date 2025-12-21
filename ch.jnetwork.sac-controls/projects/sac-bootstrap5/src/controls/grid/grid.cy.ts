import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5GridModule } from '@simpleangularcontrols/sac-bootstrap5';

describe('SacGridComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-grid name="gridDefault" [value]="values" emptytext="No Data">
                    <ng-template
                    let-row="row"
                    let-type="type">
                    <sac-gridcolumnaction
                        name="actionCol"
                        [type]="type"
                        width="116px">
                        <sac-gridbutton
                            name="editrow"
                            icon="edit"
                            (clicked)="action($event)">
                        </sac-gridbutton>
                        <sac-gridbutton
                            name="deleterow"
                            icon="delete"
                            (clicked)="action($event)"
                            [isdisabled]="true">
                        </sac-gridbutton>
                        <sac-gridbutton
                            iconstyle="fa"
                            icon="fa-info-circle"
                            (clicked)="action('info')">
                        </sac-gridbutton>
                        <sac-gridimage iconstyle="fa fa-exclamation-triangle"></sac-gridimage>
                    </sac-gridcolumnaction>
                    <sac-gridcolumn
                        name="columnId"
                        [type]="type"
                        header="ID"
                        [value]="row.Id"
                        (rowclicked)="action(row.Id)"></sac-gridcolumn>
                    <sac-gridcolumn
                        name="columnText"
                        [type]="type"
                        header="Bild"
                        [value]="row.Image"
                        width="25%"></sac-gridcolumn>
                    </ng-template>
                </sac-grid>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    values: [],
                },
            }
        );

        cy.get('table').should('exist');
    });
});
