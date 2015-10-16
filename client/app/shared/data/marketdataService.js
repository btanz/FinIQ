/**
 * Created by benjamintanz on 16.10.15.
 */
(function(){

  angular.module('app').factory('marketdataService', function(){

    var obj = {};

    /** array of mortage interest rates ordered by term in years (convention is to start with zero years, so index t is for year t) */
    obj.mortgageinterest = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.1, 1.2, 1.2, 1.35, 1.45, 1.55, 1.65, 1.70, 1.85, 1.90, 1.95, 2.00, 2.1, 2.15, 2.17, 2.19, 2.21, 2.24, 2.29, 2.30, 2.30,2.30, 2.30, 2.30];



    return obj;

  });



})();