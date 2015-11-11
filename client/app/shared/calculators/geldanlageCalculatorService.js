/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){

  angular.module('app').factory('geldanlageCalculator', [function() {

    var fun = {};

    /**
     * assetGrowth
     *
     * Method that computes the value series for an asset given the number of periods, the intial value and
     * the growth rate and returns the value series as an array. It also returns lower and higher confidence
     * bands arround the value, if a ('confidence') spread is given.
     *
     * @method assetgrowth
     * @param value {Number} initial value of the asset
     * @param periods {Number} number of periods the asset is compounded
     * @param interest {Number} the periodical interest as a decimal number (i.e. 0.04)
     * @param spread {Number} the spread above and below the interest rate for confidence band calculation
     * @return values {Array} asset values for each time period
     * @return confidence {Array} confidence bands around asset values for each time period
     */
    fun.assetgrowth = function(inputs){
      // set defaults
      inputs.spread = typeof inputs.spread !== 'undefined' ? inputs.spread : 0;

      // intialize vars
      var result = [],
          result_confidence = [];
      var i,
          value_helper      = inputs.value,
          value_helper_high = inputs.value,
          value_helper_low  = inputs.value;

      // compute
      for(i = 0; i < inputs.periods; i++){
        result.push(value_helper);
        result_confidence.push([value_helper_low, value_helper_high]);
        value_helper      = value_helper * (1 + inputs.interest);
        value_helper_high = value_helper_high * (1 + inputs.interest + inputs.spread);
        value_helper_low  = value_helper_low * (1 + inputs.interest - inputs.spread);
      }

      return {
        values: result,
        confidence: result_confidence
      }

    };



    return fun;

  }]);



})();