import { Injectable, InjectionToken } from '@angular/core';
import { ControlHeight } from '../enums/ControlHeight';
import { ISacConfigurationService } from '../interfaces/ISacConfigurationService';

// #region Classes

/**
 * abstract class for configuration settings providing in components
 */
@Injectable({ providedIn: 'root' })
export abstract class SacAbstractConfigurationService
  implements ISacConfigurationService
{
  // #region Public Abstract Getters And Setters

  /**
   * @inheritdoc
   */
  public abstract get ComponentHeight(): ControlHeight | null;
  /**
   * @inheritdoc
   */
  public abstract get LabelSizeLg(): number | null;
  /**
   * @inheritdoc
   */
  public abstract get LabelSizeMd(): number | null;
  /**
   * @inheritdoc
   */
  public abstract get LabelSizeSm(): number | null;
  /**
   * @inheritdoc
   */
  public abstract get LabelSizeXl(): number | null;
  /**
   * @inheritdoc
   */
  public abstract get LabelSizeXs(): number | null;
  /**
   * @inheritdoc
   */
  public abstract get LabelSizeXxl(): number | null;

  // #endregion Public Abstract Getters And Setters
}

/**
 * default configuration service for components
 * */
@Injectable({ providedIn: 'root' })
export class SacDefaultConfigurationService extends SacAbstractConfigurationService {
  // #region Public Getters And Setters

  public get ComponentHeight(): ControlHeight {
    return null;
  }

  /**
   * @inheritdoc
   */
  public get LabelSizeLg(): number | null {
    return null;
  }

  /**
   * @inheritdoc
   */
  public get LabelSizeMd(): number | null {
    return null;
  }

  /**
   * @inheritdoc
   */
  public get LabelSizeSm(): number | null {
    return 4;
  }

  /**
   * @inheritdoc
   */
  public get LabelSizeXl(): number | null {
    return null;
  }

  /**
   * @inheritdoc
   */
  public get LabelSizeXs(): number | null {
    return 12;
  }

  /**
   * @inheritdoc
   */
  public get LabelSizeXxl(): number | null {
    return null;
  }

  // #endregion Public Getters And Setters
}

// #endregion Classes

// #region Variables

/**
 * injection token for component configuration service
 */
export const SACCONFIGURATION_SERVICE =
  new InjectionToken<ISacConfigurationService>('SacConfigurationService');

// #endregion Variables
