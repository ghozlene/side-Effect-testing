import { describe, expect, it } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
	it('should extract title & content from the provided form data', () => {
		const testTitle = 'test title';
		const testContent = 'test content';

		const testFormData = {
			title: testTitle,
			content: testContent,

			get(identifier) {
				return this[identifier];
			},
		};
		const data = extractPostData(testFormData);
		expect(data.title).toBe(testTitle);
		expect(data.content).toBe(testContent);
	});
});
