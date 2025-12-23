import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5GridModule } from './grid.module';
import { FormsModule } from '@angular/forms';
import { PagerData } from '@simpleangularcontrols/sac-common';

describe('SacPagingComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 0, 10),
                },
            }
        );

        cy.get('.col-summary').should('exist');
    });
});
