import { describe, it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path', () => {
	return {
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});

describe('writeData()', () => {
	it('should execute the writeFile method', () => {
		const testData = 'Achref';
		const fileName = 'test.txt';
		writeData(testData, fileName);
		expect(fs.writeFile).toBeCalledWith(fileName, testData);
		//return expect(writeData(testData, fileName)).resolves.toBeUndefined();
	});
});
