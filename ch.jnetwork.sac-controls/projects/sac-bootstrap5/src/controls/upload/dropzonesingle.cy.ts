import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5UploadModule } from './upload.module';
import { FormsModule } from '@angular/forms';
import { SACICON_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacDropzoneSingleComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropzonesingle name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
    });

    it('should not have label but text in zone', () => {
        cy.mount(
            `<form>
                <sac-dropzonesingle [disablelabel]="true" name="uploadControl" endpoint="/api/upload/register" [label]="label">Drop File here</sac-dropzonesingle>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('label').should('not.exist');
        cy.get('.dropzone .content').should('have.text', 'Drop File here');
    });

    it('should handle model binding', () => {
        const filesize = 1000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" [ngModel]="value" (ngModelChange)="valueAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        value: null,
                        label: 'My Label',
                        valueAction: createOutputSpy('valueAction'),
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);
            cy.waitForUploadComplete(chunks);

            cy.get('@valueAction').should('be.calledWith', '64f206db-1b40-42e7-859e-d0d792464dbc');
        });
    });

    it('should can upload file', () => {
        const filesize = 14;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').selectFile('cypress/fixtures/upload.file1.txt');

            cy.waitForUploadComplete(chunks);

            cy.get('.dropzone-uploadstates').should('have.text', 'upload.file1.txt');
            cy.get('.progress-bar').should('have.attr', 'style', 'width: 100%;');
        });
    });

    it('should validate file extension', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((_) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" allowedtypes=".txt|.csv" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                        fileerrorAction: createOutputSpy('fileerrorAction'),
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize, 'mov');
            cy.get('.dropzone-uploadstates').should('not.exist');
            cy.get('@fileerrorAction').should('be.calledWith', 'INVALID_EXTENSION');
        });
    });

    it('should validate file size', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((_) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" [maxfilesize]=100000 (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                        fileerrorAction: createOutputSpy('fileerrorAction'),
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);
            cy.get('.dropzone-uploadstates').should('not.exist');
            cy.get('@fileerrorAction').should('be.calledWith', 'INVALID_FILESIZE');
        });
    });

    it('should validate required state', () => {
        const filesize = 1000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" [(ngModel)]="value" [isrequired]="true" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        value: null,
                        label: 'My Label',
                        fileerrorAction: createOutputSpy('fileerrorAction'),
                    },
                }
            );

            cy.get('form').should('have.class', 'ng-invalid');
            cy.get('input[type="file"]').createFile(filesize);

            cy.waitForUploadComplete(chunks);

            cy.get('form').should('not.have.class', 'ng-invalid');
        });
    });

    it('should can delete uploaded file', () => {
        const filesize = 14;
        cy.registerDeleteController();
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').selectFile('cypress/fixtures/upload.file1.txt');

            cy.waitForUploadComplete(chunks);

            cy.get('.dropzone-uploadstates').eq(0).should('have.text', 'upload.file1.txt');
            cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');

            cy.get('.dropzone-uploadstates .btn').click();
            cy.wait('@deleteFile');
            cy.get('.dropzone-uploadstates').should('not.exist');
        });
    });

    /**
     * pause in dropzone currently not supported
     */
    it.skip('should can pause and continue upload', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" [enablepause]="true" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);

            cy.wait('@uploadRegister');

            for (let i = 0; i < chunks - 4; i++) {
                cy.wait('@uploadChunk').then((interception) => {
                    if (i < chunks - 1) {
                        expect(interception.response.body).to.have.property('status', 'incomplete');
                        cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%;');
                    } else {
                        expect(interception.response.body).to.have.property('status', 'done');
                        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
                    }
                });
            }

            cy.get('.upload-component a span.fa-pause').click();

            cy.get('.dropzone-uploadstates .progress-bar')
                .eq(0)
                .then(($el) => {
                    const setupProgress = $el.css('width');
                    cy.wait(5000); // wait if more chunks are uploaded

                    cy.get('.dropzone-uploadstates .progress-bar').should(($elAfter) => {
                        const currentProgress = $elAfter.css('width');
                        expect(currentProgress).to.equal(setupProgress);
                    });
                    cy.get('.dropzone-uploadstates .progress-bar')
                        .eq(0)
                        .should('not.have.attr', 'style', 'width: 100%;');

                    // resume upload
                    cy.get('.upload-component a span.fa-play').click();
                    cy.get('.dropzone-uploadstates .progress-bar').eq(0).should('have.text', 'upload.file1.txt');
                    cy.get('.dropzone-uploadstates .progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
                });
        });
    });

    /**
     * pause in dropzone currently not supported
     */
    it.skip('should can pause and delete upload', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" [enablepause]="true" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);

            cy.wait('@uploadRegister');

            for (let i = 0; i < chunks - 4; i++) {
                cy.wait('@uploadChunk').then((interception) => {
                    if (i < chunks - 1) {
                        expect(interception.response.body).to.have.property('status', 'incomplete');
                        cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%;');
                    } else {
                        expect(interception.response.body).to.have.property('status', 'done');
                        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
                    }
                });
            }

            cy.get('.upload-component a span.fa-pause').click();

            cy.get('.dropzone-uploadstates .progress-bar')
                .eq(0)
                .then(($el) => {
                    const setupProgress = $el.css('width');
                    cy.wait(5000); // wait if more chunks are uploaded

                    cy.get('.dropzone-uploadstates .progress-bar').should(($elAfter) => {
                        const currentProgress = $elAfter.css('width');
                        expect(currentProgress).to.equal(setupProgress);
                    });
                    cy.get('.dropzone-uploadstates .progress-bar')
                        .eq(0)
                        .should('not.have.attr', 'style', 'width: 100%;');

                    // cancel upload
                    cy.get('.dropzone-uploadstates a span.fa-times').click();
                    cy.get('.dropzone-uploadstates .progress-bar').should('not.exist');
                });
        });
    });

    it('should can delete file during upload', () => {
        const filesize = 2000000;
        cy.registerDeleteController();
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" [enablepause]="true" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);

            cy.wait('@uploadRegister');

            for (let i = 0; i < chunks - 4; i++) {
                cy.wait('@uploadChunk').then((interception) => {
                    if (i < chunks - 1) {
                        expect(interception.response.body).to.have.property('status', 'incomplete');
                        cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%;');
                    } else {
                        expect(interception.response.body).to.have.property('status', 'done');
                        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
                    }
                });
            }

            // cancel upload
            cy.get('.dropzone-uploadstates a span.fa-times').click();
            cy.wait('@deleteFile');
            cy.get('.dropzone-uploadstates .progress-bar').should('not.exist');
        });
    });

    it('should use custom icons from iconservice', () => {
        const filesize = 1000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-dropzonesingle name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        value: null,
                        label: 'My Label',
                        valueAction: createOutputSpy('valueAction'),
                    },
                    providers: [
                        {
                            provide: SACICON_SERVICE,
                            useValue: {
                                UploadComponentBrowseIcon: 'fa fa-database',
                                UploadComponentContinueIcon: 'fa fa-window-restore',
                                UploadComponentDeleteIcon: 'fa fa-window-close',
                                UploadComponentPauseIcon: 'fa fa-hdd',
                                UploadComponentUploadIcon: 'fa fa-upload',
                            },
                        },
                    ],
                }
            );

            cy.get('input[type="file"]').createFile(filesize);
            cy.waitForUploadComplete(chunks);

            cy.get('.dropzone-uploadstates a span.fa-window-close').should('exist');
        });
    });

    it('should not can select multiple files for uploading', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
            }
        ).as('uploadRegister2');

        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/11784817-c210-48da-8da1-6e369e666daa' },
            }
        ).as('uploadRegister1');

        cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 200,
            headers: { 'content-length': '14' },
            body: {
                documentid: '64f206db-1b40-42e7-859e-d0d792464dbc',
                status: 'done',
            },
        }).as('uploadFile2');

        cy.intercept('PUT', '/api/upload/11784817-c210-48da-8da1-6e369e666daa', {
            statusCode: 200,
            headers: { 'content-length': '21' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile1');

        cy.mount(
            `<form>
                <sac-dropzonesingle name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('input[type="file"]').selectFile([
            'cypress/fixtures/upload.file1.txt',
            'cypress/fixtures/upload.file2.txt',
        ]);

        cy.wait('@uploadRegister1');
        cy.get('@uploadRegister2.all').should('have.length', 0);
        cy.wait('@uploadFile1');
        cy.get('@uploadFile2.all').should('have.length', 0);

        cy.get('.dropzone-uploadstates').should('have.length', 1);
        cy.get('.dropzone-uploadstates').should('have.text', 'upload.file1.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
    });

    it('should cant drop to many files in dropzone', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
            }
        ).as('uploadRegister2');

        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/11784817-c210-48da-8da1-6e369e666daa' },
            }
        ).as('uploadRegister1');

        cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 200,
            headers: { 'content-length': '14' },
            body: {
                documentid: '64f206db-1b40-42e7-859e-d0d792464dbc',
                status: 'done',
            },
        }).as('uploadFile2');

        cy.intercept('PUT', '/api/upload/11784817-c210-48da-8da1-6e369e666daa', {
            statusCode: 200,
            headers: { 'content-length': '21' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile1');

        cy.mount(
            `<form>
                <sac-dropzonesingle name="uploadControl" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    fileerrorAction: createOutputSpy('fileerrorAction'),
                },
            }
        );

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(
            new File([Cypress.Buffer.from('This is a Test')], 'upload.file1.txt', { type: 'text/plain' })
        );
        dataTransfer.items.add(
            new File([Cypress.Buffer.from('This is a second file')], 'upload.file2.txt', { type: 'text/plain' })
        );

        cy.get('input[type="file"]').trigger('drop', {
            dataTransfer,
        });

        cy.get('@fileerrorAction').should('be.calledWith', 'INVALID_DRAGDROP_MAXFILES');

        cy.get('@uploadRegister1.all').should('have.length', 0);
        cy.get('@uploadRegister2.all').should('have.length', 0);
        cy.get('@uploadFile1.all').should('have.length', 0);
        cy.get('@uploadFile2.all').should('have.length', 0);

        cy.get('.dropzone-uploadstates').should('have.length', 0);
    });

    it('should drop single file in dropzone', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/11784817-c210-48da-8da1-6e369e666daa' },
            }
        ).as('uploadRegister1');

        cy.intercept('PUT', '/api/upload/11784817-c210-48da-8da1-6e369e666daa', {
            statusCode: 200,
            headers: { 'content-length': '21' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile1');

        cy.mount(
            `<form>
                <sac-dropzonesingle name="uploadControl" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    fileerrorAction: createOutputSpy('fileerrorAction'),
                },
            }
        );

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(
            new File([Cypress.Buffer.from('This is a Test')], 'upload.file1.txt', { type: 'text/plain' })
        );

        cy.get('input[type="file"]').trigger('drop', {
            dataTransfer,
        });

        cy.wait('@uploadRegister1');
        cy.wait('@uploadFile1');

        cy.get('.dropzone-uploadstates').should('have.length', 1);
        cy.get('.dropzone-uploadstates').should('have.text', 'upload.file1.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
    });

    it('should set active on drag single file in dropzone', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/11784817-c210-48da-8da1-6e369e666daa' },
            }
        ).as('uploadRegister1');

        cy.intercept('PUT', '/api/upload/11784817-c210-48da-8da1-6e369e666daa', {
            statusCode: 200,
            headers: { 'content-length': '21' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile1');

        cy.mount(
            `<form>
                <sac-dropzonesingle name="uploadControl" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    fileerrorAction: createOutputSpy('fileerrorAction'),
                },
            }
        );

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(
            new File([Cypress.Buffer.from('This is a Test')], 'upload.file1.txt', { type: 'text/plain' })
        );

        cy.get('input[type="file"]').trigger('drag', {
            dataTransfer,
        });

        cy.get('.dropzone').should('not.have.class', 'active');

        cy.get('input[type="file"]').trigger('dragover', {
            dataTransfer,
        });

        cy.get('.dropzone').should('have.class', 'active');
    });
});
