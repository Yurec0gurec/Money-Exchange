// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {};
    var rich = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };

    if (currency <= 0) {
        return coins;
    } else if (currency > 10000) {
        return rich;
    }
    var half = 0;
    var quart = 0;
    var dime = 0;
    var nickel = 0;
    var pennie = 0;
//     решение в овер9000 циклов
//     while(currency >= 50) {
//         currency -= 50;
//         half++;
//     }
//    while(currency >= 25) {
//        currency -= 25;
//        quart++;
//    }
//    while(currency >= 10) {
//        currency -= 10;
//        dime++;
//    }
//    while(currency >= 5) {
//        currency -= 5;
//        nickel++;
//    }
//    while(currency >= 1) {
//        currency--;
//        pennie++;
//    }
//    if(half > 0) {
//            coins.H = half;
//        }
//         if(quart > 0) {
//            coins.Q = quart;
//        }
//        if(dime > 0) {
//            coins.D = dime;
//        }
//         if(nickel > 0) {
//            coins.N = nickel;
//        }
//         if(pennie > 0) {
//            coins.P = pennie;
//        }
//        return coins;
    
        while(currency > 0) {
            if(currency >= 50) {
                currency -= 50;
                half += 1;
            }
            else if (currency >= 25) {
                currency -= 25;
                quart += 1;
            }
           else if (currency >= 10) {
                currency -= 10;
                dime += 1;
            }
            else if (currency >= 5) {
                currency -= 5;
                nickel += 1;
            }
            else if (currency >= 0) {
                currency -= 1;
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
