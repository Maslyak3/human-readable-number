module.exports = function toReadable (number) {
const primitives = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
};

const pastTen = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

const tens = {
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
};

const string = String(number);

switch (string.length) {
  case 1:
    return getPrimitives(string);
  case 2:
    return `${makeTens(string)}${addPrimitive(string)}`;
  case 3:
    return `${makeHundred(string)}${addPrimitive(string.slice(1))}`;
  default:
    throw new Error('!!!');
}

function getPrimitives(key) {
  return primitives[key];
}

function makeTens(x) {
  const first = x[0];

  return first === '1' ? getPastTen(x) : getTens(first);
}

function addPrimitive(x) {
  const first = x[0];
  const last = x.slice(1);

  return first > 1 && last !== '0' ? ` ${getPrimitives(last)}` : '';
}

function getPastTen(key) {
  return pastTen[key];
}

function getTens(key) {
  return tens[key];
}

function makeHundred(x) {
  const first = x[0];
  const last = x.slice(1);

  return last === '00'
    ? `${getPrimitives(first)} hundred`
    : `${getPrimitives(first)} hundred ${addNumber(last)}`;
}

function addNumber(x) {
  return x < 10 ? `${getPrimitives(x[1])}` : makeTens(x);
}
}

