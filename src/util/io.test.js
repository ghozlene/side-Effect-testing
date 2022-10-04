import { describe, it, expect } from 'vitest';
import writeData from './io';
describe('writeData', () => {
	it('should execute the writeFile method', () => {
		const testData = 'Achref';
		const fileName = 'test.txt';
		return expect(writeData(testData, fileName)).resolves.toBeUndefined();
	});
});
