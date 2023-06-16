const { stringLength, reverseString, Calculator, capitalize } = require('./main');

describe('Testing stringLength function', () => {
    test('Checking "Ana" equal to three', () => {
        expect(stringLength('Ana')).toBe(3);
    });

    test('throws an error for strings with invalid length', () => {
        expect(() => stringLength('')).toThrow('String length is not between 1 and 10');
        expect(() => stringLength('this is a very long string')).toThrow('String length is not between 1 and 10');
    });
});

test('Checking reverseString function', () => {
    expect(reverseString('Ana')).toBe('anA');
});

describe('Testing Calculator class', () => {
    test ('Testing add method', () => {
        const calculator = new Calculator();
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(1, -2)).toBe(-1);
        expect(calculator.add(1, 0)).toBe(1);
    });

    test ('Testing subtract method', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(1, 2)).toBe(-1);
        expect(calculator.subtract(1, -2)).toBe(3);
        expect(calculator.subtract(1, 0)).toBe(1);
    });

    test ('Testing divide method', () => {
        const calculator = new Calculator();
        expect(calculator.divide(1, 2)).toBe(0.5);
        expect(calculator.divide(1, -2)).toBe(-0.5);
        expect(calculator.divide(1, 0)).toBe(Infinity);
    });

    test ('Testing multiply method', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(1, 2)).toBe(2);
        expect(calculator.multiply(1, -2)).toBe(-2);
        expect(calculator.multiply(1, 0)).toBe(0);
    });

});

describe('Testing capitalize function', () => {
    test('Checking "ana" equal to "Ana"', () => {
        expect(capitalize('ana')).toBe('Ana');
    });
    test('Checking "mark" equal to "Mark"', () => {
        expect(capitalize('mark')).not.toBe('mark');
    });
});