/**
 * Created by benjamintanz on 07.10.15.
 */

/** basic chart configuration */

(function(){

  angular.module('app').factory('chartConfig', function(){
    var obj = {};

    /** configurations concerning all charts */
    var spacingLeft = 10;
    var borderWidth = 0;
    var backgroundColor = null;
    var titleStyle = {
        fontWeight: 400,
        fontFamily: '"Lato", sans-serif',
        fontSize: '17px'
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

    /** attach particular charts to return object */
    obj.horizontalBar = horizontalBarConfig;
    obj.verticalBar   = verticalBarConfig;
    obj.linechart     = linechartConfig;
    obj.titleStyle    = titleStyle;

    return obj;
  });



})();