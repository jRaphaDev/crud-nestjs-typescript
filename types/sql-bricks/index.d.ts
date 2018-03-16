// Type definitions for sql-bricks:2.0.2
// Project: https://github.com/CSNW/sql-bricks
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = sql;

/** 
 * The SQL Bricks namespace (saved to the local variable sql in these docs) can 
 * be called as a function to insert SQL into SQL Bricks somewhere that a value 
 * is expected (the right-hand side of WHERE criteria, or insert()/update() 
 * values).
 * @param str String to be escaped into a SQL.
 */
declare function sql(str: string): string;

declare namespace sql {
	/**
	 * Wraps a value (user-supplied string, number, boolean, etc) so that it can be 
	 * passed into SQL Bricks anywhere that a column is expected (the left-hand side
	 * of WHERE criteria and many other SQL Bricks APIs).
	 * @param value Value to be escaped into a SQL.
	 */
	export function val(value: any): string;

	export function or(value: any): any;

	export function $in(variable: any, list: any): any;

	

	/**
	 * Creates a SELECT SQL DML.
	 */
	interface Select {
		/**
		 * Appends additional columns to an existing query.
		 * @param columns 
		 *     Can be multiple arguments, a comma-delimited string or an array.
		 */
		select(columns?: string | string[]): Select;
		distinct(columns: string): Select;
		into(table: string): Select;
		intoTemp(tempTable: string): Select;
		from(tables: string): Select;
		join(table: string): Select;
		leftJoin(table: string): Select;
		rightJoin(table: string): Select;
		fullJoin(table: string): Select;
		crossJoin(table: string): Select;
		on(criteria: any): Select;
		where(column: string, value: any): Select;
		where(criteria: any): Select;
		where(whereExpression: any): Select;
		groupBy(group: string): Select;
		having(criteria: any): Select;
		toString(): string;
	}

    /**
	 * Creates a SELECT SQL DML.
	 * @param columns 
	 *     List of columns that will be returned by the query as a comma-delimited 
	 *     string or an array.
	 */
	export function select(columns?: string | string[]): Select;

	/**
	 * Creates a SELECT SQL DML.
	 * @param columns 
	 *     Multiples arguments identifying the list of columns that will be
	 *     returned by the query.
	 */
	export function select(...columns: string[]): Select;
}
