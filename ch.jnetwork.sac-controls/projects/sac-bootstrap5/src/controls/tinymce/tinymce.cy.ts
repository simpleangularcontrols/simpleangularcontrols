import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TinyMceModule } from './tinymce.module';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { createOutputSpy } from 'cypress/angular';

describe('SACBootstrap5TinyMceModule', () => {
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

    it('should can browse and select image files', () => {
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

        cy.get('editor').get('button[data-mce-name="image"]').click();

        cy.get('.tox-dialog__body').get('button[data-mce-name="Browse files"]').click();

        cy.wait('@getNodes');

        cy.get('.modal-dialog table.table td').contains('Image_250x250.jpg').click();
        cy.get('.modal-dialog .modal-footer button.btn-primary').click();

        // wait for image to set correct size
        cy.wait('@getImage');

        cy.get('.tox-dialog__body').get('button[data-mce-name="Save"]').click();

        cy.get('editor').tinyMceTouch();
        cy.get('@valueChange').should(
            'be.calledWith',
            '<div><img src="Image_250x250.jpg" alt="" width="16" height="11" /></div>'
        );
    });

    it('should can browse and select media files', () => {
        cy.intercept('POST', '/api/browser/getnodes', {
            statusCode: 200,
            body: {
                Node: {
                    Name: 'Files',
                    ChildNodes: [],
                    Files: [
                        {
                            Filename: 'video.mov',
                            Size: 58092,
                        },
                    ],
                },
            },
        }).as('getNodes');

        cy.intercept('GET', '/video.mov', {
            fixture: 'de.png',
        }).as('getMovie');

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
                        plugins: 'media',
                        toolbar: 'media',
                    },
                    valueChange: createOutputSpy('valueChange'),
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
        cy.get('editor').tinyMceWaitForInit();

        cy.get('editor').get('button[data-mce-name="media"]').click();

        cy.get('.tox-dialog__body').get('button[data-mce-name="Browse files"]').click();

        cy.wait('@getNodes');

        cy.get('.modal-dialog table.table td').contains('video.mov').click();
        cy.get('.modal-dialog .modal-footer button.btn-primary').click();

        cy.get('.tox-dialog__body').get('button[data-mce-name="Save"]').click();

        cy.wait('@getMovie');

        cy.get('editor').tinyMceTouch();
        cy.get('@valueChange').should(
            'be.calledWith',
            '<div><video controls="controls" width="300" height="150">\n<source src="video.mov" /></video></div>'
        );
    });

    it('should can browse and select link files', () => {
        cy.intercept('POST', '/api/browser/getnodes', {
            statusCode: 200,
            body: {
                Node: {
                    Name: 'Files',
                    ChildNodes: [],
                    Files: [
                        {
                            Filename: 'file.csv',
                            Size: 600572,
                        },
                    ],
                },
            },
        }).as('getNodes');

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
                        plugins: 'link',
                        toolbar: 'link',
                    },
                    valueChange: createOutputSpy('valueChange'),
                },
                providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' }],
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('.tox-tinymce').should('be.visible');
        cy.get('editor').tinyMceWaitForInit();

        cy.get('editor').get('button[data-mce-name="link"]').click();

        cy.get('.tox-dialog__body').get('button[data-mce-name="Browse links"]').click();

        cy.wait('@getNodes');

        cy.get('.modal-dialog table.table td').contains('file.csv').click();
        cy.get('.modal-dialog .modal-footer button.btn-primary').click();

        cy.get('.tox-dialog__body label')
            .filterByText('Text to display')
            .parent()
            .find('input')
            .clear()
            .type('Download CSV');
        cy.get('.tox-dialog__body label')
            .filterByText('Title')
            .parent()
            .find('input')
            .clear()
            .type('Click to download csv');

        cy.get('.tox-dialog__body').get('button[data-mce-name="Save"]').click();

        cy.get('editor').tinyMceTouch();
        cy.get('@valueChange').should(
            'be.calledWith',
            '<div><a title="Click to download csv" href="file.csv">Download CSV</a></div>'
        );
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

        cy.get('editor').get('button[data-mce-name="image"]').click();

        cy.get('.tox-dialog__body').get('button[data-mce-name="Browse files"]').click();

        cy.wait('@getNodes');

        cy.get('.modal-dialog table.table td').contains('Image_250x250.jpg').click();
        cy.get('.modal-dialog .modal-footer button.btn-secondary').click();

        cy.get('.tox-dialog__body').get('button[data-mce-name="Save"]').click();

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
        cy.get('editor').get('button[data-mce-name="save"]').click();

        cy.get('@valueChange').should('be.calledWith', '<p>Enter a new Text</p>');
        cy.get('@saveAction').should('be.calledWith', '<p>Enter a new Text</p>');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-tinymce label="my Label" name="myControl" value="Label Value">
                </sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                    },
                },
                providers: [
                    { provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' },
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-tinymce > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-tinymce label="my Label" name="myControl" e2eidentifier="myTestidentifier" value="Label Value">
                </sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                    },
                },
                providers: [
                    { provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' },
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-tinymce > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-tinymce label="my Label" e2eidentifier="myTestidentifier" value="Label Value">
                </sac-tinymce>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TinyMceModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    config: {
                        base_url: '/__cypress/src/tinymce', // This is needed so that plugins and skins load correctly.
                    },
                },
                providers: [
                    { provide: TINYMCE_SCRIPT_SRC, useValue: '/__cypress/src/tinymce/tinymce.min.js' },
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-tinymce > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-tinymce label="my Label" value="Label Value">
                </sac-tinymce>
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

        cy.shouldHaveDisabledTestAttribute('sac-tinymce > div');
    });
});
