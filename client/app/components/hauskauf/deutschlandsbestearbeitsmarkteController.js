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
            mapData: Highcharts.maps['countries/de/de-all'],
            joinBy: 'hc-key',
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
          enabled: true,
          format: '{point.name}'
        }
      }]
    };



    /** map chart */
    var countries = {
          europe: 'France, Germany, Russia',
          asia:   'Japan, China'
        };
    var defaultSeriesData = {
          allAreas: false,
          name: '',
          countries: '',
          data: [],
          dataLabels: {
            enabled: true,
            color: 'white',
            formatter: function () {
              if (this.point.value) {
                return this.point.name;
              }
            }
          },
          tooltip: {
            enabled: true,
            headerFormat: '',
            pointFormat: '{point.name}: <b>{series.name}</b>'
          }
        };


    this.makeSeries = function(name, countries) {
      var seriesData = angular.copy(defaultSeriesData);

      seriesData.name      = name;
      seriesData.countries = countries;
      seriesData.data      = this.makeSeriesData(countries);

      return seriesData;
    };

    this.makeSeriesData = function(string) {
      var list = ('' + string).split(','),
          data = [];

      angular.forEach(list, function(country) {
        data.push({
          name:  country.replace(/^\s+|\s+$/, ''),
          value: 1
        });
      });

      return data;
    };

    this.setSeriesData = function(series, string) {
      series.data = this.makeSeriesData(string);
    };

    this.addSeries = function() {
      this.config.series.push(this.makeSeries());
    };

    this.removeSeries = function(key) {
      this.config.series.splice(key, 1);

      if (1 == this.config.series.length) {
        this.config.series[0].allAreas = true;
      }
    };

    this.config = {
      options: {
        legend: {
          enabled: false
        },
        plotOptions: {
          map: {
            mapData: Highcharts.maps['custom/world'],
            joinBy: ['name']
          }
        },
      },
      chartType: 'map',
      title: {
        text: 'Highcharts-ng map example'
      },
      series: [
        this.makeSeries('Europe', countries.europe),
        this.makeSeries('Asia', countries.asia)
      ]
    };

    this.config.series[0].allAreas = true;



  });

})();

