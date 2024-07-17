function getRandomInt(min, max)
{
	let maxCorr = max+1;
	let randomNumber = Math.floor(min + Math.random() * (maxCorr - min));
	return randomNumber;
}
console.log(getRandomInt(1,6));