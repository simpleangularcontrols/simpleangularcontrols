/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { uuid } from './utils';

export type callbackFn = () => void;

/**
 * interface. Enthielt properties listeners von type callbackFn, scriptId von type string und scriptLoaded von type boolean
 */
export interface IStateObj {

  /**
   * array von callbackFn
   */
  listeners: callbackFn[];
  /**
   * Id des Scripts. typ string
   */
  scriptId: string;
  /**
   * boolean property, deffiniert ob den script sich loadet. Default ist nicht deffiniert. 
   */
  scriptLoaded: boolean;
}

/**
*Funktion.  Fügt ein scripttag hinzu. Verlangt: 
* scriptId: string, 
* doc: Document, 
* url: string, 
 *callback: callbackFn
 */
const injectScriptTag = (scriptId: string, doc: Document, url: string, callback: callbackFn) => {
  const scriptTag = doc.createElement('script');
  scriptTag.type = 'application/javascript';
  scriptTag.id = scriptId;
  scriptTag.addEventListener('load', callback);
  scriptTag.src = url;
  doc.head.appendChild(scriptTag);
};

/**
 * Funktion create. Returns IStateObj
 */
export const create = (): IStateObj => {
  return {
    listeners: [],
    scriptId: uuid('tiny-script'),
    scriptLoaded: false
  };
};

/**
 * Funktion load. Verlangt:
 * state: IStateObj
 * doc: Document 
 * url: string
 * callback: callbackFn
 */
export const load = (state: IStateObj, doc: Document, url: string, callback: callbackFn) => {
  if (state.scriptLoaded) {
    callback();
  } else {
    state.listeners.push(callback);
    if (!doc.getElementById(state.scriptId)) {
      injectScriptTag(state.scriptId, doc, url, () => {
        state.listeners.forEach((fn) => fn());
        state.scriptLoaded = true;
      });
    }
  }
};
