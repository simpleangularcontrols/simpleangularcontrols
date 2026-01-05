import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5GridModule } from './grid.module';
import { FormsModule } from '@angular/forms';
import { PagerData, PagerRequest } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

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
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 0, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');

        cy.get('.pagination li').contains('3').click();
        cy.get('@pageEvent').should('be.calledWith', new PagerRequest(20, 2));
    });

    it('should emit paged event on click firstPage', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 2, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');

        cy.get('.pagination li.active').should('have.text', '3');
        cy.get('.pagination li').first().click();
        cy.get('@pageEvent').should('be.calledWith', new PagerRequest(20, 0));
    });

    it('should emit paged event on click lastPage', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 2, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');

        cy.get('.pagination li.active').should('have.text', '3');
        cy.get('.pagination li').last().click();
        cy.get('@pageEvent').should('be.calledWith', new PagerRequest(20, 4));
    });

    /**
     * Next Button is currently not available
     */
    it.skip('should emit paged event on click nextPage', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 2, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');

        cy.get('.pagination li.active').should('have.text', '3');
        cy.get('.pagination li').eq(5).click();
        cy.get('@pageEvent').should('be.calledWith', new PagerRequest(20, 4));
    });

    /**
     * Prev. Button is currently not available
     */
    it.skip('should emit paged event on click prevPage', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 2, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');

        cy.get('.pagination li.active').should('have.text', '3');
        cy.get('.pagination li').eq(1).click();
        cy.get('@pageEvent').should('be.calledWith', new PagerRequest(20, 1));
    });

    it('should emit paging event on pagesize change', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 2, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');

        cy.get('select').select('50');
        cy.get('@pageEvent').should('be.calledWith', new PagerRequest(50, 2));
        cy.get('select').should('have.value', '1: 50');
    });

    it('should fix pageindex on invalid pageindex', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: new PagerData(20, 10, 100),
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');
        cy.get('.pagination li.active').should('have.text', '5');
    });

    it('should set page 1 on empty data', () => {
        cy.mount(
            `<form>
                <sac-paging name="pagingControl" [pagerdata]="pagerdata" (paging)="pageEvent.emit($event)">
                </sac-paging>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5GridModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    pagerdata: null,
                    pageEvent: createOutputSpy('pageEvent'),
                },
            }
        );

        cy.get('.col-summary').should('exist');
        cy.get('.pagination li.active').should('have.text', '1');
    });
});
