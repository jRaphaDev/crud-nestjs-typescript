// Type definitions for autofixture:1.1.0
// Project: https://github.com/jcteague/autofixturejs
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Defines a fixture under the provided name.
 * @param fixtureName The name of the fixture being defined.
 * @param properties List of properties of the fixture.
 */
export function define(fixtureName: string, properties: string[]): void;
/**
 * Creates a instance of the required fixture.
 * @param fixtureName The name of the fixture that will be created.
 */
export function create<T={}>(fixtureName: string): T;