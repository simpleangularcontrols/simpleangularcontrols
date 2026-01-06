import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TinyMceModule } from './tinymce.module';
import { FormsModule } from '@angular/forms';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { createOutputSpy } from 'cypress/angular';

describe('SacTinyMceComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-tinymce name="tinyMceControl" [label]="label" [config]="config"></sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                    },
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
    });

    it('should be required', () => {
        cy.mount(
            `<form>
                <sac-tinymce name="tinyMceControl"
                    [label]="label"
                    [isrequired]="true"
                    [(ngModel)]="value"
                    [config]="config">
                </sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                    },
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
        cy.get('editor').tinyMceWaitForInit();
        cy.get('editor').tinyMceTouch();
        cy.get('editor').should('have.class', 'is-invalid');
    });

    it('should can browse and select files', () => {
        cy.intercept('POST', '/api/browser/getnodes', {
            statusCode: 200,
            body: {
                Node: {
                    Name: 'Files',
                    ChildNodes: [],
                    Files: [
                        {
                            Filename: 'Image_250x250.jpg',
                            Size: 58092,
                        },
                    ],
                },
            },
        }).as('getNodes');

        cy.intercept('GET', '/Image_250x250.jpg', {
            fixture: 'de.png',
        }).as('getImage');

        cy.mount(
            `<div class="tox tox-tinymce-aux"></div><form>
                <sac-tinymce name="tinyMceControl"
                    [label]="label"
                    filebrowserapiurl="/api/browser"
                    [ngModel]="value"
                    (ngModelChange)="valueChange.emit($event)"
                    [config]="config">
                </sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '<div></div>',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                        document_base_url: 'http://localhost/', // is required to intercept request to image
                        plugins: 'image',
                        toolbar: 'image',
                    },
                    valueChange: createOutputSpy('valueChange'),
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
        cy.get('editor').tinyMceWaitForInit();

        cy.get('editor').get('button.tox-tbtn[title="Insert/edit image"]').click();

        cy.get('.tox-dialog__body').get('button.tox-button[title="Source"]').click();

        cy.wait('@getNodes');

        cy.get('.modal-dialog table.table td').contains('Image_250x250.jpg').click();
        cy.get('.modal-dialog .modal-footer button.btn-primary').click();

        cy.get('.tox-dialog__body').get('button.tox-button[title="Save"]').click();

        cy.wait('@getImage');

        cy.get('editor').tinyMceTouch();
        cy.get('@valueChange').should('be.calledWith', '<div><img src="Image_250x250.jpg" alt="" /></div>');
    });

    it('should can close browse dialog without change content', () => {
        cy.intercept('POST', '/api/browser/getnodes', {
            statusCode: 200,
            body: {
                Node: {
                    Name: 'Files',
                    ChildNodes: [],
                    Files: [
                        {
                            Filename: 'Image_250x250.jpg',
                            Size: 58092,
                        },
                    ],
                },
            },
        }).as('getNodes');

        cy.intercept('GET', '/Image_250x250.jpg', {
            fixture: 'de.png',
        }).as('getImage');

        cy.mount(
            `<div class="tox tox-tinymce-aux"></div><form>
                <sac-tinymce name="tinyMceControl"
                    [label]="label"
                    filebrowserapiurl="/api/browser"
                    [ngModel]="value"
                    (ngModelChange)="valueChange.emit($event)"
                    [config]="config">
                </sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: '<div></div>',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                        document_base_url: 'http://localhost/', // is required to intercept request to image
                        plugins: 'image',
                        toolbar: 'image',
                    },
                    valueChange: createOutputSpy('valueChange'),
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
        cy.get('editor').tinyMceWaitForInit();

        cy.get('editor').get('button.tox-tbtn[title="Insert/edit image"]').click();

        cy.get('.tox-dialog__body').get('button.tox-button[title="Source"]').click();

        cy.wait('@getNodes');

        cy.get('.modal-dialog table.table td').contains('Image_250x250.jpg').click();
        cy.get('.modal-dialog .modal-footer button.btn-secondary').click();

        cy.get('.tox-dialog__body').get('button.tox-button[title="Save"]').click();

        cy.get('editor').tinyMceTouch();
        cy.get('@valueChange').should('be.calledWith', '<div>&nbsp;</div>');
    });

    it('should emit onsave when save clicked', () => {
        cy.mount(
            `<form>
                <sac-tinymce name="tinyMceControl" [ngModel]="value" (onsave)="saveAction.emit($event)" (ngModelChange)="valueChange.emit($event)" [label]="label" [config]="config"></sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                        plugins: 'save',
                        toolbar: 'save',
                    },
                    value: '<p>Inital Text</p>',
                    valueChange: createOutputSpy('valueChange'),
                    saveAction: createOutputSpy('saveAction'),
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');

        cy.get('editor').tinyMceType('Enter a new Text');
        cy.get('editor').get('button.tox-tbtn[title="Save"]').click();

        cy.get('@valueChange').should('be.calledWith', '<p>Enter a new Text</p>');
        cy.get('@saveAction').should('be.calledWith', '<p>Enter a new Text</p>');
    });
});
