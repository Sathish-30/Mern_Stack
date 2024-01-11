const amountToCoins = (coin) => {
    let res = [];
    while(coin >= 25){
        coin -= 25;
        res.push(25);
    }
    while(coin >= 10){
        coin -= 10;
        res.push(10);
    }
    while(coin >= 5){
        coin -= 5;
        res.push(5);
    }
    while(coin >= 2){
        coin -= 2;
        res.push(2);
    }while(coin >= 1){
        coin -= 1;
        res.push(1);
    }
    return res;
}

console.log(amountToCoins(46));

