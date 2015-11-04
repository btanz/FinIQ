/**
 * Created by benjamintanz on 04.11.15.
 */


(function(){

  angular.module('app').factory('bausparCalculator', function(){

    var fun = {};


    /** ********************** bausparrechner ************************************* */
    /**
     * homesave
     *
     * Method that computes terms of a mortgage savings plan
     *
     * @method homesave
     * @param inputs.interestsave {Number}
     * @param inputs.interestdebt {Number}
     * @param inputs.saving {Number}
     * @param inputs.termsave {Number}
     * @param inputs.initialfee {Number}
     * @param inputs.initialpay {Number}
     * @param inputs.termsave {Number}
     * @return values {Array} TBC
     * @return confidence {Array} TBC
     */
    fun.homesave = function(inputs) {

      /** ******** 1. INIT AND ASSIGN ******** */
      var result = {}; result._1 = {}; result._2 = {};
      var dyn = []; dyn[0] = []; dyn[1] = []; dyn[2] = []; dyn[3] = []; dyn[4] = []; dyn[5] = []; dyn[6] = []; dyn[7] = []; dyn[8] = []; dyn[9] = []; var dynT;
      var dynloan = []; dynloan[0] = []; dynloan[1] = []; dynloan[2] = []; dynloan[3] = []; dynloan[4] = []; dynloan[5] = []; dynloan[6] = []; dynloan[7] = []; dynloan[8] = []; dynloan[9] = []; var dynloanT;
      var helper = {};
      var q, replacementrate, r, y;
      var termsaveFullMth, termsaveFullY, partialMth, i, j, interestaccum = 0;
      var cfSave = [], cfLoan = [];


      /** ******** 2. INPUT ERROR CHECKING AND PREPARATIONS ******** */
      inputs.interestsave /= 100;
      inputs.interestdebt /= 100;

      /** ******** 3. HELPER FUNCTIONS ******** */
      // function that returns the month into the full year for any month; example: intoyear(18) = 6, intoyear(12) = 12
      helper.intoyear = function(month){
        return (month % 12 === 0) * 12 + month % 12;
      };

      /** ******** 4. COMPUTATIONS SAVINGS PERIOD ******** */
      // HELPER VARS
      q = 1 + inputs.interestsave;
      r = inputs.interestdebt / 12;
      replacementrate = inputs.saving * (12 + (11/2)*(q-1));
      termsaveFullMth = Math.ceil(inputs.termsave/(1/12))/12;
      termsaveFullY = Math.floor(termsaveFullMth);

      /** in case savingperiod has been adjusted, inform user */
      if(termsaveFullMth !== inputs.termsave){
        helpers.messages.set("Hinweis: Die angegebene Anspardauer von " + f.basic.round(inputs.termsave,2) + " Jahren ist kein Vielfaches des Einzahlungsintervalls (monatlich). Die Anspardauer wurde entsprechend auf die nächste volle Zahlungsperiode angepasst. Der angepasste Wert beträgt " + f.basic.round(termsaveFullMth,2) + " Jahre (" + f.basic.round(termsaveFullMth * 12,2) + " Monate).",2);
      }


      // DYNAMIC COMPUTATIONS
      interestaccum = 0;  // accumulator for semiperiodical interest PAngV
      var jumper = 0, terminal = [];
      terminal[2] = 0; terminal[3] = 0;
      helper.wohnungsbau = 0;
      for(i = 1, y = termsaveFullMth * 12 + termsaveFullY; i <= y; i++){
        if (dyn[6][i-2]){   // if last iteration was full year such that annual vals should be computed
          dyn[0][i-1] = Math.ceil((i) / 13);
          dyn[1][i-1] = dyn[1][i - helper.intoyear(dyn[0][i-2]) - 1];
          dyn[2][i-1] = inputs.saving * helper.intoyear(dyn[0][i-2]);
          dyn[3][i-1] = dyn[3][i-2];
          dyn[4][i-1] = 0;
          dyn[5][i-1] = dyn[5][i-2];
          dyn[6][i-1] = false;
          dyn[7][i-1] = true;       // special element view indicator (elements such as full year, sums, ect)
          dyn[8][i-1] = ". Jahr";  // unit to be shown in the output table behind time index
          dyn[9][i-1] = true;       // true iff element represents full year value
          jumper = 1;
        } else {
          dyn[7][i-1] = false;  // full year view indicator
          (i === 1) ? dyn[0][i-1] = 1 : dyn[0][i-1] = dyn[0][i-2-jumper] + 1;                                                      // month
          (i === 1) ? dyn[1][i-1] = 0 - inputs.initialfee + inputs.initialpay : dyn[1][i-1] = dyn[5][i-2-jumper];                  // balance bop
          dyn[2][i-1] = inputs.saving;                                              // savings
          /** push savings time and amount value to cfSave */
          cfSave.push([dyn[0][i-1] ,dyn[2][i-1]]);
          interestaccum += dyn[1][i-1] * (inputs.interestsave / 12);
          if ((dyn[0][i-1] % 12 === 0) || (i === termsaveFullMth * 12 + termsaveFullY)){ // end of year or last period in term
            dyn[3][i-1] = interestaccum; interestaccum = 0;                         // interest
            dyn[6][i-1] = true;                                                     // full year indicator
            helper.wohnungsbautemp = (i <= 12) ? inputs.initialpay : 0;
            helper.wohnungsbau += Math.round(100 * Math.min(((helper.intoyear(dyn[0][i-1]) * inputs.saving + dyn[3][i-1] + helper.wohnungsbautemp) > 50 ? (helper.intoyear(dyn[0][i-1]) * inputs.saving + dyn[3][i-1] + helper.wohnungsbautemp) : 0) * 0.088, 45.056 * (1 + Number(inputs.marriage)))) / 100; // amount of Wohnungsbauprämie
            // do one more loop for annual aggregates if we are in the last period of saving term and this period is not a full year
            !(dyn[0][i-1] % 12 === 0) && (i === termsaveFullMth * 12 + termsaveFullY) ? y += 1 : y = y;
          } else {
            dyn[3][i-1] = 0;
            dyn[6][i-1] = false;
          }
          dyn[4][i-1] = 0;                                                       // other pays / wohnungsbaupr
          dyn[5][i-1] = dyn[1][i-1] + dyn[2][i-1] + dyn[3][i-1];                    // balance eop
          terminal[0] = dyn[0][i-1];
          terminal[2] += dyn[2][i-1];
          terminal[3] += dyn[3][i-1];
          jumper = 0;
        }
        terminal[5] = dyn[5][i-1];
      }

      // STATIC CALCS
      helper.finalsavings = terminal[5];  // final w/o Wohnungsbau
      helper.wohnungsbauent = inputs.income <= (1 + Number(inputs.marriage)) * 25600 ? true : false;   // entitled to 'Wohnungsbauprämie?'
      helper.wohnungsbau = Number(inputs.bonus) * Number(helper.wohnungsbauent) * helper.wohnungsbau;
      // total available savings w wohnungsbauprämie
      helper.finalsavingswohnungsbau = helper.finalsavings + helper.wohnungsbau;
      // total loan payment
      helper.totalloanpay = (inputs.paypercent / 100) * inputs.principal;


      // transpose dyn
      dynT = dyn[0].map(function(col,i){
        return dyn.map(function(row){
          return row[i];
        })
      });

      // attach final rows
      if(helper.wohnungsbau!= 0){
        dynT.push(['Wohnungsbauprämie', terminal[5],helper.wohnungsbau,,,terminal[5] + helper.wohnungsbau,,]);
      }

      dynT.push(['Summen', 0 - inputs.initialfee + inputs.initialpay,terminal[2] + helper.wohnungsbau,terminal[3],,terminal[5] + helper.wohnungsbau,,true]);
      dynT.push(['Zuteilung Darlehen', terminal[5] + helper.wohnungsbau, -helper.totalloanpay,,,terminal[5] + helper.wohnungsbau - helper.totalloanpay,,true]);

      // STATIC COMPUTATIONS

      // number of inflow payments
      helper.numberpays = termsaveFullMth * 12;

      // total payments
      helper.totalpays = helper.numberpays * inputs.saving;

      // total interest
      helper.totalinterest = helper.finalsavings - helper.totalpays + inputs.initialfee - inputs.initialpay;

      // total loan payment
      helper.totalloanpay = (inputs.paypercent / 100) * inputs.principal;

      // amount loan w/o interest
      helper.totalloan = helper.totalloanpay - helper.finalsavingswohnungsbau;

      // term loan
      helper.termloan = inputs.interestdebt === 0 ? helper.totalloan / (12 * inputs.repay) : Math.log(( inputs.repay / (r * helper.totalloan)) / ((inputs.repay / (r * helper.totalloan)) - 1)) / (12 * Math.log(1 + r));

      // "Ansparquote"
      helper.savingratio = (helper.finalsavingswohnungsbau / inputs.principal) * 100;

      // number of loan payments
      helper.totalloanpays = helper.termloan * 12;

      /** COMPUTE IRR FOR SAVINGSPERIOD */
      /** add initial special pay */
      //cfSave[0][1] += inputs.initialpay;
      /** subtract end value of savings */
      //cfSave[cfSave.length - 1][1] -= helper.finalsavingswohnungsbau;
      /** compute irr */
      //helper.irrSave = f.basic.irr(0 ,cfSave, 12);
      //helper.irrSave = typeof helper.irrSave !== 'undefined' ? helper.irrSave : null;


      /** ******** 5. COMPUTATIONS LOAN PERIOD ******** */
      jumper = 0;
      var initSaldo = 0, repayHelper = 0;
      var interestHelper = 0;
      var terminalLoan = [];
      terminalLoan[2] = 0;
      terminalLoan[3] = 0;

      for(i = 1, y = Math.floor(helper.totalloanpays) + 1; i <= y; i++){

        if (dynloan[6][i-2]) {   // if last iteration was full year such that annual vals should be computed
          dynloan[0][i-1] = Math.ceil(dynloan[0][i-2] / 12);
          dynloan[1][i-1] = dynloan[1][i - Math.min(helper.intoyear(dynloan[0][i-2]), i-1) - 1];
          dynloan[2][i-1] = repayHelper; repayHelper = 0;
          dynloan[3][i-1] = interestHelper; interestHelper = 0;
          dynloan[4][i-1] = 0;  // not used
          dynloan[5][i-1] = dynloan[5][i-2];
          dynloan[6][i-1] = false;
          dynloan[7][i-1] = true;       // special element view indicator (elements such as full year, sums, ect)
          dynloan[8][i-1] = ". Jahr";   // unit to be shown in the output table behind time index
          dynloan[9][i-1] = true;       // true iff element represents full year value
          jumper = 1;
        } else {
          (i === 1) ? dynloan[0][i-1] = 1 + terminal[0] : dynloan[0][i-1] = dynloan[0][i-2-jumper] + 1;
          (i === 1) ? dynloan[1][i-1] = terminal[5] + helper.wohnungsbau - helper.totalloanpay : dynloan[1][i-1] = dynloan[5][i-2-jumper];
          dynloan[3][i-1] = dynloan[1][i-1] * (inputs.interestdebt / 12);  // interest
          interestHelper += dynloan[3][i-1];
          terminalLoan[3] += dynloan[3][i-1];
          dynloan[2][i-1] = Math.min(inputs.repay, -(dynloan[1][i-1] + dynloan[3][i-1]));
          /** push repayment time and amount value to cfLoan */
          cfLoan.push([dynloan[0][i-1] - terminal[0] ,dynloan[2][i-1]]);
          terminalLoan[2] += dynloan[2][i-1];
          repayHelper += dynloan[2][i-1];
          //dynloan[4][i-1] = 5;  switched off
          dynloan[5][i-1] = dynloan[1][i-1] + dynloan[2][i-1] + dynloan[3][i-1];
          if(dynloan[0][i-1] % 12 === 0 || y === i){
            dynloan[6][i-1] = true;
            y += 1;
          } else {
            dynloan[6][i-1] = false;
          }
          jumper = 0;
        }
      }

      // transpose dynloan
      dynloanT = dynloan[0].map(function(col,i){
        return dynloan.map(function(row){
          return row[i];
        })
      });

      // attach final rows
      dynloanT.push(['Summen', terminal[5] + helper.wohnungsbau - helper.totalloanpay ,terminalLoan[2], terminalLoan[3],,terminal[5] + helper.wohnungsbau - helper.totalloanpay + terminalLoan[2] + terminalLoan[3] ,,true]);

      // interest loan
      //helper.interestloan = inputs.interestdebt === 0 ? 0 : helper.totalloan * ((Math.pow(1 + r, 12 * helper.termloan)) * (r * 12 * helper.termloan - 1) + 1) / ( Math.pow(1 + r, 12 * helper.termloan) -1);
      helper.interestloan = -terminalLoan[3];

      // amount loan w interest
      //helper.totalloanwinterest = helper.totalloan + helper.interestloan;
      helper.totalloanwinterest = helper.totalloan + helper.interestloan;


      /** COMPUTE IRR FOR LOANPERIOD */
      //helper.irrLoan = f.basic.irr(helper.totalloan ,cfLoan, 12);
      //helper.irrLoan = typeof helper.irrLoan !== 'undefined' ? helper.irrLoan : null;




      /** ******** 9. RETURN VALUES ******** */
      result.numberpays     = helper.numberpays;
      result.totalpays      = helper.totalpays;
      result.totalinterest  = helper.totalinterest;
      result.totalloanpay   = (inputs.paypercent / 100) * inputs.principal;
      result.totalloan      = helper.totalloan;
      result.interestloan   = helper.interestloan;
      result.termloan       = helper.termloan;
      result.savingratio    = helper.savingratio;
      result.totalloanpay   = helper.totalloanpay;
      result.totalloanpays  = helper.totalloanpays;
      result.totalloanwinterest =  helper.totalloanwinterest;
      result.finalsavingswohnungsbau = helper.finalsavingswohnungsbau;
      result.wohnungsbau    = helper.wohnungsbau;
      result.initialpay     = inputs.initialpay;
      result.intialfee      = -inputs.initialfee;


      return result;


    };



    return fun;



  });

})();