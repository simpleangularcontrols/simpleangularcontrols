export class BrowserNodeRequest {
  constructor(init?: Partial<BrowserNodeRequest>) {
    Object.assign(this, init);
  }

  public Path: string;
  public AllowedTypes: string;
}
