/** INITIALIZE ANGULAR APP */
(function(){
  'use strict';

  angular.module('app', ['rzModule','highcharts-ng','ngAnimate'])
      /** do initialization work */
      .run(function(){

        /** Highcharts init */
        Highcharts.setOptions({
          colors: ['#009CDE', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
          lang: {
            decimalPoint: ',',
            thousandsSep: '.'
          }
        });

      });
})();


/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){
  'use strict';

  /** ********************** BEGIN ANGULAR CODE ********************************************* */
  angular.module('app').controller('bausparrechnerController', function($scope, $rootScope, chartConfig, bausparCalculator){

    var vm = this;

    /** initialize values */
    vm.inputs = {
      principal: 40000,
      saving: 5,
      interestsave: 0.6,
      interestdebt: 1.5,
      termsave: 8,
      repay: 6,
      bonus: {id: 2},
      marriage: {id: 1},
      income: 30000,
      initialfee: 1,
      initialpay: 0,
      paypercent: 100
    };

    /** calculation functions */
    vm.calcAbsolute = function(basis, percentage, denom){
      return (percentage / denom) * basis;
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
        saving: (vm.inputs.saving / 1000) * vm.inputs.principal,
        interestsave: vm.inputs.interestsave,
        interestdebt: vm.inputs.interestdebt,
        termsave: vm.inputs.termsave,
        repay: (vm.inputs.repay / 1000) * vm.inputs.principal,
        bonus: vm.inputs.bonus.id === 1,
        marriage: vm.inputs.marriage.id === 2,
        income: vm.inputs.income,
        initialfee: (vm.inputs.initialfee / 100) * vm.inputs.principal,
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



/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){
  'use strict';

  angular.module('app').controller('assetallokationController', function($scope, $rootScope, chartConfig, geldanlageCalculator, marketdataService) {


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



  });



})();
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
      res_einzahlungen = _.reduce(res_einzahlungen, function (acc, n) { acc.push( (acc.length > 0 ? acc[acc.length-1] : 0) + n); return acc; }, []);
      res_einzahlungen.unshift(0);
      var res_zinsen = _.map(res, function(arr){ return arr[3]; });
      res_zinsen = _.reduce(res_zinsen, function (acc, n) { acc.push( (acc.length > 0 ? acc[acc.length-1] : 0) + n); return acc; }, []);
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
/**
 * Created by benjamintanz on 20.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('artablaufhauskaufController', function($scope, chartConfig, $http) {

    /** activate tabbed process interface*/
    // todo: move to directive
    $(document).ready(function () {
      $('#processTabs').tabs({show: {effect: 'fade', duration: 400}});
      $('.tab-linker').click(function () {
        $('#processTabs').tabs('option', 'active', $(this).attr('rel') - 1);
        return false;
      });
    });

  });

})();
/**
 * Created by benjamintanz on 13.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('deutschlandsbestearbeitsmaerkteController', function($scope, chartConfig, $http){

    $http({
      method: 'GET',
      url: '/hauskauf/deutschlands-beste-arbeitsmaerkte/map_data'
    }).then(function successCallback(response) {
      $scope.chartConfig_1.series[0].data = response.data;
    }, function errorCallback(response) {
      console.log('An error occured');
    });


    $scope.chartConfig_1 = {
      options: {
        legend: {
          enabled: false
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        colorAxis: {
          min: null,
          max: null,
          type: 'logarithmic',
          minColor: '#ffffff',
          maxColor: '#009CDE'
        },
        plotOptions: {
          map: {
            mapData: Highcharts.maps['countries/de/de-all-all'],
            joinBy: 'hc-key'
          }
        }
      },
      chartType: 'map',
      title: {
        text: 'FinIQ-Attraktivitätsindex der Städte und Landkreise'
      },
      credits: {
        enabled: 'true',
        text: 'Quelle: Statistisches Bundesamt; Highcharts © GeoBasis-DE / BKG 2014'
      },
      series: [{
        name: 'Attraktivitätsindex',
        states: {
          hover: {
            color: '#009CDE'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        },
        tooltip: {
          pointFormat: ' <strong>{point.name}: {point.value} / 100</strong> <br>Hartz-IV-Quote: {point.alg2} %  <br>Arbeitslosenquote: {point.alg1} %  <br>Arbeitsplatzversorgung: {point.versorgung} % <br>Verfügbares jährl. Einkommen pro Person: {point.income} € <br>Bruttoinlandsprodukt pro Person: {point.bip} €'
        }
      }]
    };



  });

})();


/**
 * Created by benjamintanz on 16.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('kaufpreisController', function($scope, $rootScope, chartConfig, $interval, marketdataService, hauskaufCalculator){

    var vm = this;


    /** initialize values */
    vm.inputs = {
      rent: 900,
      income: 300,
      equity: 40000,
      debtinterest: 2.2,
      term: 18,
      priceaddon: 10,
      maintenance: 400,
      maintenancepercent: 2.5,
      repaypercent: 85
    };



    /** adjust market interest rates based on entered term */
    $scope.$watch('vm.inputs.term', function(){
      vm.inputs.debtinterest = marketdataService.mortgageinterest[Math.floor(vm.inputs.term)];
    });



    /** slider settings */
    vm.sliderTranslate = function(value){
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
    $scope.$watchCollection('vm.inputs', function(){
      /** calculate maximal price */
      var inputObj = {
        interest: vm.inputs.debtinterest,
        notar: 0.12 * vm.inputs.priceaddon,
        makler: 0.38 * vm.inputs.priceaddon,
        proptax: 0.5 * vm.inputs.priceaddon,
        rent: vm.inputs.rent,
        income: vm.inputs.income,
        //maintenance: vm.inputs.maintenance,
        maintenancepercent: vm.inputs.maintenancepercent,
        term: vm.inputs.term,
        equity: vm.inputs.equity,
        repaypercent: vm.inputs.repaypercent
      };
      vm.result = hauskaufCalculator.propertyprice(inputObj);
      /** set price slider value and ceiling */


      /*
      $scope.chartConfig_1.series[0].data = [{y: $scope.result.rentFinalWealth, color:'#F38200'}, $scope.result.buyFinalWealth];
      */
    });


    /** compute */






  });





})();
/**
 * Created by benjamintanz on 05.10.15.
 */

(function(){
  'use strict';

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
        answer = ' kaufen ';
      } else {
        answer = ' mieten ';
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

    $scope.chartConfig_1 = angular.merge(chartLocal_1 , chartConfig.verticalBar);


    /** line chart with house price development */
    var chartLocal_2 = {
      title: {
        text: 'Preis- und Mietenindex für Deutschland',
        style: chartConfig.titleStyle
      },
      xAxis: {
        categories: ['Mrz \'00',	'Jun \'00',	'Sep \'00',	'Dez \'00',	'Mrz \'01',	'Jun \'01',	'Sep \'01',	'Dez \'01',	'Mrz \'02',	'Jun \'02',	'Sep \'02',	'Dez \'02',	'Mrz \'03',	'Jun \'03',	'Sep \'03',	'Dez \'03',	'Mrz \'04',	'Jun \'04',	'Sep \'04',	'Dez \'04',	'Mrz \'05',	'Jun \'05',	'Sep \'05',	'Dez \'05',	'Mrz \'06',	'Jun \'06',	'Sep \'06',	'Dez \'06',	'Mrz \'07',	'Jun \'07',	'Sep \'07',	'Dez \'07',	'Mrz \'08',	'Jun \'08',	'Sep \'08',	'Dez \'08',	'Mrz \'09',	'Jun \'09',	'Sep \'09',	'Dez \'09',	'Mrz \'10',	'Jun \'10',	'Sep \'10',	'Dez \'10',	'Mrz \'11',	'Jun \'11',	'Sep \'11',	'Dez \'11',	'Mrz \'12',	'Jun \'12',	'Sep \'12',	'Dez \'12',	'Mrz \'13',	'Jun \'13',	'Sep \'13',	'Dez \'13',	'Mrz \'14',	'Jun \'14',	'Sep \'14',	'Dez \'14',	'Mrz \'15']
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



/**
 * Created by benjamintanz on 15.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('uebersichtgrundstueckspreiseController', function($scope, chartConfig, $http){

    $http({
      method: 'GET',
      url: '/hauskauf/uebersicht-der-grundstueckspreise/map_data'
    }).then(function successCallback(response) {
      $scope.chartConfig_1.series[0].data = response.data;
    }, function errorCallback(response) {
      console.log('An error occured');
    });


    /** map chart */
    $scope.chartConfig_1 = {
      options: {
        legend: {
          enabled: false,
          floating: false,
          layout: 'horizontal'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          },
          enableTouchZoom: true,
          enableMouseWheelZoom: true
        },
        colorAxis: {
          min: null,
          max: null,
          type: 'logarithmic',
          minColor: '#ffffff',
          maxColor: '#009CDE'
        },
        plotOptions: {
          map: {
            mapData: Highcharts.maps['countries/de/de-all-all'],
            joinBy: 'hc-key'
          }
        }
      },
      chartType: 'map',
      title: {
        text: 'Durchschnittliche Grundstückspreise in den Regionen'
      },
      credits: {
        enabled: 'true',
        text: 'Quelle: Statistisches Bundesamt; Highcharts © GeoBasis-DE / BKG 2014'
      },
      series: [{
        name: 'Durchschnittlicher Kaufpreis',
        states: {
          hover: {
            color: '#009CDE'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        },
        tooltip: {
          pointFormat: ' <strong>{point.name}: {point.value} € / qm</strong> <br>5-Jahres-Wachstumsrate (08-13): {point.5yeargrowth} % p. a. <br> Durschnittliche Kaufpreise der vergangenen Jahre: <br>  2012: {point.value12} € / qm <br>  2011: {point.value11} € / qm <br>  2010: {point.value10} € / qm <br>  2009: {point.value09} € / qm <br>  2008: {point.value08} € / qm'
        }
      }]
    };






  });

})();

/**
 * Created by benjamintanz on 21.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('zehnschnaeppchenController', function($scope, chartConfig, $http){

    $(function($){
      $('.carousel').carousel();
      var caption = $('div.item:nth-child(1) .carousel-caption');
      $('.new-caption-area').html(caption.html());
      caption.css('display', 'none');

      $('.carousel').on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
      });

    });


  });



})();
/**
 * Created by benjamintanz on 07.10.15.
 */

/** basic chart configuration */

