angular.module('app').directive('sfSlider', function(){
  return {
    restrict: 'E',
    templateUrl: '/js/app/directives/sf-slider.template.html',
    scope: {
      value: '=',
      type: '@',
      fun: '&',
      description: '@',
      id: '@',
      addon: '@',
      overwriteOptions: '@options'
    },
    controller: ['$scope', function($scope){

      /** assign default options */
      $scope.options = {
        floor: 0,
        ceil: 10000,
        step: 1,
        precision: 1
      };


      angular.extend($scope.options, JSON.parse($scope.overwriteOptions));
      console.log($scope.options.step);

      $scope.sliderTranslate = function(value){
        return '';
      };
    }]
  }
});