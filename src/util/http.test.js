import { it, vi, expect, describe } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = {
	testKey: 'testdata',
};

const testFn = vi.fn((url, options) => {
	return new Promise((reslove, reject) => {
		if (typeof options.body !== 'string') {
			return reject('not a string');
		}
		const testResp = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResponseData);
				});
			},
		};
		reslove(testResp);
	});
});

vi.stubGlobal('fetch', testFn);
describe('sendDataRequest()', () => {
	it('should return any available res data ', () => {
		const testData = { key: 'test' };
		return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
	});

	it('should convert the provided data to JSON before sending Request ', async () => {
		const testData = { key: 'test' };
		let errorMessage;
		try {
			await sendDataRequest(testData);
		} catch (err) {
			errorMessage = err;
		}

		expect(errorMessage).not.toBe('not a string');
	});
});