(function(){

  angular.module('app').factory('chartConfig', function(){
    var obj = {};

    /** configurations concerning all charts */
    var spacingLeft = 10;
    var borderWidth = 0;
    var backgroundColor = null;
    var titleStyle = {
        fontWeight: 400,
        fontFamily: '"Lato", sans-serif',
        fontSize: '16px'
    };



    /** particular charts */
    var horizontalBarConfig = {
      options: {
        chart: {
          type: 'bar',
          spacingLeft: spacingLeft,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor
        },
        legend: {
          enabled: false
        }
      }
    };

    var verticalBarConfig = {
      title: {
        style: titleStyle
      },
      options: {
        chart: {
          type: 'column',
          spacingLeft: spacingLeft,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor
        },
        legend: {
          enabled: false
        }
      }
    };

    var linechartConfig = {

      options: {
        chart: {
          type: 'line',
          legend: {
            layout: 'vertical',
            align: 'bottom',
            borderWidth: 0
          }
        },
        plotOptions: {
          series: {
            color: '#009CDE',
            marker: {
              enabled: false
            }
          }
        }
      }
    };

    var piechartConfig = {
      title: {
        style: titleStyle
      },
      options: {
        chart: {
          type: 'pie',
          spacingLeft: spacingLeft,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        }
      }

    };

    /** attach particular charts to return object */
    obj.horizontalBar = horizontalBarConfig;
    obj.verticalBar   = verticalBarConfig;
    obj.linechart     = linechartConfig;
    obj.titleStyle    = titleStyle;
    obj.piechart      = piechartConfig;

    return obj;
  });



})();
/**
 * Created by benjamintanz on 04.11.15.
 */


(function(){

  angular.module('app').factory('bausparCalculator', function(finlibBasic){

    var fun = {};


    /** ********************** bausparrechner ************************************* */
    /**
     * homesave
     *
     * Method that computes terms of a mortgage savings plan
     *
     * @method homesave
     * @param inputs.interestsave {Number}
     * @param inputs.interestdebt {Number}
     * @param inputs.saving {Number}
     * @param inputs.termsave {Number}
     * @param inputs.initialfee {Number}
     * @param inputs.initialpay {Number}
     * @param inputs.termsave {Number}
     * @return values {Array} TBC
     * @return confidence {Array} TBC
     */
    fun.homesave = function(inputs) {

      /** ******** 1. INIT AND ASSIGN ******** */
      var result = {}; result._1 = {}; result._2 = {};
      var dyn = []; dyn[0] = []; dyn[1] = []; dyn[2] = []; dyn[3] = []; dyn[4] = []; dyn[5] = []; dyn[6] = []; dyn[7] = []; dyn[8] = []; dyn[9] = []; var dynT;
      var dynloan = []; dynloan[0] = []; dynloan[1] = []; dynloan[2] = []; dynloan[3] = []; dynloan[4] = []; dynloan[5] = []; dynloan[6] = []; dynloan[7] = []; dynloan[8] = []; dynloan[9] = []; var dynloanT;
      var helper = {};
      var q, replacementrate, r, y;
      var termsaveFullMth, termsaveFullY, partialMth, i, j, interestaccum = 0;
      var cfSave = [], cfLoan = [];


      /** ******** 2. INPUT ERROR CHECKING AND PREPARATIONS ******** */
      inputs.interestsave /= 100;
      inputs.interestdebt /= 100;

      /** ******** 3. HELPER FUNCTIONS ******** */
      // function that returns the month into the full year for any month; example: intoyear(18) = 6, intoyear(12) = 12
      helper.intoyear = function(month){
        return (month % 12 === 0) * 12 + month % 12;
      };

      /** ******** 4. COMPUTATIONS SAVINGS PERIOD ******** */
      // HELPER VARS
      q = 1 + inputs.interestsave;
      r = inputs.interestdebt / 12;
      replacementrate = inputs.saving * (12 + (11/2)*(q-1));
      termsaveFullMth = Math.ceil(inputs.termsave/(1/12))/12;
      termsaveFullY = Math.floor(termsaveFullMth);

      /** in case savingperiod has been adjusted, inform user */
      if(termsaveFullMth !== inputs.termsave){
        helpers.messages.set("Hinweis: Die angegebene Anspardauer von " + f.basic.round(inputs.termsave,2) + " Jahren ist kein Vielfaches des Einzahlungsintervalls (monatlich). Die Anspardauer wurde entsprechend auf die nächste volle Zahlungsperiode angepasst. Der angepasste Wert beträgt " + f.basic.round(termsaveFullMth,2) + " Jahre (" + f.basic.round(termsaveFullMth * 12,2) + " Monate).",2);
      }


      // DYNAMIC COMPUTATIONS
      interestaccum = 0;  // accumulator for semiperiodical interest PAngV
      var jumper = 0, terminal = [];
      terminal[2] = 0; terminal[3] = 0;
      helper.wohnungsbau = 0;
      for(i = 1, y = termsaveFullMth * 12 + termsaveFullY; i <= y; i++){
        if (dyn[6][i-2]){   // if last iteration was full year such that annual vals should be computed
          dyn[0][i-1] = Math.ceil((i) / 13);
          dyn[1][i-1] = dyn[1][i - helper.intoyear(dyn[0][i-2]) - 1];
          dyn[2][i-1] = inputs.saving * helper.intoyear(dyn[0][i-2]);
          dyn[3][i-1] = dyn[3][i-2];
          dyn[4][i-1] = 0;
          dyn[5][i-1] = dyn[5][i-2];
          dyn[6][i-1] = false;
          dyn[7][i-1] = true;       // special element view indicator (elements such as full year, sums, ect)
          dyn[8][i-1] = ". Jahr";  // unit to be shown in the output table behind time index
          dyn[9][i-1] = true;       // true iff element represents full year value
          jumper = 1;
        } else {
          dyn[7][i-1] = false;  // full year view indicator
          (i === 1) ? dyn[0][i-1] = 1 : dyn[0][i-1] = dyn[0][i-2-jumper] + 1;                                                      // month
          (i === 1) ? dyn[1][i-1] = 0 - inputs.initialfee + inputs.initialpay : dyn[1][i-1] = dyn[5][i-2-jumper];                  // balance bop
          dyn[2][i-1] = inputs.saving;                                              // savings
          /** push savings time and amount value to cfSave */
          cfSave.push([dyn[0][i-1] ,dyn[2][i-1]]);
          interestaccum += dyn[1][i-1] * (inputs.interestsave / 12);
          if ((dyn[0][i-1] % 12 === 0) || (i === termsaveFullMth * 12 + termsaveFullY)){ // end of year or last period in term
            dyn[3][i-1] = interestaccum; interestaccum = 0;                         // interest
            dyn[6][i-1] = true;                                                     // full year indicator
            helper.wohnungsbautemp = (i <= 12) ? inputs.initialpay : 0;
            helper.wohnungsbau += Math.round(100 * Math.min(((helper.intoyear(dyn[0][i-1]) * inputs.saving + dyn[3][i-1] + helper.wohnungsbautemp) > 50 ? (helper.intoyear(dyn[0][i-1]) * inputs.saving + dyn[3][i-1] + helper.wohnungsbautemp) : 0) * 0.088, 45.056 * (1 + Number(inputs.marriage)))) / 100; // amount of Wohnungsbauprämie
            // do one more loop for annual aggregates if we are in the last period of saving term and this period is not a full year
            !(dyn[0][i-1] % 12 === 0) && (i === termsaveFullMth * 12 + termsaveFullY) ? y += 1 : y = y;
          } else {
            dyn[3][i-1] = 0;
            dyn[6][i-1] = false;
          }
          dyn[4][i-1] = 0;                                                       // other pays / wohnungsbaupr
          dyn[5][i-1] = dyn[1][i-1] + dyn[2][i-1] + dyn[3][i-1];                    // balance eop
          terminal[0] = dyn[0][i-1];
          terminal[2] += dyn[2][i-1];
          terminal[3] += dyn[3][i-1];
          jumper = 0;
        }
        terminal[5] = dyn[5][i-1];
      }

      // STATIC CALCS
      helper.finalsavings = terminal[5];  // final w/o Wohnungsbau
      helper.wohnungsbauent = inputs.income <= (1 + Number(inputs.marriage)) * 25600 ? true : false;   // entitled to 'Wohnungsbauprämie?'
      helper.wohnungsbau = Number(inputs.bonus) * Number(helper.wohnungsbauent) * helper.wohnungsbau;
      // total available savings w wohnungsbauprämie
      helper.finalsavingswohnungsbau = helper.finalsavings + helper.wohnungsbau;
      // total loan payment
      helper.totalloanpay = (inputs.paypercent / 100) * inputs.principal;


      // transpose dyn
      dynT = dyn[0].map(function(col,i){
        return dyn.map(function(row){
          return row[i];
        })
      });

      // attach final rows
      if(helper.wohnungsbau!= 0){
        dynT.push(['Wohnungsbauprämie', terminal[5],helper.wohnungsbau,,,terminal[5] + helper.wohnungsbau,,]);
      }

      dynT.push(['Summen', 0 - inputs.initialfee + inputs.initialpay,terminal[2] + helper.wohnungsbau,terminal[3],,terminal[5] + helper.wohnungsbau,,true]);
      dynT.push(['Zuteilung Darlehen', terminal[5] + helper.wohnungsbau, -helper.totalloanpay,,,terminal[5] + helper.wohnungsbau - helper.totalloanpay,,true]);

      // STATIC COMPUTATIONS

      // number of inflow payments
      helper.numberpays = termsaveFullMth * 12;

      // total payments
      helper.totalpays = helper.numberpays * inputs.saving;

      // total interest
      helper.totalinterest = helper.finalsavings - helper.totalpays + inputs.initialfee - inputs.initialpay;

      // total loan payment
      helper.totalloanpay = (inputs.paypercent / 100) * inputs.principal;

      // amount loan w/o interest
      helper.totalloan = helper.totalloanpay - helper.finalsavingswohnungsbau;

      // term loan
      helper.termloan = inputs.interestdebt === 0 ? helper.totalloan / (12 * inputs.repay) : Math.log(( inputs.repay / (r * helper.totalloan)) / ((inputs.repay / (r * helper.totalloan)) - 1)) / (12 * Math.log(1 + r));

      // "Ansparquote"
      helper.savingratio = (helper.finalsavingswohnungsbau / inputs.principal) * 100;

      // number of loan payments
      helper.totalloanpays = helper.termloan * 12;

      /** COMPUTE IRR FOR SAVINGSPERIOD */
      /** add initial special pay */
      cfSave[0][1] += inputs.initialpay;
      /** subtract end value of savings */
      cfSave[cfSave.length - 1][1] -= helper.finalsavingswohnungsbau;
      /** compute irr */
      helper.irrSave = finlibBasic.irr(0 ,cfSave, 12);

      helper.irrSave = typeof helper.irrSave !== 'undefined' ? helper.irrSave : null;


      /** ******** 5. COMPUTATIONS LOAN PERIOD ******** */
      jumper = 0;
      var initSaldo = 0, repayHelper = 0;
      var interestHelper = 0;
      var terminalLoan = [];
      terminalLoan[2] = 0;
      terminalLoan[3] = 0;

      for(i = 1, y = Math.floor(helper.totalloanpays) + 1; i <= y; i++){

        if (dynloan[6][i-2]) {   // if last iteration was full year such that annual vals should be computed
          dynloan[0][i-1] = Math.ceil(dynloan[0][i-2] / 12);
          dynloan[1][i-1] = dynloan[1][i - Math.min(helper.intoyear(dynloan[0][i-2]), i-1) - 1];
          dynloan[2][i-1] = repayHelper; repayHelper = 0;
          dynloan[3][i-1] = interestHelper; interestHelper = 0;
          dynloan[4][i-1] = 0;  // not used
          dynloan[5][i-1] = dynloan[5][i-2];
          dynloan[6][i-1] = false;
          dynloan[7][i-1] = true;       // special element view indicator (elements such as full year, sums, ect)
          dynloan[8][i-1] = ". Jahr";   // unit to be shown in the output table behind time index
          dynloan[9][i-1] = true;       // true iff element represents full year value
          jumper = 1;
        } else {
          (i === 1) ? dynloan[0][i-1] = 1 + terminal[0] : dynloan[0][i-1] = dynloan[0][i-2-jumper] + 1;
          (i === 1) ? dynloan[1][i-1] = terminal[5] + helper.wohnungsbau - helper.totalloanpay : dynloan[1][i-1] = dynloan[5][i-2-jumper];
          dynloan[3][i-1] = dynloan[1][i-1] * (inputs.interestdebt / 12);  // interest
          interestHelper += dynloan[3][i-1];
          terminalLoan[3] += dynloan[3][i-1];
          dynloan[2][i-1] = Math.min(inputs.repay, -(dynloan[1][i-1] + dynloan[3][i-1]));
          /** push repayment time and amount value to cfLoan */
          cfLoan.push([dynloan[0][i-1] - terminal[0] ,dynloan[2][i-1]]);
          terminalLoan[2] += dynloan[2][i-1];
          repayHelper += dynloan[2][i-1];
          //dynloan[4][i-1] = 5;  switched off
          dynloan[5][i-1] = dynloan[1][i-1] + dynloan[2][i-1] + dynloan[3][i-1];
          if(dynloan[0][i-1] % 12 === 0 || y === i){
            dynloan[6][i-1] = true;
            y += 1;
          } else {
            dynloan[6][i-1] = false;
          }
          jumper = 0;
        }
      }

      // transpose dynloan
      dynloanT = dynloan[0].map(function(col,i){
        return dynloan.map(function(row){
          return row[i];
        })
      });

      // attach final rows
      dynloanT.push(['Summen', terminal[5] + helper.wohnungsbau - helper.totalloanpay ,terminalLoan[2], terminalLoan[3],,terminal[5] + helper.wohnungsbau - helper.totalloanpay + terminalLoan[2] + terminalLoan[3] ,,true]);

      // interest loan
      //helper.interestloan = inputs.interestdebt === 0 ? 0 : helper.totalloan * ((Math.pow(1 + r, 12 * helper.termloan)) * (r * 12 * helper.termloan - 1) + 1) / ( Math.pow(1 + r, 12 * helper.termloan) -1);
      helper.interestloan = -terminalLoan[3];

      // amount loan w interest
      //helper.totalloanwinterest = helper.totalloan + helper.interestloan;
      helper.totalloanwinterest = helper.totalloan + helper.interestloan;


      /** COMPUTE IRR FOR LOANPERIOD */
      helper.irrLoan = finlibBasic.irr(helper.totalloan ,cfLoan, 12);
      helper.irrLoan = typeof helper.irrLoan !== 'undefined' ? helper.irrLoan : null;




      /** ******** 9. RETURN VALUES ******** */
      result.numberpays     = helper.numberpays;
      result.totalpays      = helper.totalpays;
      result.totalinterest  = helper.totalinterest;
      result.totalloanpay   = (inputs.paypercent / 100) * inputs.principal;
      result.totalloan      = helper.totalloan;
      result.interestloan   = helper.interestloan;
      result.termloan       = helper.termloan;
      result.savingratio    = helper.savingratio;
      result.totalloanpay   = helper.totalloanpay;
      result.totalloanpays  = helper.totalloanpays;
      result.totalloanwinterest =  helper.totalloanwinterest;
      result.finalsavingswohnungsbau = helper.finalsavingswohnungsbau;
      result.wohnungsbau    = helper.wohnungsbau;
      result.initialpay     = inputs.initialpay;
      result.intialfee      = -inputs.initialfee;
      if(helper.irrSave !== null && isFinite(helper.irrSave)){result.irrSave = helper.irrSave * 100};
      if(helper.irrLoan !== null && isFinite(helper.irrLoan)){result.irrLoan = helper.irrLoan * 100};


      // DYNAMIC VALUES
      // a) saving period
      result._2.title = 'Entwicklung Bausparguthaben';
      result._2.header1 = ['Monat', 'Guthaben Monatsanfang', 'Sparbeitrag', 'Zinsen','Prämien','Guthaben Monatsende'];
      result._2.body = dynT;
      // b) repayment period
      result._2.header2 = ['Monat', 'Saldo Monatsanfang', 'Rückzahlungsrate', 'Zinsen','Prämien','Saldo Monatsende'];
      result._2.body2 = dynloanT;


      return result;

    };



    return fun;



  });

})();
/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){

  angular.module('app').factory('geldanlageCalculator', function() {

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

  });



})();
/**
 * Created by benjamintanz on 07.10.15.
 */


