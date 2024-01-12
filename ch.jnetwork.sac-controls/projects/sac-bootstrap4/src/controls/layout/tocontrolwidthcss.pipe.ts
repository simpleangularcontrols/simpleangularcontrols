import { Pipe, PipeTransform } from '@angular/core';
import { ISacLabelSizes } from '@simpleangularcontrols/sac-common';

@Pipe({
  name: 'toControlWidthCss',
  standalone: true,
})
export class SacToControlWidthCssPipe implements PipeTransform {
  // #region Public Methods

  /**
   * Get CSS classes from label width configuration to set control size
   * @param value Configuration with grid columns for different viewports
   * @returns string with css classe for bootstrap3
   */
  public transform(value: ISacLabelSizes): string {
    const classes: string[] = [];

    if (value.labelSizeXs) {
      classes.push('col-' + this.calcControlSize(value.labelSizeXs));
    }

    if (value.labelSizeSm) {
      classes.push('col-sm-' + this.calcControlSize(value.labelSizeSm));
    }

    if (value.labelSizeMd) {
      classes.push('col-md-' + this.calcControlSize(value.labelSizeMd));
    }

    if (value.labelSizeLg) {
      classes.push('col-lg-' + this.calcControlSize(value.labelSizeLg));
    }

    if (value.labelSizeXl) {
      classes.push('col-xl-' + this.calcControlSize(value.labelSizeXl));
    }

    return classes.join(' ');
  }

  // #endregion Public Methods

  // #region Private Methods

  /**
   * calculate the control size
   * @param labelsize grid size of label
   * @returns grid size for control. should be between 1 and 12
   */
  private calcControlSize(labelsize: number) {
    if (labelsize === 12) {
      return 12;
    }

    if (!labelsize) {
      return 12;
    }

    return 12 - labelsize;
  }

  // #endregion Private Methods
}
