/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){

  angular.module('app').factory('geldanlageCalculator', function() {

    var fun = {};



    fun.savings = function(inputs){
      /** set defaults */

      /** define objects */
      var result = {}; result._1 = {}; result._2 = {};
      var helper = {};

      /** conversions */
      helper.term = inputs.term * 12;
      inputs.term = inputs.term * 12;
      inputs.term = Math.ceil(inputs.term) / 12;
      inputs.termfix = Math.ceil(inputs.termfix * 12) / 12;


      var res = f.savings.schedule.call({
        mode: inputs.select + 1,
        principal: inputs.principal,
        term: inputs.term,
        inflow: inputs.inflow,
        interest: inputs.interest / 100,
        inflowfreq: inputs.inflowfreq,
        interestfreq: inputs.interestperiod,
        compounding: inputs.compounding,
        dynamic: inputs.dynamic / 100,
        inflowtime: inputs.inflowtype,
        termfix: inputs.termfix,
        terminal: inputs.terminal
      });






    };



    return fun;

  });



})();