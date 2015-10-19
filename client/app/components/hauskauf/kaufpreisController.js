/**
 * Created by benjamintanz on 16.10.15.
 */
(function(){

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
      repaypercent: 85
    };

    vm.priceslider = {
      price: 100000,
      ceil: 200000,
      floor: 30000
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
        maintenance: vm.inputs.maintenance,
        term: vm.inputs.term,
        equity: vm.inputs.equity,
        repaypercent: vm.inputs.repaypercent
      };
      vm.result = hauskaufCalculator.propertyprice(inputObj);
      /** set price slider value and ceiling */
      vm.priceslider.ceil  = Math.round((vm.result.maxprice * 7 / (Math.log(vm.result.maxprice) / Math.log(10) )) / 10000) * 10000;
      vm.priceslider.price = Math.round(vm.result.maxprice);
      $rootScope.$broadcast('rzSliderForceRender');

      /*
      $scope.chartConfig_1.series[0].data = [{y: $scope.result.rentFinalWealth, color:'#F38200'}, $scope.result.buyFinalWealth];
      */
    });


    /** compute */






  });





})();