/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){

  /** ********************** BEGIN ANGULAR CODE ********************************************* */
  var MietenOderKaufen = angular.module('MietenOderKaufen', ['rzModule']);

  MietenOderKaufen.controller('MietenOderKaufenController', function($scope, $rootScope){

    /** *** CALCULATION FUNCTIONS *** */
    $scope.calcEquity = function(){
      return ($scope.equity / 100) * $scope.price;
    };
    $scope.calcPriceaddon = function(){
      return ($scope.priceaddon / 100) * $scope.price;
    };
    $scope.calcDebtpay = function(){
      return ($scope.debtpay / 100) * ($scope.income - ($scope.maintenancePercent / 100) * ($scope.price) / 12);
    };
    $scope.calcMaintenanceYear = function(){
      return ($scope.maintenancePercent / 100) * ($scope.price);
    };
    $scope.calcMaintenanceMonth = function(){
      return ($scope.maintenancePercent / 100) * ($scope.price) / 12;
    };



    /** initialize values */
    $scope.price            = 250000;
    $scope.rent             = 1400;
    $scope.equity           = 30;
    $scope.income           = 1800;
    $scope.priceaddon       = 7.5;
    $scope.maintenancePercent = 1.25;
    $scope.valuedynamic     = 2;
    $scope.rentdynamic      = 2;
    $scope.costdynamic      = 1.5;
    $scope.equityinterest   = 1.5;
    $scope.debtinterest     = 3;
    $scope.debtpay          = 100;



    /** slider settings */
    $scope.sliderTranslate = function(value){
      return '';
    };

    /** redraw slider and change angle item once collapsible panels are opened */
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).prev().find('i').addClass('fa-angle-down');
      $rootScope.$broadcast('rzSliderForceRender');
    });

    $('.collapse').on('hidden.bs.collapse', function(){
      $(this).prev().find('i').removeClass('fa-angle-down');
    });



    /** run calculations */
    $scope.result1 = function(){
      return $scope.price * 0.5;
    };
    $scope.result2 = function(){
      return 500000 - $scope.price * 0.5;
    };


    $('#chart-container').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [$scope.rentdynamic + 1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    });




  });
  /** ********************** END ANGULAR CODE ********************************************* */

  /** ********************** BEGIN JQUERY CODE ******************************************** */
  $( document ).ready(function() {

  });



  /** ********************** END JQUERY CODE ********************************************* */





}());


