import { describe, expect, it } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
	it('should contain the provided statusCode message & data', () => {
		const statusCode = 1;
		const testMessage = 'test';
		const testData = { key: 'test' };

		const testError = new HttpError(statusCode, testMessage, testData);

		expect(testError.statusCode).toBe(statusCode);
		expect(testError.message).toBe(testMessage);
		expect(testError.data).toBe(testData);
	});
	it('should contain undefined as data when no data is provided', () => {
		const statusCode = 1;
		const testMessage = 'test';
		const testData = { key: 'test' };

		const testError = new HttpError(statusCode, testMessage);

		expect(testError.statusCode).toBe(statusCode);
		expect(testError.message).toBe(testMessage);
		expect(testError.data).toBeUndefined();
	});
});

describe('class ValidationError', () => {
	it('should  contain the provided message ', () => {
		const testMessage = 'test';

		const testError = new ValidationError(testMessage);

		expect(testError.message).toBe(testMessage);
	});
});
