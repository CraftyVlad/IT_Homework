function calculatePower() {
	let base = document.getElementById("powerBase").value;
	let exponent = document.getElementById("powerExponent").value;
	alert(power(base, exponent));
}

function calculateGCD() {
	let a = document.getElementById("gcdA").value;
	let b = document.getElementById("gcdB").value;
	alert(gcd(a, b));
}

function calculateMaxDigit() {
	let number = document.getElementById("maxDigitNumber").value;
	alert(maxDigit(number));
}

function checkIsPrime() {
	let number = document.getElementById("isPrimeNumber").value;
	alert(isPrime(number) ? "Prime" : "Not Prime");
}

function calculateFactors() {
	let number = document.getElementById("factorsNumber").value;
	alert(factors(number));
}

function calculateFibonacci() {
	let n = document.getElementById("fibonacciNumber").value;
	alert(fibonacci(n));
}

function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}

function gcd(a, b) {
	if (b === 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}

function maxDigit(number) {
	if (number < 10) {
		return number;
	} else {
		let max = maxDigit(Math.floor(number / 10));
		return Math.max(max, number % 10);
	}
}

function isPrime(number, divisor = 2) {
	if (number <= 2) {
		return number === 2 ? true : false;
	}
	if (number % divisor === 0) {
		return false;
	}
	if (divisor * divisor > number) {
		return true;
	}
	return isPrime(number, divisor + 1);
}

function factors(number, divisor = 2) {
	if (number < divisor) {
		return [];
	}
	if (number % divisor === 0) {
		return [divisor, ...factors(number / divisor, divisor)];
	} else {
		return factors(number, divisor + 1);
	}
}

function fibonacci(n) {
	if (n <= 2) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}
