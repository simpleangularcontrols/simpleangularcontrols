import { Observable } from 'rxjs';
import { IBrowserFileResponse } from '../components/browser/models/browserfileresponse';
import { IBrowserNodeResponse } from '../components/browser/models/browsernoderesponse';

/**
 * Interface für File Browser Service
 */
export interface ISacFileBrowserService {
  /**
   * Methode welche die Dateien eines Nodes ausliest
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes in welchem die Files gelesen werden sollen
   * @param allowedextensions Erlaubte File Extensions
   */
  GetFiles(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse>;

  /**
   * Speichert eine Hochgeladene Datei in der Struktur
   * @param apiurl URL zu API Service
   * @param path Pfad in welchem das neue File gespeichert werden soll
   * @param id ID des Uploads
   * @param allowedextensions Erlaubte Extensions für den Upload
   */
  SaveFile(
    apiurl: string,
    path: string,
    uploadid: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse>;

  /**
   * Methode welche eine Datei umbenannt
   * @param apiurl URL zu API Service
   * @param path Pfad zum File welches umbenannt werden soll
   * @param newFilename Neuer Dateiname
   * @param allowedextensions Erlaubte Extension für Files
   */
  RenameFile(
    apiurl: string,
    path: string,
    newFilename: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse>;

  /**
   * Löscht eine Datei
   * @param apiurl URL zu API Service
   * @param path Pfad des Files welches gelöscht werden soll
   * @param allowedextensions Erlaubte Extensions für Files
   */
  DeleteFile(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse>;

  /**
   * Gibt einen Node zurück
   * @param apiurl URL zu API Service
   * @param path Pfad des Node welcher angefordert wird
   * @param allowedextensions Erlaubte Extensions die angezeigt werden dürfen
   */
  GetNode(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserNodeResponse>;

  /**
   * Speichert einen Node
   * @param apiurl URL zu API Service
   * @param path Pfad in welchem der Node gespeichert werden soll
   * @param newFoldername Name des neuen Nodes
   */
  SaveNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;

  /**
   * Rename eines Nodes
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes welcher umbenannt werden soll
   * @param newFoldername Neuer Name des Nodes
   */
  RenameNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;

  /**
   * Löscht einen Node
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes welcher gelöscht werden soll
   */
  DeleteNode(apiurl: string, path: string): Observable<IBrowserNodeResponse>;
}
