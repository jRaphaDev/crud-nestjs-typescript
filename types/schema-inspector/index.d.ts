// Type definitions for schema-inspector 1.6.8
// Project: https://github.com/Atinux/schema-inspector
// Definitions by: Bruno Brant <http://github.com/HeavyStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Standards properties of a validation schema. */
interface IPropertiesValidationSchema {
	optional?: boolean;
}
/** Schema describes an object. */
export interface IObjectValidationSchema extends IPropertiesValidationSchema{
	type: "object";

	/** Properties that describe the validation schema. */
	properties?: {
		[name: string]: IValidationSchema
	};
}

/** Schema that describes an array. */
export interface IArrayValidationSchema extends IPropertiesValidationSchema{
	type: "array";
	/** Describe the validation for the array itens. */
	items: IValidationSchema;
}

/** Schema that describes a string. */
export interface IStringValidationSchema extends IPropertiesValidationSchema{
	type: "string";
	/** Minimum length for the string.  */
	minLength?: number;
	/** Maximium length for the string. */
	maxLength?: number;
	/** Regex Pattern that validates the string. */
	pattern?: RegExp;
}

/** Schema that describes a date. */
export interface IDateValidationSchema extends IPropertiesValidationSchema{
	type: "date";
}

/** Schema that describes an integer. */
export interface IIntValidationSchema extends IPropertiesValidationSchema{
	type: "integer";
}

/** Schema that describes an boolean. */
export interface IBooleanValidationSchema extends IPropertiesValidationSchema{
	type: "boolean";
}

/** Describes how to validate a certain data */
type IValidationSchema = IObjectValidationSchema | IArrayValidationSchema | IStringValidationSchema | IDateValidationSchema | IIntValidationSchema | IBooleanValidationSchema;

/** Describes an error during validation. */
export interface IValidationError {
	/** The code of the error. */
	code: string;
	/** The property of the object that caused the error. */
	property: string;
	/** The reason for the error. */
	reason: string;
	/** The message that describes the error. */
	message: string;
}

/** The result of a validation. */
export interface IValidationResult {
	/** Informs whether the validation was sucessful. */
	valid: boolean;

	/** List of errors found during validation */
	error: IValidationError[];


	/** Get a formatted message about the error. */
	format(): string;
}

/** Performs validation over the data. */
export function validate(schema: any, data: any): IValidationResult; 