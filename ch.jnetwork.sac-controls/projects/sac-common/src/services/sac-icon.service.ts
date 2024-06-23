import { Injectable, InjectionToken } from '@angular/core';
import { ISacIconService } from '../interfaces/ISacIconService';

// #region Classes

/**
 * abstract class for icon providing in components
 */
@Injectable({ providedIn: 'root' })
export abstract class SacAbstractIconService implements ISacIconService {
  // #region Public Abstract Getters And Setters

  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentDeleteIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentEditIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentFolderClosedIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentFolderEmptyIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentFolderNewIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentFolderOpenIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get BrowserComponentRefreshIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get ConfirmDefaultImage(): string;
  /**
   * @inheritdoc
   */
  public abstract get ContextMenuOpenIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get DateComponentSelectorIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get DateTimeComponentSelectorIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get DateTimeSelectorComponentMonthNextIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get DateTimeSelectorComponentMonthPrevIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get GridComponentSortDown(): string;
  /**
   * @inheritdoc
   */
  public abstract get GridComponentSortUp(): string;
  /**
   * @inheritdoc
   */
  public abstract get TimeComponentSelectorIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get UploadComponentBrowseIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get UploadComponentContinueIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get UploadComponentDeleteIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get UploadComponentPauseIcon(): string;
  /**
   * @inheritdoc
   */
  public abstract get UploadComponentUploadIcon(): string;

  // #endregion Public Abstract Getters And Setters
}

/**
 * default icons service for components
 * */
@Injectable({ providedIn: 'root' })
export class SacDefaultIconService extends SacAbstractIconService {
  // #region Public Getters And Setters

  /**
   * @inheritdoc
   */
  public get BrowserComponentDeleteIcon(): string {
    return 'fas fa-trash';
  }

  /**
   * @inheritdoc
   */
  public get BrowserComponentEditIcon(): string {
    return 'fas fa-pen';
  }

  /**
   * @inheritdoc
   */
  public get BrowserComponentFolderClosedIcon(): string {
    return 'fa fa-folder-plus';
  }

  /**
   * @inheritdoc
   */
  public get BrowserComponentFolderEmptyIcon(): string {
    return 'fa fa-folder';
  }

  /**
   * @inheritdoc
   */
  public get BrowserComponentFolderNewIcon(): string {
    return 'far fa-folder';
  }

  /**
   * @inheritdoc
   */
  public get BrowserComponentFolderOpenIcon(): string {
    return 'fa fa-folder-open';
  }

  /**
   * @inheritdoc
   */
  public get BrowserComponentRefreshIcon(): string {
    return 'fas fa-sync-alt';
  }

  /**
   * @inheritdoc
   */
  public get ConfirmDefaultImage(): string {
    return '/assets/icons/dialog/question.png';
  }

  /**
   * @inheritdoc
   */
  public get ContextMenuOpenIcon(): string {
    return 'fas fa-ellipsis-v';
  }

  /**
   * @inheritdoc
   */
  public get DateComponentSelectorIcon(): string {
    return 'fa fa-calendar';
  }

  /**
   * @inheritdoc
   */
  public get DateTimeComponentSelectorIcon(): string {
    return 'fa fa-calendar';
  }

  /**
   * @inheritdoc
   */
  public get DateTimeSelectorComponentMonthNextIcon(): string {
    return 'fa fa-chevron-right';
  }

  /**
   * @inheritdoc
   */
  public get DateTimeSelectorComponentMonthPrevIcon(): string {
    return 'fa fa-chevron-left';
  }

  /**
   * @inheritdoc
   */
  public get GridComponentSortDown(): string {
    return 'fa fa-caret-down';
  }

  /**
   * @inheritdoc
   */
  public get GridComponentSortUp(): string {
    return 'fa fa-caret-up';
  }

  /**
   * @inheritdoc
   */
  public get TimeComponentSelectorIcon(): string {
    return 'fa fa-clock';
  }

  /**
   * @inheritdoc
   */
  public get UploadComponentBrowseIcon(): string {
    return 'fa fa-folder-open';
  }

  /**
   * @inheritdoc
   */
  public get UploadComponentContinueIcon(): string {
    return 'fa fa-play';
  }

  /**
   * @inheritdoc
   */
  public get UploadComponentDeleteIcon(): string {
    return 'fa fa-times';
  }

  /**
   * @inheritdoc
   */
  public get UploadComponentPauseIcon(): string {
    return 'fa fa-pause';
  }

  /**
   * @inheritdoc
   */
  public get UploadComponentUploadIcon(): string {
    return 'fa fa-upload';
  }

  // #endregion Public Getters And Setters
}

// #endregion Classes

// #region Variables

/**
 * injection token for component icon service
 */
export const SACICON_SERVICE = new InjectionToken<ISacIconService>(
  'SacIconService'
);

// #endregion Variables
