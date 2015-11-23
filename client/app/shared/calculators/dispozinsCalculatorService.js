/**
 * Created by benjamintanz on 23.11.15.
 */

(function(){

  angular.module('app').factory('dispozinsCalculator', [function(){

    var fun = {};

    fun.test = function(){
      return 'Ho';
    };


    fun.dispo = function(inputs){

      var factor;

      factor = Math.min(inputs.principal, inputs.limit) * (inputs.dispointerest / 100) + Math.max(0,inputs.principal - inputs.limit) * (inputs.otherinterest / 100);

      if (inputs.periodchoice === "days"){
        switch(inputs.daycount){
          case "a30E360":
          case 1:
            amount = factor * inputs.days / 360;
            interest = (amount / inputs.principal) * (360 / inputs.days) * 100;
            return resultObj(amount, interest);
            break;
          case "a30360":
          case 2:
            amount = factor * inputs.days / 360;
            interest = (amount / inputs.principal) * (360 / inputs.days) * 100;
            return resultObj(amount, interest);
            break;
          case "act360":
          case 3:
            amount = factor * inputs.days / 360;
            interest = (amount / inputs.principal) * (360 / inputs.days) * 100;
            return resultObj(amount, interest);
            break;
          case "act365":
          case 4:
            amount = factor * inputs.days / 365;
            interest = (amount / inputs.principal) * (365 / inputs.days) * 100;
            return resultObj(amount, interest);
            break;
          case "actact":
          case 5:
            amount = factor * inputs.days / 365.25;
            interest = (amount / inputs.principal) * (365.25 / inputs.days) * 100;
            return resultObj(amount, interest);
            break;
        }
      } else if (inputs.periodchoice === "dates"){

        range = {"begindate": inputs.startdate, "enddate": inputs.enddate, "skipvalidation": true};
        daycount = misc.daycount(range);

        switch(inputs.daycount){
          case "a30E360":
            return daycount.then(function(daycount){
              amount = factor * daycount._1.a30E360factor.value;
              interest = (amount / inputs.principal) * (360 / daycount._1.a30E360interestdays.value) * 100;
              return resultObj(amount, interest);
            });
            break;
          case "a30360":
            return daycount.then(function(daycount) {
              amount = factor * daycount._1.a30360factor.value;
              interest = (amount / inputs.principal) * (360 / daycount._1.a30360interestdays.value) * 100;
              return resultObj(amount, interest);
            });
            break;
          case "act360":
            return daycount.then(function(daycount) {
              amount = factor * daycount._1.act360factor.value;
              interest = (amount / inputs.principal) * (360 / daycount._1.act360interestdays.value) * 100;
              return resultObj(amount, interest);
            });
            break;
          case "act365":
            return daycount.then(function(daycount) {
              amount = factor * daycount._1.act365factor.value;
              interest = (amount / inputs.principal) * (365 / daycount._1.act365interestdays.value) * 100;
              return resultObj(amount, interest);
            });
            break;
          case "actact":
            return daycount.then(function(daycount) {
              amount = factor * daycount._1.actactfactor.value;
              interest = (amount / inputs.principal) * (1 / daycount._1.actactfactor.value) * 100;
              return resultObj(amount, interest);
            });
            break;
        }
      }

      // function that holds the results
      function resultObj(amount, interest){
        var result = {};
        result.amount = amount;
        result.interest = interest;
        return result;
      }




    };





    return fun;
  }
  ]);


})();