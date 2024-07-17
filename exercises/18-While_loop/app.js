//fix this function:
let counter = 100;
function startCounting() {
	while (counter > 0) {
		console.log(counter);
		counter--;
	}

	return counter;
}

startCounting();
console.log(counter);