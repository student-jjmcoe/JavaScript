let prices = [250, 645, 300, 900, 50];
console.log(prices);

for(let i = 0; i<prices.length; i++){
    prices[i]=prices[i]-prices[i]/10;
    console.log(prices[i]);
}
// console.log(" ");
// prices = [250, 645, 300, 900, 50];
// for(let price of prices){
//     price=price-price/10;
//     console.log(price);
// }
