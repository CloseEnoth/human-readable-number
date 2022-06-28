module.exports = function toReadable (num) {
  let message = '';
  let hundreds = '';
  let tens = '';
  let units = '';

  let strNum = String(num);

  if (num === 0) return 'zero';

  if (strNum.length === 3) {
    hundreds = findHundreds(num);
    if (num % 100 !== 0) {
      tens = findTens(num);
    }
  }

  if (strNum.length === 2) {
    tens = findTens(num);
  }
  
  if (strNum.length === 1) {
    units = obj[num];
  }

  return message = `${hundreds}${tens}${units}`; 
}

const findHundreds = (n) => {
  if (n % 100 === 0) {
    return `${obj[Math.floor(n / 100)]} hundred`
  }
  if (n % 100 !== 0) {
    return `${obj[Math.floor(n / 100)]} hundred `;
  }
  return `${obj[Math.floor(n / 100)]} hundred `;
}

const findTens = (n) => {
  let tens = n % 100;
  if (n % 10 === 0) {
    return `${obj[tens]}`;
  }
  if (tens >= 21 && tens <= 99) {
    return `${obj[Math.floor(tens / 10) * 10]} ${obj[tens % 10]}`;
  }
  return `${obj[(tens)]}`;
}

const obj = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}
