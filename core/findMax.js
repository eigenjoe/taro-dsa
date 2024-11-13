/** Build a max function */

function findMax(numbers) {
	let currentMax = -Infinity;

	for (let num of numbers) {
		if (num > currentMax) {
			currentMax = num;
		}
	}

	return currentMax;
}

const nums = [1, -2, 100, -99, 1000];

console.log("Max number for array [", nums.toString(), "] is ", findMax(nums));