(function(){

  angular.module('app').factory('hauskaufCalculator', function(){

    var fun = {};

    fun.multi = function(a){
      return 0.1*a;
    };


    /** ********************** mieten-oder-kaufen ************************************* */
    fun.buyrent = function(inputs) {

      var result = {};
      var temp1, temp2, temp3, temp11, temp12, temp13;
      var helper = {}, i;
      var dyn = []; dyn[0] = []; dyn[1] = []; dyn[2] = []; dyn[3] = []; dyn[4] = []; dyn[5] = [];
      var dynT;
      var dynBuy = []; dynBuy[0] = []; dynBuy[1] = []; dynBuy[2] = []; dynBuy[3] = []; dynBuy[4] = [];
      dynBuy[5] = []; dynBuy[6] = []; dynBuy[7] = []; dynBuy[8] = []; dynBuy[9] = []; dynBuy[10] = [];
      dynBuy[11] = []; dynBuy[12] = []; dynBuy[13] = []; dynBuy[14] = [];
      var dynBuyT;

      inputs.dynamics = true;

      // helper functions
      /**
       * annualInterestLinear
       *
       * Method that computes annual interest payments for 'subannual' annuity repayment schedules
       * according to the linear interest method. Each period, the periodical (linear) interest rate is applied
       * to the beginning-of-period residual account balance. The end of period account balance is computed
       * by subtracting the periodical payment and adding the periodical interest. Note that this is different
       * to, for example, the PAngV method, where the 'subannual' account balance is computed as
       * by subtracting the periodical payment only.
       *
       * @method annualInterestLinear
       * @param residualDebt {Number} debt at the beginning of the year
       * @param periodsPerYear {Number} the payment periods per year (example: equals 12 for monthly payments)
       * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
       * @param periodicalPayment {Number} the periodical annuity payment
       * @return annualInterest {Number} Returns the annual interest payment
       */
      var annualInterestLinear = function(residualDebt, periodsPerYear, interest, periodicalPayment){
        var result = 0, i, iAmount;
        for (i = 1; i <= periodsPerYear; i++){
          iAmount = Math.max(residualDebt, 0) * (interest / periodsPerYear);
          residualDebt -= (periodicalPayment - iAmount);
          result += iAmount;
        }
        return result;
      };

      /**
       * annualAmortizationLinear
       *
       * Method that computes the annual amortization values for 'subannual' annuity repayment schedules
       * according to the linear interest method. Each period, the periodical (linear) interest rate is applied
       * to the beginning-of-period residual account balance. The end of period account balance is computed
       * by subtracting the periodical payment and adding the periodical interest.
       *
       * @method annualAmortizationLinear
       * @param residualDebt {Number} debt at the beginning of the year
       * @param periodsPerYear {Number} the payment periods per year (example: equals 12 for monthly payments)
       * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
       * @param periodicalPayment {Number} the periodical annuity payment
       * @return annualInterest {Number} Returns the annual interest payment
       */
      var annualAmortizationLinear = function(residualDebt, periodsPerYear, interest, periodicalPayment){
        return Math.min(residualDebt, periodsPerYear * periodicalPayment - annualInterestLinear(residualDebt, periodsPerYear, interest, periodicalPayment));
      };


      /**
       * annualResidualLinear
       *
       * Method that computes the end of year residual debt values for 'subannual' annuity repayment schedules
       * according to the linear interest method. Each period, the periodical (linear) interest rate is applied
       * to the beginning-of-period residual account balance. The end of period account balance is computed
       * by subtracting the periodical payment and adding the periodical interest.
       *
       * @method annualResidualLinear
       * @param residualDebt {Number} debt at the beginning of the year
       * @param periodsPerYear {Number} the payment periods per year (example: equals 12 for monthly payments)
       * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
       * @param periodicalPayment {Number} the periodical annuity payment
       * @return annualInterest {Number} Returns the annual interest payment
       */
      var annualResidualLinear = function(residualDebt, periodsPerYear, interest, periodicalPayment){
        return residualDebt - annualAmortizationLinear(residualDebt, periodsPerYear, interest, periodicalPayment);
      };

      var add = function(a,b){
        return a + b;
      };





      inputs.equityinterest = inputs.equityinterest / 100;
      inputs.debtinterest = inputs.debtinterest / 100;
      inputs.rentdynamic = (inputs.rentdynamic / 100) || 0;
      inputs.incomedynamic = (inputs.incomedynamic / 100) || 0;
      inputs.valuedynamic = (inputs.valuedynamic / 100) || 0;
      inputs.costdynamic = (inputs.costdynamic / 100) || 0;


      /** ******** 3. COMPUTATIONS ******** */
      /**
       3.A STATIC COMPUTATIONS
       */

      helper.rentFinalCost = (inputs.dynamics && inputs.rentdynamic !== 0) ? (inputs.rent * 12) * (1 - Math.pow(1 + inputs.rentdynamic, inputs.period)) / (-inputs.rentdynamic) : inputs.rent * 12 * inputs.period;
      helper.rentFinalIncome = (inputs.dynamics && inputs.incomedynamic !== 0) ? (inputs.income * 12) * (1 - Math.pow(1 + inputs.incomedynamic, inputs.period)) / (-inputs.incomedynamic) : inputs.income * 12 * inputs.period;
      helper.rentAnnualReplacement = (inputs.income - inputs.rent) * (12 + (13 / 2) * inputs.equityinterest);
      helper.rentAvailableForSavingValue = (inputs.equityinterest === 0) ? helper.rentAnnualReplacement : helper.rentAnnualReplacement * (Math.pow(1 + inputs.equityinterest, inputs.period) - 1) / inputs.equityinterest;


      /**
       3.B DYNAMIC COMPUTATIONS RENT
       */

      for (i = 1; i <= inputs.period; i++) {
        dyn[0][i - 1] = i;                                        // period
        dyn[1][i - 1] = (i === 1) ? inputs.equity : dyn[4][i - 2];   // wealth start
        dyn[2][i - 1] = (inputs.income * 12) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.rent * 12) * Math.pow(1 + inputs.dynamics * inputs.rentdynamic, i - 1);       // surplus income
        temp11 = dyn[1][i - 1];
        temp12 = 0;
        temp13 = 0;
        for (var k = 1; k <= 12; k++) {  // compute 'subannual' interest; this is necessary because wealth may become negative in a month between to years if the rent payments increase more than available income
          temp12 = (inputs.equityinterest / 12) * (temp11 + (inputs.income) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.rent) * Math.pow(1 + inputs.dynamics * inputs.rentdynamic, i - 1));
          temp13 += temp12 >= 0 ? temp12 : 0;
          temp11 += (inputs.income) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.rent) * Math.pow(1 + inputs.dynamics * inputs.rentdynamic, i - 1);
        }
        dyn[3][i - 1] = temp13;
        dyn[4][i - 1] = dyn[1][i - 1] + dyn[2][i - 1] + dyn[3][i - 1];   // wealth end
      }


      // transpose dyn
      dynT = dyn[0].map(function (col, i) {
        return dyn.map(function (row) {
          return row[i];
        })
      });

      // attach final rows
      dynT.push(['Gesamt', inputs.equity, _.reduce(dyn[2], add, 0), _.reduce(dyn[3], add, 0), dyn[4][inputs.period - 1], true]);

      helper.rentFinalInterest = _.reduce(dyn[3], add, 0);
      helper.rentFinalWealth = inputs.equity + helper.rentFinalIncome + helper.rentFinalInterest - helper.rentFinalCost;
      helper.buyLoan = inputs.price + inputs.priceaddon - inputs.equity;
      helper.buyAnnualLoanPayment = inputs.debtpay * 12;


      /**
       3.C DYNAMIC COMPUTATIONS BUY
       */
      for (i = 1; i <= inputs.period; i++) {
        dynBuy[0][i - 1] = i;                                        // period
        dynBuy[1][i - 1] = (i === 1) ? 0 : dynBuy[11][i - 2];                                                              // money wealth bop
        dynBuy[2][i - 1] = (i === 1) ? inputs.equity - inputs.priceaddon : dynBuy[12][i - 2];                             // total wealth bop
        dynBuy[3][i - 1] = (i === 1) ? helper.buyLoan : dynBuy[6][i - 2];                                                  // residual begin
        dynBuy[4][i - 1] = annualInterestLinear(dynBuy[3][i - 1], 12, inputs.debtinterest, inputs.debtpay);       // annual loan interest
        dynBuy[5][i - 1] = annualAmortizationLinear(dynBuy[3][i - 1], 12, inputs.debtinterest, inputs.debtpay);   // annual loan amortization
        dynBuy[6][i - 1] = annualResidualLinear(dynBuy[3][i - 1], 12, inputs.debtinterest, inputs.debtpay);       // residual end
        dynBuy[7][i - 1] = dynBuy[4][i - 1] + dynBuy[5][i - 1];                                                             // loan payment
        dynBuy[8][i - 1] = (inputs.income * 12) * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - (inputs.maintenance * 12) * Math.pow(1 + inputs.dynamics * inputs.costdynamic, i - 1) - dynBuy[7][i - 1];                                  // annual surplus income
        temp1 = 0;
        temp2 = 0;
        temp3 = dynBuy[7][i - 1];
        for (var j = 1; j <= 12; j++) {  // compute 'subannual' interest; this is necessary because the loan payments may end in a month between two years
          temp1 += inputs.income * Math.pow(1 + inputs.dynamics * inputs.incomedynamic, i - 1) - inputs.maintenance * Math.pow(1 + inputs.dynamics * inputs.costdynamic, i - 1);
          temp2 += temp1 >= 0 ? temp1 * (inputs.equityinterest / 12) : 0;
          if (temp3 >= inputs.debtpay) {
            temp1 -= inputs.debtpay;
            temp3 -= inputs.debtpay;
          } else if (temp3 < inputs.debtpay && temp3 > 0) {
            temp1 -= temp3;
            temp3 -= temp3;
          } else {
            temp1 -= 0;
          }
        }
        dynBuy[9][i - 1] = ((dynBuy[8][i - 1] + dynBuy[7][i - 1]) >= 0) ? dynBuy[1][i - 1] * inputs.equityinterest + temp2 : temp2;
        dynBuy[10][i - 1] = inputs.price * (inputs.dynamics) * (Math.pow(1 + inputs.valuedynamic, i) - Math.pow(1 + inputs.valuedynamic, i - 1));  //
        dynBuy[11][i - 1] = dynBuy[1][i - 1] + dynBuy[8][i - 1] + dynBuy[9][i - 1];   // money wealth end
        dynBuy[12][i - 1] = dynBuy[2][i - 1] + dynBuy[5][i - 1] + dynBuy[8][i - 1] + dynBuy[9][i - 1] + dynBuy[10][i - 1];   // total wealth eop

      }


      // transpose dynBuy
      dynBuyT = dynBuy[0].map(function (col, i) {
        return dynBuy.map(function (row) {
          return row[i];
        })
      });

      helper.termloan = Math.log(( inputs.debtpay / ((inputs.debtinterest / 12) * helper.buyLoan)) / ((inputs.debtpay / ((inputs.debtinterest / 12) * helper.buyLoan)) - 1)) / (12 * Math.log(1 + (inputs.debtinterest / 12)));
      helper.buyprice = (inputs.price + inputs.priceaddon);
      helper.buyInterestSave = _.reduce(dynBuy[9], add, 0);

      helper.buyInterestLoan = _.reduce(dynBuy[4], add, 0);
      helper.buyIncomeSurplus = _.reduce(dynBuy[8], add, 0);
      helper.buyPropertyIncrease = _.reduce(dynBuy[10], add, 0);
      helper.buyMaintenance = (inputs.dynamics && inputs.costdynamic !== 0) ? inputs.maintenance * 12 * (1 - Math.pow(1 + inputs.costdynamic, inputs.period)) / (-inputs.costdynamic) : inputs.maintenance * 12 * inputs.period;
      helper.buyRepay = _.reduce(dynBuy[5], add, 0);
      helper.buyResidual = -helper.buyLoan + helper.buyRepay;
      helper.buyFinalWealth = inputs.equity - helper.buyprice + helper.buyLoan + helper.rentFinalIncome + helper.buyInterestSave - helper.buyInterestLoan + helper.buyPropertyIncrease - helper.buyMaintenance - helper.buyRepay + helper.buyResidual + inputs.price;

      // attach final rows
      dynBuyT.push(['Gesamt', helper.buyLoan, inputs.equity - inputs.priceaddon, helper.buyInterestLoan, helper.buyRepay, helper.buyRepay, , _.reduce(dynBuy[8], add, 0), helper.buyIncomeSurplus, helper.buyInterestSave, helper.buyPropertyIncrease, dynBuy[11][inputs.period - 1], dynBuy[12][inputs.period - 1], dynBuy[12][inputs.period - 1], true]);

      /**
      console.log('equity: ' + inputs.equity);
      console.log('buyprice: ' + helper.buyprice );
      console.log('buyloan: ' + helper.buyLoan );
      console.log('rentFinalIncome: ' + helper.rentFinalIncome );
      console.log('buyInterestSave: ' + helper.buyInterestSave );
      console.log('buyInterestLoan: ' + helper.buyInterestLoan );
      console.log('buyPropertyIncrease: ' + helper.buyPropertyIncrease );
      console.log('buyMaintenance: ' + helper.buyMaintenance );
      console.log('buyRepay: ' + helper.buyRepay );
      console.log('buyResidual: ' + helper.buyResidual );
      console.log('price: ' + inputs.price );**/

      result.rentFinalWealth   = helper.rentFinalWealth;
      result.rentEquity        = inputs.equity;
      result.rentFinalIncome   = helper.rentFinalIncome;
      result.rentFinalCost     = -helper.rentFinalCost;
      result.rentFinalInterest = helper.rentFinalInterest;
      result.buyFinalWealth    = helper.buyFinalWealth;
      result.buyEquity         = inputs.equity;
      result.buyPrice          = -helper.buyprice;
      result.buyLoan           = helper.buyLoan;
      result.buyFinalIncome    = helper.rentFinalIncome;
      result.buyInterestSave   = helper.buyInterestSave;
      result.buyInterestLoan   = -helper.buyInterestLoan;
      result.buyMaintenance    = -helper.buyMaintenance;
      result.buyRepay          = -helper.buyRepay;
      result.buyResidual       = helper.buyResidual;
      result.buyPropValue      = inputs.price + helper.buyPropertyIncrease;

      return result;

    };




    /**
     * Function propertyprice
     *
     * computes the affordable house price for a household/individual given a set of primitives
     *
     * @param {object} inputs
     *        inputs.selection        indicator for calculation mode;
     *                                    2 if initial repayment is given
     *                                    3 if term is given and maintenance costs are given as number
     *                                    4 if term is given and maintenance costs are given as fraction of price
     *                                    (default 4)
     *
     *                                costs are given as percentage (default: 3)
     *        inputs.initrepay        the first year's repayment ('anfängliche tilgung')
     *        inputs.repaypercent     the percentage of the free income that is used for debt repayment (default: 100%)
     *        inputs.interest         the annual interest rate on debt
     *        inputs.notar            cost fraction notar
     *        inputs.makler           cost fraction makler
     *        inputs.proptax          cost fraction tax ('Grunderwerbssteuer')
     *        inputs.income           monthly free income after rent payment
     *        inputs.rent             monthly rent payment
     *        inputs.maintenance      monthly maintenance cost of building
     *        inputs.maintenancepercent   annual maintenance costs as a percentage of house price (to be computed)
     *
     * @returns {object} result
     *
     */
    fun.propertyprice = function(inputs){


      /** set defaults */
      inputs.selection    = typeof inputs.selection !== 'undefined' ? inputs.selection : 4;
      inputs.initrepay    = typeof inputs.initrepay !== 'undefined' ? inputs.initrepay : 4;
      inputs.repaypercent = typeof inputs.repaypercent !== 'undefined' ? inputs.repaypercent : 100;
      inputs.maintenancepercent = typeof inputs.maintenancepercent !== 'undefined' ? inputs.maintenancepercent : 2.5;

      /** define objects */
      var result = {},
          helper = {};

      /** convert to decimals */
      inputs.interest           = inputs.interest / 100;
      inputs.notar              = inputs.notar / 100;
      inputs.makler             = inputs.makler / 100;
      inputs.proptax            = inputs.proptax / 100;
      inputs.initrepay          = inputs.initrepay / 100;
      inputs.repaypercent       = inputs.repaypercent / 100;
      inputs.maintenancepercent = (inputs.maintenancepercent / 100) / 12;


      /** ******** 3. COMPUTATIONS ******** */
      helper.rate = (inputs.rent + inputs.income - inputs.maintenance) * inputs.repaypercent;
      helper.q = 1 + inputs.interest / 12;


      if(inputs.selection === 2){  // initrepay selected
        helper.loan = (helper.rate * 12) / (inputs.interest + inputs.initrepay);
        helper.term = f.annuity.annuityTerm(helper.loan, helper.rate, inputs.interest, 12);
        helper.term = Math.round(helper.term * 100) / 100;
      } else if (inputs.selection === 3){  // term selected and maintenance costs as monthly number
        helper.qnt = Math.pow(helper.q, 12 * inputs.term);
        helper.loan = (inputs.interest === 0) ? helper.rate * inputs.term * 12 : helper.rate * (helper.qnt - 1) / (helper.qnt * (helper.q- 1));
        helper.initrepay = (12 * helper.rate - helper.loan * inputs.interest) / helper.loan;
      } else if (inputs.selection === 4){  // term selected and maintenance costs as percentage
        helper.qnt = Math.pow(helper.q, 12 * inputs.term);
        helper.ratePrelim = (inputs.rent + inputs.income) * inputs.repaypercent;
        helper.loanPrelim = (inputs.interest === 0) ? helper.ratePrelim * inputs.term * 12 : helper.ratePrelim * (helper.qnt - 1) / (helper.qnt * (helper.q- 1));
        helper.maintenanceFrac = (inputs.interest === 0) ? inputs.maintenancepercent * inputs.term * 12 : inputs.maintenancepercent * (helper.qnt - 1) / (helper.qnt * (helper.q- 1));
        helper.maxprice = (inputs.equity + helper.loanPrelim) / (1  + inputs.notar + inputs.makler + inputs.proptax + inputs.repaypercent * helper.maintenanceFrac);
        helper.totalpropcost = helper.maxprice * (1  + inputs.notar + inputs.makler + inputs.proptax);
        helper.maintenance = helper.maxprice * inputs.maintenancepercent;
        helper.rate = (inputs.rent + inputs.income - helper.maintenance) * inputs.repaypercent;
        helper.loan = (inputs.interest === 0) ? helper.rate * inputs.term * 12 : helper.rate * (helper.qnt - 1) / (helper.qnt * (helper.q- 1));
        helper.initrepay = (12 * helper.rate - helper.loan * inputs.interest) / helper.loan;
      } else {  // sthg wrong
        return;
      }


      helper.term = helper.term || inputs.term;
      helper.initrepay = helper.initrepay || inputs.initrepay;
      helper.maintenance = helper.maintenance || inputs.maintenance;

      helper.interest = helper.term * 12 * helper.rate - helper.loan;
      helper.totalpropcost = inputs.equity + helper.loan;
      helper.maxprice = helper.totalpropcost / (1 + inputs.notar + inputs.makler + inputs.proptax);
      helper.notar = helper.maxprice * inputs.notar;
      helper.makler = helper.maxprice * inputs.makler;
      helper.proptax = helper.maxprice * inputs.proptax;

      helper.totalcost = helper.totalpropcost + helper.interest;

      /** ******** 4. CONSTRUCT RESULT DATA OBJECT ******** */
      result.maxprice     = helper.maxprice;
      result.notar        = helper.notar;
      result.makler       = helper.makler;
      result.proptax      = helper.proptax;
      result.totalpropcost= helper.totalpropcost;
      result.loan         = helper.loan;
      result.rate         = helper.rate;
      result.term         = helper.term;
      result.initrepay    = helper.initrepay * 100;
      result.interest     = helper.interest;
      result.totalcost    = helper.totalcost;
      result.maintenance  = helper.maintenance;


      return result;

    };







    return fun;


  });



})();
/**
 * Created by benjamintanz on 16.10.15.
 */
