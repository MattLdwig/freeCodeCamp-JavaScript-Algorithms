function checkCashRegister(price, cash, cid) {
    // Money Reference
     const baseMoney = [{
        name: "ONE HUNDRED",
        value: 100
      },
      {
        name: "TWENTY",
        value: 20
      },
      {
        name: "TEN",
        value: 10
      },
      {
        name: "FIVE",
        value: 5
      },
      {
        name: "ONE",
        value: 1
      },
      {
        name: "QUARTER",
        value: 0.25
      },
      {
        name: "DIME",
        value: 0.10
      },
      {
        name: "NICKEL",
        value: 0.05
      },
      {
        name: "PENNY",
        value: 0.01
      },
    ];
  
    let res = {status: 'OPEN', change: []};
    let change = cash - price;
    
    // Transform cid from multi-dimensional array to object
    let cidToObj = cid.reduce((acc, curr) => {
       acc[curr[0]] = curr[1];
       acc.SUM += curr[1]
       return acc
    }, {SUM: 0})
    
    // Case: INSUFFICIENT_FUNDS
    if (change > cidToObj.SUM) { res.status = 'INSUFFICIENT_FUNDS'; return res; }
    
    // Case: CHANGE === FUNDS IN CID, switch Status to closed and copy cid 
    if (change === cidToObj.SUM) { res.status = 'CLOSED'; res.change = [...cid]; return res; }
    
    // Cid calculation
    const checkRegister = baseMoney.reduce((acc, curr) => {
      let sum = 0;
  
      // as long as the exchange rate is less than the amount of money available in this currency unit
      while(change >= curr.value && cidToObj[curr.name] > 0) {
        // deduct: available amount in this unit from the amount of change 
        change -= curr.value;
        // update of the available amount in cidToObj
        cidToObj[curr.name] -= curr.value;
        // add current value to sum
        sum += curr.value;
        // round up change
        change = Math.round(change * 100) / 100;
      }
      /* if sum is > 0, push current unit and current value to acc.
        parseFloat().toPrecision(): avoid decimal bugs
        parseFloat(parseFloat()): converted generated string back into number
      */
      if (sum > 0) { acc.push([curr.name, parseFloat(parseFloat(sum).toPrecision(2))]); }
      return acc;
    },[])
    
     if (change > 0 || checkRegister.length < 1) {
      // If change is still positive or if checkRegister is empty, assign:
       res.status = "INSUFFICIENT_FUNDS"; 
       res.change = [];
       // else assign:
     } else { res.change = checkRegister; }
    
    return res
  }