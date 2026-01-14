import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4GridModule } from './grid.module';
import { FormsModule } from '@angular/forms';
import { PagerRequest, SACCONFIGURATION_SERVICE, SortDescriptor, SortOrder } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [],
                },
            }
        );

        cy.get('table').should('exist');
    });

    it('should emit sort event on column click', () => {
        cy.mount(
            `<form>
                <sac-grid name="gridDefault" [value]="values" emptytext="No Data" [sortdata]="sortSorting" (sorting)="sortAction.emit($event)">
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
                        sortkey="Id"
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [
                        { Id: 1, Image: 'Bild 1' },
                        { Id: 2, Image: 'Bild 2' },
                        { Id: 3, Image: 'Bild 3' },
                    ],
                    sortAction: createOutputSpy('sortAction'),
                    sortSorting: { SortColumn: 'Id', SortOrder: SortOrder.Ascending },
                },
            }
        );

        cy.get('table').should('exist');
        cy.get('table th').contains('ID').click();
        cy.get('@sortAction').should('be.calledWith', new SortDescriptor('Id', SortOrder.Descending));
    });

    it('should emit page event', () => {
        cy.mount(
            `<form>
                <sac-grid name="gridDefault" [value]="values" emptytext="No Data" [pagerdata]="pageData" (paging)="pageAction.emit($event)">
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
                        sortkey="Id"
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [
                        { Id: 1, Image: 'Bild 1' },
                        { Id: 2, Image: 'Bild 2' },
                        { Id: 3, Image: 'Bild 3' },
                        { Id: 4, Image: 'Bild 4' },
                        { Id: 5, Image: 'Bild 5' },
                        { Id: 6, Image: 'Bild 6' },
                        { Id: 7, Image: 'Bild 7' },
                        { Id: 8, Image: 'Bild 8' },
                        { Id: 9, Image: 'Bild 9' },
                        { Id: 10, Image: 'Bild 10' },
                        { Id: 11, Image: 'Bild 11' },
                        { Id: 12, Image: 'Bild 12' },
                        { Id: 13, Image: 'Bild 13' },
                        { Id: 14, Image: 'Bild 14' },
                        { Id: 15, Image: 'Bild 15' },
                        { Id: 16, Image: 'Bild 16' },
                        { Id: 17, Image: 'Bild 17' },
                        { Id: 18, Image: 'Bild 18' },
                        { Id: 19, Image: 'Bild 19' },
                        { Id: 20, Image: 'Bild 20' },
                    ],
                    pageAction: createOutputSpy('pageAction'),
                    pageData: { TotalRowCount: 21, CurrentPageIndex: 0, PageSize: 20 },
                },
            }
        );

        cy.get('table').should('exist');
        cy.get('table tfoot .page-item').contains('2').click();
        cy.get('@pageAction').should('be.calledWith', new PagerRequest(20, 1));
    });

    it('should emit clicked event on button action', () => {
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
                            (clicked)="columnAction.emit(row.Id)">
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
                        sortkey="Id"
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [
                        { Id: 1, Image: 'Bild 1' },
                        { Id: 2, Image: 'Bild 2' },
                        { Id: 3, Image: 'Bild 3' },
                    ],
                    columnAction: createOutputSpy('columnAction'),
                },
            }
        );

        cy.get('table').should('exist');
        cy.get('table td .fa-pen').eq(0).click();
        cy.get('@columnAction').should('be.calledWith', 1);
    });

    it('should have custom image on button', () => {
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
                            isdisabled="true"
                            (clicked)="columnAction.emit(row.Id)">
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
                        sortkey="Id"
                        (rowclicked)="action(row.Id)">
                    </sac-gridcolumn>
                    <sac-gridcolumnaction
                        name="actionCol"
                        [type]="type"
                        width="50px">
                        <sac-gridimage [iconstyle]="row.Image">
                        </sac-gridimage>
                    </sac-gridcolumnaction>
                    </ng-template>
                </sac-grid>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [
                        {
                            Id: 1,
                            Image: 'fa fa-info-circle',
                        },
                        {
                            Id: 2,
                            Image: 'fa fa-info-circle',
                        },
                        {
                            Id: 3,
                            Image: 'fa fa-info-circle',
                        },
                    ],
                },
            }
        );

        cy.get('table').should('exist');

        cy.get('table tr td').eq(2).get('sac-gridimage > span > span').should('have.class', 'fa fa-info-circle');
    });

    it('button should be disabled with string attribute', () => {
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
                            isdisabled="true"
                            (clicked)="columnAction.emit(row.Id)">
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
                        sortkey="Id"
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [
                        { Id: 1, Image: 'Bild 1' },
                        { Id: 2, Image: 'Bild 2' },
                        { Id: 3, Image: 'Bild 3' },
                    ],
                    columnAction: createOutputSpy('columnAction'),
                },
            }
        );

        cy.get('table').should('exist');
        cy.get('table td .fa-pen').eq(0).click();
        cy.get('@columnAction').should('not.be.called');
    });

    it('should ellipsis column when text too long', () => {
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
                            isdisabled="true"
                            (clicked)="columnAction.emit(row.Id)">
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
                        sortkey="Id"
                        (rowclicked)="action(row.Id)">
                    </sac-gridcolumn>
                    <sac-gridcolumn
                        name="columnText"
                        [type]="type"
                        header="Bild"
                        [value]="row.Image"
                        width="25%">
                    </sac-gridcolumn>
                    <sac-gridcolumn
                        name="columnText"
                        [type]="type"
                        header="Long Text"
                        ellipsis="true"
                        [value]="row.LongText"
                        width="250px">
                    </sac-gridcolumn>
                    </ng-template>
                </sac-grid>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [
                        {
                            Id: 1,
                            Image: 'Bild 1',
                            LongText:
                                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                        },
                        {
                            Id: 2,
                            Image: 'Bild 2',
                            LongText:
                                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                        },
                        {
                            Id: 3,
                            Image: 'Bild 3',
                            LongText:
                                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                        },
                    ],
                },
            }
        );

        cy.get('table').should('exist');
        cy.get('table tr td').eq(3).isTruncated();
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-grid name="myControl" [value]="values" emptytext="No Data">
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [],
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-grid > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-grid name="myControl" e2eidentifier="myTestidentifier" [value]="values" emptytext="No Data">
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [],
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-grid > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-grid e2eidentifier="myTestidentifier" [value]="values" emptytext="No Data">
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [],
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-grid > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-grid name="myControl" [value]="values" emptytext="No Data">
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
                imports: [FormsModule, SacFormDirective, SACBootstrap4GridModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    values: [],
                },
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-grid > div');
    });
});
