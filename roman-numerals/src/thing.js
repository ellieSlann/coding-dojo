
function digitToRoman(digitNumber) {

    if (digitNumber >= 1 && digitNumber < 5) {
        return "I".repeat(digitNumber);
    }

    if (digitNumber >= 5 && digitNumber < 10) {
        const remainder = digitNumber % 5;
        return "V" + "I".repeat(remainder);
    }

    if (digitNumber >= 10) {
        const remainder = digitNumber % 10;
        return "X" + "I".repeat(remainder);
    }
}

function digitToRomanV2(digitNumber) {
    let d = digitNumber;
    const arr = [];

    while (d >= 50) {
        d = d - 50;
        arr.push("L");
    }

    while (d >= 10) {
        if (d >= 40) {
            d = d - 40;
            arr.push("XL");
        }
        else {
            d = d - 10;
            arr.push("X");
        }
    }

    while (d >= 5) {
        if (d === 9) {
            d = d - 9;
            arr.push("IX");
        } else {
            d = d - 5;
            arr.push("V");
        }
    }

    while (d >= 1) {
        if (d === 4) {
            d = d - 4;
            arr.push("IV");
        } else {
            d = d - 1;
            arr.push("I");
        }
    }

    return arr.join("");
}

function romanToDigit(roman) {

    const keyValueObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    const romanArray = roman.split("");
    let numericalArray = romanArray.map(x => keyValueObj[x])

    let digit = 0;
    let previous = 0;

    numericalArray.forEach(element => {
        if (element <= previous) {
            digit += element
        } else {
            digit = digit + element - (2 * previous);
        }
        previous = element;
    });
    return digit

}
