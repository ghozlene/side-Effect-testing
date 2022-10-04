import { describe, it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');
describe('writeData', () => {
	it('should execute the writeFile method', () => {
		const testData = 'Achref';
		const fileName = 'test.txt';
		writeData(testData, fileName);
		expect(fs.writeFile).toBeCalled();
		//return expect(writeData(testData, fileName)).resolves.toBeUndefined();
	});

	it('it should writing on the file when path & filename provided ', () => {});
});
