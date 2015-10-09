/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){

  /** ********************** BEGIN ANGULAR CODE ********************************************* */
  angular.module('app').controller('MietenOderKaufenCtrl', function($scope, $rootScope, $interval, chartConfig, hauskaufCalculator){

    /** *** CALCULATION FUNCTIONS *** */
    $scope.calcAbsolute = function(basis, percentage){
      return (percentage / 100) * basis;
    };
    $scope.calcMonthlyDebt = function(debtPercentage, maintenancePercentage, income, price){
      return (debtPercentage / 100) * (income - ((maintenancePercentage / 100) * price) / 12);
    };
    $scope.calcMonthlyMaintenance = function(maintenancePercentage, price){
      return (maintenancePercentage / 100) * price / 12;
    };
    $scope.calcDebtpay = function(){
      return ($scope.inputs.debtpay / 100) * ($scope.inputs.income - ($scope.inputs.maintenancePercent / 100) * ($scope.inputs.price) / 12);
    };
    $scope.calcMaintenanceYear = function(){
      return ($scope.inputs.maintenancePercent / 100) * ($scope.inputs.price);
    };
    $scope.calcMaintenanceMonth = function(){
      return ($scope.inputs.maintenancePercent / 100) * ($scope.inputs.price) / 12;
    };
    $scope.calcBestAlternative = function(){
      var answer;
      if ($scope.result.buyFinalWealth >= $scope.result.rentFinalWealth){
        answer = ' kaufen '
      } else {
        answer = ' mieten '
      }
      return answer;
    };

    /** initialize values */
    $scope.inputs = {
      price: 500000,
      rent: 1000,
      equity: 20,
      income: 1200,
      priceaddon: 10,
      maintenancePercent: 1.25,
      valuedynamic: 1.1,
      rentdynamic: 2.2,
      costdynamic: 2.2,
      equityinterest: 1.6,
      debtinterest: 2.2,
      debtpay: 100,
      period: 15,
      incomedynamic: 0
    };


    /** slider settings */
    $scope.sliderTranslate = function(value){
      return '';
    };


    //todo: directive
    /** redraw slider and change angle item once collapsible panels are opened */
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).prev().find('i').addClass('fa-angle-down');
      $rootScope.$broadcast('rzSliderForceRender');
    });

    $('.collapse').on('hidden.bs.collapse', function(){
      $(this).prev().find('i').removeClass('fa-angle-down');
    });




    /** watch inputs and re-compute on change */
    $scope.$watchCollection('inputs', function(){
      var inputObj = {price: $scope.inputs.price, priceaddon: $scope.calcAbsolute($scope.inputs.price, $scope.inputs.priceaddon), maintenance: $scope.calcMaintenanceMonth(), rent: $scope.inputs.rent, equity: $scope.calcAbsolute($scope.inputs.price, $scope.inputs.equity), income: $scope.inputs.income, equityinterest: $scope.inputs.equityinterest, debtinterest: $scope.inputs.debtinterest, debtpay: $scope.calcDebtpay(), period: $scope.inputs.period, incomcedynamic: $scope.inputs.incomedynamic, rentdynamic: $scope.inputs.rentdynamic, valuedynamic: $scope.inputs.valuedynamic, costdynamic: $scope.inputs.costdynamic};
      $scope.result = hauskaufCalculator.buyrent(inputObj);
      $scope.buyIsBest = ($scope.result.buyFinalWealth >= $scope.result.rentFinalWealth);
      $scope.chartConfig.series[0].data = [{y: $scope.result.rentFinalWealth, color:'#F38200'}, $scope.result.buyFinalWealth];
    });




    /** charting */
    var chartLocal = {
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: ['Mieten','Kaufen']
      },
      yAxis: {
        title: {
          text: 'Vermögen'
        }
      },
      series: [{
        data: [{y:1, color: '#F38200'}, 4]
      }]
    };

    $scope.chartConfig = angular.extend(chartLocal , chartConfig.verticalBar);




  });
  /** ********************** END ANGULAR CODE ********************************************* */






}());


