export class BrowserFileSaveRequest {
  constructor(init?: Partial<BrowserFileSaveRequest>) {
    Object.assign(this, init);
  }

  public Path: string;
  public UploadId: string;
}
