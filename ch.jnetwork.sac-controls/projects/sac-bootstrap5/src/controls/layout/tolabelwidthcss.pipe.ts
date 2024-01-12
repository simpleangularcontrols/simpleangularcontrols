import { Pipe, PipeTransform } from '@angular/core';
import { ISacLabelSizes } from '@simpleangularcontrols/sac-common';

@Pipe({
  name: 'toLabelWidthCss',
})
export class SacToLabelWidthCssPipe implements PipeTransform {
  // #region Public Methods

  /**
   * Get CSS classes from label width configuration to set label size
   * @param value Configuration with grid columns for different viewports
   * @returns string with css classe for bootstrap3
   */
  public transform(value: ISacLabelSizes): string {
    const classes: string[] = [];

    if (value.labelSizeXs) {
      classes.push('col-' + value.labelSizeXs);
    }

    if (value.labelSizeSm) {
      classes.push('col-sm-' + value.labelSizeSm);
    }

    if (value.labelSizeMd) {
      classes.push('col-md-' + value.labelSizeMd);
    }

    if (value.labelSizeLg) {
      classes.push('col-lg-' + value.labelSizeLg);
    }

    if (value.labelSizeXl) {
      classes.push('col-xl-' + value.labelSizeXl);
    }

    if (value.labelSizeXxl) {
      classes.push('col-xxl-' + value.labelSizeXxl);
    }

    return classes.join(' ');
  }

  // #endregion Public Methods
}
