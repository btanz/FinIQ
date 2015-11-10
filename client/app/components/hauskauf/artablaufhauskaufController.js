/**
 * Created by benjamintanz on 20.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('artablaufhauskaufController', function($scope, chartConfig, $http) {

    /** activate tabbed process interface*/
    // todo: move to directive
    $(document).ready(function () {
      $("#processTabs").tabs({show: {effect: "fade", duration: 400}});
      $(".tab-linker").click(function () {
        $("#processTabs").tabs("option", "active", $(this).attr('rel') - 1);
        return false;
      });
    });

  });


})();