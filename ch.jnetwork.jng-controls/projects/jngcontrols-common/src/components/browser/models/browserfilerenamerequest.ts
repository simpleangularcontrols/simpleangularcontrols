export class BrowserFileRenameRequest {
  constructor(init?: Partial<BrowserFileRenameRequest>) {
    Object.assign(this, init);
  }

  Path: string;
  NewFilename: string;
}
