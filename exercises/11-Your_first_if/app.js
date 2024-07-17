let total = prompt('How many km are left to go?');

// Your code below:
let totalNumber = parseInt(total);
let mensaje;

if (totalNumber > 100) {
    mensaje = "We still have a bit of driving left to go";
} else if ((totalNumber > 50) && (totalNumber <= 100)) {
    mensaje = "We'll be there in 5 minutes";
} else {
    mensaje = "I'm parking. I'll see you right now";
}

console.log(mensaje);