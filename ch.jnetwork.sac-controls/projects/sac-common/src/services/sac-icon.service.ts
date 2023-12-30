import { Injectable, InjectionToken } from '@angular/core';
import { ISacIconService } from '../interfaces/ISacIconService';

/**
 * injection token for component icon service
 */
export const SACICON_SERVICE = new InjectionToken<ISacIconService>(
  'SacIconService'
);

/**
 * abstract class for icon providing in components
 */
@Injectable({ providedIn: 'root' })
export abstract class SacAbstractIconService implements ISacIconService {
  /**
   * @inheritdoc
   */
  abstract get ContextMenuOpenIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get UploadComponentContinueIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get UploadComponentBrowseIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get UploadComponentDeleteIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get UploadComponentPauseIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get UploadComponentUploadIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get ConfirmDefaultImage(): string;
  /**
   * @inheritdoc
   */
  abstract get GridComponentSortUp(): string;
  /**
   * @inheritdoc
   */
  abstract get GridComponentSortDown(): string;
  /**
   * @inheritdoc
   */
  abstract get DateComponentSelectorIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get TimeComponentSelectorIcon(): string;
  /**
   * @inheritdoc
   */
  abstract get DateTimeComponentSelectorIcon(): string;
}

/**
 * default icons service for components
 * */
@Injectable({ providedIn: 'root' })
export class SacDefaultIconService extends SacAbstractIconService {
  /**
   * @inheritdoc
   */
  get ContextMenuOpenIcon(): string {
    return 'fas fa-ellipsis-v';
  }
  /**
   * @inheritdoc
   */
  get UploadComponentContinueIcon(): string {
    return 'fa fa-play';
  }
  /**
   * @inheritdoc
   */
  get UploadComponentBrowseIcon(): string {
    return 'fa fa-folder-open';
  }
  /**
   * @inheritdoc
   */
  get UploadComponentDeleteIcon(): string {
    return 'fa fa-times';
  }
  /**
   * @inheritdoc
   */
  get UploadComponentPauseIcon(): string {
    return 'fa fa-pause';
  }
  /**
   * @inheritdoc
   */
  get UploadComponentUploadIcon(): string {
    return 'fa fa-upload';
  }
  /**
   * @inheritdoc
   */
  get ConfirmDefaultImage(): string {
    return '/assets/icons/dialog/question.png';
  }
  /**
   * @inheritdoc
   */
  get GridComponentSortUp(): string {
    return 'fa fa-caret-up';
  }
  /**
   * @inheritdoc
   */
  get GridComponentSortDown(): string {
    return 'fa fa-caret-down';
  }
  /**
   * @inheritdoc
   */
  get DateComponentSelectorIcon(): string {
    return 'fa fa-calendar';
  }
  /**
   * @inheritdoc
   */
  get TimeComponentSelectorIcon(): string {
    return 'fa fa-clock';
  }
  /**
   * @inheritdoc
   */
  get DateTimeComponentSelectorIcon(): string {
    return 'fa fa-calendar';
  }
}
