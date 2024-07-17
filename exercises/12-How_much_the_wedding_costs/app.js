let guests = prompt('How many people are coming to your wedding?');
let guestsNum = parseInt(guests);

function getPrice(guestsNum){
    let cost = 0;
    // Your code here
    if (guestsNum > 200) {
        cost = 20000;
    } else if ((guestsNum <= 200) && (guestsNum > 100)) {
        cost = 15000;
    } else if ((guestsNum <= 100) && (guestsNum > 50)) {
        cost = 10000;
    } else {
        cost = 4000;
    }
 
    return cost;
}

let price = getPrice(guestsNum);
console.log('Your wedding will cost '+price+' dollars');
