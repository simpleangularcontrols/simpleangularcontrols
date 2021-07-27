export class BrowserNodeNewRequest {
  constructor(init?: Partial<BrowserNodeNewRequest>) {
    Object.assign(this, init);
  }

  Path: string;
  NewFoldername: string;
}
