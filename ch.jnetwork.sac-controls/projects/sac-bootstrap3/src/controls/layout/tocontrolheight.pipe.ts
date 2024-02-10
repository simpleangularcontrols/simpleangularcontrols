import { Pipe, PipeTransform } from '@angular/core';
import { ControlHeight } from '@simpleangularcontrols/sac-common';

@Pipe({
  name: 'toControlHeight',
})
export class SacToControlHeightPipe implements PipeTransform {
  // #region Public Methods

  /**
   * Returns the CSS class that defines the height for the control
   * @param value ControlHeight value or null
   */
  public transform(value: ControlHeight | null): string {
    // Return default value
    if (!value) {
      return '';
    }

    switch (value) {
      case ControlHeight.Small:
        return 'input-sm';
      case ControlHeight.Large:
        return 'input-lg';
      default:
        return '';
    }
  }

  // #endregion Public Methods
}
