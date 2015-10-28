/**
 * Created by benjamintanz on 28.10.15.
 * Run monte carlo simulation for portfolio values
 *
 * Indenpendently run this file using 'node (filename)'
 *
 */

/**
 * Datenquellen:
 * FMH Finanzberatung (Tagesgeld (Basiszins) und Festgeldzinsen (Sparbrief 5 Jahre))
 * Morningstart; Jährliche Renditen MSCI World (abzuziehen sind ca. 0.2 % managementgebühr pro jahr)
 *
 * Jährliche Datenpunkte jeweils Ende des Jahres
 *
 */


// init
var helper = [];
var returnArray = [];
var mcReturns = [];
var median = [];
var quartiles = [];
var lossProb= [];
returnArray[0] = [];
returnArray[1] = [];
returnArray[2] = [];

// config
var initCap = 1;          // the initial principal (1 for returns)
var time = 20;            // the simulation years
var alloc = [0.1,0.1,0.8];  // the allocation [Tagesgeld, Festgeld, ETF]
var simN = 10000;            // number of simulations to perform

// historical returns
var histReturns = {
  tagesGeld: {
    1995: 3.00,
    1996: 2.60,
    1997: 2.60,
    1998: 2.10,
    1999: 2.25,
    2000: 3.10,
    2001: 3.00,
    2002: 2.50,
    2003: 1.75,
    2004: 1.75,
    2005: 1.75,
    2006: 2.50,
    2007: 3.00,
    2008: 3.40,
    2009: 1.40,
    2010: 1.50,
    2011: 1.75,
    2012: 1.00,
    2013: 0.75,
    2014: 0.50
  },
  festGeld: {
    1995: 5.00,
    1996: 4.90,
    1997: 4.80,
    1998: 4.00,
    1999: 4.80,
    2000: 4.90,
    2001: 4.00,
    2002: 3.40,
    2003: 3.20,
    2004: 3.10,
    2005: 2.90,
    2006: 3.50,
    2007: 4.00,
    2008: 3.80,
    2009: 3.00,
    2010: 2.90,
    2011: 2.80,
    2012: 1.90,
    2013: 1.75,
    2014: 0.80
  },
  etf: {
    1995: 18.70,
    1996: 11.72,
    1997: 14.17,
    1998: 22.78,
    1999: 23.56,
    2000: -14.05,
    2001: -17.83,
    2002: -21.06,
    2003: 30.81,
    2004: 12.84,
    2005: 7.65,
    2006: 17.95,
    2007: 7.09,
    2008: -42.08,
    2009: 26.98,
    2010: 9.55,
    2011: -7.61,
    2012: 13.18,
    2013: 24.10,
    2014: 2.93
  }
};


// construct return array
var keys = Object.keys(histReturns.etf);
var len = keys.length;

for (var i = 0; i < len; i++){
  returnArray[0].push(histReturns.tagesGeld[keys[i]] / 100);
  returnArray[1].push(histReturns.festGeld[keys[i]] / 100);
  returnArray[2].push((histReturns.etf[keys[i]] - 0.2) / 100); // subtract mgmgt fee
}


for (var j = 0; j < simN; j++){
  helper[0] = initCap * alloc[0];
  helper[1] = initCap * alloc[1];
  helper[2] = initCap * alloc[2];

  mcReturns[j] = [];
  for (i = 0; i < time; i++){
    helper[0] = helper[0] * (1 + returnArray[0][Math.floor(Math.random()*len)]);
    helper[1] = helper[1] * (1 + returnArray[1][Math.floor(Math.random()*len)]);
    helper[2] = helper[2] * (1 + returnArray[2][Math.floor(Math.random()*len)]);
    mcReturns[j].push(helper[0] + helper[1] + helper[2]);
  }
}

//console.log(mcReturns);

// sort according to final value
mcReturns.sort(sortFunction);

// invert to apply medians and the like
var mcReturnsInv = mcReturns[0].map(function(col, i) {
 return mcReturns.map(function(row) {
 return row[i]
 })
});


// generate median array
for (i = 0; i < time; i++){
  var half = Math.floor(simN/2);
  if(simN % 2){
    median.push((mcReturnsInv[i].sort())[half]);
  } else {
    median.push(((mcReturnsInv[i].sort())[half-1] + (mcReturnsInv[i].sort())[half])/2);
  }
}

// generate (approximate) quartiles
for (i = 0; i < time; i++){
  var firstquarter = Math.floor(simN/4);
  var thirdquarter = Math.floor(3*simN/4);
  quartiles.push([(mcReturnsInv[i].sort())[firstquarter], (mcReturnsInv[i].sort())[thirdquarter]]);
}

// generate PLoss

for (j = 0; j < time; j++){
  var loss = 0;
  for (i = 0; i < simN; i++){
    if(mcReturnsInv[j][i] - initCap < 0){
      loss += 1;
    }
  }
  lossProb.push(loss/simN);
}

console.log('********** MONTE CARLO RESULTS **********');
console.log('*** MEDIAN ASSET VALUES BY YEAR ***');
console.log(median);
console.log('*** LOWER/UPPER QUARTILE ASSET VALUES BY YEAR ***');
console.log(quartiles);
console.log('*** LOSS PROBABILITY BY YEAR ***');
console.log(lossProb);


/** function that sorts value array according to the final asset values */
function sortFunction(a, b) {
  if (a[time - 1] === b[time - 1]) {
    return 0;
  }
  else {
    return (a[time - 1] < b[time - 1]) ? -1 : 1;
  }
}






