/**
 * Created by benjamintanz on 10.11.15.
 */

module.exports = function(){
  var client = './client/';
  var clientApp = client + 'app/';
  var server = './server/';
  var serverViews = server + 'views/';
  var clientDist = './clientDist/';


  var config = {
    client: client,
    clientBase: '.' + client,

    clientDist: clientDist,

    scriptSrc: serverViews + '/_includes/scripttags.jade',
    scriptDist: serverViews + '/_includes/',

    js: [
        // todo: load order
        './app/**/*.js'
    ],

    /**
     * Bower and NPM locations
     */
    bower: {
      json: require('../bower.json'),
      directory: './client/packages/',
      ignorePath: '../../../client/'
    }

  };


  config.getWiredepDefaultOptions = function(){
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath,
      cwd: config.bower.cwd,
      fileTypes: {
        jade: {
          replace: {
            js: 'script(src=\'/{{filePath}}\')',
            css: 'link(rel=\'stylesheet\', href=\'{{filePath}}\')'
          }
        }
      }
    };

    return options;
  };


  return config;

};