// Вступ до JavaScript Week 1

//  1

const sayHi = () => {
  let name = prompt('Please enter your name');
  if (name != null) {
    alert('Hello, ' + name);
  }
};

// 2

const getAge = () => {
  const currentYear = 2023;
  let born = prompt('Enter your year of birth ?');

  let age = currentYear - born;
  if (age != null) {
    alert('Hi, you are ' + age + ' years old');
  }
};

// 3

const getPerimeter = () => {
  let length = prompt('Enter length of a square side');
  let perimeter = 4 * length;
  if (length != null) {
    alert('Perimeter is ' + perimeter);
  }
};

// 4

const getCircleArea = () => {
  let radius = prompt('Enter radius');
  let area = Math.PI * radius ** 2;
  if (radius != null) {
    alert('Area is ' + area);
  }
};

// 5

const getSpeed = () => {
  let distance = prompt('Enter distance in km');
  let time = prompt('Enter time in hours');
  let speed = distance / time;
  if (distance != null && time != null) {
    alert('Speed is ' + speed + ' km/h');
  }
};

// 6

const convertCurrency = () => {
  const rate = 0.95;
  let amount = prompt('Enter amount in USD');
  let result = amount * rate;
  if (amount != null) {
    alert('Amount in EUR: ' + result);
  }
};

// 7

const getNumberOfFiles = () => {
  const size = 0.82;
  let memory = prompt('Enter memory size in GB');
  let result = Math.trunc(memory / size);
  if (memory != null) {
    alert('Number of files is: ' + result);
  }
};

// 8

const getNumberOfChocolates = () => {
  let amount = prompt('Enter amount in UAH');
  let price = prompt('Enter chocolate price in UAH');
  let noOfChocolates = Math.trunc(amount / price);
  let costOfChocolates = noOfChocolates * price;
  let change = amount - costOfChocolates;

  if (amount != null && price != null) {
    alert(
      'You can buy ' +
        noOfChocolates +
        ' chocolates' +
        ' and you have ' +
        change +
        ' UAH left'
    );
  }
};

// 9

const getPalindrome = () => {
  let num = prompt('Enter 3 digit number');

  if (num < 0 || (num % 10 === 0 && num !== 0)) {
    return false;
  }

  let reversed = num.toString().split('').reverse().join('');
  let int = parseInt(reversed);

  if (num != null) {
    alert('The palindrome is ' + int);
  }
};

// 10

const getOddOrEven = () => {
  let num = prompt('Enter integer number');
  let arr = ['even', 'odd'];

  alert('The number is ' + arr[num % 2]);
};
