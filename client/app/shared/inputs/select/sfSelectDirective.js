/**
 * Created by benjamintanz on 26.10.15.
 */
angular.module('app').directive('sfSelect', [function(){
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
}]);