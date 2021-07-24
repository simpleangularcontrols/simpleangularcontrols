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
import {
  FILEBROWSER_SERVICE,
  InternalFileBrowserService,
} from '../../services/filebrowser.service';
import { IBrowserFile } from './models/browserfile';
import { IBrowserNode } from './models/browsernode';

@Directive()
export abstract class NgFileBrowserCommon implements OnInit {
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
   * Service für File Browser Zugriff (Backend)
   */
  private browserService: IFileBrowserService;

  /**
   * URL für Backend API
   */
  @Input()
  public apiurl: string;

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
     if (this.selectNode) {
       this.selectedNode.Files.forEach((itm) => (itm.IsEditMode = false));
     }
 
     this.resetNodeEditMode(null);
   }

  /**
   * Konstruktor
   * @param httpclient Angular HTTP Client
   * @param injector Service Injector
   */
  constructor(private httpclient: HttpClient, injector: Injector) {
    this.browserService = injector.get(
      FILEBROWSER_SERVICE,
      new InternalFileBrowserService(httpclient)
    );
  }

  /**
   * Init Event der Komponente
   */
  ngOnInit(): void {
    this.browserService.GetNode(this.apiurl, '').subscribe((result) => {
      this.rootNode = {
        Name: result.Name,
        Files: result.Files,
        ChildNodes: result.ChildNodes,
        IsExpanded: true,
        IsEditMode: false,
        IsNewNode: false,
        Path: '/',
      };

      this.rootNode.ChildNodes.forEach((itm) => {
        this.fillPath(itm, '');
      });

      this.selectedNode = this.rootNode;
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
        .GetFiles(this.apiurl, node.Path)
        .subscribe((result) => {
          node.Files = result;
          this.selectedNode = node;
        });
    } else {
      this.selectedNode = node;
    }
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
        node.Name = newFoldername;
        window.alert('Rename Folder');
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
      alert('Add Folder');
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
      IsEditMode: true,
      IsExpanded: false,
      Name: '',
      Path: node.Path,
      IsNewNode: true,
    };

    node.ChildNodes.push(item);
  }

  /**
   * Löscht einen Node
   * @param node Node welcher gelöscht werden soll
   */
  public deleteNode(node: IBrowserNode): void {
    this.confirmDeleteNode(node).subscribe((result) => {
      if (result) {
        alert('Delete Folder');
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
    this.confirmDeleteFile(file).subscribe((result) => {
      if (result) {
        alert('Delete File');
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
      file.Filename = newFilename;
      window.alert('Rename File');
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
}
