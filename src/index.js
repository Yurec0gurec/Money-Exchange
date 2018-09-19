// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {};
    var rich = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    var half = 0, quart = 0, dime = 0, nickel = 0, pennie = 0;
    var exMoney = 0;
    if(currency > 10000) {
        return rich;
    }
    while(exMoney !== currency) {
        if(currency - exMoney > 50) {
            currency += 50;
            half += 1;
        }
        if(currency - exMoney < 50 && currency - exMoney >= 25) {
            currency += 25;
            quart += 1
        }
        if(currency - exMoney < 25 && currency - exMoney >= 10) {
            currency += 10
            dime += 1;
        }
        if(currency - exMoney < 10 && currency - exMoney >= 5) {
            currency += 5;
            nickel += 1;
        }
        if(currency - exMoney < 5 && currency - exMoney >= 0) {
            currency += 1;
            pennie += 1;
        }
    }
    if(half > 0) {
        coins.H = half;
    }
    if(quart > 0) {
        coins.Q = quart;
    }
    if(dime > 0) {
        coins.D = dime;
    }
    if(nickel > 0) {
        coins.N = nickel;
    }
    if(pennie > 0) {
        coins.P = pennie;
    }
    return coins;
    
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
