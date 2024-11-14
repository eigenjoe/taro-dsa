/**
 * Find wether a  number is prime.
 */

function isPrime(num) {
	if (num < 2) return false;

	for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return true;
}

console.log("7 is prime. Should be true -- Result: ", isPrime(7));
console.log("13 is prime. Should be true -- Result: ", isPrime(13));
console.log("6 is prime. Should be false -- Result: ", isPrime(6));
console.log("1 is prime. Should be false -- Result: ", isPrime(1));
console.log("81 is prime. Should be false -- Result: ", isPrime(81));
