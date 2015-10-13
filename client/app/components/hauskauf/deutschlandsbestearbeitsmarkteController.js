/**
 * Created by benjamintanz on 13.10.15.
 */
(function(){

  angular.module('app').controller('deutschlandsbestearbeitsmaerkteController', function($scope, chartConfig){




    var data = [
      {
        "hc-key": "de-ni",
        "value": 0
      },
      {
        "hc-key": "de-sh",
        "value": 1
      },
      {
        "hc-key": "de-be",
        "value": 2
      },
      {
        "hc-key": "de-mv",
        "value": 3
      },
      {
        "hc-key": "de-hb",
        "value": 4
      },
      {
        "hc-key": "de-sl",
        "value": 5
      },
      {
        "hc-key": "de-by",
        "value": 6
      },
      {
        "hc-key": "de-th",
        "value": 7
      },
      {
        "hc-key": "de-st",
        "value": 8
      },
      {
        "hc-key": "de-sn",
        "value": 9
      },
      {
        "hc-key": "de-bb",
        "value": 10
      },
      {
        "hc-key": "de-nw",
        "value": 11
      },
      {
        "hc-key": "de-bw",
        "value": 12
      },
      {
        "hc-key": "de-he",
        "value": 13
      },
      {
        "hc-key": "de-hh",
        "value": 14
      },
      {
        "hc-key": "de-rp",
        "value": 15
      },
      {
        "hc-key": "de-bw-08136000",
        "value": 0
      },
      {
        "hc-key": "de-bw-08116000",
        "value": 1
      },
      {
        "hc-key": "de-bw-08415000",
        "value": 2
      },
      {
        "hc-key": "de-bw-08115000",
        "value": 3
      },
      {
        "hc-key": "de-bw-08117000",
        "value": 4
      }
    ];

    this.config2 = {
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
          min: 0
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
        text: 'Deutschlandkarte'
      },
      series: [{
        data: data,
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      }]
    };



  });

})();

