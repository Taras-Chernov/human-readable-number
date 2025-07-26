module.exports = function toReadable(number) {
  const toTwentyNumber = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const twoDigitNumbers = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundred = ' hundred';

  if (number === 0) return 'zero';
  if (number <= 19) return toTwentyNumber[number];
  if (number < 100)
    return (
      twoDigitNumbers[Math.floor(number / 10)] +
      (number % 10 ? ` ${toTwentyNumber[number % 10]}` : '')
    );
  return (
    toTwentyNumber[Math.floor(number / 100)] +
    hundred +
    (number % 100 ? ` ${toReadable(number % 100)}` : '')
  );
};
