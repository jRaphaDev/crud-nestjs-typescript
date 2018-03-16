// Type definitions for zipkin:0.7.1
// Project: https://github.com/openzipkin/zipkin-js
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// this definitions are just a shim so that it can be used 

export class ExplicitContext { }

export class ConsoleRecorder { }

import { ILogger } from "zipkin-transport-http";

interface IBatchRecorderOptions {
	logger: ILogger;
}

export class BatchRecorder {
	constructor(options: IBatchRecorderOptions);
}

export interface ITracerOptions {
	ctxImpl: ExplicitContext;
	recorder: ConsoleRecorder;
	sampler?: {};
	traceId128Bit?: boolean;
}

export class Tracer {
	constructor(options: ITracerOptions);
}

