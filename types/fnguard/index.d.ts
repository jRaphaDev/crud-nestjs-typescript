// Type definitions for fnguard:0.6.2
// Project: https://github.com/iambumblehead/fnguard
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class fnguard {
	public isobj(o: {}): fnguard;

	public isnumstr(n: string): fnguard;

	public isnum(n: number): fnguard;

	public isfn(fn: (...args: any[]) => any): fnguard;

	public isstr(n: string): fnguard;

	public isarr(n: any[]): fnguard;

	public isnull(n: any): fnguard;

	public isbool(n: boolean): fnguard;

	public isundefined(n: any): fnguard;

	public isdomelem(n: any): fnguard;

	public isdate(n: Date): fnguard;

	public isany(n: any): fnguard;

	public isre(n: any): fnguard;
	
	public isnotany(n: any): fnguard;

	public isnotbool(n: any): fnguard;

	public isnotdomelem(n: any): fnguard;

	public isnotnull(n: any): fnguard;

	public isnotnumstr(n: any): fnguard;

	public isnotre(n: any): fnguard;

	public isnotundefined(n: any): fnguard;

	public isnotarr(n: any): fnguard;

	public isnotdate(n: any): fnguard;

	public isnotfn(n: any): fnguard;

	public isnotnum(n: any): fnguard;

	public isnotobj(n: any): fnguard;
	
	public isnotstr(n: any): fnguard;
}

declare let instance: fnguard;

export = instance;
