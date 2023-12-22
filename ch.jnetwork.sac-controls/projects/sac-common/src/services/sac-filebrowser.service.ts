import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserFileDeleteRequest } from '../components/browser/models/browserfiledeleterequest';
import { BrowserFileRenameRequest } from '../components/browser/models/browserfilerenamerequest';
import { IBrowserFileResponse } from '../components/browser/models/browserfileresponse';
import { BrowserFileSaveRequest } from '../components/browser/models/browserfilesaverequest';
import { BrowserNodeDeleteRequest } from '../components/browser/models/browsernodedeleterequest';
import { BrowserNodeNewRequest } from '../components/browser/models/browsernodenewrequest';
import { BrowserNodeRenameRequest } from '../components/browser/models/browsernoderenamerequest';
import { BrowserNodeRequest } from '../components/browser/models/browsernoderequest';
import { IBrowserNodeResponse } from '../components/browser/models/browsernoderesponse';
import { ISacFileBrowserService } from '../interfaces/ISacFileBrowserService';

/**
 * Injection Token für Language Service
 */
export const SACFILEBROWSER_SERVICE =
  new InjectionToken<ISacFileBrowserService>('FileBrowserService');

/**
 * Abstrakte Implementierung des File Service für die Browser Component
 */
@Injectable({
  providedIn: 'root',
})
export abstract class SacAbstractFileBrowserService
  implements ISacFileBrowserService
{
  /**
   * Gibt einen Node zurück
   * @param apiurl URL zu API Service
   * @param path Pfad des Node welcher angefordert wird
   * @param allowedextensions Erlaubte Extensions die angezeigt werden dürfen
   */
  abstract GetNode(
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
  abstract SaveNode(
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
  abstract RenameNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;

  /**
   * Löscht einen Node
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes welcher gelöscht werden soll
   */
  abstract DeleteNode(
    apiurl: string,
    path: string
  ): Observable<IBrowserNodeResponse>;

  /**
   * Methode welche die Dateien eines Nodes ausliest
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes in welchem die Files gelesen werden sollen
   * @param allowedextensions Erlaubte File Extensions
   */
  abstract GetFiles(
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
  abstract SaveFile(
    apiurl: string,
    path: string,
    id: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse>;

  /**
   * Methode welche eine Datei umbenannt
   * @param apiurl URL zu API Service
   * @param path Pfad zum File welches umbenannt werden soll
   * @param newFilename Neuer Dateiname
   * @param allowedextensions Erlaubte Extension für Files
   */
  abstract RenameFile(
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
  abstract DeleteFile(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse>;
}

/**
 * Standardimplementierung des Backend Service für die File Browser Component
 */
@Injectable({
  providedIn: 'root',
})
export class SacDefaultFileBrowserService extends SacAbstractFileBrowserService {
  /**
   * Konstruktor
   * @param httpclient HTTP Client Service
   */
  constructor(private httpclient: HttpClient) {
    super();
  }

  /**
   * Gibt einen Node zurück
   * @param apiurl URL zu API Service
   * @param path Pfad des Node welcher angefordert wird
   * @param allowedextensions Erlaubte Extensions die angezeigt werden dürfen
   */
  public GetNode(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserNodeResponse> {
    const url = `${apiurl}/getnodes`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRequest({
      Path: path,
      AllowedTypes: allowedextensions,
    });

    return this.httpclient.post<IBrowserNodeResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Speichert einen Node
   * @param apiurl URL zu API Service
   * @param path Pfad in welchem der Node gespeichert werden soll
   * @param newFoldername Name des neuen Nodes
   */
  public SaveNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse> {
    const url = `${apiurl}/newnode`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeNewRequest({
      Path: path,
      NewFoldername: newFoldername,
    });

    return this.httpclient.post<IBrowserNodeResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Rename eines Nodes
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes welcher umbenannt werden soll
   * @param newFoldername Neuer Name des Nodes
   */
  public RenameNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse> {
    const url = `${apiurl}/renamenode`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRenameRequest({
      Path: path,
      NewFoldername: newFoldername,
    });

    return this.httpclient.put<IBrowserNodeResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Löscht einen Node
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes welcher gelöscht werden soll
   */
  public DeleteNode(
    apiurl: string,
    path: string
  ): Observable<IBrowserNodeResponse> {
    const url = `${apiurl}/deletenode`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeDeleteRequest({
      Path: path,
    });

    return this.httpclient.post<IBrowserNodeResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Methode welche die Dateien eines Nodes ausliest
   * @param apiurl URL zu API Service
   * @param path Pfad des Nodes in welchem die Files gelesen werden sollen
   * @param allowedextensions Erlaubte File Extensions
   */
  public GetFiles(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/getfiles`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRequest({
      Path: path,
      AllowedTypes: allowedextensions,
    });

    return this.httpclient.post<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Speichert eine Hochgeladene Datei in der Struktur
   * @param apiurl URL zu API Service
   * @param path Pfad in welchem das neue File gespeichert werden soll
   * @param id ID des Uploads
   * @param allowedextensions Erlaubte Extensions für den Upload
   */
  public SaveFile(
    apiurl: string,
    path: string,
    id: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/uploadfile`;

    if (!path) {
      path = '';
    }

    const request = new BrowserFileSaveRequest({
      Path: path,
      UploadId: id,
      AllowedTypes: allowedextensions,
    });

    return this.httpclient.post<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Löscht eine Datei
   * @param apiurl URL zu API Service
   * @param path Pfad des Files welches gelöscht werden soll
   * @param allowedextensions Erlaubte Extensions für Files
   */
  public DeleteFile(
    apiurl: string,
    path: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/deletefile`;

    if (!path) {
      path = '';
    }

    const request = new BrowserFileDeleteRequest({
      Path: path,
      AllowedTypes: allowedextensions,
    });

    return this.httpclient.post<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }

  /**
   * Methode welche eine Datei umbenannt
   * @param apiurl URL zu API Service
   * @param path Pfad zum File welches umbenannt werden soll
   * @param newFilename Neuer Dateiname
   * @param allowedextensions Erlaubte Extension für Files
   */
  public RenameFile(
    apiurl: string,
    path: string,
    newFilename: string,
    allowedextensions: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/renamefile`;

    if (!path) {
      path = '';
    }

    const request = new BrowserFileRenameRequest({
      Path: path,
      NewFilename: newFilename,
      AllowedTypes: allowedextensions,
    });

    return this.httpclient.put<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }
}
