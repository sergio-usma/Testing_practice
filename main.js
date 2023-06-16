function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
        throw new Error('String length is not between 1 and 10');
    }
    return string.length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        return a / b;
    }

    multiply(a, b) {
        return a * b;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = { stringLength, reverseString, Calculator, capitalize };