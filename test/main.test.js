import { sum } from '../src/main';

describe('Test App', () => {
	test('should add 2 and 3 and return 5', () => {
		let a = 2;
		let b = 3;

		let result = sum(a,b);
		expect(result).toBe(5)
	})
})