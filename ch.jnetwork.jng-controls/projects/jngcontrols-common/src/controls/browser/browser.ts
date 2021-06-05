import { HttpClient } from '@angular/common/http';
import { Directive, Injector, Input, OnInit } from '@angular/core';
import { IBrowserNode } from './models/browsernode';
import { IFileBrowserService } from '../../interfaces/IFileBrowserService';
import {
  FILEBROWSER_SERVICE,
  InternalFileBrowserService,
} from '../../services/filebrowser.service';
import { IBrowserFile } from './models/browserfile';

@Directive()
export class NgFileBrowserCommon implements OnInit {
  @Input()
  public apiurl: string;

  public selectedFile: string;

  public rootNode: IBrowserNode = {
    Name: '',
    ChildNodes: [],
    Files: [],
    IsExpanded: true,
    Path: '',
  };

  public selectedNode: IBrowserNode = null;

  private browserService: IFileBrowserService;

  constructor(httpclient: HttpClient, injector: Injector) {
    this.browserService = injector.get(
      FILEBROWSER_SERVICE,
      new InternalFileBrowserService(httpclient)
    );
  }

  ngOnInit(): void {
    this.browserService.GetNode(this.apiurl, '').subscribe((result) => {
      this.rootNode = {
        Name: result.Name,
        Files: result.Files,
        ChildNodes: result.ChildNodes,
        IsExpanded: true,
        Path: '/',
      };

      this.rootNode.ChildNodes.forEach((itm) => {
        this.FillPath(itm, '');
      });

      this.selectedNode = this.rootNode;
    });
  }

  public switchExpandNode(node: IBrowserNode): void {
    if (node.IsExpanded) {
      node.IsExpanded = false;
    } else {
      node.IsExpanded = true;
    }
  }

  public selectNode(node: IBrowserNode): void {
    this.switchExpandNode(node);

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

  public selectFile(file: IBrowserFile) {
    this.selectedFile = this.selectedNode.Path + '/' + file.Filename;
  }

  private FillPath(node: IBrowserNode, parentPath: string) {
    node.Path = parentPath + '/' + node.Name;
    node.ChildNodes.forEach((itm) => {
      this.FillPath(itm, node.Path);
    });
  }
}
