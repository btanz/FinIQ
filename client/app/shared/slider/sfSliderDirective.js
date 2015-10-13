angular.module('app').directive('sfSlider', function(){
  return {
    restrict: 'E',
    templateUrl: '/app/shared/slider/sfSliderTemplate.html',
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