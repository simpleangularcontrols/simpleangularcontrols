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
export abstract class SacAbstractIconService implements ISacIconService {}

/**
 * default icons service for components
 * */
@Injectable({ providedIn: 'root' })
export class SacDefaultIconService extends SacAbstractIconService {}
