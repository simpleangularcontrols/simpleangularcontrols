import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5UploadModule } from './upload.module';
import { FormsModule } from '@angular/forms';

describe('SacDropzoneMultipleComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
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

    it('should handle model binding', () => {});

    it('should can upload file', () => {
        cy.intercept('POST', '/api/upload/register', {
            statusCode: 201,
            headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
        }).as('uploadRegister');

        cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 200,
            headers: { 'content-length': '14' },
            body: {
                documentid: '64f206db-1b40-42e7-859e-d0d792464dbc',
                status: 'done',
            },
        }).as('uploadFile');

        cy.mount(
            `<form>
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('input[type="file"]').selectFile('cypress/fixtures/upload.file1.txt');

        cy.wait('@uploadRegister');
        cy.wait('@uploadFile');

        cy.get('.dropzone-uploadstates').should('have.text', 'upload.file1.txt');
        cy.get('.progress-bar').should('have.attr', 'style', 'width: 100%;');
    });

    it('should validate file extension', () => {});

    it('should validate file size', () => {});

    it('should validate required state', () => {});

    it('should can cancel upload', () => {});

    it('should can delete uploaded file', () => {
        cy.intercept(
            { method: 'POST', url: '/api/upload/register', times: 1 },
            {
                statusCode: 201,
                headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
            }
        ).as('uploadRegister');

        cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 200,
            headers: { 'content-length': '14' },
            body: {
                documentid: '64f206db-1b40-42e7-859e-d0d792464dbc',
                status: 'done',
            },
        }).as('uploadFile');

        cy.intercept('DELETE', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
            statusCode: 204,
        }).as('deleteFile');

        cy.mount(
            `<form>
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('input[type="file"]').selectFile('cypress/fixtures/upload.file1.txt');

        cy.wait('@uploadRegister');
        cy.wait('@uploadFile');

        cy.get('.dropzone-uploadstates').eq(0).should('have.text', 'upload.file1.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');

        cy.get('.dropzone-uploadstates .btn').click();
        cy.wait('@deleteFile');
        cy.get('.dropzone-uploadstates').should('not.exist');
    });

    it('should can pause and continue upload', () => {});

    it('should use custom icons from iconservice', () => {});

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
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
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
        cy.wait('@uploadRegister2');
        cy.wait('@uploadFile1');
        cy.wait('@uploadFile2');

        cy.get('.dropzone-uploadstates').eq(0).should('have.text', 'upload.file1.txt');
        cy.get('.dropzone-uploadstates').eq(1).should('have.text', 'upload.file2.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
        cy.get('.progress-bar').eq(1).should('have.attr', 'style', 'width: 100%;');
    });

    it('should can drop multiple files in dropzone', () => {
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
            headers: { 'content-length': '14' },
            body: {
                documentid: '11784817-c210-48da-8da1-6e369e666daa',
                status: 'done',
            },
        }).as('uploadFile2');

        cy.mount(
            `<form>
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('input[type="file"]').selectFile([
            { contents: Cypress.Buffer.from('This is a Test'), fileName: 'upload.file1.txt', lastModified: Date.now() },
            {
                contents: Cypress.Buffer.from('This is another Test'),
                fileName: 'upload.file2.txt',
                lastModified: Date.now(),
            },
        ]);

        cy.wait('@uploadRegister1');
        cy.wait('@uploadRegister2');
        cy.wait('@uploadFile1');
        cy.wait('@uploadFile2');

        cy.get('.dropzone-uploadstates').eq(0).should('have.text', 'upload.file1.txt');
        cy.get('.dropzone-uploadstates').eq(1).should('have.text', 'upload.file2.txt');
        cy.get('.progress-bar').eq(0).should('have.attr', 'style', 'width: 100%;');
        cy.get('.progress-bar').eq(1).should('have.attr', 'style', 'width: 100%;');
    });
});