(function(){

  angular.module('app').factory('marketdataService', function(){

    var obj = {};

    /** array of mortage interest rates ordered by term in years (convention is to start with zero years, so index t is for year t) */
    obj.mortgageinterest = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.1, 1.2, 1.2, 1.35, 1.45, 1.55, 1.65, 1.70, 1.85, 1.90, 1.95, 2.00, 2.1, 2.15, 2.17, 2.19, 2.21, 2.24, 2.29, 2.30, 2.30,2.30, 2.30, 2.30];


    /** the following arrays represent results of a monte carlo simulation
     * using the script in /other/geld_anlegen/monte_carlo.js for
     * different risk profiles using historical returns for festgeld,
     * tagesgeld and the MSCI GLOBAL ETF adjusted for costs;
     * 10000 Simulations performed over 20 time periods
     */
    /** Array indexing: 0. 'Sehr konservativ', ... 4. 'Sehr aggressiv' */
    obj.montecarlo = [{
        values: [ 1, 1.0285, 1.05706875, 1.0866959982500002, 1.11681280797775, 1.148432689004094, 1.1805999920406043, 1.2136634336052319, 1.2482683347801786, 1.2831849712519232, 1.319409430079817, 1.3572244544657066, 1.3954478042827994, 1.4351424470815957, 1.4761581789698643, 1.518509015929867, 1.5616662886797035, 1.6058960108992444, 1.6519284917819237, 1.6989989526186235, 1.7483977694448811 ],
        confidence: [ [1,1], [ 1.02325, 1.03275 ], [ 1.0497975, 1.0636375 ], [ 1.07754472875, 1.095107335 ], [ 1.1065956678875, 1.1272969530874999 ], [ 1.13656483602255, 1.1598033403942876 ], [ 1.167129930401145, 1.193801575324843 ], [ 1.199115452742848, 1.2283099641674338 ], [ 1.2318308037845702, 1.2641853437202228 ], [ 1.2657412192650943, 1.301088353943123 ], [ 1.300308282760077, 1.3384795762352282 ], [ 1.3361881072867945, 1.377656950009706 ], [ 1.373218518566187, 1.4178792943648528 ], [ 1.4107509103923959, 1.4590135479882826 ], [ 1.4502207675467786, 1.501704484309458 ], [ 1.4895416906609154, 1.5452878573003463 ], [ 1.531692951372923, 1.5902194945572972 ], [ 1.5750116264808014, 1.636828290877103 ], [ 1.6183365807308325, 1.684678370470103 ], [ 1.6636067740833607, 1.7342672908549768 ], [ 1.7100863612157804, 1.7856974996138812 ] ],
        pLoss: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      },
      {
        values: [ 1, 1.04694, 1.084013971, 1.1170193247307498, 1.1568116004933833, 1.197133527396407, 1.2359843819306437, 1.279785772112373, 1.3215584004550807, 1.3679033219757115, 1.4133435102464913, 1.4588535475925268, 1.5093704238507661, 1.5612422478461383, 1.6176672207012621, 1.6786466676629788, 1.734060208873854, 1.7984054686819062, 1.8610646476964714, 1.9228836692570286, 1.9950085902595507 ],
        confidence: [ [1,1], [ 1.01588, 1.0645 ], [ 1.03665672, 1.1198759200000001 ], [ 1.062004269882, 1.1732369295799998 ], [ 1.0904912011489363, 1.2254698849069348 ], [ 1.1208625562575532, 1.2810233629676533 ], [ 1.152125692748616, 1.335957255210193 ], [ 1.1841712950288723, 1.3932207330631967 ], [ 1.2179159474935013, 1.451996392404893 ], [ 1.2528073414193297, 1.516306653559989 ], [ 1.2903655308319781, 1.581393024257362 ], [ 1.3279853438236597, 1.6520598177251298 ], [ 1.366901449015892, 1.7214657421934247 ], [ 1.407288833167662, 1.792398553120443 ], [ 1.4517870212618604, 1.8695655751682274 ], [ 1.4946606385909953, 1.9520956954147144 ], [ 1.5410464214542814, 2.028871065400498 ], [ 1.5882346744537206, 2.1230852640956446 ], [ 1.6383460098703737, 2.2207435349440323 ], [ 1.6884066123925647, 2.317896514575237 ], [ 1.738424054233222, 2.4156988667749424 ] ],
        pLoss: [ 0, 0.2004, 0.1214, 0.0586, 0.0293, 0.0107, 0.0026, 0.0009, 0.0002, 0.0001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      },
      {
        values: [ 1, 1.06407, 1.1097035055, 1.14014580969, 1.184931158288577, 1.229747035344437, 1.2740448108317035, 1.318061405053829, 1.3686869438712372, 1.4209950670837725, 1.4742921416512744, 1.5328444330242494, 1.5893344217609386, 1.6503259503744705, 1.7105411948847782, 1.7772007913434786, 1.8501136753060696, 1.92633815742543, 2.001008253519789, 2.082816091996109, 2.1636059587366656 ],
        confidence: [ [1,1],[ 1.01857, 1.0979700000000001 ], [ 1.0143939, 1.1773550160000001 ], [ 1.03007457726, 1.255226358198 ], [ 1.0515977629328037, 1.3211438914874978 ], [ 1.0807509214385203, 1.3958419381447387 ], [ 1.10851081889142, 1.4727830212286763 ], [ 1.1354066670468137, 1.5520245677531865 ], [ 1.1649698939859636, 1.6373102061810583 ], [ 1.1950839509045892, 1.7179892663012188 ], [ 1.2279987324031227, 1.806280832896757 ], [ 1.2595404788801348, 1.9054199445845053 ], [ 1.2938744790925631, 2.013286687737483 ], [ 1.3396812399736762, 2.119249484562215 ], [ 1.3795614697734533, 2.222921003742204 ], [ 1.4238107604288732, 2.340807841721264 ], [ 1.4690840371514917, 2.4733973288133733 ], [ 1.5094866370889872, 2.601769024517755 ], [ 1.55402661393363, 2.7331398228494193 ], [ 1.6036482374072043, 2.8686992269663745 ], [ 1.6537925974775713, 3.0208378147378996 ] ],
        pLoss: [ 0, 0.2482, 0.2108, 0.2055, 0.1569, 0.1399, 0.1088, 0.0886, 0.0766, 0.0586, 0.0482, 0.0348, 0.0262, 0.0172, 0.0098, 0.0054, 0.0019, 0.0008, 0.0001, 0.0001, 0 ]
      },
      {
        values: [ 1, 1.0819299999999998, 1.1406453595, 1.1672684329482, 1.2185307239848515, 1.2717532957744515, 1.3254350875328418, 1.3754636710831085, 1.433048789917649, 1.4935877632582077, 1.5581607596751579, 1.621533754311303, 1.6841146770029125, 1.7550187650414584, 1.8256095089488742, 1.9101090003861159, 1.996145778964423, 2.0833556223734666, 2.1507012381793107, 2.2313792580451253, 2.3168619690038925 ],
        confidence: [ [1,1], [ 1.022755, 1.1235 ], [ 0.986442504, 1.232458418 ], [ 1.005701853978, 1.333582610463 ], [ 1.014109049665272, 1.4238739372246096 ], [ 1.0417943095855826, 1.5234797024237028 ], [ 1.0717524391725235, 1.6165811387717994 ], [ 1.0987946356625449, 1.7174997926026672 ], [ 1.119161025604995, 1.8302609052757446 ], [ 1.1514485570225972, 1.9344414579799 ], [ 1.1853786643406976, 2.051606754276147 ], [ 1.2166158278838781, 2.172593353699602 ], [ 1.2509134970403104, 2.3050347288937516 ], [ 1.2904016378797696, 2.4670336916067366 ], [ 1.3256605533688472, 2.607701307225709 ], [ 1.3665586952966466, 2.7427400754843516 ], [ 1.4140249649479961, 2.879848333191374 ], [ 1.4500814968905544, 3.0135722900569264 ], [ 1.4929821358641493, 3.202229001859629 ], [ 1.5261958107569042, 3.3858163245571458 ], [ 1.5794788434305163, 3.548253763684113 ] ],
        pLoss: [ 0, 0.2447, 0.2703, 0.2429, 0.2327, 0.2027, 0.1863, 0.1673, 0.1571, 0.144, 0.1298, 0.1172, 0.1052, 0.0962, 0.0846, 0.0759, 0.0701, 0.0645, 0.0566, 0.0513, 0.0471 ]
      },
      {
        values: [ 1, 1.10562, 1.174991147, 1.2045543000455001, 1.2611656033055452, 1.3260440516917642, 1.378761173665061, 1.4428634597030183, 1.5051508390511679, 1.572058456902587, 1.648907621295077, 1.7144097720696503, 1.8078805533824691, 1.889070054529098, 1.9674935238661866, 2.055257316789233, 2.144729551568147, 2.234580687178612, 2.32185851241562, 2.4054301537613854, 2.4640944327071668 ],
        confidence: [ [1,1], [ 1.02584, 1.18514 ], [ 0.9822058, 1.3030693800000002 ], [ 0.9852393742956, 1.4318819329925 ], [ 0.9881385771387834, 1.5520633916544546 ], [ 1.0166769088984193, 1.6642310895343768 ], [ 1.029129220789619, 1.786720283120258 ], [ 1.0660403371048994, 1.9164976530277813 ], [ 1.0996941046860318, 2.0452360875268796 ], [ 1.1256158912696326, 2.1863522319454525 ], [ 1.15657022507053, 2.3198682347755524 ], [ 1.18890864111726, 2.461933089909969 ], [ 1.217559119802038, 2.636824019061447 ], [ 1.2584700588747686, 2.8053005691861275 ], [ 1.3042412802469605, 2.9768458749523674 ], [ 1.341377778865013, 3.1367993399675593 ], [ 1.3917705094673969, 3.349983982870108 ], [ 1.4424159079862977, 3.5338144004757464 ], [ 1.4681422993081434, 3.7006140146128095 ], [ 1.5184014651795945, 3.8997868307072374 ], [ 1.5597759910852638, 4.054401486525054 ] ],
        pLoss: [ 0, 0.243, 0.2863, 0.2604, 0.2599, 0.2378, 0.2256, 0.2053, 0.1953, 0.1809, 0.1743, 0.1618, 0.1488, 0.1427, 0.1326, 0.1315, 0.1241, 0.1162, 0.1103, 0.102, 0.0972 ]
      }
    ];





    return obj;

  });



})();
/**
 * Created by benjamintanz on 26.10.15.
 *
 * Basic finance service
 * Requires mathlibMath
 *
 */

