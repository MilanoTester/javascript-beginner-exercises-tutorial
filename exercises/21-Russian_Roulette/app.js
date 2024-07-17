// firePosition will be the position in which the gun will fire.
let firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.
function spinChamber() {
    let maxCorr = 6+1;
    let min = 1;
    let chamberPosition = Math.floor(min + Math.random() * (maxCorr - min));
    
    return chamberPosition;
};

// Remove the // below and complete the commented lines
function fireGun(bulletPosition) {
    if (bulletPosition == firePosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));
console.log(spinChamber());