/**
 * Generates a random GUID in UUID v4 format
 */
// #region Functions

function generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// #endregion Functions

declare namespace Cypress {
    interface Chainable {
        registerUploadController(filesize: number, fixedguid?: string): Chainable<number>;
        registerDeleteController(): Chainable;
        createFile(filesize: number, extension?: string): Chainable;
        waitForUploadComplete(totalChunksExpected: number, validatefile?: number): Chainable;
    }
}

Cypress.Commands.add('registerUploadController', (filesize: number, fixedguid: string | null = null) => {
    let chunkCount = 0;
    const rangeSize = 131071;

    cy.intercept('POST', '/api/upload/register', (req) => {
        const uploadId = fixedguid ?? generateGUID();

        req.reply({
            statusCode: 201,
            headers: { Location: `/api/upload/${uploadId}` },
            body: uploadId,
        });
    }).as('uploadRegister');

    cy.intercept('PUT', '/api/upload/*', (req) => {
        const uploadIdMatch = req.url.match(/\/api\/upload\/([a-f0-9-]+)/);
        const uploadId = uploadIdMatch ? uploadIdMatch[1] : '';

        chunkCount++;

        let receivedSize = chunkCount * rangeSize;
        let response;

        if (receivedSize > filesize - 1) {
            response = {
                statusCode: 200,
                body: { documentid: uploadId, status: 'done' },
                delay: 50,
            };
        } else {
            response = {
                statusCode: 308,
                headers: {
                    Range: `bytes=0-${receivedSize}`,
                },
                body: { documentid: null, status: 'incomplete' },
                delay: 50,
            };
        }

        req.alias = `chunk${chunkCount}`;
        req.reply(response);
    }).as('uploadChunk');

    return cy.wrap(Math.ceil(filesize / rangeSize));
});

Cypress.Commands.add(
    'createFile',
    { prevSubject: ['element'] },
    (subject, filesize: number, extension: string = 'txt') => {
        const bigFile = Cypress.Buffer.alloc(filesize, 'a');
        cy.wrap(subject).selectFile([
            { contents: bigFile, fileName: `upload.file1.${extension}`, lastModified: Date.now() },
        ]);
    }
);

Cypress.Commands.add('registerDeleteController', () => {
    cy.intercept('DELETE', '/api/upload/*', {
        statusCode: 204,
    }).as('deleteFile');
});

Cypress.Commands.add('waitForUploadComplete', (totalChunksExpected: number, validatefile: number = 0) => {
    cy.wait('@uploadRegister');

    for (let i = 0; i < totalChunksExpected; i++) {
        cy.wait('@uploadChunk').then((interception) => {
            if (i < totalChunksExpected - 1) {
                expect(interception.response.body).to.have.property('status', 'incomplete');
                cy.get('.progress-bar').eq(validatefile).should('not.have.attr', 'style', 'width: 100%;');
            } else {
                expect(interception.response.body).to.have.property('status', 'done');
                cy.get('.progress-bar').eq(validatefile).should('have.attr', 'style', 'width: 100%;');
            }
        });
    }
});
