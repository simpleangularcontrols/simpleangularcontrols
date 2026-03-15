declare namespace Cypress {
    interface Chainable {
        registerUploadController(filesize: number): Chainable<number>;
        registerDeleteController(): Chainable;
        createFile(filesize: number, extension?: string): Chainable;
        waitForUploadComplete(totalChunksExpected: number): Chainable;
    }
}

Cypress.Commands.add('registerUploadController', (filesize: number) => {
    let chunkCount = 0;
    const rangeSize = 131071;

    cy.intercept('POST', '/api/upload/register', {
        statusCode: 201,
        headers: { Location: '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc' },
        body: '64f206db-1b40-42e7-859e-d0d792464dbc',
    }).as('uploadRegister');

    cy.intercept('PUT', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', (req) => {
        chunkCount++;

        let receivedSize = chunkCount * rangeSize;
        let response;

        if (receivedSize > filesize - 1) {
            response = {
                statusCode: 200,
                body: { documentid: '64f206db-1b40-42e7-859e-d0d792464dbc', status: 'done' },
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
    (subject, filesize: number, extension = 'txt') => {
        const bigFile = Cypress.Buffer.alloc(filesize, 'a');
        cy.wrap(subject).selectFile([
            { contents: bigFile, fileName: `upload.file1.${extension}`, lastModified: Date.now() },
        ]);
    }
);

Cypress.Commands.add('registerDeleteController', () => {
    cy.intercept('DELETE', '/api/upload/64f206db-1b40-42e7-859e-d0d792464dbc', {
        statusCode: 204,
    }).as('deleteFile');
});

Cypress.Commands.add('waitForUploadComplete', (totalChunksExpected: number) => {
    cy.wait('@uploadRegister');

    for (let i = 0; i < totalChunksExpected; i++) {
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
});
