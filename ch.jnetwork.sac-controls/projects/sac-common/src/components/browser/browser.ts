import { HttpClient } from '@angular/common/http';
import {
  Directive,
  EventEmitter,
  HostListener,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IFileBrowserService } from '../../interfaces/IFileBrowserService';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { SACLOCALISATION_SERVICE } from '../../services';
import {
  FILEBROWSER_SERVICE,
  InternalFileBrowserService,
} from '../../services/filebrowser.service';
import { SacDefaultLocalisationService } from '../../services/sac-localisation.service';
import { IBrowserFile } from './models/browserfile';
import { IBrowserFileResponse } from './models/browserfileresponse';
import { IBrowserNode } from './models/browsernode';
import { IBrowserNodeResponse } from './models/browsernoderesponse';

/**
 * Base Component für File Browser
 */
@Directive()
export abstract class SacFileBrowserCommon implements OnInit {
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
   * Root Node Item für Tree
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
   * Liste von Uploads
   */
  public uploads: string[] = [];
  /**
   * Service für Error Localisation
   */
  public lngResourceService: ISacLocalisationService;

  /**
   * Service für File Browser Zugriff (Backend)
   */
  private browserService: IFileBrowserService;
  /**
   * File welches beim starten des Browsers bereits selektiert ist
   */
  private preselecedfile: string | null = null;
  /**
   * Setzt den Seleced Node über den Pfad
   */
  @Input()
  public set selectedfile(v: string | null) {
    const selectednode = this.findSelectedNodeByPath(this.rootNode, v);

    if (selectednode !== null) {
      this.selectNode(selectednode);
    }

    this.preselecedfile = v;
  }
  /**
   * Getter für Selected File. Ist an Input Property gebunden
   */
  public get selectedfile(): string | null {
    if (this.selectFile && this.selectFile.length > 0) {
      return this.selectedFile;
    } else {
      return null;
    }
  }

  /**
   * URL für Backend API
   */
  @Input()
  public apiurl: string;

  /**
   * Erlaubt das Umbenennen eines Ordners
   */
  @Input()
  public allowfolderrename: boolean = true;

  /**
   * Erlaubt das löschen eines Ordners
   */
  @Input()
  public allowfolderdelete: boolean = true;

  /**
   * Erlaubt das erstellen eines neuen Ordners
   */
  @Input()
  public allowfoldercreate: boolean = true;

  /**
   * Erlaubt den Upload von Dateien
   */
  @Input()
  public allowfileupload: boolean = true;

  /**
   * Erlaubt das umbenennen einer Datei
   */
  @Input()
  public allowfilerename: boolean = true;

  /**
   * Erlaubt das löschen einer Datei
   */
  @Input()
  public allowfiledelete: boolean = true;

  /**
   * Erlaubte Dateierweiterungen für Fileauswahl und Upload. Dateierweiterung mit Punkt und
   * getrennt durch Komma für mehr als eine Erweiterung (Example: ".jpg,.gif")
   */
  @Input()
  public allowedtypes: string = '';

  /**
   * Output Emitter wenn File selektiert wird.
   */
  @Output()
  public file: EventEmitter<string> = new EventEmitter<string>();

  /**
   * HostListener welcher den Edit Mode bei allen Files und Nodes beendet.
   */
  @HostListener('document:click', ['$event.target'])
  /**
   * Click Event
   */
  exitEditMode(targetElement): void {
    if (this.selectedNode) {
      this.selectedNode.Files.forEach((itm) => (itm.IsEditMode = false));

      if (
        !this.selectedNode ||
        this.selectedNode.Name === null ||
        this.selectedNode.Name.length === 0
      ) {
        this.clearNewChildNodes(this.rootNode);
      }
    }

    this.resetNodeEditMode(null);
  }

