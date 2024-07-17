function getRandomInt()
{
	let randomNumber = (Math.random()*10)+1;
	let randomInteger = Math.floor(randomNumber);

	return randomInteger;
}


console.log(getRandomInt());
