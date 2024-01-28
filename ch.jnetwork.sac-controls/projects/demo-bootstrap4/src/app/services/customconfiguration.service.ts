import { Injectable } from '@angular/core';
import { SacAbstractConfigurationService } from '@simpleangularcontrols/sac-common';

@Injectable({
  providedIn: 'root',
})
export class CustomConfigurationService extends SacAbstractConfigurationService {
  // #region Public Getters And Setters

  public get LabelSizeLg(): number | null {
    return 3;
  }

  public get LabelSizeMd(): number | null {
    return 4;
  }

  public get LabelSizeSm(): number | null {
    return 4;
  }

  public get LabelSizeXl(): number | null {
    return 2;
  }

  public get LabelSizeXs(): number | null {
    return 12;
  }

  public get LabelSizeXxl(): number | null {
    return 2;
  }

  // #endregion Public Getters And Setters
}
