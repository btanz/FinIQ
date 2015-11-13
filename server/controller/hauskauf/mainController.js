/**
 * Created by benjamintanz on 14.10.15.
 */

var path = require('path');
var appDir = path.dirname(require.main.filename);
var fileDir;

// check whether we are on heroku and assign file directory
if(process.env.ON_HEROKU === true){
  fileDir = appDir + '/other/hauskauf/data/'
} else {
  fileDir = appDir + '/server/other/hauskauf/data/'
}

exports.besteArbeitsmarkte = {


  serveJson:  function(req, res, next) {
    var data = require('.././hauskauf/data/besteArbeitsmaerkte.json');

    var nullFilter = function(obj){
      return !(obj['hc-key'] === null || obj['value'] == null);
    };

    var arr = Object.keys(data).map(function(key){
      return {
        'hc-key': data[key].HighchartsID ? data[key].HighchartsID.trim() : null,
        'name': data[key].Kreisname,
        'value': data[key].MARKETIND ? Math.round(data[key].MARKETIND * 1000) / 10 : null,
        'alg2': data[key].ALGII_ratio ? Math.round(data[key].ALGII_ratio * 1000) / 10 : null,
        'alg1': data[key].UNEMP_ratio ? Math.round(data[key].UNEMP_ratio * 1000) / 10 : null,
        'versorgung': data[key].Arbeitsplatzversorgung ? Math.round(data[key].Arbeitsplatzversorgung * 1000) / 10 : null,
        'income': data[key].INCOME ? Math.round(data[key].INCOME) : null,
        'bip': data[key].BIP ? Math.round(data[key].BIP) : null
      };
    });

    arr = arr.filter(nullFilter);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(arr));
  }

};



exports.grundstueckspreise = {

  serveJson:  function(req, res, next) {

    console.log(process.env.ON_HEROKU);

    var data = require(fileDir + 'Grundstueckspreise.json');


    var nullFilter = function(obj){
      return !(obj['hc-key'] === null || obj['value'] == null);
    };

    var arr = Object.keys(data).map(function(key){
      return {
        'hc-key': data[key].HighchartsID ? data[key].HighchartsID.trim() : null,
        'name': data[key].Kreisname,
        'value': data[key][2013] ? Math.round(data[key][2013] * 1000) / 1000 : null,
        '5yeargrowth': data[key].landPrices5yGrowth ? Math.round((Math.pow(data[key].landPrices5yGrowth + 1,1/5) - 1) * 1000) / 10 : null,
        'value12': data[key][2012] ? Math.round(data[key][2012] * 1000) / 1000 : null,
        'value11': data[key][2011] ? Math.round(data[key][2011] * 1000) / 1000 : null,
        'value10': data[key][2010] ? Math.round(data[key][2010] * 1000) / 1000 : null,
        'value09': data[key][2009] ? Math.round(data[key][2009] * 1000) / 1000 : null,
        'value08': data[key][2008] ? Math.round(data[key][2008] * 1000) / 1000 : null

      };
    });

    arr = arr.filter(nullFilter);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(arr));
  }

};