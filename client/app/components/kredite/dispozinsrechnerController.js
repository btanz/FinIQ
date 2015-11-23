/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){
  'use strict';

  angular.module('app').controller('dispozinsrechnerController', ['$scope', '$rootScope', 'chartConfig', 'dispozinsCalculator', function($scope, $rootScope, chartConfig, dispozinsCalculator) {

    var vm = this;

    vm.inputs = {
      principal: 1000,
      dispolimit: 10000,
      dispointerest: 12.5,
      otherinterest: 15,
      dispodays: 100,
      daycount: {id: 1}
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

      var inputObj = {
        principal: vm.inputs.principal,
        limit: vm.inputs.dispolimit,
        dispointerest: vm.inputs.dispointerest,
        otherinterest: vm.inputs.otherinterest,
        days: vm.inputs.dispodays,
        daycount: vm.inputs.daycount.id,
        periodchoice: 'days'
      };

      vm.result = dispozinsCalculator.dispo(inputObj);

      $scope.chartConfig_1.series[0].data = [{name: 'Höhe Kontoüberziehung', y: vm.inputs.principal, color:'#009CDE'}, {name: 'Anfallende Dispozinsen', y: vm.result.amount, color:'#F38200'}];


    });

    /** charting */
    /** interactive pie chart */
    var chartLocal_1 = {
      title: {
        text: 'Zinszahlung und Überziehungsbetrag'
      },
      options: {
        tooltip: {
          pointFormat: '{point.y:.2f} €'
        },
        legend: {
          enabled: true,
          labelFormat: '<span>{name}: {y:.2f} €</span>',
          layout: 'vertical'
        }
      },
      series: [{
        data: [{
          name: 'Höhe Kontoüberziehung',
          y:6,
          color: '#009CDE'
        }, {
          name: 'Anfallende Dispozinsen',
          y: 1,
          color: '#F38200'
        }]
      }]
    };

    $scope.chartConfig_1 = angular.merge(chartLocal_1 , chartConfig.piechart);







  }]);



})();