(function() {

  angular.module('app').factory('finlibBasic', function (mathlibMath) {

    var fun = {};


    /**
     * adjustTermToLowerFullPeriod
     *
     * Method that adjust a term to the lower full period. Example: If the term is 10.27 years and there are 12 periods
     * in a year, the result is 10.25, which are 123 full months expressed as years.
     *
     * @method adjustTermToLowerFullPeriod
     * @param term {Number} the term (usually in years)
     * @param periods {Number} the periods per term (i.e. 12 for 12 months in a year)
     * @return {Number} The lower full period in units of the term
     */
    fun.adjustTermToLowerFullPeriod = function(term, periods){
      return Math.floor(term / (1 / periods)) / periods;
    };


    /**
     * adjustTermToHigherFullPeriod
     *
     * Method that adjust a term to the higher full period. Example: If the term is 10.27 years and there are 12 periods
     * in a year, the result is 10.33, which are 124 full months expressed as years.
     *
     * @method adjustTermToHigherFullPeriod
     * @param term {Number} the term (usually in years)
     * @param periods {Number} the periods per term (i.e. 12 for 12 months in a year)
     * @return {Number} The higher full period in units of the term
     */
    fun.adjustTermToHigherFullPeriod = function(term, periods){
      return Math.ceil(term / (1 / periods)) / periods;
    };


    /**
     * q
     *
     * Method that computes q for a given interest rate i, where q = 1 + i
     *
     * @method q
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @return {Number} The annual q
     */
    fun.q = function(interest){
      return 1 + interest;
    };


    /**
     * qN
     *
     * Method that computes q^n for a given interest rate i, where q^n = (1 + i)^n
     *
     * @method qN
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @param term {Number} the term (i.e. 12 for 12 years)
     * @return {Number} q^n
     */
    fun.qN = function(interest, term){
      return Math.pow(basic.q(interest),term);
    };


    /**
     * qPeriod
     *
     * Method that computes periodical q for a given
     * (annual) interest rate i, where q = 1 + i / periods
     *
     * @method qPeriod
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @param periods {Number} the periods per term (i.e. 12 for 12 months in a year)
     * @return {Number} The periodical q
     */
    fun.qPeriod = function(interest, periods){
      return basic.q(interest / periods);
    };


    /**
     * qPeriodN
     *
     * Method that computes periodical q^(n*periods) for a given
     * (annual) interest rate i, where q^(n*periods) = (1 + i / periods)^ (n * periods)
     *
     * @method qPeriodN
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @param periods {Number} the periods per term (i.e. 12 for 12 months in a year)
     * @param term {Number} the term (i.e. 12 for 12 years)
     * @return {Number} The periodical q
     */
    fun.qPeriodN = function(interest, periods, term){
      return Math.pow(basic.qPeriod(interest,periods),term * periods);
    };


    /**
     * round
     *
     * Method that rounds to the supplied number of digits (german "kaufmännische Rundungsregeln")
     *
     * @method round
     * @param number {Number} the number to be rounded
     * @param digits {Number} the number of digits
     * @return {Number} The 'number' rounded to 'digits' digits
     */
    fun.round = function(number, digits){
      return (number < 0) ? - Math.round(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits) : Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };



    /**
     * pv
     *
     * Method that computes the present value for a series of cash flows given a single interest rate
     *
     * @method pv
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @param cf {Array} An array of cash flows (arrays), containing  either
     *                         a) time of cash flow {Number} and cash flow {Number}
     *                             Example: [[1,5],[3,105]] has a cash flow of 5 (105) at time 1 (3) OR
     *                         b) cash flows ordered by time
     *                             Example: [5, 0, 105] has a cash flows as the above example
     * @param periods {Number} the number of periods in a year (12 for month; default is 1 (annual))
     * @return {Number} The present value of the cash flow series
     */
    fun.pv = function(interest, cf, periods){
      var pv = 0;

      /** set defaults */
      periods = typeof periods !== 'undefined' ? periods : 1;

      /** check whether cf contains times and cfs */
      if(cf && Array.isArray(cf[0])){
        cf.forEach(function(el){pv += el[1] / Math.pow(1 + interest, el[0] / periods);});
      } else if (cf && !Array.isArray(cf[0])){
        cf.forEach(function(el, ind){pv += el / Math.pow(1 + interest, (ind + 1) / periods);});
      } else { /** case incorrect/no cf inputs */
        return
      }

      return pv;
    };



    /**
     * tvSubperiodsLinear
     *
     * Method that computes the terminal value of a single cash flow where the term is given
     * as month and need not be a multiple of the interest period; the interest period conform
     * part of the term is compounded, whereas a linear interest is computed for the residual part
     * Example: term 20 months, interest period 2 times a year
     *  -> result = [principal * (1 + interest / 2)  ^ (3)] * (1 + interest * 2/12)
     *
     *
     * @method tvSubperiodsLinear
     * @param principal {Number} the principal in units of money
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @param term {Number} the term in months (!)
     * @param payfreq {Number} the number of payments per year (i.e. 12 for monthly, 4 for quarterly)
     * @return {Number} The terminal value of the cash flow series
     */
    fun.tvSubperiodsLinear = function(principal, interest, term, payfreq){
      var termadj = Math.floor(term / (12 / payfreq)) * (12 / payfreq);
      return principal * Math.pow(1 + interest / payfreq, termadj / (12 / payfreq)) * (1 + ((term - termadj)/12) * interest);
    };


    /**
     * tvInterestdaysSubperiodsLinear
     *
     * Method that computes the terminal value of a single cash flow / principal where the term is given
     * as interestdays and need not be a multiple of the interest period; the interest period conform
     * part of the term is compounded, whereas a linear interest is computed for the residual part
     * The function also deals with taxes is required.
     * Example: todo
     *
     *
     *
     * @method tvInterestdaysSubperiodsLinear
     * @param principal {Number} the principal in units of money
     * @param interest {Number} the annual interest as a decimal number (i.e. 0.04)
     * @param daysInYear {Number} the number of days in the year according to daycount convention (i.e. 360, 365, etc)
     * @param termDays {Number} the term in (interest) days
     * @param interestperiods {Number} the number of interest periods in a year
     * @param taxes {Boolean} An indicator whether taxes need to be calculated (true) or not (false)
     * @oaram taxrate {Number} the taxrate as a decimal number (i.e. 0.04)
     * @param taxfree {Number} the annual free amount for taxes
     * @return {Number} The terminal value of the cash flow series
     */
    fun.tvInterestdaysSubperiodsLinear = function(principal, interest, daysInYear, termDays, interestperiods, taxes, taxrate, taxfree){
      /** case with taxes */
      if(taxes){
        var tax = 0, periodtax, princ = principal, princOld, availabletaxfree = taxfree, i, result;
        for (i = 1; i <= Math.floor(termDays / (daysInYear / interestperiods)); i++){
          princOld = princ;
          princ = princ * Math.pow(1 + interest * (1 / interestperiods), 1);
          periodtax = Math.max(0, princ - princOld - availabletaxfree) * taxrate;
          availabletaxfree = Math.max(0, availabletaxfree - (princ - princOld));
          tax += periodtax;
          princ -= periodtax;
          if (i % interestperiods === 0){ availabletaxfree = taxfree;}
        }
        princOld = princ;
        princ = princ * (1 + interest * (termDays % (daysInYear / interestperiods)) / daysInYear);
        periodtax = Math.max(0, princ - princOld - availabletaxfree) * taxrate;
        tax += periodtax;
        princ -= periodtax;
        return {
          terminal: princ,
          tax: -tax
        }
        /** case w/o taxes */
      } else {
        result = principal * Math.pow(1 + interest * (1 / interestperiods), Math.floor(termDays / (daysInYear / interestperiods))) * (1 + interest * (termDays % (daysInYear / interestperiods)) / daysInYear);

        return {
          terminal: result,
          tax: 0
        }
      }
    };




    /**
     * sum
     *
     * Simple method that sums two numbers and is mainly used as callback
     *
     * @method add
     * @param a {Number} first summand
     * @param b {Number} second summand
     * @return {Number} sum
     */
    fun.sum = function(a,b){
      return a + b;
    };



    /**
     * annualpayments
     *
     * Method that returns an array of length provided containing a payment provided at every provided position
     * and zeros in all other positions. It is used for example to pass annual special repayments to the annuuty.schedule
     * method
     *
     * @method annualpayments
     * @param length {Number} length of the created array
     * @param repay {Number} periodical repayment
     * @param period {Number} the payment period (12..for annual)
     * @return {Array} Array of length (length) with (repay) at every (period) position and zeros otherwise
     */
    fun.annualpayments = function(length, repay, period){
      period = period || 12;  /** default to 12 */
      var payments = Array.apply(null, new Array(length)).map(Number.prototype.valueOf,0);
      if(basic.round(repay,2) > 0){
        payments.forEach(function(val,ind){
          if(ind % period === 0 && ind !== 0){ payments[ind] = repay; }
        });
      }
      return payments;
    };



    /**
     * irr
     *
     * Method that returns the internal rate of return for any cash flow array
     *
     * todo: complete documentation
     * @method irr
     * @param initialcf {Number} the initial (usually negative) cash flow / outflow
     * @param cf {Array} An array of cash flows (arrays), containing  either
     *                         a) time of cash flow {Number} and cash flow {Number}
     *                             Example: [[1,5],[3,105]] has a cash flow of 5 (105) at time 1 (3) OR
     *                         b) cash flows ordered by time
     *                             Example: [5, 0, 105] has a cash flows as the above example
     * @param periods {Number} the number of periods in a year (12 for month; default is 1 (annual))
     * @return {Number} the irr that sets initialcf - discounted cf's to zero
     */
    fun.irr = function(initialcf, cf, periods){
      var pv;

      /** set defaults */
      periods = typeof periods !== 'undefined' ? periods : 1;

      /** wrapper for present value */
      pv = function(i){
        return initialcf - fun.pv(i, cf, periods);
      };


      return mathlibMath.roots(pv,0.05);
    };






    return fun;
  });


})();
/**
 * Created by benjamintanz on 26.10.15.
 */