  /**
   * Konstruktor
   * @param httpclient Angular HTTP Client
   * @param injector Service Injector
   */
  constructor(httpclient: HttpClient, injector: Injector) {
    this.browserService = injector.get(
      FILEBROWSER_SERVICE,
      new InternalFileBrowserService(httpclient)
    );

    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new SacDefaultLocalisationService()
    );
  }

  /**
   * Init Event der Komponente
   */
  ngOnInit(): void {
    this.browserService
      .GetNode(this.apiurl, '', this.allowedtypes)
      .subscribe((result: IBrowserNodeResponse) => {
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

        // Selected File erneut setzen, wenn Property gesetzt wurde bevor Daten vom Service geladen wurden.
        if (this.preselecedfile !== null && this.preselecedfile.length > 0) {
          this.selectedfile = this.preselecedfile;
        }
      });
  }

  /**
   * Expand/Collabse Methode für Nodes
   * @param node Node welcher geöffnet oder geschlossen werden soll
   */
  public switchExpandNode(node: IBrowserNode): void {
    if (node.IsExpanded) {
      node.IsExpanded = false;
    } else {
      node.IsExpanded = true;
    }
  }

  /**
   * Methode wenn ein Node selektiert wird
   * @param node Node welcher selektiert werden soll
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
            const filename = this.preselecedfile.substring(
              this.preselecedfile.lastIndexOf('/') + 1
            );
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
   * Aktualisiert den Node
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
   * Setzt einen Node in den Edit Mode
   * @param node Node welcher bearbeitet werden soll
   */
  public editNode(node: IBrowserNode): void {
    node.IsEditMode = true;
  }

  /**
   * Methode wenn ein Node umbenannt werden soll
   * @param node Node welcher umbenannt werden soll
   * @param newFoldername Neuer Ordnername
   */
  public renameNode(node: IBrowserNode, newFoldername: string): void {
    node.IsEditMode = false;

    if (!node.IsNewNode) {
      if (
        !newFoldername ||
        newFoldername === null ||
        newFoldername.length === 0
      ) {
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
      if (
        !newFoldername ||
        newFoldername === null ||
        newFoldername.length === 0
      ) {
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
   * Erzeugt einen neuen Node im Tree
   * @param node Node unter welchem ein neuer Node erstellt werden soll
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
   * Löscht einen Node
   * @param node Node welcher gelöscht werden soll
   */
  public deleteNode(node: IBrowserNode): void {
    this.confirmDeleteNode(node).subscribe((confirm) => {
      if (confirm) {
        this.browserService
          .DeleteNode(this.apiurl, node.Path)
          .subscribe((result: IBrowserNodeResponse) => {
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
   * Methode wenn ein File selektiert wird
   * @param file File welches selektiert wird
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
   * Löscht ein File
   * @param file File welches gelöscht werden soll
   */
  public deleteFile(file: IBrowserFile): void {
    this.confirmDeleteFile(file).subscribe((confirm) => {
      if (confirm) {
        this.browserService
          .DeleteFile(
            this.apiurl,
            this.selectedNode.Path + '/' + file.Filename,
            this.allowedtypes
          )
          .subscribe((result: IBrowserFileResponse) => {
            this.selectedNode.Files = result.Files;
          });
      }
    });
  }

  /**
   * Setzt ein File in den Edit Mode
   * @param file File welches in den Edit Mode gesetzt werden soll
   */
  public editFile(file: IBrowserFile): void {
    file.IsEditMode = true;
  }

  /**
   * Methode wenn eine Datei umbenannt werden soll
   * @param file File welches umbenannt werden soll
   * @param newFilename Neuer Dateiname
   */
  public renameFile(file: IBrowserFile, newFilename: string): void {
    file.IsEditMode = false;

    if (!newFilename || newFilename === null || newFilename.length === 0) {
      // Cancel, Invalid Filename
      return;
    }

    if (file.Filename !== newFilename) {
      this.browserService
        .RenameFile(
          this.apiurl,
          this.selectedNode.Path + '/' + file.Filename,
          newFilename,
          this.allowedtypes
        )
        .subscribe((result: IBrowserFileResponse) => {
          this.selectedNode.Files = result.Files;
        });
    }
  }

  /**
   * Methode die Aufgerufen werden muss, wenn ein Upload beendet ist.
   * @param param Parameter des hochgeladenen Files
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
   * Abstrakte Confirm Methode welche implementiert werden muss. Methode wird aufgerufen, wenn eine
   * Datei gelöscht werden soll.
   * @param file File für welches ein Delete Confirm eingefordert werden soll
   */
  public abstract confirmDeleteFile(file: IBrowserFile): Observable<boolean>;

  /**
   * Abstrakte Confirm Methode welche implementiert werden muss. Methode wird aufgerufen, wenn ein
   * Ordner gelöscht werden soll.
   * @param folder Ordern für welchen ein Delete Confirm eingefordert werden soll.
   */
  public abstract confirmDeleteNode(folder: IBrowserNode): Observable<boolean>;

  /**
   * Abstrakte Methode die Aufgerufen wird, wenn das Hochgeladene File aus dem Temp Folder in die
   * Struktur verschoben wurde.
   * @param uploadid ID des Uploads
   */
  public abstract uploadedFileMoved(uploadid: string): void;

  /**
   * Methode welche den Pfad für einen Node erzeugt
   * @param node Node für welchen der Pfad erzeugt werden soll
   * @param parentPath Übergeordneter Pfad
   */
  private fillPath(node: IBrowserNode, parentPath: string) {
    node.Path = parentPath + '/' + node.Name;
    node.ChildNodes.forEach((itm) => {
      this.fillPath(itm, node.Path);
    });
  }

  /**
   * Rekursive Methode welche beim Node und all seinen Childs den Edit Mode beendet.
   * @param node Node bei welchem der Edit Mode beendet werden soll
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
   * Rekursive Methode welche beim Node und all seinen Childs neue Nodes entfernt
   * @param node Node bei welchem alle neuen Nodes entfernt werden soll.
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
   * Sucht den übergeordneten Node im Tree
   * @param node Aktueller Node
   * @param nodeToFind Node welcher gefunden werden soll
   * @returns Node wenn er gefunden wurde, ansonsten wird NULL zurückgegeben
   */
  private findParentNode(
    node: IBrowserNode,
    nodeToFind: IBrowserNode
  ): IBrowserNode {
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
   * Setzt den Pfad in allen Nodes
   */
  private setPathToAllNodes() {
    this.rootNode.ChildNodes.forEach((itm) => {
      this.fillPath(itm, '');
    });
  }

  /**
   * Sucht einen Node gem. einem URL Pfad
   * @param node Node in welchem gesucht werden soll
   * @param path Pfad nach welchem gesucht wird
   * @returns Node welcher zum gesuchten Pfad passt. Wenn kein Node gefunden wird, wird NULL zurückgegeben
   */
  private findSelectedNodeByPath(
    node: IBrowserNode,
    path: string
  ): IBrowserNode {
    // Cancel wenn Pfad nicht definiert
    if (path === undefined || path === null) {
      return null;
    }

    // Pfad in Array splitten und Root Foldername setzen
    const pathArray = path.split('/');
    pathArray[0] = this.rootNode.Name;

    return this.findSelectedNodeByPathArray(node, pathArray, 0);
  }

  /**
   * Sucht einen Node gem. einem Array von Node Namen
   * @param node Node in welchem gesucht werden soll
   * @param path Array von Node Namen, welche die Hirarchy des Pfades abbilden
   * @param index Aktueller Index im PATH Array
   * @returns Node wenn einer gefunden wurde, ansonsten NULL
   */
  private findSelectedNodeByPathArray(
    node: IBrowserNode,
    path: string[],
    index: number
  ): IBrowserNode {
    // Check ob Ordner korrekt. Letzer Ordner zurückgeben. Path Last Index ist der Filename
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
}
