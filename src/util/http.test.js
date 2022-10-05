import { it, vi, expect, describe } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = {
	testKey: 'testdata',
};

const testFn = vi.fn((url, options) => {
	return new Promise((reslove, reject) => {
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
});
