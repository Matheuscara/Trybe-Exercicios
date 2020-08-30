function profitCalc(cost, salePrice) {
  // let cost = 100;
  // let salePrice = 150;
  let profit = 0;
  
  if (!((cost == 0) || (salePrice == 0))) {
    profit = salePrice - (cost + cost*0.2);
    profit *= 1000;
    console.log(`Profit: R$ ${profit}`)
  } else {
    console.log("Invalid entry.")
  }
}

profitCalc(100, 200)
