import { ISacFileBrowserService } from '../../interfaces/ISacFileBrowserService';
import { ISacIconService } from '../../interfaces/ISacIconService';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { ISacValidationKeyService } from '../../interfaces/ISacValidationKeyService';
import {
    SACICON_SERVICE,
    SACLOCALISATION_SERVICE,
    SACVALIDATIONKEY_SERVICE,
    SacDefaultIconService,
    SacDefaultValidationKeyService,
} from '../../services';
import { SACFILEBROWSER_SERVICE, SacDefaultFileBrowserService } from '../../services/sac-filebrowser.service';
import { SacDefaultLocalisationService } from '../../services/sac-localisation.service';
import { IBrowserFile } from './models/browserfile';
import { IBrowserFileResponse } from './models/browserfileresponse';
import { IBrowserNode } from './models/browsernode';
import { IBrowserNodeResponse } from './models/browsernoderesponse';
import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, HostListener, Injector, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Base component for file browser
 */
@Directive()
export abstract class SacFileBrowserCommon implements OnInit {
    // #region Properties

    /**
     * Service for file browser access (backend)
     */
    private browserService: ISacFileBrowserService;

    /**
     * Icon service to receive icon classes for ui
     */
    private iconService: ISacIconService;

    /**
     * File that is already selected when the browser starts
     */
    private preselecedfile: string | null = null;

    /**
     * Allowed file extensions for file selection and upload. Use dot notation, separated by commas for multiple extensions (Example: ".jpg,.gif")
     */
    @Input()
    public allowedtypes = '';

    /**
     * Allows deleting a file
     */
    @Input()
    public allowfiledelete = true;

    /**
     * Allows renaming a file
     */
    @Input()
    public allowfilerename = true;

    /**
     * Allows uploading files
     */
    @Input()
    public allowfileupload = true;

    /**
     * Allows creating a new folder
     */
    @Input()
    public allowfoldercreate = true;

    /**
     * Allows deleting a folder
     */
    @Input()
    public allowfolderdelete = true;

    /**
     * Allows renaming a folder
     */
    @Input()
    public allowfolderrename = true;

    /**
     * URL for the backend API
     */
    @Input()
    public apiurl: string;

    /**
     * Output emitter when a file is selected.
     */
    @Output()
    public file: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Service for error localisation
     */
    public lngResourceService: ISacLocalisationService;

    /**
     * Root node item for the tree
     */
    public rootNode: IBrowserNode = {
        Name: '',
        ChildNodes: [],
        Files: [],
        IsExpanded: true,
        IsEditMode: false,
        IsNewNode: false,
        Path: '',
    };

    /**
     * Selected File Name
     */
    public selectedFile: string;

    /**
     * Selected File Item
     */
    public selectedFileItem: IBrowserFile = null;

    /**
     * Selected Node Item
     */
    public selectedNode: IBrowserNode = null;

    /**
     * Liste von Uploads
     */
    public uploads: string[] = [];

