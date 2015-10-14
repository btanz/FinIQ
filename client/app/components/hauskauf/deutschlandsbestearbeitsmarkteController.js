/**
 * Created by benjamintanz on 13.10.15.
 */
(function(){

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

