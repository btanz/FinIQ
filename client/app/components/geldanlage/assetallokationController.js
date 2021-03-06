/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){
  'use strict';

  angular.module('app').controller('assetallokationController', ['$scope', '$rootScope', 'chartConfig', 'geldanlageCalculator', 'marketdataService', function($scope, $rootScope, chartConfig, geldanlageCalculator, marketdataService) {

    var vm = this;

    /** initialize values */
    vm.inputs = {
      selection: 1,
      principal: 15000
    };

    /** helper function to compute portfolio values */
    function multiplyArray(arr, val){
      var newArr = [];
      for (var i = 0; i < arr.length; i += 1){
        newArr.push(arr[i] * val);
      }
      return newArr;
    }

    function multiplyTwoDimArray(arr,val){
      var newArr2 = [];
      for (var i = 0; i < arr.length; i += 1){
        newArr2.push(multiplyArray(arr[i], val));
      }
      return newArr2;
    }


    /** profile name for use in view */
    var profile = ['sehr konservativ', 'konservativ', 'ausgewogen', 'aggressiv', 'sehr aggressiv'];

    /** asset allocation */
    var allocation = [[50,50,0],[30,50,20],[30,30,40],[25,15,60],[10,10,80]];

    /** watch inputs, re-compute, re-assign and redraw on change */
    $scope.$watchCollection('vm.inputs', function(){

      /** change name of profile */
      vm.profile = profile[vm.inputs.selection];

      /** change asset values */
      $scope.chartConfig_2.series[0].data = multiplyArray(marketdataService.montecarlo[vm.inputs.selection].values, vm.inputs.principal);
      $scope.chartConfig_2.series[1].data = multiplyTwoDimArray(marketdataService.montecarlo[vm.inputs.selection].confidence, vm.inputs.principal);

      /** change title of second graph depending on profile */
      $scope.chartConfig_2.title.text = 'Erwartete Rendite und Risiko für ' + vm.profile + 'e Risikoprofile';

      /** change allocation based on risk profile */
      $scope.chartConfig_1.series[0].data = [{name: 'Tagesgeld', y: allocation[vm.inputs.selection][0], color:'#009CDE'}, {name: 'Festgeld', y: allocation[vm.inputs.selection][1], color:'#50B432'}, {name: 'Aktien (ETF)', y: allocation[vm.inputs.selection][2], color:'#F38200'}];

      /** assign vm result values */
      vm.result = {
        value:    marketdataService.montecarlo[vm.inputs.selection].values[marketdataService.montecarlo[vm.inputs.selection].values.length - 1] * vm.inputs.principal,
        low_conf: marketdataService.montecarlo[vm.inputs.selection].confidence[marketdataService.montecarlo[vm.inputs.selection].confidence.length - 1][0] * vm.inputs.principal,
        high_conf: marketdataService.montecarlo[vm.inputs.selection].confidence[marketdataService.montecarlo[vm.inputs.selection].confidence.length - 1][1] * vm.inputs.principal,
        pLoss_10y: marketdataService.montecarlo[vm.inputs.selection].pLoss[10]
      };


    });


    /** charting */
    /** interactive pie chart */
    var chartLocal_1 = {
      title: {
        text: ''
      },
      options: {
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y:.0f} %</b>'
        },
        legend: {
          enabled: true,
          labelFormat: '<span>{name}: {y:.0f} %</span>',
          layout: 'vertical',
          useHTML: false
        },
        chart: {
          height: 250
        }
      },
      series: [{
        name: 'Allokation',
        data: [{
          name: 'Tagesgeld ',
          y: 55,
          color: '#009CDE'
        }, {
          name: 'Festgeld',
          y: 35,
          color: '#50B432'
        }, {
          name: 'Aktien (ETF)',
          y: 10,
          color: '#F38200'
        }]
      }]
    };
    $scope.chartConfig_1 = angular.merge(chartLocal_1 , chartConfig.piechart);


    /** interactive return line chart */
    var chartLocal_2 = {
      title: {
        text: 'Erwartete Rendite und Risikoprofil'
      },
      xAxis: {
        categories: ['2015', '2016',	'2017',	'2018',	'2019',	'2020',	'2021',	'2022',	'2023',	'2024',	'2025', '2026',	'2027',	'2028',	'2029',	'2030',	'2031',	'2032',	'2033',	'2034',	'2035']
      },
      yAxis: {
        title: {
          text: null
        }
      },
      options: {
        tooltip: {
          crosshairs: true,
          shared: true,
          valueSuffix: '€',
          valueDecimals: 2
        },
        legend: {
          enabled: false
        }
      },
      series: [{
        name: 'Renditeentwicklung',
        data: geldanlageCalculator.assetgrowth({value: 100, periods: 21, interest: 0.02, spread: 0.005}).values,
        zIndex: 1,
        marker: {
          fillColor: 'white',
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[0]
        }
      },{
        name: 'Streuung (50 % Konfidenz)',
        data: geldanlageCalculator.assetgrowth({value: 100, periods: 21, interest: 0.02, spread: 0.005}).confidence,
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0
      }]
    };

    $scope.chartConfig_2 = angular.merge(chartLocal_2 , chartConfig.linechart);


  }]);



})();