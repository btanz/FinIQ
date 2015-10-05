/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){
  var MietenOderKaufen = angular.module('MietenOderKaufen', ['rzModule']);

  MietenOderKaufen.controller('MietenOderKaufenController', function($scope){

    /** initialize values */
    $scope.price  = 250000;
    $scope.rent   = 1400;
    $scope.equity = 30;
    $scope.income = 1800;

    /** slider settings */
    $scope.sliderTranslate = function(value){
      return '';
    };


    /** *** CALCULATION FUNCTIONS *** */
    $scope.calcEquity = function(){
      return $scope.equity / 100 * $scope.price + ' €';
    };

    /** run calculations */
    $scope.result = function(){
      return $scope.price * 0.5;
    };


  });



}());


