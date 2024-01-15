import { SacAbstractConfigurationService } from '@simpleangularcontrols/sac-common';

export class CustomConfigurationService extends SacAbstractConfigurationService {
  get LabelSizeLg(): number | null {
    return 3;
  }
  get LabelSizeMd(): number | null {
    return 4;
  }
  get LabelSizeSm(): number | null {
    return 4;
  }
  get LabelSizeXl(): number | null {
    return 2;
  }
  get LabelSizeXs(): number | null {
    return 12;
  }
  get LabelSizeXxl(): number | null {
    return 2;
  }
}
