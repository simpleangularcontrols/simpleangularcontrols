export class BrowserNodeRenameRequest {
  constructor(init?: Partial<BrowserNodeRenameRequest>) {
    Object.assign(this, init);
  }

  Path: string;
  NewFoldername: string;
}
