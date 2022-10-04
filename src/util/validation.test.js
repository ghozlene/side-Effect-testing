import { describe, expect, it } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
	it('should throw an error if empty string is provided ', () => {
		const text = '';
		const validationFn = () => {
			validateNotEmpty(text);
		};

		expect(validationFn).toThrow();
	});

	it('should throw an error if empty string contain _blank', () => {
		const text = '    ';
		const validationFn = () => {
			validateNotEmpty(text);
		};

		expect(validationFn).toThrow();
	});

	it('should throw an error  with the provided error message', () => {
		const text = '    ';
		const errorMessage = 'error has been detected';
		const validationFn = () => {
			validateNotEmpty(text, errorMessage);
		};

		expect(validationFn).toThrowError(errorMessage);
	});
});
