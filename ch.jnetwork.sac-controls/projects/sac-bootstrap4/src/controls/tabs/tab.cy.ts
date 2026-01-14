import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacTabComponent } from './tab';
import { SacTabItemComponent } from './tabitem';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacTabComponent', () => {
    it('should select tab1 and tab2 is not exists', () => {
        cy.mount(
            `<form>
                <sac-tab name="tabroot">
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('.nav.nav-tabs').should('exist');
        cy.get('#tabroot_tab1').should('have.class', 'active');
        cy.get('#tabroot_tab2').should('not.have.class', 'active');

        cy.get('#tab1').should('have.text', 'Tab 1');
        cy.get('.tab-content').should('have.text', 'Tab 1');
        cy.get('#tab2 .tab-pane').should('not.exist');
    });

    it('should emit tabselected when selecting tab2', () => {
        cy.mount(
            `<form>
                    <sac-tab name="tabroot" (tabselected)="tabselected.emit($event)">
                        <sac-tabitem id="tab1" label="Tab 1">
                            <ng-template><p>Tab 1</p></ng-template>
                        </sac-tabitem>
                        <sac-tabitem id="tab2" label="Tab 2">
                            <ng-template><p>Tab 2</p></ng-template>
                        </sac-tabitem>
                    </sac-tab>
                </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    tabselected: createOutputSpy('tabselectedSpy'),
                },
            }
        );

        cy.get('@tabselectedSpy').should('be.calledOnceWith', 'tab1');
        cy.resetSpy('@tabselectedSpy');

        cy.get('#tabroot_tab1').should('have.class', 'active');
        cy.get('.tab-content').should('have.text', 'Tab 1');

        cy.get('#tabroot_tab2').click();

        cy.get('#tabroot_tab2').should('have.class', 'active');
        cy.get('#tabroot_tab1').should('not.have.class', 'active');
        cy.get('.tab-content').should('have.text', 'Tab 2');

        cy.get('@tabselectedSpy').should('be.calledOnceWith', 'tab2');
    });

    it('should not select a disabled tab', () => {
        cy.mount(
            `<form>
                    <sac-tab name="tabroot" (tabselected)="tabselected.emit($event)">
                        <sac-tabitem id="tab1" label="Tab 1">
                            <ng-template><p>Tab 1</p></ng-template>
                        </sac-tabitem>
                        <sac-tabitem id="tab2" label="Tab 2" [disabled]="true">
                            <ng-template><p>Tab 2</p></ng-template>
                        </sac-tabitem>
                    </sac-tab>
                </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    tabselected: createOutputSpy('tabselectedSpy'),
                },
            }
        );

        cy.get('@tabselectedSpy').should('be.calledOnceWith', 'tab1');
        cy.resetSpy('@tabselectedSpy');

        cy.get('#tabroot_tab1').should('have.class', 'active');
        cy.get('.tab-content').should('have.text', 'Tab 1');

        cy.get('#tabroot_tab2').click({ force: true });

        cy.get('#tabroot_tab1').should('have.class', 'active');
        cy.get('#tabroot_tab2').should('not.have.class', 'active');
        cy.get('.tab-content').should('have.text', 'Tab 1');

        cy.get('@tabselectedSpy').should('not.be.calledWith', 'tab2');
    });

    it('should unload tab items when unloadtabitemswhenhidden is true', () => {
        cy.mount(
            `<form>
                    <sac-tab name="tabroot" [unloadtabitemswhenhidden]="true">
                        <sac-tabitem id="tab1" label="Tab 1">
                            <ng-template><p>Tab 1</p></ng-template>
                        </sac-tabitem>
                        <sac-tabitem id="tab2" label="Tab 2">
                            <ng-template><p>Tab 2</p></ng-template>
                        </sac-tabitem>
                    </sac-tab>
                </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
            }
        );

        // initially only tab1 pane is rendered
        cy.get('#tab1 .tab-pane').should('exist').and('be.visible');
        cy.get('#tab2 .tab-pane').should('not.exist');

        // switch to tab2 and verify tab1 pane removed
        cy.get('#tabroot_tab2').click();
        cy.get('#tab2 .tab-pane').should('exist').and('be.visible');
        cy.get('#tab1 .tab-pane').should('not.exist');
    });

    it('should select tab1 and tab2 is hide', () => {
        cy.mount(
            `<form>
                <sac-tab name="tabroot" [unloadtabitemswhenhidden]="false">
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('.nav.nav-tabs').should('exist');
        cy.get('#tabroot_tab1').should('have.class', 'active');
        cy.get('#tabroot_tab2').should('not.have.class', 'active');

        cy.get('#tab2 .tab-pane').should('exist').and('not.be.visible');
    });

    it('should selected tab2 as default', () => {
        cy.mount(
            `<form>
                <sac-tab name="tabroot">
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2" [active]="true">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('.nav.nav-tabs').should('exist');
        cy.get('#tabroot_tab1').should('not.have.class', 'active');
        cy.get('#tabroot_tab2').should('have.class', 'active');

        cy.get('.tab-content').should('have.text', 'Tab 2');
        cy.get('#tab2').should('have.text', 'Tab 2');
        cy.get('#tab1 .tab-pane').should('not.exist');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-tab name="myControl">
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-tab > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-tab name="myControl" e2eidentifier="myTestidentifier">
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-tab > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-tab e2eidentifier="myTestidentifier">
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-tab > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-tab>
                    <sac-tabitem id="tab1" label="Tab 1">
                        <ng-template><p>Tab 1</p></ng-template>
                    </sac-tabitem>
                    <sac-tabitem id="tab2" label="Tab 2">
                        <ng-template><p>Tab 2</p></ng-template>
                    </sac-tabitem>
                </sac-tab>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacTabComponent,
                    SacTabItemComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-tab > div');
    });
});
