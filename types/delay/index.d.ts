// Type definitions for delay:2.0.0
// Project: https://github.com/sindresorhus/delay
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = delay;

/**
 * Waits for a time.
 * @param amount Timeout in seconds.
 * @returns A promise that will only resolve after the expected time.
 */
declare function delay<T>(seconds: number): Promise<T>;
