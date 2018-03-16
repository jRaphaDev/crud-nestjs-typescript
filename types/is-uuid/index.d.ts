// Type definitions for is-uuid 1.0.2
// Project: https://github.com/afram/is-uuid
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** 
 * Checks for a v1 UUID.
 * @param {string} str The string that will be checked to be a UUID.
 * @returns {boolean} True if str is a valid v1 UUID.
 */
export function v1(str: string): boolean;

/** 
 * Checks for a v2 UUID.
 * @param {string} str The string that will be checked to be a UUID.
 * @returns {boolean} True if str is a valid v2 UUID.
 */
export function v2(str: string): boolean;

/** 
 * Checks for a v3 UUID.
 * @param {string} str The string that will be checked to be a UUID.
 * @returns {boolean} True if str is a valid v3 UUID.
 */
export function v3(str: string): boolean;

/** 
 * Checks for a v4 UUID.
 * @param {string} str The string that will be checked to be a UUID.
 * @returns {boolean} True if str is a valid v4 UUID.
 */
export function v4(str: string): boolean;

/** 
 * Checks for a v5 UUID.
 * @param {string} str The string that will be checked to be a UUID.
 * @returns {boolean} True if str is a valid v5 UUID.
 */
export function v5(str: string): boolean;

/** 
 * Checks for a nil UUID
 * @returns {boolean} true for nil UUID
 */
export function nil(str: string): boolean;

/** 
 * Checks any non-nil UUID version 
 * @param {string} str The string that will be checked to be a UUID.
 * @returns {boolean} True if str is any valid UUID.
 */
export function anyNonNil(str: string);
