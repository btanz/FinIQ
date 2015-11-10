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

      $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
      });

    });


  });



})();