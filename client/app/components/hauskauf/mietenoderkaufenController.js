/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){

  /** ********************** BEGIN ANGULAR CODE ********************************************* */
  angular.module('app').controller('mietenoderkaufenController', function($scope, $rootScope, $interval, chartConfig, hauskaufCalculator){

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
      price: 300000,
      rent: 1000,
      equity: 30,
      income: 1350,
      priceaddon: 10,
      maintenancePercent: 2.5,
      valuedynamic: 1.1,
      rentdynamic: 2.2,
      costdynamic: 2.2,
      equityinterest: 1.6,
      debtinterest: 2.2,
      debtpay: 90,
      period: 15,
      incomedynamic: 0
    };


    /** slider settings */
    $scope.sliderTranslate = function(value){
      return '';
    };


    //todo: move to directive
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
      $scope.chartConfig_1.series[0].data = [{y: $scope.result.rentFinalWealth, color:'#F38200'}, $scope.result.buyFinalWealth];
    });




    /** charting */
    /** interactive bar chart */
    var chartLocal_1 = {
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
        data: [{
          y:1,
          color: '#F38200'
        }, 4]
      }]
    };

    $scope.chartConfig_1 = angular.extend(chartLocal_1 , chartConfig.verticalBar);


    /** line chart with house price development */
    var chartLocal_2 = {
      title: {
        text: 'Preis- und Mietenindex für Deutschland',
        style: chartConfig.titleStyle
      },
      xAxis: {
        categories: ["Mrz '00",	"Jun '00",	"Sep '00",	"Dez '00",	"Mrz '01",	"Jun '01",	"Sep '01",	"Dez '01",	"Mrz '02",	"Jun '02",	"Sep '02",	"Dez '02",	"Mrz '03",	"Jun '03",	"Sep '03",	"Dez '03",	"Mrz '04",	"Jun '04",	"Sep '04",	"Dez '04",	"Mrz '05",	"Jun '05",	"Sep '05",	"Dez '05",	"Mrz '06",	"Jun '06",	"Sep '06",	"Dez '06",	"Mrz '07",	"Jun '07",	"Sep '07",	"Dez '07",	"Mrz '08",	"Jun '08",	"Sep '08",	"Dez '08",	"Mrz '09",	"Jun '09",	"Sep '09",	"Dez '09",	"Mrz '10",	"Jun '10",	"Sep '10",	"Dez '10",	"Mrz '11",	"Jun '11",	"Sep '11",	"Dez '11",	"Mrz '12",	"Jun '12",	"Sep '12",	"Dez '12",	"Mrz '13",	"Jun '13",	"Sep '13",	"Dez '13",	"Mrz '14",	"Jun '14",	"Sep '14",	"Dez '14",	"Mrz '15"]
      },
      yAxis: {
        title: {
          text: 'Preisindex (2010 = Index 100)'
        }
      },
      tooltip: {
        valueSuffix: ''
      },
      credits: {
        enabled: 'true',
        text: 'Quelle: Statistisches Bundesamt',
        href: 'www.destatis.de'
      },
      series: [{
        name: 'Preisindex Neubau',
        data: [91.9,	91.4,	91.3,	90.7,	90.3,	88.4,	89.9,	89.5,	89.1,	88.6,	90.1,	88.3,	89.1,	90.7,	87.4,	88.3,	89.7,	89.1,	89,	89.8,	90.5,	88.1,	89.9,	88.8,	88.9,	87,	88.3,	89.3,	86,	91.3,	91.9,	91.5,	91.8,	92.9,	93.3,	92.6,	95.8,	95.6,	99.2,	100.1,	98.8,	98.8,	101.5,	101,	102.2,	105.4,	107.1,	105.7,	106.6,	107.3,	108.4,	109.9,	108.8,	110.1,	109.5,	109.2,	110.7,	112.8,	114.6,	115.4,	116.9]
        },
        {
          name: 'Preisindex Bestand',
          data: [101.9,	101.5,	102.6,	102.8,	103.3,	103.6,	103,	100.8,	101,	102.2,	101.6,	99.6,	101.1,	103.2,	102,	100.2,	101.9,	100.5,	99.2,	97.1,	102.1,	100.4,	102.6,	99.4,	100.9,	101.8,	99.9,	100.7,	97,	98.5,	98.2,	98.3,	99.9,	100.1,	98,	98.4,	97.9,	99.7,	98.9,	100.4,	99,	100.8,	100.5,	99.7,	102.7,	103.7,	102.9,	103.9,	104.7,	106.1,	107.7,	109.2,	108.9,	111.1,	111,	111.2,	112,	113.5,	113.7,	113.4,	115.9],
          color: '#B2AB12'
        },
        {
          name: 'Mietenindex',
          data: [89.4 ,	89.6 ,	89.7 ,	90 ,	90.3 ,	90.5 ,	90.9 ,	91.1 ,	91.6 ,	91.8 ,	92 ,	92.3 ,	92.6 ,	92.9 ,	93 ,	93 ,	93.3 ,	93.5 ,	93.8 ,	93.9 ,	94.2 ,	94.4 ,	94.6 ,	94.9 ,	95.2 ,	95.5 ,	95.7 ,	95.9 ,	96.2 ,	96.5 ,	96.9 ,	97.1 ,	97.5 ,	97.8 ,	98 ,	98.3 ,	98.6 ,	98.8 ,	99 ,	99.2 ,	99.7 ,	100 ,	100.2 ,	100.5 ,	100.9 ,	101.2 ,	101.5 ,	101.9 ,	102.2 ,	102.6 ,	102.8 ,	103.2 ,	103.4 ,	103.7 ,	104.1 ,	104.5 ,	104.9 ,	105.3 ,	105.6 ,	106 ,	106.3 ],
          color: '#B20925'
        }
      ]
    };

    $scope.chartConfig_2 = angular.extend(chartLocal_2 , chartConfig.linechart);




  });
  /** ********************** END ANGULAR CODE ********************************************* */






}());