    /**
     * Service to receive standard validation message keys and texts
     */
    public validationKeyService: ISacValidationKeyService;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param httpclient Angular HTTP Client
     * @param injector Service Injector
     */
    constructor(httpclient: HttpClient, injector: Injector) {
        this.browserService = injector.get(SACFILEBROWSER_SERVICE, new SacDefaultFileBrowserService(httpclient));
        this.validationKeyService = injector.get(SACVALIDATIONKEY_SERVICE, new SacDefaultValidationKeyService());
        this.lngResourceService = injector.get(
            SACLOCALISATION_SERVICE,
            new SacDefaultLocalisationService(this.validationKeyService)
        );

        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * CSS icon class for delete icon
     * @returns css class with icon
     */
    public get iconDelete(): string {
        return this.iconService.BrowserComponentDeleteIcon;
    }

    /**
     * CSS icon class for edit icon
     * @returns css class with icon
     */
    public get iconEdit(): string {
        return this.iconService.BrowserComponentEditIcon;
    }

    /**
     * CSS icon for folders in tree that are collapsed
     * @returns css class with icon
     */
    public get iconFolderCollabsed(): string {
        return this.iconService.BrowserComponentFolderClosedIcon;
    }

    /**
     * CSS icon class for folders without subfolders
     * @returns css class with icon
     */
    public get iconFolderEmpty(): string {
        return this.iconService.BrowserComponentFolderEmptyIcon;
    }

    /**
     * CSS icon for new folders action
     * @returns css class with icon
     */
    public get iconFolderNew(): string {
        return this.iconService.BrowserComponentFolderNewIcon;
    }

    /**
     * CSS icon for folders in tree there are expanded
     * @returns css class with icon
     */
    public get iconFolderOpen(): string {
        return this.iconService.BrowserComponentFolderOpenIcon;
    }

    /**
     * CSS icon class for refresh icon
     * @returns css class with icon
     */
    public get iconRefresh(): string {
        return this.iconService.BrowserComponentRefreshIcon;
    }

    /**
     * Getter for selected file. Bound to an input property
     */
    public get selectedfile(): string | null {
        if (this.selectFile && this.selectFile.length > 0) {
            return this.selectedFile;
        } else {
            return null;
        }
    }

    /**
     * Sets the selected node by the path
     */
    @Input()
    public set selectedfile(v: string | null) {
        const selectednode = this.findSelectedNodeByPath(this.rootNode, v);

        if (selectednode !== null) {
            this.selectNode(selectednode);
        }

        this.preselecedfile = v;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Abstract confirm method that must be implemented. Called when a file should be deleted.
     * @param file File for which a delete confirmation should be requested
     */
    public abstract confirmDeleteFile(file: IBrowserFile): Observable<boolean>;

    /**
     * Abstract confirm method that must be implemented. Called when a folder should be deleted.
     * @param folder Folder for which a delete confirmation should be requested.
     */
    public abstract confirmDeleteNode(folder: IBrowserNode): Observable<boolean>;

    /**
     * Deletes a file
     * @param file File to be deleted
     */
    public deleteFile(file: IBrowserFile): void {
        this.confirmDeleteFile(file).subscribe((confirm) => {
            if (confirm) {
                this.browserService
                    .DeleteFile(this.apiurl, this.selectedNode.Path + '/' + file.Filename, this.allowedtypes)
                    .subscribe((result: IBrowserFileResponse) => {
                        this.selectedNode.Files = result.Files;
                    });
            }
        });
    }

    /**
     * Deletes a node
     * @param node Node to be deleted
     */
    public deleteNode(node: IBrowserNode): void {
        this.confirmDeleteNode(node).subscribe((confirm) => {
            if (confirm) {
                this.browserService.DeleteNode(this.apiurl, node.Path).subscribe((result: IBrowserNodeResponse) => {
                    const parentNode = this.findParentNode(this.rootNode, node);
                    parentNode.ChildNodes = result.Node.ChildNodes;

                    this.rootNode.ChildNodes.forEach((itm) => {
                        this.fillPath(itm, '');
                    });

                    this.selectNode(parentNode);
                });
            }
        });
    }

    /**
     * Sets a file into edit mode
     * @param file File that should be placed into edit mode
     */
    public editFile(file: IBrowserFile): void {
        file.IsEditMode = true;
    }

    /**
     * Sets a node into edit mode
     * @param node Node to be edited
     */
    public editNode(node: IBrowserNode): void {
        node.IsEditMode = true;
    }

    /**
     * HostListener that ends edit mode for all files and nodes.
     */
    @HostListener('document:click', ['$event.target'])
    /**
     * Click Event - Exits edit mode for files and nodes
     * @param targetElement The target element from the click event
     */
    public exitEditMode(targetElement): void {
        if (this.selectedNode) {
            this.selectedNode.Files.forEach((itm) => (itm.IsEditMode = false));

            if (!this.selectedNode || this.selectedNode.Name === null || this.selectedNode.Name.length === 0) {
                this.clearNewChildNodes(this.rootNode);
            }
        }

        this.resetNodeEditMode(null);
    }

    /**
     * Creates a new node in the tree
     * @param node Node under which a new node should be created
     */
    public newNode(node: IBrowserNode) {
        const item: IBrowserNode = {
            ChildNodes: [],
            Files: [],
            IsEditMode: false,
            IsExpanded: false,
            Name: '',
            Path: node.Path,
            IsNewNode: true,
        };

        node.ChildNodes.push(item);
        this.selectNode(item);
        this.editNode(item);
    }

    /**
     * Init event of the component
     */
    public ngOnInit(): void {
        this.browserService.GetNode(this.apiurl, '', this.allowedtypes).subscribe((result: IBrowserNodeResponse) => {
            this.rootNode = {
                Name: result.Node.Name,
                Files: result.Node.Files,
                ChildNodes: result.Node.ChildNodes,
                IsExpanded: true,
                IsEditMode: false,
                IsNewNode: false,
                Path: '/',
            };

            this.setPathToAllNodes();
            this.selectedNode = this.rootNode;

            // Re-set the selected file if the property was set before data was loaded from the service.
            if (this.preselecedfile !== null && this.preselecedfile.length > 0) {
                this.selectedfile = this.preselecedfile;
            }
        });
    }

    /**
     * Updates the node
     */
    public refreshNode(node: IBrowserNode): void {
        if (!node.IsExpanded) {
            this.switchExpandNode(node);
        }

        this.browserService
            .GetNode(this.apiurl, node.Path, this.allowedtypes)
            .subscribe((result: IBrowserNodeResponse) => {
                node.ChildNodes = result.Node.ChildNodes;
                node.Files = result.Node.Files;

                this.setPathToAllNodes();
            });
    }

    /**
     * Method called when a file should be renamed
     * @param file File to be renamed
     * @param newFilename New filename
     */
    public renameFile(file: IBrowserFile, newFilename: string): void {
        file.IsEditMode = false;

        if (!newFilename || newFilename === null || newFilename.length === 0) {
            // Cancel, Invalid Filename
            return;
        }

        if (file.Filename !== newFilename) {
            this.browserService
                .RenameFile(this.apiurl, this.selectedNode.Path + '/' + file.Filename, newFilename, this.allowedtypes)
                .subscribe((result: IBrowserFileResponse) => {
                    this.selectedNode.Files = result.Files;
                });
        }
    }

    /**
     * Method called when a node should be renamed
     * @param node Node to be renamed
     * @param newFoldername New folder name
     */
    public renameNode(node: IBrowserNode, newFoldername: string): void {
        node.IsEditMode = false;

        if (!node.IsNewNode) {
            if (!newFoldername || newFoldername === null || newFoldername.length === 0) {
                // Cancel Rename. Invalid Foldername
                return;
            }

            if (node.Name !== newFoldername) {
                this.browserService
                    .RenameNode(this.apiurl, node.Path, newFoldername)
                    .subscribe((result: IBrowserNodeResponse) => {
                        node.Name = result.Node.Name;

                        this.setPathToAllNodes();
                    });
            }
        } else {
            if (!newFoldername || newFoldername === null || newFoldername.length === 0) {
                this.clearNewChildNodes(this.rootNode);
                return;
            }

            node.Name = newFoldername;
            node.IsNewNode = false;
            this.browserService
                .SaveNode(this.apiurl, node.Path, newFoldername)
                .subscribe((result: IBrowserNodeResponse) => {
                    node.Name = result.Node.Name;
                    node.Files = result.Node.Files;

                    this.setPathToAllNodes();
                });
        }
    }

    /**
     * Method called when a file is selected
     * @param file File that is selected
     */
    public selectFile(file: IBrowserFile) {
        if (!file.IsEditMode) {
            this.selectedNode.Files.forEach((itm) => (itm.IsEditMode = false));
        }

        if (!this.selectedNode.Path.endsWith('/')) {
            this.selectedFile = this.selectedNode.Path + '/' + file.Filename;
        } else {
            this.selectedFile = '/' + file.Filename;
        }

        this.selectedFileItem = file;
        this.file.emit(this.selectedFile);
    }

    /**
     * Method called when a node is selected
     * @param node Node that should be selected
     */
    public selectNode(node: IBrowserNode): void {
        if (!node.IsExpanded) {
            this.switchExpandNode(node);
        }

        // Reset the Edit Mode in all Nodes
        this.resetNodeEditMode(null);

        if (!node.Files) {
            this.browserService
                .GetFiles(this.apiurl, node.Path, this.allowedtypes)
                .subscribe((result: IBrowserFileResponse) => {
                    node.Files = result.Files;
                    this.selectedNode = node;

                    if (this.preselecedfile !== null && this.preselecedfile.length > 0) {
                        const filename = this.preselecedfile.substring(this.preselecedfile.lastIndexOf('/') + 1);
                        const file = node.Files.find((itm) => itm.Filename === filename);
                        if (file) {
                            this.selectFile(file);
                        }
                    }
                });
        } else {
            this.selectedNode = node;
        }
    }

    /**
     * Expand/collapse method for nodes
     * @param node Node that should be opened or closed
     */
    public switchExpandNode(node: IBrowserNode): void {
        if (node.IsExpanded) {
            node.IsExpanded = false;
        } else {
            node.IsExpanded = true;
        }
    }

    /**
     * Method that must be called when an upload is completed.
     * @param param Parameters of the uploaded file
     */
    public uploadComplete(node: IBrowserNode, uploadIdList: string[]): void {
        if (uploadIdList !== null) {
            uploadIdList.forEach((element) => {
                if (this.uploads.indexOf(element) < 0) {
                    this.uploads.push(element);
                }
            });
        }

        const id = this.uploads.pop();
        if (id) {
            this.browserService
                .SaveFile(this.apiurl, node.Path, id, this.allowedtypes)
                .subscribe((result: IBrowserFileResponse) => {
                    this.selectedNode.Files = result.Files;
                    this.uploadedFileMoved(id);
                });
        }
    }

    /**
     * Abstract method invoked when the uploaded file has been moved from the temp folder into the structure.
     * @param uploadid Upload ID
     */
    public abstract uploadedFileMoved(uploadid: string): void;

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Recursive method that removes new nodes from the given node and all its children
     * @param node Node from which all new nodes should be removed.
     */
    private clearNewChildNodes(node: IBrowserNode) {
        node.ChildNodes.forEach((itm) => {
            if (itm.IsNewNode) {
                node.ChildNodes.splice(node.ChildNodes.indexOf(itm));
            }
        });

        node.ChildNodes.forEach((itm) => this.clearNewChildNodes(itm));
    }

    /**
     * Method that generates the path for a node
     * @param node Node for which the path should be generated
     * @param parentPath Parent path
     */
    private fillPath(node: IBrowserNode, parentPath: string) {
        node.Path = parentPath + '/' + node.Name;
        node.ChildNodes.forEach((itm) => {
            this.fillPath(itm, node.Path);
        });
    }

    /**
     * Finds the parent node in the tree
     * @param node Current node
     * @param nodeToFind Node to find
     * @returns The node if found, otherwise NULL
     */
    private findParentNode(node: IBrowserNode, nodeToFind: IBrowserNode): IBrowserNode {
        if (node.ChildNodes.indexOf(nodeToFind) >= 0) {
            return node;
        }

        for (const child of node.ChildNodes) {
            const result = this.findParentNode(child, nodeToFind);
            if (result !== null) {
                return result;
            }
        }

        return null;
    }

    /**
     * Finds a node according to a URL path
     * @param node Node in which to search
     * @param path Path to search for
     * @returns Node matching the path. Returns NULL if not found
     */
    private findSelectedNodeByPath(node: IBrowserNode, path: string): IBrowserNode {
        // Cancel if path is not defined
        if (path === undefined || path === null) {
            return null;
        }

        // Split path into array and set the root folder name
        const pathArray = path.split('/');
        pathArray[0] = this.rootNode.Name;

        return this.findSelectedNodeByPathArray(node, pathArray, 0);
    }

    /**
     * Finds a node based on an array of node names
     * @param node Node in which to search
     * @param path Array of node names representing the hierarchy of the path
     * @param index Current index in the path array
     * @returns Node if found, otherwise NULL
     */
    private findSelectedNodeByPathArray(node: IBrowserNode, path: string[], index: number): IBrowserNode {
        // Check if folder is correct. Return the last folder. The last index in path is the filename
        if (node.Name === path[index] && path.length - 2 === index) {
            return node;
        } else if (node.Name === path[index]) {
            // Expand Node
            node.IsExpanded = true;
            for (const item of node.ChildNodes) {
                const result = this.findSelectedNodeByPathArray(item, path, index + 1);

                if (result !== null) {
                    return result;
                }
            }
        }
        return null;
    }

    /**
     * Recursive method that ends edit mode for the node and all its children.
     * @param node Node for which edit mode should be ended
     */
    private resetNodeEditMode(node: IBrowserNode): void {
        if (node === null) {
            this.resetNodeEditMode(this.rootNode);
        } else {
            node.IsEditMode = false;

            if (node.ChildNodes) {
                node.ChildNodes.forEach((itm) => this.resetNodeEditMode(itm));
            }
        }
    }

    /**
     * Sets the path in all nodes
     */
    private setPathToAllNodes() {
        this.rootNode.ChildNodes.forEach((itm) => {
            this.fillPath(itm, '');
        });
    }

    // #endregion Private Methods
}
