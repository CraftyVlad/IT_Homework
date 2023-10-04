// 1

const getAge = () => {
  let age = prompt('Enter your age');

  if (age < 12) {
    alert('You are a child');
  } else if (age >= 12 && age < 18) {
    alert('You are a teenager');
  } else if (age >= 18 && age <= 60) {
    alert('You are an adult');
  } else if (age > 60) {
    alert('You are a pensioner');
  }
};

// 2

const getSymbol = () => {
  let num = prompt('Enter a number between 0-9');

  switch (+num) {
    case 0:
      symbol = ')';
      break;
    case 1:
      symbol = '!';
      break;
    case 2:
      symbol = '@';
      break;
    case 3:
      symbol = '#';
      break;
    case 4:
      symbol = '$';
      break;
    case 5:
      symbol = '%';
      break;
    case 6:
      symbol = '^';
      break;
    case 7:
      symbol = '&';
      break;
    case 8:
      symbol = '*';
      break;
    case 9:
      symbol = '(';
      break;
    default:
      alert('Please enter a number between 0-9');
  }

  alert('The symbol is ' + symbol);
};

// 3

const getDuplicates = () => {
  let num = prompt('Enter 3 digit number');
  let arr = num.split('');

  const hasDuplicates = arr.some((e, i, arr) => arr.indexOf(e) !== i);

  if (hasDuplicates) {
    alert('The number has repeating digits');
  } else {
    alert('The number has NO repeating digits');
  }
};

// 4

const checkLeapYear = () => {
  let year = prompt('Enter a year');
  let leapYear = +year % 4;

  if (leapYear === 0) {
    alert('This is Leap Year');
  } else {
    alert('This is NOT Leap Year');
  }
};

// 5

const checkPalindrome = () => {
  let num = prompt('Enter 5 digit number');
  let reversed = num.split('').reverse().join('');

  num == reversed
    ? alert('This is a palindrome')
    : alert('This is NOT a palindrome');
};

// 6

const convertCurrency = () => {
  let amount = prompt('Enter amount in USD');
  let currency = prompt('Enter currency: EUR, UAH or AZN');

  switch (currency) {
    case 'eur':
    case 'EUR':
      exchange = amount * 0.95;
      break;
    case 'uah':
    case 'UAH':
      exchange = amount * 36.8;
      break;
    case 'azn':
    case 'AZN':
      exchange = amount * 1.7;
      break;
    default:
      exchange = '';
  }
  alert('The amount in ' + currency + ' is ' + exchange);
};

// 7

const getDiscount = () => {
  let amount = prompt('Enter amount');

  if (amount >= 200 && amount < 300) {
    let total = amount - amount * 0.03;
    alert('Amount to pay is ' + total);
  } else if (amount >= 300 && amount < 500) {
    let total = amount - amount * 0.05;
    alert('Amount to pay is ' + total);
  } else if (amount >= 500) {
    let total = amount - amount * 0.07;
    alert('Amount to pay is ' + total);
  } else if (amount < 200) {
    alert("Amount to pay is " + amount);
  }
};

// 8

const checkFit = () => {
  let circumference = prompt('Enter circle circumference');
  let perimeter = prompt('Enter perimeter of a square');

  let diameter = circumference / Math.PI;
  let side = perimeter / 4;

  if (side >= diameter) {
    alert('The square will NOT fit inside a circle');
  } else {
    alert('The square will fit inside a circle');
  }
};

// 9

const quiz = () => {
  let score = 0;
  let answer = '';

  answer = prompt(
    "Who was the first president of Ukraine? (pick a, b or c)\na. Kravchuk\nb. Zelenskiy\nc. Kuchma"
  );

  if (answer === 'a') {
    score += 2;
  }

  answer = prompt(
    "Who first reached South pole? (pick a, b or c)\na. Smith\nb. Nansen\nc. Amundsen"
  );

  if (answer === 'c') {
    score += 2;
  }

  answer = prompt(
    "Which ship was used in the first Columbus voyage? (pick a, b or c)\na. Endeavour\nb. Santa Maria\nc. Brigantina"
  );

  if (answer === 'b') {
    score += 2;
  }

  alert('You total score is ' + score);
};

// 10

const getNextDate = () => {
  let input = prompt('Enter a date in dd/mm/yyyy format');
  const arr = input.split('/').map(Number);
  const date = new Date(arr[2], arr[1] - 1, arr[0]);

  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);

  alert('Next date is ' + nextDate.toDateString());
};
