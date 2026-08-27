declare namespace Cypress {
    interface Chainable {
        registerBrowserBackend(filesize: number, fixedguid?: string): Chainable;
    }
}

Cypress.Commands.add('registerBrowserBackend', (filesize: number, fixedguid: string | null = null) => {
    function generateGUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    cy.intercept('GET', 'assets/icons/dialog/question.png', {
        fixture: 'question.png',
    }).as('getConfirmIcon');

    cy.intercept('POST', '/api/browser/getnodes', {
        statusCode: 200,
        body: {
            Node: {
                Name: 'Files',
                ChildNodes: [
                    {
                        Name: 'SubFolder 1',
                        ChildNodes: [
                            {
                                Name: 'Empty Folder',
                                ChildNodes: [],
                                Files: [],
                            },
                            {
                                Name: 'Null Files Folder',
                                ChildNodes: [],
                                Files: null,
                            },
                        ],
                        Files: [
                            {
                                Filename: 'File 1.jpg',
                                Size: 58092,
                            },
                            {
                                Filename: 'File 2.jpg',
                                Size: 65475,
                            },
                        ],
                    },
                    {
                        Name: 'SubFolder 2',
                        ChildNodes: [],
                        Files: [
                            {
                                Filename: 'File 1.jpg',
                                Size: 58092,
                            },
                            {
                                Filename: 'File 2.jpg',
                                Size: 65475,
                            },
                        ],
                    },
                ],
                Files: [],
            },
        },
    }).as('getnodes');

    cy.intercept('POST', '/api/browser/uploadfile', {
        statusCode: 200,
        body: {
            Files: [
                {
                    Filename: 'File 1.jpg',
                    Size: 58092,
                },
                {
                    Filename: 'File 2.jpg',
                    Size: 65475,
                },
                {
                    Filename: 'upload.file1.txt',
                    Size: 10000,
                },
            ],
        },
    }).as('uploadfile');

    cy.intercept('POST', '/api/browser/getfiles', {
        statusCode: 200,
        body: {
            Files: [
                {
                    Filename: 'Serverfile 1.jpg',
                    Size: 21312,
                },
                {
                    Filename: 'Serverfile 2.jpg',
                    Size: 34535345,
                },
            ],
        },
    }).as('getfiles');

    cy.intercept('POST', '/api/browser/deletefile', {
        statusCode: 200,
        body: {
            Files: [
                {
                    Filename: 'File 2.jpg',
                    Size: 65475,
                },
            ],
        },
    }).as('deletefile');

    cy.intercept('POST', '/api/browser/deletenode', (req) => {
        if (req.body?.Path === '/SubFolder 1/Empty Folder') {
            req.reply({
                statusCode: 200,
                body: {
                    Node: {
                        Name: 'SubFolder 1',
                        ChildNodes: [
                            {
                                Name: 'Null Files Folder',
                                ChildNodes: [],
                                Files: null,
                            },
                        ],
                        Files: [
                            {
                                Filename: 'File 1.jpg',
                                Size: 58092,
                            },
                            {
                                Filename: 'File 2.jpg',
                                Size: 65475,
                            },
                        ],
                    },
                },
            });

            return;
        }

        req.reply({
            statusCode: 200,
            body: {
                Node: {
                    Name: 'Files',
                    ChildNodes: [
                        {
                            Name: 'SubFolder 2',
                            ChildNodes: [],
                            Files: [
                                {
                                    Filename: 'File 1.jpg',
                                    Size: 58092,
                                },
                                {
                                    Filename: 'File 2.jpg',
                                    Size: 65475,
                                },
                            ],
                        },
                    ],
                    Files: [],
                },
            },
        });
    }).as('deletenode');

    cy.intercept('PUT', '/api/browser/renamenode', {
        statusCode: 200,
        body: {
            Node: {
                Name: 'New Foldername',
                ChildNodes: [
                    {
                        Name: 'Empty Folder',
                        ChildNodes: [],
                        Files: [],
                    },
                    {
                        Name: 'Null Files Folder',
                        ChildNodes: [],
                        Files: null,
                    },
                ],
                Files: [
                    {
                        Filename: 'File 1.jpg',
                        Size: 58092,
                    },
                    {
                        Filename: 'File 2.jpg',
                        Size: 65475,
                    },
                ],
            },
        },
    }).as('renamenode');

    cy.intercept('PUT', '/api/browser/renamefile', {
        statusCode: 200,
        body: {
            Files: [
                {
                    Filename: 'New Filename.jpg',
                    Size: 58092,
                },
                {
                    Filename: 'File 2.jpg',
                    Size: 65475,
                },
            ],
        },
    }).as('renamefile');

    cy.intercept('POST', '/api/browser/newnode', {
        statusCode: 200,
        body: {
            Node: {
                Name: 'Add Folder',
                ChildNodes: [],
                Files: [],
            },
        },
    }).as('newnode');

    let chunkCount = 0;
    const rangeSize = 131071;

    cy.intercept('POST', '/api/browser/uploadregister', (req) => {
        const uploadId = fixedguid ?? generateGUID();

        req.reply({
            statusCode: 201,
            headers: { Location: `/api/browser/upload/${uploadId}` },
            body: uploadId,
        });
    }).as('uploadRegister');

    cy.intercept('PUT', '/api/browser/upload/*', (req) => {
        const uploadIdMatch = req.url.match(/\/api\/browser\/upload\/([a-f0-9-]+)/);
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

    cy.intercept('DELETE', '/api/browser/upload/*', {
        statusCode: 204,
    }).as('deleteFile');

    return cy.wrap(Math.ceil(filesize / rangeSize));
});
