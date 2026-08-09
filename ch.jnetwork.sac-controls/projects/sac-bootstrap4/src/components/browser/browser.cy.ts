import { SacFormDirective } from '../../controls/form';
import { SACBootstrap4LayoutModule } from '../../controls/layout/layout.module';
import { SacBrowserComponent } from './browser';
import { FormsModule } from '@angular/forms';
import { createOutputSpy } from 'cypress/angular';

describe('SacBrowserComponent', () => {
    it('base test', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.get('ul.list-group').should('exist');
        });
    });

    it('should have empty files if folder is empty', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();
            cy.contains('li div', 'Empty Folder').click();

            cy.get('table tr').eq(0).find('td').should('have.attr', 'colspan');
        });
    });

    it('should show files in subfolder', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr').eq(0).find('td').eq(0).should('contain.text', 'File 1.jpg');
            cy.get('table tr').eq(0).find('td').eq(1).should('contain.text', '58092');
            cy.get('table tr').eq(1).find('td').eq(0).should('contain.text', 'File 2.jpg');
        });
    });

    it('should expand and collablse folder', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');

            cy.contains('li div', 'Empty Folder').should('not.exist');
            cy.contains('li div', 'SubFolder 1').parent().find('div.fa-folder-plus').eq(0).click();
            cy.contains('li div', 'Empty Folder').should('exist');
            cy.contains('li div', 'SubFolder 1').parent().find('div.fa-folder-open').eq(0).click();
            cy.contains('li div', 'Empty Folder').should('not.exist');
        });
    });

    it('should can upload new files', () => {
        const filesize = 10000;
        cy.registerBrowserBackend(filesize).then((chunks) => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                    </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 2').click();

            cy.get('table tr').eq(0).find('td').eq(0).should('contain.text', 'File 1.jpg');
            cy.get('table tr').eq(0).find('td').eq(1).should('contain.text', '58092');
            cy.get('table tr').eq(1).find('td').eq(0).should('contain.text', 'File 2.jpg');

            cy.get('input[type="file"]').createFile(filesize);
            cy.waitForUploadComplete(chunks);

            cy.get('table tr').eq(2).find('td').eq(0).should('contain.text', 'upload.file1.txt');
        });
    });

    it('should not can upload new files with invalid extension', () => {
        const filesize = 10000;
        cy.registerBrowserBackend(filesize).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser" allowedtypes=".txt,.csv">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {
                        fileerrorAction: createOutputSpy('fileerrorAction'),
                    },
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 2').click();

            cy.get('table tr').eq(0).find('td').eq(0).should('contain.text', 'File 1.jpg');
            cy.get('table tr').eq(0).find('td').eq(1).should('contain.text', '58092');
            cy.get('table tr').eq(1).find('td').eq(0).should('contain.text', 'File 2.jpg');

            cy.get('input[type="file"]').createFile(filesize, '.mov');

            cy.get('@uploadRegister.all').should('have.length', 0);
        });
    });

    it('should select folder with selectedfile', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser" selectedfile="Files/SubFolder 2/File 2.jpg">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.get('ul.list-group').should('exist');

            cy.get('ul li.list-group-item-secondary').should('exist');
        });
    });

    it('should load files from server if node files is null', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser" >
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();
            cy.get('ul li.list-group-item-secondary').should('contains.text', 'SubFolder 1');
            cy.contains('li div', 'Null Files Folder').click();
            cy.get('ul li.list-group-item-secondary').should('contains.text', 'Null Files Folder');

            cy.wait('@getfiles');
            cy.get('table tr').eq(0).find('td').eq(0).should('contain.text', 'Serverfile 1.jpg');
            cy.get('table tr').eq(0).find('td').eq(1).should('contain.text', '21312');
        });
    });

    it('should load files from server if node files is null and selectfile is set', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser" selectedfile="Files/SubFolder 1/Null Files Folder/Serverfile 2.jpg">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();
            cy.get('ul li.list-group-item-secondary').should('contains.text', 'SubFolder 1');
            cy.contains('li div', 'Null Files Folder').click();
            cy.get('ul li.list-group-item-secondary').should('contains.text', 'Null Files Folder');

            cy.wait('@getfiles');
            cy.get('table tr').eq(0).find('td').eq(0).should('contain.text', 'Serverfile 1.jpg');
            cy.get('table tr').eq(0).find('td').eq(1).should('contain.text', '21312');
        });
    });

    it('should set file selected if click', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser" (file)="fileAction.emit($event)">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {
                        fileAction: createOutputSpy('fileAction'),
                    },
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr').eq(0).find('td').eq(0).click();
            cy.get('table tr').eq(0).should('have.class', 'table-primary');
            cy.get('@fileAction').should('be.calledWith', '/SubFolder 1/File 1.jpg');
        });
    });

    it('should load structure from server if refresh', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary div.dropdown').click();
            cy.contains('div.dropdown-menu button.dropdown-item', 'Aktualisieren').should('exist');
            cy.contains('div.dropdown-menu button.dropdown-item', 'Aktualisieren').click();
            cy.wait('@getnodes');
        });
    });

    it('should send delete request on delete file', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr td i.fa-trash').eq(0).click();

            cy.get('div.modal-header .modal-title').should('have.text', 'Löschen');
            cy.get('div.modal-footer button.btn-primary').click();
            cy.wait('@deletefile');
        });
    });

    it('should not send delete request on delete file when cancel', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr td i.fa-trash').eq(0).click();

            cy.get('div.modal-header .modal-title').should('have.text', 'Löschen');
            cy.get('div.modal-footer button.btn-secondary').click();
            cy.get('@deletefile.all').should('have.length', 0);
        });
    });

    it('should send delete request on delete folder', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary div.dropdown').click();
            cy.contains('div.dropdown-menu button.dropdown-item', 'Löschen').should('exist');
            cy.contains('div.dropdown-menu button.dropdown-item', 'Löschen').click();

            cy.get('div.modal-header .modal-title').should('have.text', 'Löschen');
            cy.get('div.modal-footer button.btn-primary').click();
            cy.wait('@deletenode');
        });
    });

    it('should send delete request on delete folder', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();
            cy.contains('li div', 'Empty Folder').click();

            cy.get('li.list-group-item-secondary div.dropdown').click();
            cy.contains('div.dropdown-menu button.dropdown-item', 'Löschen').should('exist');
            cy.contains('div.dropdown-menu button.dropdown-item', 'Löschen').click();

            cy.get('div.modal-header .modal-title').should('have.text', 'Löschen');
            cy.get('div.modal-footer button.btn-primary').click();
            cy.wait('@deletenode');
        });
    });

    it('should not send delete request on folder when cancel', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary div.dropdown').click();
            cy.contains('div.dropdown-menu button.dropdown-item', 'Löschen').should('exist');
            cy.contains('div.dropdown-menu button.dropdown-item', 'Löschen').click();

            cy.get('div.modal-header .modal-title').should('have.text', 'Löschen');
            cy.get('div.modal-footer button.btn-secondary').click();
            cy.get('@deletenode.all').should('have.length', 0);
        });
    });

    it('should send rename folder request on rename folder when press enter', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary i.fa-pen').click();
            cy.get('li.list-group-item-secondary input').clear().type('New Foldername{enter}');

            cy.wait('@renamenode');
        });
    });

    it('should send rename folder request on rename folder when click other', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary i.fa-pen').click();
            cy.get('li.list-group-item-secondary input').clear().type('New Foldername');

            cy.contains('li div', 'SubFolder 2').click();
            cy.wait('@renamenode');
        });
    });

    it('should not send rename folder request on rename folder when name is empty', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary i.fa-pen').click();
            cy.get('li.list-group-item-secondary input').clear();

            cy.contains('li div', 'SubFolder 2').click();
            cy.get('@renamenode.all').should('have.length', 0);
        });
    });

    it('should not send rename folder request on folder when cancel', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('li.list-group-item-secondary i.fa-pen').click();
            cy.contains('li div', 'SubFolder 2').click();

            cy.get('@renamenode.all').should('have.length', 0);
        });
    });

    it('should send rename request on rename file with enter', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr td i.fa-pen').eq(0).click();

            cy.get('table tr input').clear().type('New Filename.jpg{enter}');

            cy.wait('@renamefile');
        });
    });

    it('should send rename request on rename file with click other', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr td i.fa-pen').eq(0).click();

            cy.get('table tr input').clear().type('New Filename.jpg');

            cy.get('table tr').eq(1).find('td').eq(0).click();
            cy.wait('@renamefile');
        });
    });

    it('should not send rename request on rename file when cancel', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr td i.fa-pen').eq(0).click();

            cy.get('table tr input').should('exist');

            cy.get('table tr').eq(1).find('td').eq(0).click();

            cy.get('@renamefile.all').should('have.length', 0);
        });
    });

    it('should not send rename request on rename file when filename is empty', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 1').click();

            cy.get('table tr td i.fa-pen').eq(0).click();

            cy.get('table tr input').clear();

            cy.get('table tr').eq(1).find('td').eq(0).click();

            cy.get('@renamefile.all').should('have.length', 0);
        });
    });

    it('should send newfolder request on new folder when press enter', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 2').click();

            cy.get('li.list-group-item-secondary div.dropdown').click();
            cy.contains('div.dropdown-menu button.dropdown-item', 'Neuer Ordner').should('exist');
            cy.contains('div.dropdown-menu button.dropdown-item', 'Neuer Ordner').click();

            cy.get('li.list-group-item-secondary input').clear().type('Add Folder{enter}');

            cy.wait('@newnode');
        });
    });

    it('should not send newfolder request on folder when cancel', () => {
        cy.registerBrowserBackend(0).then(() => {
            cy.mount(
                `<sac-filebrowser apiurl="/api/browser">
                </sac-filebrowser>`,
                {
                    imports: [FormsModule, SacFormDirective, SacBrowserComponent, SACBootstrap4LayoutModule],
                    componentProperties: {},
                }
            );

            cy.wait('@getnodes');
            cy.contains('li div', 'SubFolder 2').click();

            cy.get('li.list-group-item-secondary div.dropdown').click();
            cy.contains('div.dropdown-menu button.dropdown-item', 'Neuer Ordner').should('exist');
            cy.contains('div.dropdown-menu button.dropdown-item', 'Neuer Ordner').click();

            cy.get('li.list-group-item-secondary input').clear().type('{enter}');

            cy.contains('li div', 'SubFolder 1').click();
            cy.get('@newnode.all').should('have.length', 0);
        });
    });
});
