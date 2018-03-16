// Type definitions for zipkin-transport-http:0.7.1
// Project: https://github.com/openzipkin/zipkin-js/tree/master/packages/zipkin-instrumentation-restify
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Complement. The current definitions are just shim so that zipkin can be initialized

/** Options for the initialization of a @see HttpLogger object */
export interface IHttpLoggerOptions {
	/** The URL that will be called by the logger instance. */
	endpoint: string;
}

export interface ILogger { }

/** A Zipkin Logger that sends data via HTTP. */
export class HttpLogger implements ILogger {
	/**
	 * Initializes a new instance of @see HttpLogger.
	 * @param options Configurations use to initialize HttpLogger.
	 */
	constructor(options: IHttpLoggerOptions);
}