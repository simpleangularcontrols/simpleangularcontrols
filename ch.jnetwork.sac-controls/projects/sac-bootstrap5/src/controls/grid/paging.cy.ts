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

    it('should emit paged event on page change', () => {
        // TODO: test required
    });

    it('should emit paged event on click firstPage', () => {
        // TODO: test required
    });

    it('should emit paged event on click lastPage', () => {
        // TODO: test required
    });

    it('should emit paged event on click nextPage', () => {
        // TODO: test required
    });

    it('should emit paged event on click prevPage', () => {
        // TODO: test required
    });

    it('should emit paging event on pagesize change', () => {
        // TODO: test required
    });

    it('should fix pageindex on invalid pageindex', () => {
        // TODO: test required
    });

    it('should set page 1 on empty data', () => {
        // TODO: test required
    });
});
