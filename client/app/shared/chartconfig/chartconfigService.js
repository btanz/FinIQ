/**
 * Created by benjamintanz on 07.10.15.
 */

/** basic chart configuration */

(function(){

  angular.module('app').factory('chartConfig', [function(){
    var obj = {};

    /** configurations concerning all charts */
    var spacingLeft = 10;
    var borderWidth = 0;
    var backgroundColor = null;
    var titleStyle = {
        fontWeight: 400,
        fontFamily: '"Lato", sans-serif',
        fontSize: '16px'
    };



    /** particular charts */
    var horizontalBarConfig = {
      options: {
        chart: {
          type: 'bar',
          spacingLeft: spacingLeft,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor
        },
        legend: {
          enabled: false
        }
      }
    };

    var verticalBarConfig = {
      title: {
        style: titleStyle
      },
      options: {
        chart: {
          type: 'column',
          spacingLeft: spacingLeft,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor
        },
        legend: {
          enabled: false
        }
      }
    };

    var linechartConfig = {

      options: {
        chart: {
          type: 'line',
          legend: {
            layout: 'vertical',
            align: 'bottom',
            borderWidth: 0
          }
        },
        plotOptions: {
          series: {
            color: '#009CDE',
            marker: {
              enabled: false
            }
          }
        }
      }
    };

    var piechartConfig = {
      title: {
        style: titleStyle
      },
      options: {
        chart: {
          type: 'pie',
          spacingLeft: spacingLeft,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        }
      }

    };

    /** attach particular charts to return object */
    obj.horizontalBar = horizontalBarConfig;
    obj.verticalBar   = verticalBarConfig;
    obj.linechart     = linechartConfig;
    obj.titleStyle    = titleStyle;
    obj.piechart      = piechartConfig;

    return obj;
  }]);



})();