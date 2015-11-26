/**
 * Created by benjamintanz on 25.11.15.
 */


(function(){
  'use strict';

  /** ********************** BEGIN ANGULAR CODE ********************************************* */
  angular.module('app').controller('haeufigeFehlerHauskaufController', ['$scope', '$rootScope', '$interval', 'chartConfig', 'hauskaufCalculator', function($scope, $rootScope, $interval, chartConfig, hauskaufCalculator){


    /** line chart with house price development */
    var chartLocal_1 = {
      title: {
        text: 'Wertentwicklung Immobilienindex und Aktienindex (DAX)',
        style: chartConfig.titleStyle
      },
      xAxis: {
        categories: ['\'95','\'96','\'97','\'98','\'99','\'00','\'01','\'02','\'03','\'04','\'05','\'06','\'07','\'08','\'09','\'10','\'11','\'12','\'13','\'14']
      },
      yAxis: {
        title: {
          text: 'Wert des Index (2010 = Index 100)'
        }
      },
      tooltip: {
        valueSuffix: ''
      },
      credits: {
        enabled: 'true',
        text: 'Quellen: Deutsche Bundesbank / bulwiengesa AG',
        href: 'www.bundesbank.de'
      },
      series: [{
        name: 'Preisindex für Reihenhäuser und Eigentumswohnungen',
        data: [100, 98.64, 96.89, 96.02, 96.11, 96.6, 96.5, 95.92, 94.56, 93.29, 92.42, 92.52, 93.39, 93.97, 94.56, 97.18, 102.82, 109.23, 116.03, 122.06]
      },
        {
          name: 'DAX Performanceindex (normalisiert)',
          data: [100, 128.17, 188.55, 221.95, 308.72, 285.45, 228.94, 128.34, 175.93, 188.83, 239.95, 292.69, 357.93, 213.42, 264.32, 306.77, 261.70, 337.75, 423.81, 435.05],
          color: '#B2AB12'

          // Dax Performance (nicht normailisert) lt. BuBa: 2253.88, 2888.69, 4249.69, 5002.39, 6958.14, 6433.61, 5160.1, 2892.63, 3965.16, 4256.08, 5408.26, 6596.92, 8067.32, 4810.2, 5957.43, 6914.19, 5898.35, 7612.39, 9552.16,9805.55
          // Hauspreisindex (normalisiert auf 2010): 102.9, 101.5, 99.7, 98.8, 98.9, 99.4, 99.3, 98.7, 97.3, 96.0, 95.1, 95.2, 96.1, 96.7, 97.3, 100.0, 105.8, 112.4, 119.4, 125.6
          // 100, 101.17, 102.03, 103.81, 106.59, 109.82, 112.55, 114.89, 116.53, 118.34, 120.61, 123.91, 128.04, 131.97, 135.99, 142.08, 151.2, 161.17, 171.6, 181.39
        },
        {
          name: 'Index für Reihenhäuser und Eigentumswohnungen mit 2,5 % Nettomietrendite p. a.',
          data: [100, 101.17, 102.03, 103.81, 106.59, 109.82, 112.55, 114.89, 116.53, 118.34, 120.61, 123.91, 128.04, 131.97, 135.99, 142.08, 151.2, 161.17, 171.6, 181.39],
          color: '#B20925'
        }

      ]
    };

    $scope.chartConfig_1 = angular.extend(chartLocal_1 , chartConfig.linechart);




  }]);
  /** ********************** END ANGULAR CODE ********************************************* */






}());