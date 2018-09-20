// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {};
    var rich = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    var half = 0;
    var quart = 0;
    var dime = 0;
    var nickel = 0;
    var pennie = 0;
    var exMoney = 0;
   
    while(exMoney < currency) {
        if(currency - exMoney > 50) {
            exMoney += 50;
            half += 1;
        }
        else if((currency - exMoney < 50) && (currency - exMoney >= 25)) {
            exMoney += 25;
            quart += 1;
        }
        else if((currency - exMoney < 25) && (currency - exMoney) >= 10) {
            exMoney += 10;
            dime += 1;
        }
        else if((currency - exMoney < 10) && (currency - exMoney >= 5)) {
            exMoney += 5;
            nickel += 1;
        }
        else if((currency - exMoney < 5) && (currency - exMoney >= 0)) {
            exMoney += 1;
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
     if(currency > 10000) {
        return rich;
    }
    else return coins;
    
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
