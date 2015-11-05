/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){

  /** ********************** BEGIN ANGULAR CODE ********************************************* */
  angular.module('app').controller('bausparrechnerController', function($scope, $rootScope, chartConfig, bausparCalculator){

    var vm = this;

    /** initialize values */
    vm.inputs = {
      principal: 70000,
      saving: 250,
      interestsave: 0.5,
      interestdebt: 2.5,
      termsave: 10,
      repay: 300,
      bonus: {id: 2},
      marriage: {id: 1},
      income: 30000,
      initialfee: 0,
      initialpay: 0,
      paypercent: 100
    };


    /** redraw slider and change angle item once collapsible panels are opened */
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).prev().find('i').addClass('fa-angle-down');
      $rootScope.$broadcast('rzSliderForceRender');
    });

    $('.collapse').on('hidden.bs.collapse', function(){
     $(this).prev().find('i').removeClass('fa-angle-down');
    });

    /** slider settings */
    vm.sliderTranslate = function(value){
      return '';
    };


    /** watch inputs, re-compute, re-assign and redraw on change */
    $scope.$watchCollection('vm.inputs', function(){
      /** define calculation input object */
      var inputObj = {
        principal: vm.inputs.principal,
        saving: vm.inputs.saving,
        interestsave: vm.inputs.interestsave,
        interestdebt: vm.inputs.interestdebt,
        termsave: vm.inputs.termsave,
        repay: vm.inputs.repay,
        bonus: vm.inputs.bonus.id === 1,
        marriage: vm.inputs.marriage.id === 2,
        income: vm.inputs.income,
        initialfee: vm.inputs.initialfee,
        initialpay: vm.inputs.initialpay,
        paypercent: vm.inputs.paypercent
      };

      // update result object
      vm.result = bausparCalculator.homesave(inputObj);

      // update savings chart
      var res_save = _.filter(vm.result._2.body, function(arr){
        // retrieve annual values
        return (arr[7] === true && arr[9] === true);
      });

      var res_save_start    = _.map(res_save, function(arr){ return arr[1]; });
      var res_save_inflow   = _.map(res_save, function(arr){ return arr[2]; });
      var res_save_interest = _.map(res_save, function(arr){ return arr[3]; });

      $scope.chartConfig_1.series[2].data = res_save_start;
      $scope.chartConfig_1.series[1].data = res_save_inflow;
      $scope.chartConfig_1.series[0].data = res_save_interest;

      // update loan chart
      var res_loan = _.filter(vm.result._2.body2, function(arr){
        // retrieve annual values
        return (arr[7] === true && arr[9] === true);
      });


      var res_loan_end      = _.map(res_loan, function(arr){ return Math.abs(arr[5]); });
      var a = 0;
      var res_loan_repay    = _.map(res_loan, function(arr){ return a += arr[2] + arr[3]; });
      var res_loan_interest = _.map(res_loan, function(arr){ return Math.abs(arr[3]); });

      $scope.chartConfig_2.series[0].data = res_loan_repay;
      $scope.chartConfig_2.series[1].data = res_loan_end;

    });



    /** charting */
    // savings chart
    var chartLocal_1 = {
      title: {
        text: 'Guthabenentwicklung Ansparphase'
      },
      legend: {
        enabled: false
      },
      options: {
        plotOptions: {
          column: {
            stacking: 'normal',
            pointStart: 1
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
          text: 'Bausparguthaben'
        }
      },
      series: [
        {
          name: 'Zinsertrag im laufenden Jahr',
          data: [1, 4],
          color: '#F38200'
        },
        {
          name: 'Sparbeiträge im laufenden Jahr',
          data: [1, 4],
          color: '#50B432'
        },
        {
          name: 'Guthaben Jahresbeginn',
          data: [1, 4],
          color: '#009CDE'
        }]
    };

    $scope.chartConfig_1 = angular.merge(chartLocal_1 , chartConfig.verticalBar);


    // loan chart
    var chartLocal_2 = {
      title: {
        text: 'Restschuldentwicklung Rückzahlungsphase'
      },
      legend: {
        enabled: false
      },
      options: {
        plotOptions: {
          column: {
            stacking: 'normal',
            pointStart: 1
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
          text: 'Restschuld'
        }
      },
      series: [
        {
          name: 'Bisherige Tilgung',
          data: [1, 4],
          color: '#50B432'
        },
        {
          name: 'Verbleibende Restschuld',
          data: [1, 4],
          color: '#009CDE'
        }]
    };

    $scope.chartConfig_2 = angular.merge(chartLocal_2 , chartConfig.verticalBar);





  });
  /** ********************** END ANGULAR CODE ********************************************* */






}());


