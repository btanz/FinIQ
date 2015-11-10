/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){
  'use strict';

  angular.module('app').controller('sparrechnerController', function($scope, $rootScope, chartConfig, finlibSavings) {

    var vm = this,
        res;


    /** initialize values */
    vm.inputs = {
      principal: 10000,
      saving: 100,
      interest: 1.75,
      term: 10,
      dynamic: 0,
      saveterm: 0,
      inflowfreq: {id: 12},
      inflowtime: {id: 1},
      interestfreq: {id: 1},
      compounding: {id: 1}
    };


    /** redraw slider and change angle item once collapsible panels are opened */
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).prev().find('i').addClass('fa-angle-down');
      $rootScope.$broadcast('rzSliderForceRender');
    });

    $('.collapse').on('hidden.bs.collapse', function(){
      $(this).prev().find('i').removeClass('fa-angle-down');
    });


    /** watch inputs, re-compute, re-assign and redraw on change */
    $scope.$watchCollection('vm.inputs', function(){
      /** calculate maximal price */
      var inputObj = {
        mode: 1,
        principal: vm.inputs.principal,
        term: Math.ceil(vm.inputs.term * 12) / 12,
        inflow: vm.inputs.saving,
        interest: vm.inputs.interest / 100,
        inflowfreq: vm.inputs.inflowfreq.id,
        interestfreq: vm.inputs.interestfreq.id,
        compounding: vm.inputs.compounding.id,
        dynamic: vm.inputs.dynamic / 100,
        inflowtime: vm.inputs.inflowtime.id,
        termfix: Math.ceil(vm.inputs.saveterm * 12) / 12,
        terminal: 120000
      };
      vm.result = finlibSavings.schedule.call(inputObj);

      res = _.filter(vm.result.schedule, function(arr){
        return (arr[5] === true && arr[6] === false);
      });
      // construct cumulative inflow and interest arrays
      var res_anfang = _.map(res, function(){ return vm.inputs.principal; });
      res_anfang.unshift(vm.inputs.principal);
      var res_einzahlungen = _.map(res, function(arr){ return arr[2]; });
      res_einzahlungen = _.reduce(res_einzahlungen, function (acc, n) { acc.push( (acc.length > 0 ? acc[acc.length-1] : 0) + n); return acc }, []);
      res_einzahlungen.unshift(0);
      var res_zinsen = _.map(res, function(arr){ return arr[3]; });
      res_zinsen = _.reduce(res_zinsen, function (acc, n) { acc.push( (acc.length > 0 ? acc[acc.length-1] : 0) + n); return acc }, []);
      res_zinsen.unshift(0);

      $scope.chartConfig_1.series[0].data = [{name: 'Anfangskapital', y: vm.result.principal, color:'#009CDE'}, {name: 'Einzahlungen', y: vm.result.inflow, color:'#50B432'}, {name: 'Zinsen', y: vm.result.interest, color:'#F38200'}];
      $scope.chartConfig_2.series[0].data = res_zinsen;
      $scope.chartConfig_2.series[1].data = res_einzahlungen;
      $scope.chartConfig_2.series[2].data = res_anfang;

    });


    /** charting */
    /** interactive pie chart */
    var chartLocal_1 = {
      title: {
        text: 'Zusammensetzung des Endkapitals'
      },
      options: {
        tooltip: {
          pointFormat: '{series.name}: {point.y:.2f} €'
        },
        legend: {
          enabled: true,
          labelFormat: '<span>{name}: {y:.2f} €</span>',
          layout: 'vertical'
        }
      },
      series: [{
        name: 'Gesamtbetrag',
        data: [{
          name: 'Anfangskapital',
          y:1,
          color: '#009CDE'
        }, {
          name: 'Einzahlungen',
          y: 4,
          color: '#50B432'
        }, {
          name: 'Zinsen',
          y: 6,
          color: '#F38200'
        }]
      }]
    };

    $scope.chartConfig_1 = angular.merge(chartLocal_1 , chartConfig.piechart);


    /** interactive bar chart */
    var chartLocal_2 = {
      title: {
        text: 'Sparguthabenentwicklung'
      },
      legend: {
        enabled: false
      },
      options: {
        plotOptions: {
          column: {
            stacking: 'normal'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size: 14px">{point.key}. Jahr</span><br/>',
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.y:.2f} €<br/>',
          shared: true
        }
      },
      xAxis: {
        minTickInterval: '1',
        tickInterval: '1',
        title: {
          text: 'Jahr'
        }
      },
      yAxis: {
        title: {
          text: 'Sparguthaben'
        }
      },
      series: [
        {
          name: 'Gesamter Zinsertrag',
          data: [1, 4],
          color: '#F38200'
        },
        {
          name: 'Gesamte Einzahlungen',
          data: [1, 4],
          color: '#50B432'
        },
        {
          name: 'Anfangskapital',
          data: [1, 4],
          color: '#009CDE'
        }]
    };

    $scope.chartConfig_2 = angular.merge(chartLocal_2 , chartConfig.verticalBar);



  });



})();