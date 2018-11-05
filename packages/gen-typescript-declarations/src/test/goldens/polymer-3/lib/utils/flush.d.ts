/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/flush.js
 */


// tslint:disable:variable-name API description

import {Debouncer} from '../utils/debounce.js';

export {enqueueDebouncer};


/**
 * Adds a `Debouncer` to a list of globally flushable tasks.
 */
declare function enqueueDebouncer(debouncer: Debouncer): void;

export {flush};


/**
 * Forces several classes of asynchronously queued tasks to flush:
 * - Debouncers added via `enqueueDebouncer`
 * - ShadyDOM distribution
 */
declare function flush(): void;
