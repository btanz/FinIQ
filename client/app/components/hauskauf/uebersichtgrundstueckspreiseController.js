/**
 * Created by benjamintanz on 15.10.15.
 */
(function(){
  'use strict';

  angular.module('app').controller('uebersichtgrundstueckspreiseController', ['$scope', 'chartConfig', '$http', function($scope, chartConfig, $http){

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






  }]);

})();
