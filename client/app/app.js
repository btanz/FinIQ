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

  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},1500);
  }

  $("#link-to-content").click(function() {
    scrollToAnchor('content-overview');
  });

})();

