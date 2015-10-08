/**
 * Created by benjamintanz on 07.10.15.
 */


(function(){

  angular.module('app').factory('hauskaufCalculator', function(){

    var fun = {};

    fun.multi = function(a){
      return 0.1*a;
    };


    /** mieten-oder-kaufen */
    fun.buyrent = function(inputs) {

      var result = {};
      var temp1, temp2, temp3, temp11, temp12, temp13;
      var helper = {}, i;
      var dyn = []; dyn[0] = []; dyn[1] = []; dyn[2] = []; dyn[3] = []; dyn[4] = []; dyn[5] = [];
      var dynT;
      var dynBuy = []; dynBuy[0] = []; dynBuy[1] = []; dynBuy[2] = []; dynBuy[3] = []; dynBuy[4] = [];
      dynBuy[5] = []; dynBuy[6] = []; dynBuy[7] = []; dynBuy[8] = []; dynBuy[9] = []; dynBuy[10] = [];
      dynBuy[11] = []; dynBuy[12] = []; dynBuy[13] = []; dynBuy[14] = [];
      var dynBuyT;

      inputs.dynamics = true;

      // helper functions
      /**
       * annualInterestLinear
       *
       * Method that computes annual interest payments for 'subannual' annuity repayment schedules
       * according to the linear interest method. Each period, the periodical (linear) interest rate is applied
       * to the beginning-of-period residual account balance. The end of period account balance is computed
       * by subtracting the periodical payment and adding the periodical interest. Note that this is different
       * to, for example, the PAngV method, where the 'subannual' account balance is computed as
       * by subtracting the periodical payment only.
       *
       * @method annualInterestLinear
       * @param residualDebt {Number} debt at the beginning of the year
       * @param periodsPerYear {Number} the payment periods per year (example: equals 12 for monthly payments)
       * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
       * @param periodicalPayment {Number} the periodical annuity payment
       * @return annualInterest {Number} Returns the annual interest payment
       */
      var annualInterestLinear = function(residualDebt, periodsPerYear, interest, periodicalPayment){
        var result = 0, i, iAmount;
        for (i = 1; i <= periodsPerYear; i++){
          iAmount = Math.max(residualDebt, 0) * (interest / periodsPerYear);
          residualDebt -= (periodicalPayment - iAmount);
          result += iAmount;
        }
        return result;
      };

      /**
       * annualAmortizationLinear
       *
       * Method that computes the annual amortization values for 'subannual' annuity repayment schedules
       * according to the linear interest method. Each period, the periodical (linear) interest rate is applied
       * to the beginning-of-period residual account balance. The end of period account balance is computed
       * by subtracting the periodical payment and adding the periodical interest.
       *
       * @method annualAmortizationLinear
       * @param residualDebt {Number} debt at the beginning of the year
       * @param periodsPerYear {Number} the payment periods per year (example: equals 12 for monthly payments)
       * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
       * @param periodicalPayment {Number} the periodical annuity payment
       * @return annualInterest {Number} Returns the annual interest payment
       */
      var annualAmortizationLinear = function(residualDebt, periodsPerYear, interest, periodicalPayment){
        return Math.min(residualDebt, periodsPerYear * periodicalPayment - annualInterestLinear(residualDebt, periodsPerYear, interest, periodicalPayment));
      };


      /**
       * annualResidualLinear
       *
       * Method that computes the end of year residual debt values for 'subannual' annuity repayment schedules
       * according to the linear interest method. Each period, the periodical (linear) interest rate is applied
       * to the beginning-of-period residual account balance. The end of period account balance is computed
       * by subtracting the periodical payment and adding the periodical interest.
       *
       * @method annualResidualLinear
       * @param residualDebt {Number} debt at the beginning of the year
       * @param periodsPerYear {Number} the payment periods per year (example: equals 12 for monthly payments)
       * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
       * @param periodicalPayment {Number} the periodical annuity payment
       * @return annualInterest {Number} Returns the annual interest payment
       */
      var annualResidualLinear = function(residualDebt, periodsPerYear, interest, periodicalPayment){
        return residualDebt - annualAmortizationLinear(residualDebt, periodsPerYear, interest, periodicalPayment);
      };

      var add = function(a,b){
        return a + b;
      };





      inputs.equityinterest = inputs.equityinterest / 100;
      inputs.debtinterest = inputs.debtinterest / 100;
      inputs.rentdynamic = (inputs.rentdynamic / 100) || 0;
      inputs.incomedynamic = (inputs.incomedynamic / 100) || 0;
      inputs.valuedynamic = (inputs.valuedynamic / 100) || 0;
      inputs.costdynamic = (inputs.costdynamic / 100) || 0;


      /** ******** 3. COMPUTATIONS ******** */
      /**
       3.A STATIC COMPUTATIONS
       */

      helper.rentFinalCost = (inputs.dynamics && inputs.rentdynamic !== 0) ? (inputs.rent * 12) * (1 - Math.pow(1 + inputs.rentdynamic, inputs.period)) / (-inputs.rentdynamic) : inputs.rent * 12 * inputs.period;
      helper.rentFinalIncome = (inputs.dynamics && inputs.incomedynamic !== 0) ? (inputs.income * 12) * (1 - Math.pow(1 + inputs.incomedynamic, inputs.period)) / (-inputs.incomedynamic) : inputs.income * 12 * inputs.period;
      helper.rentAnnualReplacement = (inputs.income - inputs.rent) * (12 + (13 / 2) * inputs.equityinterest);
      helper.rentAvailableForSavingValue = (inputs.equityinterest === 0) ? helper.rentAnnualReplacement : helper.rentAnnualReplacement * (Math.pow(1 + inputs.equityinterest, inputs.period) - 1) / inputs.equityinterest;


      /**
       3.B DYNAMIC COMPUTATIONS RENT
       */

      for (i = 1; i <= inputs.period; i++) {
        dyn[0][i - 1] = i;                                        // period
        dyn[1][i - 1] = (i === 1) ? inputs.equity : dyn[4][i - 2];   // wealth start
        dyn[2][i - 1] = (inputs.income * 12) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.rent * 12) * Math.pow(1 + inputs.dynamics * inputs.rentdynamic, i - 1);       // surplus income
        temp11 = dyn[1][i - 1];
        temp12 = 0;
        temp13 = 0;
        for (var k = 1; k <= 12; k++) {  // compute 'subannual' interest; this is necessary because wealth may become negative in a month between to years if the rent payments increase more than available income
          temp12 = (inputs.equityinterest / 12) * (temp11 + (inputs.income) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.rent) * Math.pow(1 + inputs.dynamics * inputs.rentdynamic, i - 1));
          temp13 += temp12 >= 0 ? temp12 : 0;
          temp11 += (inputs.income) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.rent) * Math.pow(1 + inputs.dynamics * inputs.rentdynamic, i - 1);
        }
        dyn[3][i - 1] = temp13;
        dyn[4][i - 1] = dyn[1][i - 1] + dyn[2][i - 1] + dyn[3][i - 1];   // wealth end
      }


      // transpose dyn
      dynT = dyn[0].map(function (col, i) {
        return dyn.map(function (row) {
          return row[i];
        })
      });

      // attach final rows
      dynT.push(['Gesamt', inputs.equity, _.reduce(dyn[2], add, 0), _.reduce(dyn[3], add, 0), dyn[4][inputs.period - 1], true]);

      helper.rentFinalInterest = _.reduce(dyn[3], add, 0);
      helper.rentFinalWealth = inputs.equity + helper.rentFinalIncome + helper.rentFinalInterest - helper.rentFinalCost;
      helper.buyLoan = inputs.price + inputs.priceaddon - inputs.equity;
      helper.buyAnnualLoanPayment = inputs.debtpay * 12;


      /**
       3.C DYNAMIC COMPUTATIONS BUY
       */
      for (i = 1; i <= inputs.period; i++) {
        dynBuy[0][i - 1] = i;                                        // period
        dynBuy[1][i - 1] = (i === 1) ? 0 : dynBuy[11][i - 2];                                                              // money wealth bop
        dynBuy[2][i - 1] = (i === 1) ? inputs.equity - inputs.priceaddon : dynBuy[12][i - 2];                             // total wealth bop
        dynBuy[3][i - 1] = (i === 1) ? helper.buyLoan : dynBuy[6][i - 2];                                                  // residual begin
        dynBuy[4][i - 1] = annualInterestLinear(dynBuy[3][i - 1], 12, inputs.debtinterest, inputs.debtpay);       // annual loan interest
        dynBuy[5][i - 1] = annualAmortizationLinear(dynBuy[3][i - 1], 12, inputs.debtinterest, inputs.debtpay);   // annual loan amortization
        dynBuy[6][i - 1] = annualResidualLinear(dynBuy[3][i - 1], 12, inputs.debtinterest, inputs.debtpay);       // residual end
        dynBuy[7][i - 1] = dynBuy[4][i - 1] + dynBuy[5][i - 1];                                                             // loan payment
        dynBuy[8][i - 1] = (inputs.income * 12) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.maintenance * 12) * Math.pow(1 + inputs.dynamics * inputs.costdynamic, i - 1) - dynBuy[7][i - 1];                                  // annual surplus income
        temp1 = 0;
        temp2 = 0;
        temp3 = dynBuy[7][i - 1];
        for (var j = 1; j <= 12; j++) {  // compute 'subannual' interest; this is necessary because the loan payments may end in a month between two years
          temp1 += inputs.income * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - inputs.maintenance * Math.pow(1 + inputs.dynamics * inputs.costdynamic, i - 1);
          temp2 += temp1 >= 0 ? temp1 * (inputs.equityinterest / 12) : 0;
          if (temp3 >= inputs.debtpay) {
            temp1 -= inputs.debtpay;
            temp3 -= inputs.debtpay;
          } else if (temp3 < inputs.debtpay && temp3 > 0) {
            temp1 -= temp3;
            temp3 -= temp3;
          } else {
            temp1 -= 0;
          }
        }
        dynBuy[9][i - 1] = ((dynBuy[8][i - 1] + dynBuy[7][i - 1]) >= 0) ? dynBuy[1][i - 1] * inputs.equityinterest + temp2 : temp2;
        dynBuy[10][i - 1] = inputs.price * (inputs.dynamics) * (Math.pow(1 + inputs.valuedynamic, i) - Math.pow(1 + inputs.valuedynamic, i - 1));  //
        dynBuy[11][i - 1] = dynBuy[1][i - 1] + dynBuy[8][i - 1] + dynBuy[9][i - 1];   // money wealth end
        dynBuy[12][i - 1] = dynBuy[2][i - 1] + dynBuy[5][i - 1] + dynBuy[8][i - 1] + dynBuy[9][i - 1] + dynBuy[10][i - 1];   // total wealth eop

      }


      // transpose dynBuy
      dynBuyT = dynBuy[0].map(function (col, i) {
        return dynBuy.map(function (row) {
          return row[i];
        })
      });

      helper.termloan = Math.log(( inputs.debtpay / ((inputs.debtinterest / 12) * helper.buyLoan)) / ((inputs.debtpay / ((inputs.debtinterest / 12) * helper.buyLoan)) - 1)) / (12 * Math.log(1 + (inputs.debtinterest / 12)));
      helper.buyprice = (inputs.price + inputs.priceaddon);
      helper.buyInterestSave = _.reduce(dynBuy[9], add, 0);

      helper.buyInterestLoan = _.reduce(dynBuy[4], add, 0);
      helper.buyIncomeSurplus = _.reduce(dynBuy[8], add, 0);
      helper.buyPropertyIncrease = _.reduce(dynBuy[10], add, 0);
      helper.buyMaintenance = (inputs.dynamics && inputs.costdynamic !== 0) ? inputs.maintenance * 12 * (1 - Math.pow(1 + inputs.costdynamic, inputs.period)) / (-inputs.costdynamic) : inputs.maintenance * 12 * inputs.period;
      helper.buyRepay = _.reduce(dynBuy[5], add, 0);
      helper.buyResidual = -helper.buyLoan + helper.buyRepay;
      helper.buyFinalWealth = inputs.equity - helper.buyprice + helper.buyLoan + helper.rentFinalIncome + helper.buyInterestSave - helper.buyInterestLoan + helper.buyPropertyIncrease - helper.buyMaintenance - helper.buyRepay + helper.buyResidual + inputs.price;

      // attach final rows
      dynBuyT.push(['Gesamt', helper.buyLoan, inputs.equity - inputs.priceaddon, helper.buyInterestLoan, helper.buyRepay, helper.buyRepay, , _.reduce(dynBuy[8], add, 0), helper.buyIncomeSurplus, helper.buyInterestSave, helper.buyPropertyIncrease, dynBuy[11][inputs.period - 1], dynBuy[12][inputs.period - 1], dynBuy[12][inputs.period - 1], true]);

      /**
      console.log('equity: ' + inputs.equity);
      console.log('buyprice: ' + helper.buyprice );
      console.log('buyloan: ' + helper.buyLoan );
      console.log('rentFinalIncome: ' + helper.rentFinalIncome );
      console.log('buyInterestSave: ' + helper.buyInterestSave );
      console.log('buyInterestLoan: ' + helper.buyInterestLoan );
      console.log('buyPropertyIncrease: ' + helper.buyPropertyIncrease );
      console.log('buyMaintenance: ' + helper.buyMaintenance );
      console.log('buyRepay: ' + helper.buyRepay );
      console.log('buyResidual: ' + helper.buyResidual );
      console.log('price: ' + inputs.price );**/

      result.rentFinalWealth   = helper.rentFinalWealth;
      result.rentEquity        = inputs.equity;
      result.rentFinalIncome   = helper.rentFinalIncome;
      result.rentFinalCost     = -helper.rentFinalCost;
      result.rentFinalInterest = helper.rentFinalInterest;
      result.buyFinalWealth    = helper.buyFinalWealth;
      result.buyEquity         = inputs.equity;
      result.buyPrice          = -helper.buyprice;
      result.buyLoan           = helper.buyLoan;
      result.buyFinalIncome    = helper.rentFinalIncome;
      result.buyInterestSave   = helper.buyInterestSave;
      result.buyInterestLoan   = -helper.buyInterestLoan;
      result.buyMaintenance    = -helper.buyMaintenance;
      result.buyRepay          = -helper.buyRepay;
      result.buyResidual       = helper.buyResidual;
      result.buyPropValue      = inputs.price + helper.buyPropertyIncrease;

      return result;

    };


    return fun;


  });



})();