(function(){

  angular.module('app').factory('finlibSavings', function(finlibBasic, mathlibMath) {

    /** namespacing */
    var fun = {};
    var basic = finlibBasic;
    var math = mathlibMath;


    /**
     * schedule
     *
     * Method that computes the payment schedule and balances for savings plans (with periodic inflows) with various
     * given parameters. Use call and pass an object with parameters to this method
     *
     * @method schedule
     * @param {Object} inputs - The input parameters
     * @param {Number} inputs.mode - the calculation mode; the following modes are supported and
     *                               require the defined additional parameters
     *                 inputs.mode = 1: Computes terminal value given principal, inflow, interest, term (optionally: dynamic, inflowfreq, interestfreq, compounding)
     * @param {Number} inputs.principal    - principal (Anfangskapital) of the plan
     * @param {Number} inputs.term         - term of the period with inflows in years
     * @param {Number} inputs.inflow       - periodical saving amount
     * @param {Number} inputs.interest     - savings plan interest rate
     * @param {Number} inputs.inflowfreq   - amount of (equally spaced) inflow periods per year
     * @param {Number} inputs.interestfreq - amount of (equally spaced) interest accrual/pay dates per year
     * @param {Number} inputs.compounding  - 1 if compounded interest, 2 if interest is paid out
     * @param {Number} inputs.inflowtime   - 1 if post-inflow (nachschüssig), 2 if pre-period inflow (vorschüssig)
     * @param {Number} inputs.termfix      - term of the no inflow period following the savings inflow period (in years)
     *
     * @param inputs
     * @returns {{terminal: number}}
     */
    fun.schedule = function(inputs){
      var self = this;
      var helper = {};
      var scheduleTerminal, scheduleTerm, dyn, dynT, dynTermfix, dynTermfixT, j, k, l;
      /** set defaults */
      self.dynamic      = self.dynamic || 0;      // no dynamics (annual increases of the savings rate)
      self.inflowfreq   = self.inflowfreq || 12;  // monthly inflow frequency
      self.interestfreq = self.interestfreq || 1; // annual interest frequency
      self.compounding  = self.compounding || 1;  // compounded interest
      self.inflowtime   = self.inflowtime  || 1;  // post-inflow (nachschüssig)
      self.termfix      = self.termfix  || 0;     // fixed term zero by default


      /**
       * 0. Helper functions
       */

      /** 0.1 Create schedule when terminal is open (principal, inflow, dynamic, interest, term given) */
      scheduleTerminal = function(principal, inflow, interest, term, dynamic, inflowfreq, interestfreq, compounding, inflowtime, termfix){
        var dyn = []; dyn[0] = []; dyn[1] = []; dyn[2] = []; dyn[3] = []; dyn[4] = []; dyn[5] = []; dyn[6] = [];
        var terminal, i, k = 1, interestVal = 0, termMonth;

        termfix = termfix || 0;
        termMonth = term * 12;

        for(i = 1, terminal = (term + termfix) * 12; i <= terminal; i++){

          /** current month */
          dyn[0][k - 1] = i;
          /** principal b.o.p */
          dyn[1][k - 1] = (k === 1) ? principal : dyn[4][k - 2];

          /** check whether month is a payment month */
          if((i % (12/inflowfreq) === 0 && (inflowtime === 1) && i <= termMonth) || ((i-1) % (12/inflowfreq) === 0 && (inflowtime === 2) && i <= termMonth)) {
            /** periodical payment */
            dyn[2][k - 1] = inflow;
          } else {
            dyn[2][k - 1] = 0;
          }

          /** accumulate interest */
          interestVal += (dyn[1][k - 1] + (inflowtime - 1) * dyn[2][k - 1])* (interest / 12);

          /** check whether month is an interest payment month */
          if(i % (12/interestfreq) === 0) {
            /** periodical interest */
            dyn[3][k - 1] = interestVal;
            interestVal = 0;
          } else {
            dyn[3][k - 1] = 0;
          }

          /** balance e.o.p */
          dyn[4][k - 1] = dyn[1][k - 1] + dyn[2][k - 1] + (2 - compounding) * dyn[3][k - 1];

          /** check whether we are at the end of a year and need to increment the savings (dynamic) */
          if(i % 12 === 0) {
            inflow *= 1 + dynamic;
          }

          /** increment line in view */
          k += 1;

        }
        /** assign terminal interest value */
        helper.interestResidual = interestVal;

        return dyn;
      };


      /** 0.2 wrapper around scheduleTerminal for computing the principal (terminal, inflow, dynamic, interest, term given) */
      function computePrincipal(principal){
        var locDyn = scheduleTerminal(principal, self.inflow, self.interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        helper.totalInflow  = _.reduce(locDyn[2], basic.sum, 0);
        helper.totalInterest= _.reduce(locDyn[3], basic.sum, 0) + helper.interestResidual;
        /** return difference of terminal and principal */
        return self.terminal - locDyn[4][locDyn[4].length - 1] - (self.compounding - 1) * (helper.totalInterest - helper.interestResidual) - helper.interestResidual;
      }

      /** 0.3 wrapper around scheduleTerminal for computing the inflow (principal. terminal, dynamic, interest, term given) */
      function computeInflow(inflow){
        var locDyn = scheduleTerminal(self.principal, inflow, self.interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        helper.totalInflow  = _.reduce(locDyn[2], basic.sum, 0);
        helper.totalInterest= _.reduce(locDyn[3], basic.sum, 0) + helper.interestResidual;
        /** return difference of terminal and principal */
        return self.terminal - locDyn[4][locDyn[4].length - 1] - (self.compounding - 1) * (helper.totalInterest - helper.interestResidual) - helper.interestResidual;
      }

      /** 0.4 (legacy) function for term computations (without dynamics) */
      function computeTerm(){
        /** assign variables */
        var mz = self.interestfreq;  // number interest periods within a year
        var mr = self.inflowfreq;    // number of cash payments within a year
        var nf = self.termfix;       // fix termin in years
        var r  = self.interest;     // interest
        var K  = self.principal;     // principal
        var R  = self.inflow;        // principal
        var d  = self.dynamic;       // dynamics
        var E  = self.terminal;      // terminal value

        /** discount terminal */
        E = E / Math.pow( 1 + r / mz, nf * mz);

        /** compute iff self.dynamic === 0 */
        if(self.dynamic === 0){
          (function(){
            function findRootOf(n){
              return E - K * Math.pow(1 + r / mz,n * mz) - R * (Math.pow(1+r / mz,n * mz) - 1) * ((mr >= mz) * (mr / mz + (r / mz)/2 * (mr / mz+(self.inflowtime === 1) * (-1)+(self.inflowtime === 2)))/(r / mz) + (mr < mz)*((self.inflowtime === 1) * 1+(self.inflowtime === 2) * Math.pow(1 + r/mz,mz/mr))/(Math.pow(1+r/mz,mz/mr) - 1));
            }
            helper.term = math.roots(findRootOf,30,1500);

          })();
        }
        return helper.term;
      }

      /** 0.6 wrapper around scheduleTerminal for computing the required interest rate (principal, terminal, inflow, dynamic, term given) */
      function computeInterest(interest){
        var locDyn = scheduleTerminal(self.principal, self.inflow, interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        helper.totalInflow  = _.reduce(locDyn[2], basic.sum, 0);
        helper.totalInterest= _.reduce(locDyn[3], basic.sum, 0) + helper.interestResidual;
        /** return difference of terminal and principal */
        return self.terminal - locDyn[4][locDyn[4].length - 1] - (self.compounding - 1) * (helper.totalInterest - helper.interestResidual) - helper.interestResidual;
      }

      /** 0.7 wrapper around scheduleTerminal for computing the required dynamic (principal, terminal, inflow, interest, term given) */
      function computeDynamic(dynamic){
        var locDyn = scheduleTerminal(self.principal, self.inflow, self.interest, self.term, dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        helper.totalInflow  = _.reduce(locDyn[2], basic.sum, 0);
        helper.totalInterest= _.reduce(locDyn[3], basic.sum, 0) + helper.interestResidual;
        /** return difference of terminal and principal */
        return self.terminal - locDyn[4][locDyn[4].length - 1] - (self.compounding - 1) * (helper.totalInterest - helper.interestResidual) - helper.interestResidual;
      }



      /**
       * 1. Main calculations
       */

      /** compute and invert schedule */
      if(self.mode === 1){          // terminal open parameter
        dyn = scheduleTerminal(self.principal, self.inflow, self.interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        dynT = dyn[0].map(function (col, i) {return dyn.map(function (row) {return row[i];})});
      } else if (self.mode === 2){  // principal open parameter
        /** find zero of computePrincipal */
        helper.principal = math.roots(computePrincipal,self.terminal / 2);
        if(helper.principal === null){
          return {
            error: 'Leider ist bei der Bestimmung des Anfangskapitals ein Fehler aufgetreten. Dies kann zum Beispiel passieren, wenn das rechnerische Anfangskapital negativ ist. Bitte senken Sie die Sparrate, das Sparintervall, den Anspar- und/oder Anlagezeitraum.'
          }
        }
        /** compute schedule */
        dyn = scheduleTerminal(helper.principal, self.inflow, self.interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        dynT = dyn[0].map(function (col, i) {return dyn.map(function (row) {return row[i];})});

      } else if (self.mode === 3) {  // inflow open parameter
        helper.inflow = math.roots(computeInflow,self.principal / (5 * self.inflowfreq));
        if(helper.inflow === null){
          return {
            error: 'Leider ist bei der Bestimmung der Sparrate ein Fehler aufgetreten. Dies kann zum Beispiel passieren, wenn die rechnerische Sparrate negativ ist. Bitte überprüfen Sie die Eingaben.'
          }
        }
        /** compute schedule */
        dyn = scheduleTerminal(self.principal, helper.inflow, self.interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        dynT = dyn[0].map(function (col, i) {return dyn.map(function (row) {return row[i];})});

      } else if (self.mode === 4) {  // term open parameter
        // todo

      } else if (self.mode === 5) {  // interest open parameter
        helper.interest = math.roots(computeInterest, 0.05);
        if(helper.interest === null){
          return {
            error: 'Leider ist bei der Bestimmung des Zinssatzes ein Fehler aufgetreten. Dies kann zum Beispiel passieren, wenn der rechnerische Zinssatz negativ ist. Bitte überprüfen Sie die Eingaben.'
          }
        }
        /** compute schedule */
        dyn = scheduleTerminal(self.principal, self.inflow, helper.interest, self.term, self.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        dynT = dyn[0].map(function (col, i) {return dyn.map(function (row) {return row[i];})});

      } else if (self.mode === 6) {  // dynamic open parameter
        helper.dynamic = math.roots(computeDynamic, 0.05);
        if(helper.dynamic === null){
          return {
            error: 'Leider ist bei der Bestimmung der Dynamisierung ein Fehler aufgetreten. Dies kann zum Beispiel passieren, wenn die rechnerische Dynamisierung negativ ist. Bitte überprüfen Sie die Eingaben.'
          }
        }
        /** compute schedule */
        dyn = scheduleTerminal(self.principal, self.inflow, self.interest, self.term, helper.dynamic, self.inflowfreq, self.interestfreq, self.compounding, self.inflowtime, self.termfix);
        dynT = dyn[0].map(function (col, i) {return dyn.map(function (row) {return row[i];})});
      }



      /** compute parameters of interest */
      helper.principal    = dyn[1][0];
      helper.totalInflow  = _.reduce(dyn[2], basic.sum, 0);
      helper.totalInterest= _.reduce(dyn[3], basic.sum, 0) + helper.interestResidual;
      helper.terminal     = dyn[4][dyn[4].length - 1] + (self.compounding - 1) * (helper.totalInterest - helper.interestResidual) + helper.interestResidual;


      /** attach annual values */
      j = 1; k = 1; l = 0;
      dyn[0].forEach(function(val, ind){
        if((val) % 12 === 0){
          dynT.splice(ind + j,    0,[val/12 + '. Jahr', dyn[1][ind + 1 - k ], _.reduce(dyn[2].slice(ind + 1 - k, ind + 1), basic.sum, 0), _.reduce(dyn[3].slice(ind + 1 - k, ind + 1), basic.sum, 0), dyn[4][ind], true, false, true]);
          j += 1;
          k = 0;
        }
        k += 1;
      });

      /** attach value short before final sum */
      if(!dynT[dynT.length - 1][5]){
        dynT.push([Math.ceil(self.term + self.termfix) + '. Jahr', dyn[1][dyn[1].length + 1 - k], _.reduce(dyn[2].slice(dyn[2].length + 1 - k, dyn[2].length), basic.sum, 0), _.reduce(dyn[3].slice(dyn[3].length + 1 - k, dyn[3].length), basic.sum, 0), dyn[4][dyn[4].length - 1],true, false, true]);
      }

      /** attach terminal accrued interest if present */
      if(helper.interestResidual !== 0){
        dynT.push(['Aufgelaufene Zinsen', 0, 0, helper.interestResidual, helper.terminal, false, true])
      }

      /** attach final values */
      dynT.push(['Summe', helper.principal, helper.totalInflow, helper.totalInterest, helper.terminal, true]);


      return {
        terminal: helper.terminal,
        principal: helper.principal,
        inflow: helper.totalInflow,
        interest: helper.totalInterest,
        schedule: dynT,
        inflowrate: self.inflow || helper.inflow,
        interestrate: self.interest || helper.interest,
        dynamic: self.dynamic || helper.dynamic
      }
    };






    return fun;


  });

})();
/**
 * Created by benjamintanz on 26.10.15.
 */


(function() {

  angular.module('app').factory('mathlibMath', function () {

    var fun = {};


    // calculate roots of a function
    fun.roots = function(f,initX,iterBound,devY,delt){
      var delt = delt || 0.000001;  // set default
      var Y, X_new, X = initX || 0; // initial guess
      var iterBound = iterBound || 1500;
      var devY = devY || 0.0000001;
      var iter = 0;

      // numerical derivative
      var df = function(x){
        return (f(x+delt)-f(x))/delt;
      };

      do{
        Y = f(X);
        X_new = X-Y/df(X);
        X = X_new;
        iter++;
        //console.log('X is: ' + X + ' Y is: '+Y);
        if (iter > iterBound){

          console.log('No convergence');
          return null;
        }
      } while(Math.abs(Y) > devY)
      return X;
    };


    // a simple function that does transposition on an array
    // the function expects and array and returns the transpose of it
    fun.transpose = function(arr){
      return arr[0].map(function (col, i) {return arr.map(function (row) {return row[i];})});
    };


    return fun;
  });



}());
(function(){

  /** convert negative numbers to numbers wrapped in parentheses */
  angular.module('app').filter('parentheses', function(){
    return function(input){
      if (input.charAt(0) === '-'){
        return '(' + input.substr(1) + ')';
      } else {
        return input;
      }
    };
  });


})();
/**
 * Created by benjamintanz on 26.10.15.
 */
angular.module('app').directive('sfSelect', function(){
  return {
    restrict: 'E',
    templateUrl: '/app/shared/inputs/select/sfSelectTemplate.html',
    scope: {
      value: '=',
      description: '@',
      id: '@',
      tip: '@',
      options: '@'
    },
    link: function(scope,element,attrs){
      /** Initialize tooltips */
      element.find('label').tooltip({title: scope.tip, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'});
    }
  }
});
angular.module('app').directive('sfSlider', function(){
  return {
    restrict: 'E',
    templateUrl: '/app/shared/inputs/slider/sfSliderTemplate.html',
    scope: {
      value: '=',
      type: '@',
      fun: '&',
      description: '@',
      id: '@',
      addon: '@',
      tip: '@',
      overwriteOptions: '@options'
    },
    controller: ['$scope', function($scope){

      /** assign default options */
      $scope.options = {
        floor: 0,
        ceil: 10000,
        step: 1,
        precision: 1,
        secondaddon: ' €'
      };

      angular.extend($scope.options, JSON.parse($scope.overwriteOptions));

      $scope.sliderTranslate = function(value){
        return '';
      };
    }],
    link: function(scope,element,attrs){
      /** Initialize tooltips */
      element.find('label').tooltip({title: scope.tip, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'});
    }
  }
});