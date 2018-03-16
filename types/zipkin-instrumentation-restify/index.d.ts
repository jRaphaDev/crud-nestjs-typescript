// Type definitions for zipkin-instrumentation-restify:0.7.1
// Project: https://github.com/openzipkin/zipkin-js/tree/master/packages/zipkin-instrumentation-restify
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Complement. The current definitions are just shim so that zipkin can be initialized

import { Tracer } from "zipkin";

import * as Restify from "restify";

declare class RestifyMiddleware { }

/** Middleware for a Restify app that will log requests to Zipkin. */
export interface IRestifyMiddlewareOptions {
	/** The tracer that should be used to log all requests. */
	tracer: Tracer;
	/** The name of the current service that will be used to identify requests in hystrix. */
	serviceName: string;
}

/**
 * Factory method to build Restify middlewares.
 * @param options Configuration for the middleware.
 */
export function restifyMiddleware(options: IRestifyMiddlewareOptions): Restify.RequestHandler;