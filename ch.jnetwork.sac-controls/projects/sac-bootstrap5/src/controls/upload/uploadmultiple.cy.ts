import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5UploadModule } from './upload.module';
import { FormsModule } from '@angular/forms';
import { SACICON_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacUploadMultipleComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-uploadmultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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
                <sac-uploadmultiple [disablelabel]="true" name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('label').should('not.exist');
        cy.get('.upload-input').should('have.text', 'Browse...');
        cy.get('.progress-bar').should('not.exist');
    });

    it('should handle model binding', () => {
        const filesize = 1000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" [ngModel]="value" (ngModelChange)="valueAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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
            cy.get('.btn-group button').filterByText('Upload').click();
            cy.waitForUploadComplete(chunks);

            cy.get('@valueAction').should('be.calledWith', ['64f206db-1b40-42e7-859e-d0d792464dbc']);
        });
    });

    it('should can upload file', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);
            cy.get('button').filterByText('Upload').eq(0).click();
            cy.waitForUploadComplete(chunks);

            cy.get('.progress-bar').eq(0).should('have.text', 'upload.file1.txt');
            cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%');
        });
    });

    it('should can auto upload file', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" [autoupload]="true" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);

            cy.waitForUploadComplete(chunks);

            cy.get('.progress-bar').eq(0).should('have.text', 'upload.file1.txt');
            cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%');
        });
    });

    it('should validate file extension', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((_) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" allowedtypes=".txt|.csv" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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
            cy.get('.progress-text').should('not.exist');
            cy.get('@fileerrorAction').should('be.calledWith', 'INVALID_EXTENSION');
        });
    });

    it('should validate file size', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((_) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" [maxfilesize]=100000 (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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
            cy.get('.progress-text').should('not.exist');
            cy.get('@fileerrorAction').should('be.calledWith', 'INVALID_FILESIZE');
        });
    });

    it('should validate required state', () => {
        const filesize = 1000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" [(ngModel)]="value" [isrequired]="true" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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
            cy.get('button').filterByText('Upload').eq(0).click();

            cy.waitForUploadComplete(chunks);

            cy.get('form').should('not.have.class', 'ng-invalid');
        });
    });

    it('should can cancel upload', () => {
        const filesize = 14;
        cy.registerDeleteController();
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').selectFile('cypress/fixtures/upload.file1.txt');
            cy.get('button').filterByText('Upload').eq(0).click();

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
            cy.get('.upload-component button span.fa-times').eq(0).click();
            cy.wait('@deleteFile');
            cy.get('.progress-text').should('not.exist');
        });
    });

    it('should can delete uploaded file', () => {
        const filesize = 14;
        cy.registerDeleteController();
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').selectFile('cypress/fixtures/upload.file1.txt');
            cy.get('button').filterByText('Upload').eq(0).click();

            cy.waitForUploadComplete(chunks);

            cy.get('.progress-text').eq(0).should('have.text', 'upload.file1.txt');
            cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');

            cy.get('.upload-component button span.fa-times').eq(0).click();
            cy.wait('@deleteFile');
            cy.get('.progress-text').should('not.exist');
        });
    });

    it('should can pause and continue upload', () => {
        const filesize = 2000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" [enablepause]="true" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);
            cy.get('button').filterByText('Upload').eq(0).click();

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

            cy.get('.upload-component button span.fa-pause').eq(0).click();

            cy.get('.progress-bar')
                .eq(0)
                .then(($el) => {
                    const setupProgress = $el.css('width');
                    cy.wait(5000); // wait if more chunks are uploaded

                    cy.get('.progress-bar').should(($elAfter) => {
                        const currentProgress = $elAfter.css('width');
                        expect(currentProgress).to.equal(setupProgress);
                    });
                    cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%;');

                    // resume upload
                    cy.get('button').filterByText('Upload').eq(0).click();
                    cy.get('.progress-bar').eq(0).should('have.text', 'upload.file1.txt');
                    cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
                });
        });
    });

    it('should can pause and cancel upload', () => {
        const filesize = 2000000;
        let totalChunksExpected = 0;
        cy.registerDeleteController();

        cy.registerUploadController(filesize).then((chunks) => {
            totalChunksExpected = chunks;

            cy.mount(
                `<form>
                    <sac-uploadmultiple name="uploadControl" [enablepause]="true" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
                </form>`,
                {
                    imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                    componentProperties: {
                        label: 'My Label',
                    },
                }
            );

            cy.get('input[type="file"]').createFile(filesize);
            cy.get('button').filterByText('Upload').eq(0).click();

            cy.wait('@uploadRegister');

            for (let i = 0; i < totalChunksExpected - 4; i++) {
                cy.wait('@uploadChunk').then((interception) => {
                    if (i < totalChunksExpected - 1) {
                        expect(interception.response.body).to.have.property('status', 'incomplete');
                        cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%;');
                    } else {
                        expect(interception.response.body).to.have.property('status', 'done');
                        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
                    }
                });
            }

            cy.get('.upload-component button span.fa-pause').eq(0).click();

            cy.get('.progress-bar')
                .eq(0)
                .then(($el) => {
                    const setupProgress = $el.css('width');
                    cy.wait(5000); // wait if more chunks are uploaded

                    cy.get('.progress-bar').should(($elAfter) => {
                        const currentProgress = $elAfter.css('width');
                        expect(currentProgress).to.equal(setupProgress);
                    });
                    cy.get('.progress-bar').eq(0).should('not.have.attr', 'style', 'width: 100%;');

                    // resume upload
                    cy.get('.upload-component button span.fa-times').eq(0).click();
                    cy.get('.progress-text').should('not.exist');
                });
        });
    });

    it('should use custom icons from iconservice', () => {
        const filesize = 1000000;
        cy.registerUploadController(filesize).then((chunks) => {
            cy.mount(
                `<form>
                            <sac-uploadmultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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

            cy.get('.upload-component .upload-input i.fa-database').should('exist');
            cy.get('.upload-component button span.fa-window-close').should('exist');
            cy.get('.upload-component button span.fa-hdd').should('exist');
            cy.get('.upload-component button span.fa-upload').should('exist');
        });
    });

    it('should can select multiple files for uploading', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
            }
        ).as('uploadRegister1');

        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/11784817-c210-48da-8da1-6e369e666daa' },
            }
        ).as('uploadRegister2');

        cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 200,
            headers: { 'content-length': '14' },
            body: {
                documentid: '64f206db-1b40-42e7-859e-d0d792464dbc',
                status: 'done',
            },
        }).as('uploadFile1');

        cy.intercept('PUT', '/api/upload/11784817-c210-48da-8da1-6e369e666daa', {
            statusCode: 200,
            headers: { 'content-length': '21' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile2');

        cy.mount(
            `<form>
                <sac-uploadmultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
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
        cy.get('button').filterByText('Upload').eq(0).click();

        cy.wait('@uploadRegister1');
        cy.wait('@uploadRegister2');
        cy.wait('@uploadFile1');
        cy.wait('@uploadFile2');

        cy.get('.progress-text').should('have.length', 2);
        cy.get('.progress-text').eq(0).should('have.text', 'upload.file1.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
        cy.get('.progress-bar').eq(1).should('have.attr', 'style', 'width: 100%;');
    });

    it('should limit files with maxfiles', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
            }
        ).as('uploadRegister1');

        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/11784817-c210-48da-8da1-6e369e666daa' },
            }
        ).as('uploadRegister2');

        cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 200,
            headers: { 'content-length': '14' },
            body: {
                documentid: '64f206db-1b40-42e7-859e-d0d792464dbc',
                status: 'done',
            },
        }).as('uploadFile1');

        cy.intercept('PUT', '/api/upload/11784817-c210-48da-8da1-6e369e666daa', {
            statusCode: 200,
            headers: { 'content-length': '21' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile2');

        cy.mount(
            `<form>
                <sac-uploadmultiple name="uploadControl" maxfiles="1" (onfileerror)="fileerrorAction.emit($event)" endpoint="/api/upload/register" [label]="label"></sac-uploadmultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    fileerrorAction: createOutputSpy('fileerrorAction'),
                },
            }
        );

        cy.get('input[type="file"]').selectFile([
            'cypress/fixtures/upload.file1.txt',
            'cypress/fixtures/upload.file2.txt',
        ]);
        cy.get('button').filterByText('Upload').eq(0).click();

        cy.get('@fileerrorAction').should('be.calledWith', 'INVALID_MAXFILES');
        cy.get('.progress-text').should('have.length', 1);
        cy.get('.progress-text').eq(0).should('have.text', 'upload.file1.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
    });
});
