/**
 * Created by benjamintanz on 14.10.15.
 */
exports.besteArbeitsmarkte = {

  serveJson:  function(req, res, next) {
    var data = require('../../../other/hauskauf/data/besteArbeitsmaerkte.json');

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